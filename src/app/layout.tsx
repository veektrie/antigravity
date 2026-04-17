import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import MobileBottomNav from "@/components/MobileBottomNav";

const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "700"] });

export const metadata: Metadata = {
  title: "Eben Logistics Ltd | Fast. Reliable. Professional Service",
  description: "Next-generation logistics infrastructure. Reliable, responsive, and truly professional delivery services across the UK.",
  icons: {
    icon: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" rx="20" fill="%231e2b4d"/><text x="50%" y="54%" font-family="system-ui, sans-serif" font-size="60" font-weight="bold" fill="%23ea580c" text-anchor="middle">E</text></svg>',
    apple: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" fill="%231e2b4d"/><text x="50%" y="54%" font-family="system-ui, sans-serif" font-size="60" font-weight="bold" fill="%23ea580c" text-anchor="middle">E</text></svg>',
  },
  openGraph: {
    title: "Eben Logistics Ltd | Premium UK Logistics",
    description: "Every delivery matters. Reliable, responsive, and truly professional delivery services operating nationwide.",
    url: "https://ebenlogistics.co.uk",
    siteName: "Eben Logistics",
    images: [
      {
        url: "https://ebenlogistics.co.uk/hero-truck.jpg", // We'll assume the URL will be this for production, but Next.js OG falls back to absolute path if not provided
        width: 1200,
        height: 630,
        alt: "Eben Logistics Fleet",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Eben Logistics Ltd",
    description: "Every delivery matters. Reliable, responsive, and truly professional delivery services.",
    images: ["https://ebenlogistics.co.uk/hero-truck.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`h-full antialiased ${inter.className}`}>
      <body className="min-h-full flex flex-col bg-background text-foreground selection:bg-accent selection:text-background relative">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
        <MobileBottomNav />
      </body>
    </html>
  );
}
