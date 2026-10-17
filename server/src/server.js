import app from "../app.js";
import { env } from "./config/env.js";
import { connectDB, disconnectDB } from "./config/db.js";

async function start() {
  await connectDB();

  const server = app.listen(env.PORT, () => {
    console.log(`API listening on port ${env.PORT} (${env.NODE_ENV})`);
  });

  const shutdown = (signal) => {
    console.log(`${signal} received, shutting down...`);
    server.close(async () => {
      await disconnectDB();
      process.exit(0);
    });
    setTimeout(() => process.exit(1), 10000).unref();
  };
  process.on("SIGTERM", () => shutdown("SIGTERM"));
  process.on("SIGINT", () => shutdown("SIGINT"));
}

process.on("unhandledRejection", (reason) => {
  console.error("Unhandled rejection:", reason);
});

start().catch((err) => {
  console.error("Failed to start server:", err.message);
  process.exit(1);
});
