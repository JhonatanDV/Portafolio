import type { Express } from "express";
import { createServer, type Server } from "http";
import { z } from "zod";
import { storage } from "./storage";
import { sendContactEmail, type EmailData } from "./email";

// Schema de validación para el formulario de contacto
const contactSchema = z.object({
  name: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
  email: z.string().email("Email inválido"),
  subject: z.string().min(5, "El asunto debe tener al menos 5 caracteres"),
  message: z.string().min(10, "El mensaje debe tener al menos 10 caracteres"),
});

export async function registerRoutes(app: Express): Promise<Server> {
  // Health check endpoint
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok", timestamp: new Date().toISOString() });
  });

  // Endpoint para enviar emails de contacto
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = contactSchema.parse(req.body);
      const result = await sendContactEmail(validatedData);
      
      if (result.success) {
        res.json({ 
          success: true, 
          message: "Mensaje enviado correctamente. Te contactaré pronto." 
        });
      } else {
        res.status(500).json({ 
          success: false, 
          message: result.error || "Error al enviar el mensaje" 
        });
      }
    } catch (error) {
      console.error("Error en /api/contact:", error);
      
      if (error instanceof z.ZodError) {
        res.status(400).json({
          success: false,
          message: "Datos inválidos",
          errors: error.errors.map(e => `${e.path.join('.')}: ${e.message}`)
        });
      } else {
        res.status(500).json({
          success: false,
          message: "Error interno del servidor"
        });
      }
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}