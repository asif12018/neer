import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Neer Natural Care | Organic Beauty",
  description: "Pure nature, pure you. Crafted with traditional ingredients for strong, healthy, beautiful hair.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        {children}
        <Footer />
        <Toaster position="bottom-center" />
      </body>
    </html>
  );
}
