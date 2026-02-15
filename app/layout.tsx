import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sai Bindhu Javvaji - Software Developer Portfolio",
  description: "Computer Science graduate with strong experience in full-stack and backend software development, including building production-grade APIs, AWS serverless services, and scalable web applications.",
  keywords: ["Software Developer", "Computer Science", "React", "Python", "AWS", "Machine Learning", "Full Stack"],
  authors: [{ name: "Sai Bindhu Javvaji" }],
  creator: "Sai Bindhu Javvaji",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://saibindhu-portfolio.vercel.app",
    title: "Sai Bindhu Javvaji - Software Developer Portfolio",
    description: "Computer Science graduate with strong experience in full-stack and backend software development.",
    siteName: "Sai Bindhu Javvaji Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sai Bindhu Javvaji - Software Developer Portfolio",
    description: "Computer Science graduate with strong experience in full-stack and backend software development.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}