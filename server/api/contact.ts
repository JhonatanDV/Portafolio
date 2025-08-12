import { VercelRequest, VercelResponse } from '@vercel/node';
import sgMail from '@sendgrid/mail';
import { z } from 'zod';

// Configurar SendGrid
if (process.env.SENDGRID_API_KEY) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
}

// Schema de validación
const contactSchema = z.object({
  name: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
  email: z.string().email("Email inválido"),
  subject: z.string().min(5, "El asunto debe tener al menos 5 caracteres"),
  message: z.string().min(10, "El mensaje debe tener al menos 10 caracteres"),
});

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Permitir CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Manejar preflight
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  try {
    // Verificar que tenemos la API key
    if (!process.env.SENDGRID_API_KEY) {
      return res.status(500).json({
        success: false,
        error: "SendGrid API key no configurada. Configura SENDGRID_API_KEY en las variables de entorno."
      });
    }

    // Validar los datos del formulario
    const validatedData = contactSchema.parse(req.body);

    // Email que recibirás con el mensaje del formulario
    const emailToYou = {
      to: process.env.YOUR_EMAIL || 'tu@email.com',
      from: process.env.FROM_EMAIL || 'noreply@tudominio.com',
      subject: `[Portfolio] ${validatedData.subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #6366f1;">Nuevo mensaje desde tu portfolio</h2>
          
          <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Nombre:</strong> ${validatedData.name}</p>
            <p><strong>Email:</strong> ${validatedData.email}</p>
            <p><strong>Asunto:</strong> ${validatedData.subject}</p>
          </div>
          
          <div style="background: white; padding: 20px; border-left: 4px solid #6366f1;">
            <h3>Mensaje:</h3>
            <p style="white-space: pre-wrap;">${validatedData.message}</p>
          </div>
          
          <hr style="margin: 30px 0;">
          <p style="color: #64748b; font-size: 14px;">
            Este mensaje fue enviado desde tu portfolio web.
          </p>
        </div>
      `
    };

    // Email de confirmación para quien envió el mensaje
    const confirmationEmail = {
      to: validatedData.email,
      from: process.env.FROM_EMAIL || 'noreply@tudominio.com',
      subject: 'Mensaje recibido - Te contactaré pronto',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #6366f1;">¡Gracias por contactarme!</h2>
          
          <p>Hola ${validatedData.name},</p>
          
          <p>He recibido tu mensaje y te contactaré pronto. Aquí tienes una copia:</p>
          
          <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Asunto:</strong> ${validatedData.subject}</p>
            <p><strong>Tu mensaje:</strong></p>
            <p style="white-space: pre-wrap; background: white; padding: 15px; border-radius: 4px;">${validatedData.message}</p>
          </div>
          
          <p>Saludos,<br>
          <strong>Tu Nombre</strong>
          </p>
        </div>
      `
    };

    // Enviar ambos emails
    await sgMail.send(emailToYou);
    await sgMail.send(confirmationEmail);

    return res.status(200).json({ 
      success: true, 
      message: "Mensaje enviado correctamente. Te contactaré pronto." 
    });

  } catch (error: any) {
    console.error('Error enviando email:', error);
    
    if (error instanceof z.ZodError) {
      return res.status(400).json({
        success: false,
        message: "Datos inválidos",
        errors: error.errors.map(e => `${e.path.join('.')}: ${e.message}`)
      });
    }

    let errorMessage = "Error desconocido al enviar el email";
    
    if (error.response?.body?.errors) {
      errorMessage = error.response.body.errors[0].message;
    } else if (error.message) {
      errorMessage = error.message;
    }

    return res.status(500).json({
      success: false,
      error: errorMessage
    });
  }
}