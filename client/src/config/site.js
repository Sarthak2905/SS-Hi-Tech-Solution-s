// Single source of truth for brand and contact details.
// Anything left as a REPLACE_ value is intentionally an obvious placeholder.
export const site = {
  name: "SS Hi-Tech Solution's",
  url: (import.meta.env.VITE_SITE_URL || "").replace(/\/$/, ""),
  slogan: "Your Business. Our Technology. Shared Growth.",
  description:
    "Practical websites, custom software and business automation for growing businesses.",
  location: "Baramati, Maharashtra, India",
  contact: {
    email: "REPLACE_WITH_BUSINESS_EMAIL",
    phone: "REPLACE_WITH_PHONE_NUMBER",
    // Digits only with country code, e.g. 91XXXXXXXXXX
    whatsapp: "REPLACE_WITH_WHATSAPP_NUMBER",
  },
  social: {
    linkedin: "",
    instagram: "",
    github: "",
  },
};

export const isConfigured = (value) =>
  Boolean(value) && !String(value).startsWith("REPLACE_");
