import mongoose from "mongoose";
import { env } from "./env.js";

mongoose.set("strictQuery", true);

export async function connectDB() {
  await mongoose.connect(env.MONGODB_URI, { serverSelectionTimeoutMS: 10000 });
  console.log(`MongoDB connected (db: ${mongoose.connection.name})`);
}

export async function disconnectDB() {
  await mongoose.disconnect();
}
