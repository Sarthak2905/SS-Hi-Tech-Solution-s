export const packages = [
  {
    name: "Starter Website",
    slug: "starter-website",
    startingPrice: 7999,
    priceLabel: "Indicative starting price",
    currency: "INR",
    billingType: "one-time",
    shortDescription:
      "A clean, responsive website to establish your presence online.",
    bestFor:
      "Small businesses and professionals who need a simple, credible website.",
    features: [
      "Up to 5 standard pages",
      "Responsive design",
      "Contact or inquiry form",
      "Basic on-page SEO setup",
      "Deployment assistance",
    ],
    exclusions: [
      "Custom backend features",
      "E-commerce",
      "Hosting, domain and maintenance (optional add-ons, billed separately)",
    ],
    isFeatured: false,
  },
  {
    name: "Business Website",
    slug: "business-website",
    startingPrice: 14999,
    priceLabel: "Indicative starting price",
    currency: "INR",
    billingType: "one-time",
    shortDescription:
      "A custom-designed website built to present your business and generate inquiries.",
    bestFor:
      "Established businesses that want a tailored design and a stronger lead channel.",
    features: [
      "Up to 8 standard pages",
      "Custom design",
      "Inquiry form and WhatsApp contact link",
      "Basic SEO setup",
      "Analytics integration if configured",
    ],
    exclusions: [
      "E-commerce and payment gateways (scoped separately)",
      "Content writing and photography",
      "Ongoing maintenance (optional add-on)",
    ],
    isFeatured: true,
  },
  {
    name: "Custom Business Application",
    slug: "custom-business-application",
    startingPrice: 25000,
    priceLabel: "Starting from",
    currency: "INR",
    billingType: "project",
    shortDescription:
      "A web application built around your own processes and data.",
    bestFor: "Businesses that need dashboards, portals or internal tools.",
    features: [
      "Requirement-based scope",
      "Authentication and dashboards when required",
      "Database-backed features",
      "Admin functionality",
      "Project-specific quote",
    ],
    exclusions: [
      "Third-party integrations unless agreed in scope",
      "Hosting and maintenance (quoted separately)",
    ],
    isFeatured: false,
  },
  {
    name: "Business Automation / CRM",
    slug: "business-automation-crm",
    startingPrice: 20000,
    priceLabel: "Starting from",
    currency: "INR",
    billingType: "project",
    shortDescription:
      "Organize customer data and automate repetitive workflows.",
    bestFor: "Teams managing customers, projects or payments by hand.",
    features: [
      "Scope-dependent business workflow",
      "Data management",
      "Custom dashboard or reports",
      "Relevant integrations when agreed",
    ],
    exclusions: [
      "Integrations not agreed in writing",
      "Data migration from other systems (quoted if needed)",
    ],
    isFeatured: false,
  },
];
