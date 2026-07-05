import type { Metadata } from "next";
import { Toaster } from "@/components/ui/toaster";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "MD Mehedi Hasan | Mobile App Developer | Software Engineer",
    template: "%s | MD Mehedi Hasan",
  },
  description:
    "Mobile app developer and software engineer building Android and iOS business apps for e-commerce, POS, ERP, CRM, HRM, logistics, notifications, finance, and backend workflows.",
  applicationName: "MD Mehedi Hasan Portfolio",
  authors: [
    {
      name: "MD Mehedi Hasan",
      url: "https://www.linkedin.com/in/mehedi-hasan-7222122b2/",
    },
  ],
  creator: "MD Mehedi Hasan",
  publisher: "MD Mehedi Hasan",
  keywords: [
    "MD Mehedi Hasan",
    "React Native Developer",
    "Mobile App Developer",
    "Software Engineer",
    "Expo Developer",
    "TypeScript",
    "Redux Toolkit",
    "RTK Query",
    "POS App",
    "ERP App",
    "CRM App",
    "Dhaka Bangladesh",
  ],
  openGraph: {
    title: "MD Mehedi Hasan | Mobile App Developer | Software Engineer",
    description:
      "Portfolio of production Android and iOS business apps across commerce, POS, ERP, CRM, HRM, logistics, notifications, finance, and backend workflows.",
    siteName: "MD Mehedi Hasan Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "MD Mehedi Hasan | Mobile App Developer | Software Engineer",
    description:
      "Mobile app developer and software engineer building Android and iOS business apps.",
  },
  robots: {
    index: true,
    follow: true,
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
