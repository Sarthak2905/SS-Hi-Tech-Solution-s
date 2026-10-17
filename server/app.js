import express from "express";
import helmet from "helmet";
import cors from "cors";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import rateLimit from "express-rate-limit";
import { env } from "./src/config/env.js";
import routes from "./src/routes/index.js";
import { ApiError } from "./src/utils/ApiError.js";
import { notFound, errorHandler } from "./src/middleware/errorHandler.js";

const app = express();

// Render/Vercel sit behind a proxy; needed for correct client IPs (rate limiting) and secure cookies
app.set("trust proxy", 1);

app.use(helmet());
app.use(
  cors({
    origin(origin, callback) {
      // No Origin header = non-browser client (curl, health checks); CORS only governs browsers
      if (!origin || env.clientOrigins.includes(origin))
        return callback(null, true);
      return callback(new ApiError(403, "Origin not allowed"));
    },
    credentials: true,
    methods: ["GET", "POST", "PATCH", "PUT", "DELETE", "OPTIONS"],
  }),
);

if (env.NODE_ENV !== "test") app.use(morgan(env.isProd ? "combined" : "dev"));

app.use(express.json({ limit: "100kb" }));
app.use(express.urlencoded({ extended: false, limit: "100kb" }));
app.use(cookieParser());

// Broad safety net; stricter limiters for login and inquiries arrive in Phases 4-5
app.use(
  "/api",
  rateLimit({
    windowMs: 15 * 60 * 1000,
    limit: 300,
    standardHeaders: "draft-7",
    legacyHeaders: false,
    message: {
      success: false,
      message: "Too many requests. Please try again later.",
    },
  }),
);

app.use("/api", routes);

app.use(notFound);
app.use(errorHandler);

export default app;
