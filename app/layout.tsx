import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Provider from "@/providers/Provider";
import { ClerkProvider } from "@clerk/nextjs";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Home Away",
  description:
    "Home Away from Home - A Next.js Application with Tailwind CSS and Shadcn UI Components and Typescript Build with pation and too much coffee and love for coding and learning new things and sharing knowledge with the world and making the world a better place to live in. ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        
      >
       
       <Provider>
         <main className="container py-8">
           <Navbar />
          {children}
        </main>
       </Provider>
      </body>
    </html>
    </ClerkProvider>
  );
}
