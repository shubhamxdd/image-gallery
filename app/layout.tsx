import Navbar from "@/components/Navbar";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Image Gallery",
  description: "Image Gallery built with Next.js and Tailwind CSS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="dark:bg-gray-700 bg-white">
        <div className="backdrop-blur-lg backdrop-filter top-0 sticky z-[99]">
          <Navbar />
        </div>
        <main className="max-w-6xl mx-auto">{children}</main>
      </body>
    </html>
  );
}
