import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { DownloadSection } from "@/components/download-section"
import { PageHeader } from "@/components/page-header"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Download V.E.S",
  description: "Download Vanta Execution Software (V.E.S) for Roblox. Join the waitlist for early access.",
}

export default function DownloadPage() {
  return (
    <div className="flex min-h-screen flex-col bg-gray-900 text-white">
      <div className="absolute top-0 left-0 right-0 h-[40vh] bg-gradient-to-b from-slate-800/30 to-transparent z-0"></div>
      <Navbar />
      <main className="flex-1">
        <PageHeader title="Download" description="Get V.E.S - Developer access only" />
        <DownloadSection />
      </main>
      <Footer />
    </div>
  )
}
