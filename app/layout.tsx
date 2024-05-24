import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

const description = "Social Sharer is a free platform to implement the share to social media function to your web-app"

const title = "Social Sharer"
const url = process.env.PUBLIC_URL

export const metadata: Metadata = {
  metadataBase: new URL(url || "https://bypanda.dev"),
  title: {
    default: title,
    template: '%s | Social Sharer'
  },
  icons: {
    icon: "/favicon.ico",
  },
  description: description,
  openGraph: {
    type: "website",
    url: url,
    title: {
      default: title,
      template: '%s | Social Sharer'
    },
    description: description,
    siteName: "Social Sharer",
  },
  twitter: {
    card: "summary_large_image",
    title: title,
    description: description,
  },
  authors: [{ name: "byPandaDev", url: "https://bypanda.dev" }],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="container">
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
