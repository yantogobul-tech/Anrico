import type { Metadata } from "next";
import { Poppins, Montserrat } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "ANDRICO - Professional Coffee Shop & Development Projects",
  description: "ANDRICO is a leading company in premium beverage services and development projects, offering modern coffee shop concepts and comprehensive housing development solutions.",
  keywords: ["ANDRICO", "Coffee Shop", "Beverage", "Housing Development", "Professional Services", "Premium Drinks"],
  authors: [{ name: "ANDRICO Team" }],
  icons: {
    icon: "/logo.svg",
  },
  openGraph: {
    title: "ANDRICO - Professional Coffee Shop & Development Projects",
    description: "Leading company in premium beverage services and development projects",
    url: "https://andrico.com",
    siteName: "ANDRICO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ANDRICO - Professional Coffee Shop & Development Projects",
    description: "Leading company in premium beverage services and development projects",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body
        className={`${poppins.variable} ${montserrat.variable} antialiased bg-background text-foreground font-poppins`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
