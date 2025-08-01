import type React from "react"
import ClientRootLayout from "./clientLayout"
import "./globals.css" // Import globals.css at the top of the file
import type { Metadata } from "next"

// Helper to ensure the URL has a protocol
const getAbsoluteUrl = (path = "") => {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.getves.xyz"
  const baseUrl = siteUrl.startsWith("http://") || siteUrl.startsWith("https://") ? siteUrl : `https://${siteUrl}`
  return new URL(path, baseUrl)
}

export const metadata: Metadata = {
  metadataBase: getAbsoluteUrl(), // Use the helper function
  title: {
    default: "V.E.S - Vanta Execution Software | Exact and Fast Roblox Executor",
    template: "%s - V.E.S",
  },
  description:
    "Vanta Execution Software (V.E.S) is the most advanced and reliable Roblox executor, offering lightning-fast script execution, advanced anti-detection, and a powerful API for developers. Get precise and secure performance for your Roblox scripting needs.",
  keywords: [
    "Roblox executor",
    "V.E.S",
    "Vanta Execution Software",
    "Roblox scripts",
    "script executor",
    "Roblox API",
    "anti-detection",
    "Byfron bypass",
    "Hyperion bypass",
    "game exploitation",
    "Lua executor",
    "Roblox tools",
    "free Roblox executor",
    "paid Roblox executor",
    "ChronosenAI",
  ],
  openGraph: {
    title: "V.E.S - Vanta Execution Software | Exact and Fast Roblox Executor",
    description:
      "Vanta Execution Software (V.E.S) is the most advanced and reliable Roblox executor, offering lightning-fast script execution, advanced anti-detection, and a powerful API for developers. Get precise and secure performance for your Roblox scripting needs.",
    url: getAbsoluteUrl(), // Use the helper function
    siteName: "V.E.S",
    images: [
      {
        url: "/images/placeholder-meme.webp", // Using the provided meme image
        width: 1200,
        height: 630,
        alt: "V.E.S - Vanta Execution Software",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "V.E.S - Vanta Execution Software | Exact and Fast Roblox Executor",
    description:
      "Vanta Execution Software (V.E.S) is the most advanced and reliable Roblox executor, offering lightning-fast script execution, advanced anti-detection, and a powerful API for developers. Get precise and secure performance for your Roblox scripting needs.",
    images: ["/images/placeholder-meme.webp"], // Using the provided meme image
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  // Add canonical URL
  alternates: {
    canonical: getAbsoluteUrl(), // Use the helper function
  },
    generator: 'v0.dev'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <ClientRootLayout>{children}</ClientRootLayout>
}
