import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { PageHeader } from "@/components/page-header"
import { UnreleasedContent } from "@/components/unreleased-content"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Coming Soon",
  description: "This section of Vanta Execution Software (V.E.S) is currently under development and not yet released.",
}

export default function Error3Page() {
  return (
    <div className="flex min-h-screen flex-col bg-gray-900 text-white">
      <div className="absolute top-0 left-0 right-0 h-[40vh] bg-gradient-to-b from-slate-800/30 to-transparent z-0"></div>
      <Navbar />
      <main className="flex-1">
        <PageHeader title="Coming Soon" description="This content is not yet available" />
        <UnreleasedContent />
      </main>
      <Footer />
    </div>
  )
}
