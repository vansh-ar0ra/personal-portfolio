import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // API endpoint to handle contact form submissions
  app.post("/api/contact", async (req, res) => {
    try {
      const { name, email, subject, message } = req.body;
      
      // Validate required fields
      if (!name || !email || !subject || !message) {
        return res.status(400).json({ message: "All fields are required" });
      }
      
      // In a real application, you would save this to a database
      // or send an email notification
      
      // For now, just return a success response
      return res.status(200).json({ 
        success: true,
        message: "Message received successfully!" 
      });
    } catch (error) {
      console.error("Error in contact form submission:", error);
      return res.status(500).json({ 
        message: "An error occurred while processing your request" 
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
