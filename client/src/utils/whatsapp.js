import { site, isConfigured } from "../config/site.js";

export const defaultWhatsAppMessage =
  "Hi SS Hi-Tech Solution's, I'd like to discuss a project.";

// Returns null when no WhatsApp number is configured, so callers can hide the button.
export function getWhatsAppLink(message = defaultWhatsAppMessage) {
  if (!isConfigured(site.contact.whatsapp)) return null;
  const number = site.contact.whatsapp.replace(/\D/g, "");
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}
