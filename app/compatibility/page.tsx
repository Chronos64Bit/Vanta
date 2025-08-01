import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CompatibilitySection } from "@/components/compatibility-section"
import { PageHeader } from "@/components/page-header"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Compatibility",
  description: "Check system requirements and compatibility information for V.E.S on Windows 10 and 11.",
}

export default function CompatibilityPage() {
  return (
    <div className="flex min-h-screen flex-col bg-gray-900 text-white">
      <div className="absolute top-0 left-0 right-0 h-[40vh] bg-gradient-to-b from-slate-800/30 to-transparent z-0"></div>
      <Navbar />
      <main className="flex-1">
        <PageHeader title="Compatibility" description="V.E.S is optimized for modern Windows systems" />
        <CompatibilitySection />
      </main>
      <Footer />
    </div>
  )
}
