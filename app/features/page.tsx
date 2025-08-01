import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { FeaturesSection } from "@/components/features-section"
import { PageHeader } from "@/components/page-header"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Features",
  description: "Discover the powerful features of Vanta Execution Software (V.E.S) for Roblox scripting.",
}

export default function FeaturesPage() {
  return (
    <div className="flex min-h-screen flex-col bg-gray-900 text-white">
      <div className="absolute top-0 left-0 right-0 h-[40vh] bg-gradient-to-b from-slate-800/30 to-transparent z-0"></div>
      <Navbar />
      <main className="flex-1">
        <PageHeader title="Features" description="Discover what makes V.E.S the most advanced execution software" />
        <FeaturesSection />
      </main>
      <Footer />
    </div>
  )
}
