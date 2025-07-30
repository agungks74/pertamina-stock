import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // Dashboard Status API
  app.get("/api/dashboard/status", async (req, res) => {
    try {
      const statuses = await storage.getDashboardStatuses();
      res.json(statuses);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch dashboard statuses" });
    }
  });

  // Region Status API
  app.get("/api/dashboard/regions", async (req, res) => {
    try {
      const regions = await storage.getRegionStatuses();
      res.json(regions);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch region statuses" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
