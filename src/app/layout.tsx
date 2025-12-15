import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Load the Inter font with the 'latin' subset
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "NexusFlow - Multi-Agent Orchestration Platform",
  description: "Enterprise grade multi-agent orchestration platform for seamless automation across your business systems.",
  viewport: 'width=device-width, initial-scale=1',
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: 'NexusFlow - Multi-Agent Orchestration Platform',
    description: 'Enterprise grade multi-agent orchestration platform for seamless automation across your business systems.',
    type: 'website',
    locale: 'en_US',
    url: 'https://nexusflow.ai',
    siteName: 'NexusFlow',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NexusFlow - Multi-Agent Orchestration Platform',
    description: 'Enterprise grade multi-agent orchestration platform for seamless automation across your business systems.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth light">
      <body className={`${inter.className} bg-white text-gray-900 antialiased`}>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow bg-white">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
