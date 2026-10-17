import { Router } from "express";
import mongoose from "mongoose";

const router = Router();

router.get("/health", (req, res) => {
  const dbReady = mongoose.connection.readyState === 1;
  res.status(dbReady ? 200 : 503).json({
    success: dbReady,
    data: {
      status: dbReady ? "ok" : "degraded",
      database: dbReady ? "connected" : "disconnected",
      uptimeSeconds: Math.round(process.uptime()),
    },
  });
});

export default router;
