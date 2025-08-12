import sgMail from '@sendgrid/mail';

if (process.env.SENDGRID_API_KEY) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
}

export interface EmailData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export async function sendContactEmail(data: EmailData): Promise<{ success: boolean; error?: string }> {
  try {
    if (!process.env.SENDGRID_API_KEY) {
      return {
        success: false,
        error: "SendGrid API key no configurada. Configura SENDGRID_API_KEY en las variables de entorno."
      };
    }

    const emailToYou = {
      to: process.env.YOUR_EMAIL || 'tu@email.com',
      from: process.env.FROM_EMAIL || 'tu@email.com',
      subject: `[Portfolio] ${data.subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #6366f1;">Nuevo mensaje desde tu portfolio</h2>
          
          <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Nombre:</strong> ${data.name}</p>
            <p><strong>Email:</strong> ${data.email}</p>
            <p><strong>Asunto:</strong> ${data.subject}</p>
          </div>
          
          <div style="background: white; padding: 20px; border-left: 4px solid #6366f1;">
            <h3>Mensaje:</h3>
            <p style="white-space: pre-wrap;">${data.message}</p>
          </div>
        </div>
      `
    };

    const confirmationEmail = {
      to: data.email,
      from: process.env.FROM_EMAIL || 'tu@email.com',
      subject: 'Mensaje recibido - Te contactaré pronto',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #6366f1;">¡Gracias por contactarme!</h2>
          <p>Hola ${data.name},</p>
          <p>He recibido tu mensaje y te contactaré pronto.</p>
          <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Tu mensaje:</strong></p>
            <p style="white-space: pre-wrap; background: white; padding: 15px; border-radius: 4px;">${data.message}</p>
          </div>
        </div>
      `
    };

    await sgMail.send(emailToYou);
    await sgMail.send(confirmationEmail);

    return { success: true };

  } catch (error: any) {
    console.error('Error enviando email:', error);
    return {
      success: false,
      error: error.response?.body?.errors?.[0]?.message || error.message || "Error desconocido"
    };
  }
}