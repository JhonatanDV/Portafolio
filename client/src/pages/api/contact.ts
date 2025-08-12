// pages/api/contact.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import sgMail from '@sendgrid/mail';
import { z } from 'zod';

// Configura SendGrid
if (process.env.SENDGRID_API_KEY) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
}

const contactSchema = z.object({
  name: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
  email: z.string().email("Email inválido"),
  subject: z.string().min(5, "El asunto debe tener al menos 5 caracteres"),
  message: z.string().min(10, "El mensaje debe tener al menos 10 caracteres"),
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'OPTIONS') {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  try {
    if (!process.env.SENDGRID_API_KEY) {
      return res.status(500).json({
        success: false,
        error: "SendGrid API key no configurada"
      });
    }

    const validatedData = contactSchema.parse(req.body);

    const emailToYou = {
      to: process.env.YOUR_EMAIL || 'jhonatandiaz918@gmail.com',
      from: process.env.FROM_EMAIL || 'jhonatandiaz918@gmail.com',
      subject: `[Portfolio] ${validatedData.subject}`,
      html: `
        <p><strong>Nombre:</strong> ${validatedData.name}</p>
        <p><strong>Email:</strong> ${validatedData.email}</p>
        <p><strong>Asunto:</strong> ${validatedData.subject}</p>
        <p>${validatedData.message}</p>
      `
    };

    const confirmationEmail = {
      to: validatedData.email,
      from: process.env.FROM_EMAIL || 'jhonatandiaz918@gmail.com',
      subject: 'Mensaje recibido - Te contactaré pronto',
      html: `
        <p>Hola ${validatedData.name},</p>
        <p>He recibido tu mensaje y te contactaré pronto.</p>
        <p><strong>Asunto:</strong> ${validatedData.subject}</p>
        <p>${validatedData.message}</p>
      `
    };

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

    return res.status(500).json({ success: false, error: errorMessage });
  }
}
