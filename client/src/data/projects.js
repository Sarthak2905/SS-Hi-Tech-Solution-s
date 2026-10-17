// SAMPLE/PLACEHOLDER DATA: confirm every `// CONFIRM` line before publishing.
// Phase 6 moves this into the database and admin panel.
export const projectCategories = [
  "All",
  "Websites",
  "Business Tools",
  "Dashboards",
  "Automation",
];

export const projects = [
  {
    title: "Architect Client & Project Management Portal",
    slug: "architect-client-portal",
    category: "Dashboards",
    shortDescription:
      "A portal for architecture practices to manage client communication and project information in one place.",
    technologies: ["React", "Node.js", "Express", "MongoDB"], // CONFIRM
    projectStatus: "In Progress", // CONFIRM: Completed | In Progress | Concept
    features: [], // add real features
    coverImage: "", // Cloudinary URL later
    liveUrl: "",
    githubUrl: "",
    isFeatured: true,
  },
  {
    title: "Expense Tracker",
    slug: "expense-tracker",
    category: "Business Tools",
    shortDescription: "A tool for recording and reviewing expenses.",
    technologies: ["React", "Node.js", "Express", "MongoDB"], // CONFIRM
    projectStatus: "Completed", // CONFIRM
    features: [],
    coverImage: "",
    liveUrl: "",
    githubUrl: "",
    isFeatured: true,
  },
  {
    title: "Digital Café Website",
    slug: "digital-cafe",
    category: "Websites",
    shortDescription: "A website concept for cafés and local food businesses.",
    technologies: ["React", "Tailwind CSS"], // CONFIRM
    projectStatus: "Concept", // CONFIRM
    features: [],
    coverImage: "",
    liveUrl: "",
    githubUrl: "",
    isFeatured: true,
  },
  {
    title: "SmartBill (Concept)",
    slug: "smartbill",
    category: "Automation",
    shortDescription:
      "A billing and quotation concept for printing and banner businesses. Prototype only.",
    technologies: ["React", "Node.js", "MongoDB"], // CONFIRM
    projectStatus: "Concept",
    features: [],
    coverImage: "",
    liveUrl: "",
    githubUrl: "",
    isFeatured: true,
  },
];
