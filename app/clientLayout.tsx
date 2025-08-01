"use client"
import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { usePathname } from "next/navigation" // Import usePathname
import { useEffect } from "react" // Import useEffect
import { CookieConsent } from "@/components/cookie-consent" // Import CookieConsent

const inter = Inter({ subsets: ["latin"] })

export default function ClientRootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname() // Get the current pathname

  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo(0, 0)
  }, [pathname]) // Re-run effect when pathname changes

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-gray-900`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          {children}
          <CookieConsent /> {/* Add CookieConsent here */}
        </ThemeProvider>
      </body>
    </html>
  )
}
