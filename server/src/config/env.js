import "dotenv/config";
import { z } from "zod";

// Blank values in .env become undefined, so optional settings stay truly optional.
const optional = z
  .string()
  .trim()
  .optional()
  .transform((v) => (v ? v : undefined));

const schema = z.object({
  NODE_ENV: z
    .enum(["development", "test", "production"])
    .default("development"),
  PORT: z.coerce.number().int().positive().default(5000),
  CLIENT_URL: z.string().trim().min(1, "CLIENT_URL is required"),
  MONGODB_URI: z
    .string()
    .trim()
    .startsWith("mongodb", "MONGODB_URI must be a MongoDB connection string"),
  JWT_SECRET: z.string().min(32, "JWT_SECRET must be at least 32 characters"),

  // Later phases (optional until the feature is used)
  CLOUDINARY_CLOUD_NAME: optional,
  CLOUDINARY_API_KEY: optional,
  CLOUDINARY_API_SECRET: optional,
  EMAIL_HOST: optional,
  EMAIL_PORT: optional,
  EMAIL_USER: optional,
  EMAIL_PASS: optional,
  BUSINESS_NOTIFICATION_EMAIL: optional,
});

const parsed = schema.safeParse(process.env);

if (!parsed.success) {
  console.error("Invalid environment configuration:");
  for (const issue of parsed.error.issues) {
    console.error(`  - ${issue.path.join(".")}: ${issue.message}`);
  }
  process.exit(1);
}

const raw = parsed.data;

export const env = {
  ...raw,
  isProd: raw.NODE_ENV === "production",
  clientOrigins: raw.CLIENT_URL.split(",")
    .map((o) => o.trim().replace(/\/$/, ""))
    .filter(Boolean),
};
