import abmImg from "@/assets/projectImage/abm.webp";
import crmImg from "@/assets/projectImage/crm.webp";
import deliveryImg from "@/assets/projectImage/delivery.webp";
import erpImg from "@/assets/projectImage/erp.png";
import frescoImg from "@/assets/projectImage/fresco.webp";
import hrmImg from "@/assets/projectImage/hrm.png";
import investorImg from "@/assets/projectImage/investor.webp";
import saleImg from "@/assets/projectImage/sale.webp";
import saraImg from "@/assets/projectImage/sara.webp";
import invoiceImg from "@/assets/projectImage/invoice.webp";
import cmrImg from "@/assets/projectImage/cmr.png";
import notifyImage from "@/assets/projectImage/notify.avif";
import dcposImg from "@/assets/projectImage/dcpos.jpg";
import shopposImg from "@/assets/projectImage/shoppos.png";
import transportImg from "@/assets/projectImage/transport.png";
import symbolImg from "@/assets/projectImage/symbol.png";
import fastApiImg from "@/assets/projectImage/fastApi.png";

export const personalInfo = {
  name: "MD Mehedi Hasan",
  title: "Software Engineer | React Native Mobile Engineer",
  subtitle: "Production Mobile & Business App Developer",
  tagline:
    "I build real Android and iOS business applications across e-commerce, POS, ERP, CRM, HRM, logistics, notifications, finance, and education workflows.",
  location: "Dhaka, Bangladesh",
  email: "mehedihasanrimon01@gmail.com",
  phone: "+8801792085854",
  linkedin: "https://www.linkedin.com/in/mehedi-hasan-7222122b2/",
  github: "https://github.com/MHRimon44",
  resumeUrl:
    "https://drive.google.com/file/d/1Y2GK4ffFKYBu5uagPl8AO3Y_0FYL9HZa/view?usp=drive_link",
  yearsOfExperience: 2,
  projectsCompleted: 19,
  stats: [
    { value: 2, suffix: "+", label: "Years Experience" },
    { value: 16, suffix: "+", label: "Mobile App Projects" },
    { value: 10, suffix: "+", label: "Business Domains" },
  ],
  focusAreas: [
    "React Native CLI & Expo",
    "TypeScript business apps",
    "SQLite/offline persistence",
    "FCM, barcode & printer flows",
    "FastAPI/backend exposure",
  ],
};

export const about = {
  summary:
    "I am a software engineer focused on production React Native mobile applications. My project work covers marketplace apps, POS and invoice systems, CRM and sales-force tools, ERP and HRM operations, delivery-agent workflows, employee notification systems, finance dashboards, healthcare learning modules, and symbol-awareness education platforms. I work with API-first architecture, Redux Toolkit/RTK Query, local persistence, native device features, and release-ready mobile UX for real business processes.",
  highlights: [
    "16+ mobile projects across React Native CLI and Expo ecosystems",
    "Strong experience with Redux Toolkit, RTK Query, SQLite, MMKV, AsyncStorage, and local-first workflows",
    "Hands-on work with payment flows, push notifications, barcode scanning, thermal printing, location tracking, PDF generation, and app releases",
    "Additional full-stack exposure through React/Vite admin dashboards and FastAPI/PostgreSQL/vector-search backend projects",
  ],
};

export const coreCompetencies = [
  {
    title: "Mobile Business Systems",
    level: "Advanced",
    description:
      "React Native apps for e-commerce, POS, ERP, CRM, HRM, delivery, finance, and enterprise operations.",
  },
  {
    title: "State, API & Auth Flow",
    level: "Advanced",
    description:
      "Redux Toolkit, RTK Query, JWT/session persistence, dynamic API routing, and business-form data flows.",
  },
  {
    title: "Offline & Device Integration",
    level: "Intermediate+",
    description:
      "SQLite, MMKV, AsyncStorage, FCM/Notifee notifications, camera scanning, barcode devices, and thermal printers.",
  },
  {
    title: "Release & Maintainability",
    level: "Advanced",
    description:
      "Reusable components, navigation architecture, EAS/CLI build flows, store links, and production-readiness reviews.",
  },
];

export const skills = {
  languages: ["JavaScript", "TypeScript", "Python", "SQL", "C/C++"],
  mobile: [
    "React Native CLI",
    "Expo",
    "React Navigation",
    "Expo Router",
    "Android",
    "iOS",
    "NativeWind",
    "Shopify Restyle",
    "React Native Paper",
  ],
  stateAndStorage: [
    "Redux Toolkit",
    "RTK Query",
    "Redux Persist",
    "AsyncStorage",
    "MMKV",
    "Expo SQLite",
    "op-sqlite",
    "Zustand",
    "TanStack Query",
  ],
  ui: [
    "Reusable Components",
    "Responsive UI",
    "Form-heavy UX",
    "Bottom Sheets",
    "FlashList",
    "Tailwind CSS",
    "shadcn/Radix UI",
    "Charts",
  ],
  apiBackend: [
    "REST API Integration",
    "JWT Authentication",
    "Payment Gateway WebView",
    "Firebase FCM",
    "Notifee",
    "FastAPI",
    "PostgreSQL",
    "pgvector",
    "Docker",
    "Nginx",
  ],
  tools: [
    "GitHub",
    "GitLab",
    "Postman",
    "Figma",
    "EAS Build",
    "Play Store Release",
    "App Store Release",
  ],
  learning: [
    "Swift",
    "Kotlin",
    "Native Modules",
    "OpenCLIP",
    "Background Tasks",
  ],
};

export const experience = [
  {
    id: 1,
    title: "Executive, Mobile App Developer",
    company: "SaRa Lifestyle",
    period: "Dec 2025 – Present",
    current: true,
    description:
      "Building and maintaining production mobile applications for marketplace, POS, notification, inventory, and retail-operation workflows.",
    achievements: [
      "Worked on SaRa marketplace mobile flows including product discovery, cart, wishlist, checkout, payment WebView, order tracking, invoice, analytics, and Crashlytics.",
      "Built POS and warehouse/DC workflows with barcode scanning, stock movement modules, shop delivery, return receive, warehouse inventory, and native Android scanner integration.",
      "Implemented employee notification workflows using Firebase Cloud Messaging, Notifee, local SQLite persistence, module-wise unread counts, and badge syncing.",
      "Focused on reliable API integration, reusable mobile UI, state persistence, and release-oriented code quality for operational business screens.",
    ],
  },
  {
    id: 2,
    title: "Software Engineer",
    company: "SegaSoftBD",
    period: "Jan 2024 – Nov 2025",
    current: false,
    description:
      "Developed cross-platform apps for e-commerce, CRM, sales, billing, invoice, delivery, investor management, ERP, and HRM systems.",
    achievements: [
      "Delivered multiple React Native/Expo applications published or prepared for Play Store/App Store, including Fresco, Ab Mini Mercado, CRM, Quicker Delivery, Sale/POS Express, Invoice, and Investor Management System.",
      "Built complex business workflows such as offline sale entry, SQLite invoice storage, customer/product sync, route tracking, attendance with selfie/GPS, delivery proof upload, and PDF/thermal-print output.",
      "Implemented Redux Toolkit, RTK Query, Redux Persist, AsyncStorage, NativeWind, React Navigation, camera/image/location APIs, and EAS build workflows across multiple apps.",
      "Collaborated with backend and business teams to convert operational requirements into release-ready screens, API payloads, validation flows, and mobile UX patterns.",
    ],
  },
];

export const projects = [
  {
    id: 1,
    name: "SaRa Marketplace Mobile App",
    category: "E-commerce",
    role: "React Native Developer",
    description:
      "Feature-rich Android/iOS marketplace app for product discovery, categories, campaigns, cart, wishlist, checkout, payment gateway, orders, invoices, vouchers, blogs, and help content.",
    impact:
      "Production marketplace app published on Play Store and App Store for SaRa Lifestyle customer shopping operations.",
    highlights: [
      "RTK Query API layer with Redux Toolkit and MMKV-backed Redux Persist",
      "WebView payment flow, order tracking, invoices, vouchers, wishlist, and customer account screens",
      "Firebase Analytics, Crashlytics, media content, and release-ready mobile architecture",
    ],
    techStack: [
      "React Native",
      "TypeScript",
      "Redux Toolkit",
      "RTK Query",
      "MMKV",
      "Firebase",
    ],
    image: saraImg,
    featured: true,
    caseStudy: true,
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=com.saralifestyle&pcampaignid=web_share",
    appStoreUrl:
      "https://apps.apple.com/us/app/sara-lifestyle-ltd/id6746068529",
  },
  {
    id: 2,
    name: "Snowtex Notify",
    category: "Notifications",
    role: "React Native Developer",
    description:
      "Employee notification app that receives FCM messages, renders Notifee local notifications, stores messages in local SQLite, and shows module-wise unread notification history.",
    impact:
      "Built for ERP notification delivery where employees can browse persisted messages by module with unread badge syncing.",
    highlights: [
      "FCM foreground, background, quit-state, and notification-open handling",
      "op-sqlite message database separated by employee and module",
      "Manual/focus sync, retention policy, unread counts, pin modules, and app badge synchronization",
    ],
    techStack: [
      "React Native CLI",
      "TypeScript",
      "FCM",
      "Notifee",
      "op-sqlite",
      "RTK Query",
    ],
    image: notifyImage,
    featured: true,
    caseStudy: true,
    playStoreUrl: "",
    appStoreUrl: "",
  },
  {
    id: 3,
    name: "SaRa DC POS Mobile App",
    category: "POS",
    role: "React Native Developer",
    description:
      "Distribution-center and warehouse POS app for purchase receive, shop delivery, return receive, store-house entry, and warehouse inventory operations.",
    impact:
      "Designed for internal barcode-heavy stock movement workflows on Android handheld POS devices.",
    highlights: [
      "Hardware barcode scanner support with Kotlin native module bridge",
      "Stock and delivery modules with RTK Query backend saves and bottom-sheet product details",
      "MMKV-persisted auth/device state, FlashList, React Native Paper, and Vision Camera support",
    ],
    techStack: [
      "React Native CLI",
      "TypeScript",
      "RTK Query",
      "MMKV",
      "Kotlin",
      "Vision Camera",
    ],
    image: dcposImg,
    featured: true,
    caseStudy: true,
    playStoreUrl: "",
    appStoreUrl: "",
  },
  {
    id: 4,
    name: "Snowtex Shop POS",
    category: "POS",
    role: "React Native Developer",
    description:
      "Internal shop billing app for employee login, shop selection, sales dashboard, product barcode scan/search, customer lookup, bill calculation, payment collection, and invoice SMS flow.",
    impact:
      "Supports retail/shop billing operations with both camera scanning and Android hardware scanner integration.",
    highlights: [
      "Point-of-sale product search, quantity control, stock validation, discounts, VAT, and split payment flow",
      "Zustand + MMKV state persistence with TanStack Query and Axios API integration",
      "Custom reusable UI system, network status handling, bottom sheets, and native barcode bridge",
    ],
    techStack: [
      "React Native CLI",
      "TypeScript",
      "Zustand",
      "TanStack Query",
      "MMKV",
      "Kotlin",
    ],
    image: shopposImg,
    featured: true,
    caseStudy: true,
    playStoreUrl: "",
    appStoreUrl: "",
  },
  {
    id: 5,
    name: "Smart ERP Mobile App",
    category: "ERP",
    role: "Mobile App Developer",
    description:
      "Expo-based field-force and ERP app with company selection, dynamic company-specific API base URL, attendance, plans, doctor/customer modules, orders, targets, and reports.",
    impact:
      "Built for multi-company sales-force and ERP users who need mobile access to operational workflows.",
    highlights: [
      "Company selection before login and dynamic backend routing",
      "Weekly plans, monthly schedules, attendance, RX/prescription, customer, order, target, and reports modules",
      "Stack, drawer, and bottom-tab navigation with persisted company/auth state",
    ],
    techStack: [
      "Expo",
      "TypeScript",
      "Redux Toolkit",
      "RTK Query",
      "AsyncStorage",
      "NativeWind",
    ],
    image: erpImg,
    featured: true,
    caseStudy: true,
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=com.smartsoftwareltd.salesforce&pcampaignid=web_share",
    appStoreUrl: "",
  },
  {
    id: 6,
    name: "Smart HRM",
    category: "HRM",
    role: "Mobile App Developer",
    description:
      "Employee self-service HRM app for company-based login, attendance, leave, short leave, daily work, out-work, tracking, loan, training, notices, payslip, chat, and notifications.",
    impact:
      "Mobile HR operations platform for employees and HR/admin users with location-aware attendance and employee tracking.",
    highlights: [
      "Attendance punch, monthly history, job card, leave approvals, out-work approval, HR loan, and salary/payslip screens",
      "Employee tracking with Expo Location, offline location storage, periodic upload, and map/report views",
      "Expo Notifications, chat API flow, Redux Persist, RTK Query, and dashboard-grid module architecture",
    ],
    techStack: [
      "Expo",
      "TypeScript",
      "RTK Query",
      "Redux Persist",
      "Expo Location",
      "Expo Notifications",
    ],
    image: hrmImg,
    featured: true,
    caseStudy: true,
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=com.smartsoftware.hrm&pcampaignid=web_share",
    appStoreUrl: "",
  },
  {
    id: 7,
    name: "CRM Mobile App",
    category: "CRM",
    role: "React Native Developer",
    description:
      "CRM and field-sales app for customer management, labels, visit planning, attendance, route tracking, appointments, order creation, coupon redemption, and invoice PDF sharing.",
    impact:
      "Business-facing CRM app with hybrid online/offline data handling for sales employees and admins.",
    highlights: [
      "Product sync and route points stored in local SQLite",
      "Attendance with selfie/GPS, reverse geocoding, maps, and background route tracking",
      "Customer labels, appointment management, order/cart checkout, coupon redemption, and invoice PDF flow",
    ],
    techStack: [
      "Expo",
      "TypeScript",
      "Redux Toolkit",
      "RTK Query",
      "SQLite",
      "Expo Location",
    ],
    image: crmImg,
    featured: true,
    caseStudy: true,
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=com.segasoftbd.crm&pcampaignid=web_share",
    appStoreUrl: "https://apps.apple.com/ng/app/crm-by-segasoftbd/id6755300179",
  },
  {
    id: 8,
    name: "Quicker Delivery",
    category: "Logistics",
    role: "Mobile App Developer",
    description:
      "Delivery-agent app for assigned orders, add-to-bag workflow, delivery completion, partial delivery, payment collection, proof image upload, attendance, visited points, and profile management.",
    impact:
      "Published delivery operations app for agents handling assigned customer orders and cash/mobile payment collection.",
    highlights: [
      "QR/barcode scan to find orders and multipart proof-image upload",
      "Partial delivery, quantity editing, payment mismatch notes, and delivery status save flow",
      "Attendance/visited points with camera selfie, GPS coordinates, reverse geocoding, and history screens",
    ],
    techStack: [
      "Expo",
      "TypeScript",
      "RTK Query",
      "Redux Persist",
      "Expo Camera",
      "Expo Location",
    ],
    image: deliveryImg,
    featured: true,
    caseStudy: false,
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=com.segasoftbd.delivery&pcampaignid=web_share",
    appStoreUrl:
      "https://apps.apple.com/dk/app/quicker-delivery/id6755297018?l=da",
  },
  {
    id: 9,
    name: "Fresco Mobile App",
    category: "E-commerce",
    role: "Mobile App Developer",
    description:
      "Customer ordering app for product browsing, search, categories, cart, coupons, checkout, wishlist, profile, and customer order history.",
    impact:
      "Published grocery/customer ordering app on Android and iOS stores.",
    highlights: [
      "Home sliders, categories, featured products, product search, details, and load-more pagination",
      "Cart context, coupon redemption, checkout stock-adjustment modal, and JWT customer APIs",
      "AsyncStorage home cache and Redux Persist auth/session state",
    ],
    techStack: [
      "Expo",
      "TypeScript",
      "Redux Toolkit",
      "RTK Query",
      "AsyncStorage",
      "NativeWind",
    ],
    image: frescoImg,
    featured: true,
    caseStudy: false,
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=com.segasoftbd.fresco&pcampaignid=web_share",
    appStoreUrl: "https://apps.apple.com/gb/app/fresco-lisboa/id6752566353",
  },
  {
    id: 10,
    name: "Ab Mini Mercado Mobile App",
    category: "E-commerce",
    role: "Mobile App Developer",
    description:
      "Mobile commerce app for guest browsing, customer login, product discovery, cart, wishlist, checkout, delivery areas, rewards, coupons, profile, and order history.",
    impact:
      "Published customer-shopping app with rewards/coupons and social-login flows.",
    highlights: [
      "Google login, Apple login, manual signup/login, JWT persistence, and account completion flow",
      "Reward points, coupon generation, referral code, order history, and cart persistence",
      "Cached home data, stock adjustment modal, delivery-charge calculation, and network awareness",
    ],
    techStack: [
      "Expo",
      "TypeScript",
      "Redux Toolkit",
      "RTK Query",
      "AsyncStorage",
      "NativeWind",
    ],
    image: abmImg,
    featured: false,
    caseStudy: false,
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=com.segasoftbd.abminimercado&pcampaignid=web_share",
    appStoreUrl: "https://apps.apple.com/gb/app/ab-mini-mercado/id6753908732",
  },
  {
    id: 11,
    name: "Invoice Mobile App",
    category: "POS",
    role: "Mobile App Developer",
    description:
      "Local invoicing and receipt app with guest/Google login, SQLite invoice creation, customer management, invoice editing, PDF/HTML output, backup/import, and thermal printing.",
    impact:
      "Android invoicing app for small business billing where offline/local invoice storage is important.",
    highlights: [
      "SQLite tables for company info, invoice headers, invoice items, customer lists, and backup/restore",
      "Auto invoice ID generation, customer-wide updates, edit/delete flows, and A4-like printable invoice HTML",
      "Expo Print, Expo Sharing, File System, Redux Persist, and Bluetooth thermal printer output",
    ],
    techStack: [
      "Expo",
      "TypeScript",
      "Expo SQLite",
      "Expo Print",
      "Redux Toolkit",
      "Thermal Printer",
    ],
    image: invoiceImg,
    featured: true,
    caseStudy: false,
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=com.segasoftbd.invoice&pcampaignid=web_share",
    appStoreUrl: "",
  },
  {
    id: 12,
    name: "Sale / POS Express",
    category: "POS",
    role: "Mobile App Developer",
    description:
      "Lightweight mobile POS app with customer/product sync, offline sale entry, sale history/details, item barcode scanning, barcode/receipt printing, and account/settings flows.",
    impact:
      "Offline-friendly POS client that stores customers, products, sales, and sale-product history in SQLite.",
    highlights: [
      "Downloads customer/item data after login and saves them in local SQLite",
      "Local sale invoice number generation, subtotal/discount/payment calculations, and sale history",
      "Expo Camera barcode scanning and Bluetooth thermal printer integration for ESC/POS output",
    ],
    techStack: [
      "Expo",
      "TypeScript",
      "Expo SQLite",
      "Redux Toolkit",
      "NativeWind",
      "Thermal Printer",
    ],
    image: saleImg,
    featured: false,
    caseStudy: false,
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=com.segasoftbd.sale&pcampaignid=web_share",
    appStoreUrl: "",
  },
  {
    id: 13,
    name: "Snowtex Transport Mobile App",
    category: "Logistics",
    role: "React Native Developer",
    description:
      "Internal transport requisition app for employee login, dynamic menus, vehicle request creation, approval/cancellation, assignment, trip completion, history, and feedback.",
    impact:
      "Operational transport workflow app with dynamic employee-specific drawer menus and request status tracking.",
    highlights: [
      "Builds nested transport menus from employee permissions and maps routes/badges dynamically",
      "Requisition form, buyer/participant selection, pickup/drop time and location, approval, cancellation, and trip feedback",
      "Redux Toolkit, RTK Query, AsyncStorage auth restore, theme provider, and network-aware API handling",
    ],
    techStack: [
      "React Native CLI",
      "TypeScript",
      "Redux Toolkit",
      "RTK Query",
      "AsyncStorage",
      "Drawer Navigation",
    ],
    image: transportImg,
    featured: false,
    caseStudy: false,
    playStoreUrl: "",
    appStoreUrl: "",
  },
  {
    id: 14,
    name: "Investor Management System",
    category: "Finance",
    role: "Mobile App Developer",
    description:
      "Investor portal app for login, investment dashboard, sold/unsold product history, disbursement history, withdrawal requests, profile, filters, calendars, and chart-based summaries.",
    impact:
      "Finance-facing mobile app for investor visibility and withdrawal-request operations.",
    highlights: [
      "Investor summary, withdraw limit, sold product history, unsold investment filters, and disbursement screens",
      "RTK Query endpoints for investor APIs, category/product filters, and JWT expiration check",
      "Chart-based dashboard UI using react-native-chart-kit and persisted auth state",
    ],
    techStack: [
      "Expo",
      "TypeScript",
      "RTK Query",
      "Redux Persist",
      "NativeWind",
      "Charts",
    ],
    image: investorImg,
    featured: false,
    caseStudy: false,
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=com.segasoftbd.ims&pcampaignid=web_share",
    appStoreUrl: "",
  },
  {
    id: 15,
    name: "Clinical Management of Rape Module",
    category: "Healthcare",
    role: "React Native Developer",
    description:
      "Bilingual Bangla/English healthcare learning app for CMR training content, videos, audio, quizzes, progress tracking, profile management, certificates, and reference materials.",
    impact:
      "Android-focused training application for healthcare providers learning structured clinical-care content.",
    highlights: [
      "Bangla and English course paths with introduction, eight training steps, quizzes, and progress unlocks",
      "YouTube/WebView lessons, static images, tables, modal explanations, reference PDFs, and certificate preview",
      "AsyncStorage login state, token-based backend operations, Expo Router, and EAS build flow",
    ],
    techStack: [
      "Expo",
      "JavaScript",
      "Expo Router",
      "AsyncStorage",
      "WebView",
      "PDF",
    ],
    image: cmrImg,
    featured: true,
    caseStudy: false,
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=com.theicthub.Navigation&pcampaignid=web_share",
    appStoreUrl: "",
  },
  {
    id: 16,
    name: "Resilience Manitoba",
    category: "Education",
    role: "Mobile App Developer",
    description:
      "Symbol-awareness education app for browsing symbol data, category filtering, image scan/upload matching, local bookmarks, symbol submission, and PDF-based resources.",
    impact:
      "Mobile-first educational tool connected to a symbol API and similarity-search backend.",
    highlights: [
      "Search and category filter symbol database with detail modals and educational context",
      "Scan/upload image flow for server-side symbol matching and local bookmark persistence",
      "News/resources/memes PDF access, theme support, and backend API integration",
    ],
    techStack: [
      "Expo",
      "React Native",
      "TypeScript",
      "REST API",
      "Image Upload",
      "Local Storage",
    ],
    image: symbolImg,
    featured: false,
    caseStudy: true,
    playStoreUrl: "",
    appStoreUrl: "",
  },
  {
    id: 17,
    name: "Resilience Manitoba FastAPI Backend",
    category: "Web/Backend",
    role: "Backend Developer",
    description:
      "Python API service for symbol metadata, categories, image uploads, CLIP embedding generation, and image-similarity search using PostgreSQL pgvector.",
    impact:
      "Backend foundation for symbol recognition/search workflows used by a mobile app and admin frontend.",
    highlights: [
      "Async FastAPI routes for categories, symbols, image upload, health checks, and search",
      "OpenCLIP ViT-B-32 image embeddings, perceptual hashing, and pgvector similarity query",
      "SQLAlchemy async ORM, Alembic migrations, Docker setup, and PostgreSQL vector storage",
    ],
    techStack: [
      "FastAPI",
      "Python",
      "PostgreSQL",
      "pgvector",
      "SQLAlchemy",
      "OpenCLIP",
    ],
    image: symbolImg,
    featured: true,
    caseStudy: true,
    playStoreUrl: "",
    appStoreUrl: "",
  },
  {
    id: 18,
    name: "Resilience Manitoba Admin",
    category: "Web/Backend",
    role: "Frontend Developer",
    description:
      "React/Vite admin dashboard for protected admin/reviewer access, symbol CRUD, category CRUD, image upload, similar-image search, pending review, documents, account, and theme support.",
    impact:
      "Administrative frontend designed to manage the symbol library and review submitted content.",
    highlights: [
      "Protected routes, role checks, token refresh interceptor, and auth failure handling",
      "Symbol/category CRUD, image upload, similarity search result display, and pending-review screens",
      "Document upload/download/delete flows using React Query, Axios, React Hook Form, Zod, Radix/shadcn, and Tailwind",
    ],
    techStack: [
      "React",
      "TypeScript",
      "Vite",
      "TanStack Query",
      "Axios",
      "Tailwind",
    ],
    image: symbolImg,
    featured: false,
    caseStudy: false,
    playStoreUrl: "",
    appStoreUrl: "",
  },
  {
    id: 19,
    name: "FastAPI E-commerce Backend",
    category: "Web/Backend",
    role: "Backend Learning Project",
    description:
      "A-to-Z FastAPI backend project covering product, customer, order, payment, voucher, auth, background tasks, testing, Docker, PostgreSQL, Gunicorn, Nginx, and deployment concepts.",
    impact:
      "Structured backend learning project with a test target of 44 passed tests and production-style architecture practice.",
    highlights: [
      "CRUD APIs with filtering, sorting, pagination, validation, JWT auth, and service-repository architecture",
      "Order stock validation, transaction behavior, payment methods, voucher logic, and background-task simulation",
      "Pytest coverage, Alembic migrations, Docker Compose, PostgreSQL, Gunicorn/Uvicorn, Nginx, CORS, and logging",
    ],
    techStack: [
      "FastAPI",
      "Python",
      "SQLModel",
      "PostgreSQL",
      "pytest",
      "Docker",
    ],
    image: fastApiImg,
    featured: false,
    caseStudy: false,
    playStoreUrl: "",
    appStoreUrl: "",
  },
];

export const caseStudies = [
  {
    id: 1,
    title: "Marketplace & Commerce Architecture",
    project: "SaRa / Fresco / Ab Mini Mercado",
    problem:
      "Customer-facing apps needed complete shopping journeys: product discovery, category browsing, cart, wishlist, checkout, coupons, payment/order flows, profile, and order history.",
    solution:
      "Built API-driven React Native/Expo applications with Redux Toolkit, RTK Query, persistent auth/cart state, cached home data, payment WebView handling, and store-ready navigation structures.",
    result:
      "Delivered multiple published commerce apps with real customer shopping workflows on Android and iOS.",
    stack: [
      "React Native",
      "Expo",
      "TypeScript",
      "RTK Query",
      "Redux Persist",
      "Payment WebView",
    ],
  },
  {
    id: 2,
    title: "Offline-First POS & Invoice Systems",
    project: "Invoice / Sale / Shop POS",
    problem:
      "Retail users needed fast billing, invoice creation, local sale history, barcode scanning, customer/product lookup, and printer output even when network conditions are not ideal.",
    solution:
      "Implemented SQLite-backed invoice/sale data, local customer/product synchronization, barcode/camera flows, split-payment handling, PDF/HTML output, and thermal printer integration.",
    result:
      "Created practical POS and invoice workflows for shop billing, offline sale entry, printable receipts, and customer-level invoice management.",
    stack: [
      "Expo SQLite",
      "MMKV",
      "Zustand",
      "Camera",
      "Thermal Printer",
      "PDF",
    ],
  },
  {
    id: 3,
    title: "Enterprise Field Operations",
    project: "ERP / HRM / CRM / Delivery / Transport",
    problem:
      "Field employees and admins needed mobile access to attendance, location tracking, sales visits, customer/order workflows, delivery completion, transport requisitions, approvals, and reports.",
    solution:
      "Built modular apps with stack/drawer/bottom-tab navigation, dynamic company/API selection, RTK Query service layers, persisted sessions, GPS/camera capture, and form-heavy business screens.",
    result:
      "Delivered mobile-first enterprise tools across sales-force, HR, CRM, logistics, transport, and delivery operations.",
    stack: [
      "Expo",
      "React Native CLI",
      "RTK Query",
      "Expo Location",
      "Camera",
      "Maps",
    ],
  },
  {
    id: 4,
    title: "Push Notification Persistence",
    project: "Snowtex Notify",
    problem:
      "Employees needed a reliable way to receive ERP notifications, keep message history locally, view unread counts by module, and preserve notifications across foreground/background/quit states.",
    solution:
      "Combined Firebase Cloud Messaging, Notifee local notifications, op-sqlite message persistence, module-wise home lists, time-window sync checkpoints, and badge count synchronization.",
    result:
      "Built a dedicated employee notification app that converts push messages into structured, searchable, module-based local history.",
    stack: [
      "FCM",
      "Notifee",
      "op-sqlite",
      "Redux Persist",
      "RTK Query",
      "MMKV",
    ],
  },
  {
    id: 5,
    title: "Symbol Search & Vector Backend",
    project: "Resilience Manitoba / Symbol Library",
    problem:
      "The product needed mobile symbol education, image upload/scan flows, admin symbol management, and server-side similar-image search.",
    solution:
      "Connected the mobile app and React admin frontend to a FastAPI backend using PostgreSQL pgvector, OpenCLIP embeddings, image metadata, category/symbol CRUD, and similarity search APIs.",
    result:
      "Added full-stack and AI-adjacent portfolio depth beyond mobile UI by showing backend, admin, vector search, and image-processing architecture.",
    stack: [
      "React Native",
      "React/Vite",
      "FastAPI",
      "PostgreSQL",
      "pgvector",
      "OpenCLIP",
    ],
  },
];

export const education = [
  {
    id: 1,
    degree: "BSc in Software Engineering",
    institution: "Daffodil International University",
    period: "2020 – 2024",
    description:
      "Academic foundation in software development, mobile applications, database systems, algorithms, and software engineering practices.",
  },
  {
    id: 2,
    degree: "Professional Focus",
    institution: "React Native & Mobile Engineering",
    period: "2024 – Present",
    description:
      "Continuous professional work in cross-platform architecture, API-first mobile systems, offline persistence, device integrations, and app release workflows.",
  },
  {
    id: 3,
    degree: "Advanced Mobile Roadmap",
    institution: "Swift, Kotlin & Native Modules",
    period: "Ongoing",
    description:
      "Expanding beyond React Native into native Android/iOS integration, custom modules, performance-sensitive features, and platform-specific capabilities.",
  },
];

export const leadership = [
  {
    id: 1,
    title: "General Secretary",
    organization: "Software Engineering Club, DIU",
    period: "2022 – 2023",
    description:
      "Led club activities, coordinated student teams, and organized technical events for the software engineering community.",
  },
  {
    id: 2,
    title: "Champion – Project Showcasing",
    organization: "University Competition",
    period: "Dec 2022",
    description:
      "Won first place in a project presentation competition by presenting a practical software solution with clear technical execution.",
  },
  {
    id: 3,
    title: "Volunteer Leader",
    organization: "Community & University Events",
    period: "2021 – 2023",
    description:
      "Organized and led volunteering activities, improving collaboration, communication, and execution skills beyond software development.",
  },
];

export const projectCategories = [
  "All",
  "E-commerce",
  "POS",
  "ERP",
  "CRM",
  "HRM",
  "Logistics",
  "Notifications",
  "Healthcare",
  "Finance",
  "Education",
  "Web/Backend",
];
