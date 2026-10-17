import mongoose from "mongoose";
import { ZodError } from "zod";
import { env } from "../config/env.js";
import { ApiError } from "../utils/ApiError.js";

export function notFound(req, res, next) {
  next(new ApiError(404, "Route not found"));
}

// eslint-disable-next-line no-unused-vars
export function errorHandler(err, req, res, next) {
  let status = 500;
  let message = "Something went wrong. Please try again.";
  let errors;

  if (err instanceof ApiError) {
    status = err.statusCode;
    message = err.message;
    errors = err.errors;
  } else if (err instanceof ZodError) {
    status = 400;
    message = "Validation failed";
    errors = err.issues.map((i) => ({
      field: i.path.join("."),
      message: i.message,
    }));
  } else if (err instanceof mongoose.Error.ValidationError) {
    status = 400;
    message = "Validation failed";
    errors = Object.values(err.errors).map((e) => ({
      field: e.path,
      message: e.message,
    }));
  } else if (err instanceof mongoose.Error.CastError) {
    status = 400;
    message = "Invalid identifier";
  } else if (err?.code === 11000) {
    status = 409;
    message = "A record with those details already exists";
  } else if (err?.type === "entity.parse.failed") {
    status = 400;
    message = "Malformed JSON body";
  } else if (err?.type === "entity.too.large") {
    status = 413;
    message = "Request body too large";
  }

  if (status >= 500 && env.NODE_ENV !== "test") {
    console.error(err); // never log request bodies: they may contain personal data
  }

  res.status(status).json({
    success: false,
    message,
    ...(errors && { errors }),
    // Stack traces only outside production
    ...(!env.isProd && status >= 500 && { debug: err?.stack }),
  });
}
