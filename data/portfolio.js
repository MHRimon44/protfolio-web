// Portfolio Data - Mock Data
export const personalInfo = {
  name: "MD Mehedi Hasan",
  title: "Software Engineer | Mobile App Developer",
  subtitle: "React Native Specialist",
  tagline:
    "Building scalable mobile applications with clean architecture and exceptional user experience",
  location: "Mirpur 1, Dhaka, Bangladesh",
  email: "mehedihasanrimon01@gmail.com",
  phone: "+8801792085854",
  linkedin: "https://www.linkedin.com/in/mdhasan",
  github: "https://github.com/mdhasan",
  yearsOfExperience: 2,
  projectsCompleted: 10,
};

export const about = {
  summary:
    "I am a passionate Software Engineer with strong experience in building scalable mobile applications using React Native, TypeScript, Redux, and modern development tools. I have worked on various domains including E-commerce, CRM, ERP, POS systems, HRM, Billing, and Delivery apps. I focus on performance, clean architecture, and user-friendly UI/UX.",
  highlights: [
    "2+ years of professional experience in mobile app development",
    "Specialized in React Native and cross-platform solutions",
    "Delivered 10+ production-ready applications",
    "Expert in building E-commerce, ERP, and CRM systems",
  ],
};

export const skills = {
  languages: ["C/C++", "JavaScript", "TypeScript", "SQLite"],
  frameworks: [
    "React Native",
    "Redux",
    "RTK Query",
    "Tailwind CSS",
    "Shopify Restyle",
  ],
  tools: ["GitHub", "GitLab", "VS Code", "Postman", "Figma"],
};

export const experience = [
  {
    id: 1,
    title: "Executive, Mobile App Developer",
    company: "SaRa Lifestyle",
    period: "Dec 2025 – Present",
    current: true,
    description:
      "Developed marketplace and POS apps including DC POS and Shop POS systems.",
    achievements: [
      "Built marketplace application from scratch",
      "Developed POS systems for retail management",
      "Implemented real-time inventory tracking",
    ],
  },
  {
    id: 2,
    title: "Software Engineer",
    company: "SegaSoftBD",
    period: "Jan 2024 – Nov 2025",
    current: false,
    description:
      "Worked on E-Commerce, CRM, Sales, Billing, Invoice, Delivery, ERP, and HRM systems.",
    achievements: [
      "Developed multiple enterprise applications",
      "Implemented complex business logic for various domains",
      "Collaborated with cross-functional teams",
      "Optimized app performance and user experience",
    ],
  },
];

export const projects = [
  {
    id: 1,
    name: "SaRa Lifestyle App",
    category: "E-commerce",
    description:
      "Comprehensive marketplace application with advanced features for online shopping and vendor management.",
    techStack: ["React Native", "TypeScript", "Redux", "RTK Query"],
    image: "/placeholder-project.png",
    featured: true,
  },
  {
    id: 2,
    name: "Fresco App",
    category: "E-commerce",
    description:
      "Modern e-commerce platform for fresh groceries and daily essentials with seamless checkout experience.",
    techStack: ["React Native", "Redux", "Tailwind CSS"],
    image: "/placeholder-project.png",
    featured: true,
  },
  {
    id: 3,
    name: "Ab Mini Mercado App",
    category: "E-commerce",
    description:
      "Mobile marketplace for local vendors with inventory management and order tracking.",
    techStack: ["React Native", "TypeScript", "SQLite"],
    image: "/placeholder-project.png",
    featured: false,
  },
  {
    id: 4,
    name: "CRM System",
    category: "CRM",
    description:
      "Customer Relationship Management system for managing client interactions and sales pipeline.",
    techStack: ["React Native", "Redux", "RTK Query"],
    image: "/placeholder-project.png",
    featured: true,
  },
  {
    id: 5,
    name: "Sales App",
    category: "ERP",
    description:
      "Comprehensive sales management application with real-time reporting and analytics.",
    techStack: ["React Native", "TypeScript", "Redux"],
    image: "/placeholder-project.png",
    featured: false,
  },
  {
    id: 6,
    name: "Invoice App",
    category: "ERP",
    description:
      "Professional invoicing solution with automated billing and payment tracking.",
    techStack: ["React Native", "SQLite", "Redux"],
    image: "/placeholder-project.png",
    featured: false,
  },
  {
    id: 7,
    name: "Delivery App",
    category: "Logistics",
    description:
      "Real-time delivery tracking system with route optimization and driver management.",
    techStack: ["React Native", "Redux", "TypeScript"],
    image: "/placeholder-project.png",
    featured: true,
  },
  {
    id: 8,
    name: "ERP System",
    category: "ERP",
    description:
      "Enterprise Resource Planning system integrating multiple business processes.",
    techStack: ["React Native", "TypeScript", "RTK Query"],
    image: "/placeholder-project.png",
    featured: false,
  },
  {
    id: 9,
    name: "HRM System",
    category: "HRM",
    description:
      "Human Resource Management system for employee management and payroll processing.",
    techStack: ["React Native", "Redux", "SQLite"],
    image: "/placeholder-project.png",
    featured: false,
  },
  {
    id: 10,
    name: "Clinical Management of Rape (CMR) Module",
    category: "Healthcare",
    description:
      "Sensitive healthcare application module for clinical documentation and case management.",
    techStack: ["React Native", "TypeScript", "Redux"],
    image: "/placeholder-project.png",
    featured: true,
  },
];

export const education = [
  {
    id: 1,
    degree: "BSc in Software Engineering",
    institution: "Daffodil International University",
    period: "2020 – 2024",
    grade: "CGPA: 3.66",
    description:
      "Focused on software development, mobile applications, and system design.",
  },
  {
    id: 2,
    degree: "Higher Secondary Certificate (HSC)",
    institution: "High School",
    period: "2018 – 2020",
    grade: "GPA: 5.00",
    description: "Science background with excellent academic performance.",
  },
  {
    id: 3,
    degree: "Secondary School Certificate (SSC)",
    institution: "Secondary School",
    period: "2016 – 2018",
    grade: "GPA: 5.00",
    description: "Strong foundation in mathematics and science.",
  },
];

export const leadership = [
  {
    id: 1,
    title: "General Secretary",
    organization: "Software Engineering Club, DIU",
    period: "2022 – 2023",
    description:
      "Led club activities and organized technical events for students.",
  },
  {
    id: 2,
    title: "Champion – Project Showcasing",
    organization: "University Competition",
    period: "Dec 2022",
    description: "Won first place in project presentation competition.",
  },
  {
    id: 3,
    title: "Volunteer Leader",
    organization: "Multiple Community Events",
    period: "2021 – 2023",
    description:
      "Organized and led various volunteering activities and community service projects.",
  },
];

export const projectCategories = [
  "All",
  "E-commerce",
  "CRM",
  "ERP",
  "POS",
  "Logistics",
  "HRM",
  "Healthcare",
];
