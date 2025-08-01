import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { PageHeader } from "@/components/page-header"
import { AboutSection } from "@/components/about-section"
import { TeamSection } from "@/components/team-section"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about the V.E.S team, our mission, vision, and values in developing advanced Roblox executors.",
}

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <div className="absolute top-0 left-0 right-0 h-[40vh] bg-gradient-to-b from-purple-900/20 to-transparent z-0"></div>
      <Navbar />
      <main className="flex-1">
        <PageHeader title="About Us" description="The story behind Chronos" />
        <AboutSection />
        <TeamSection />
      </main>
      <Footer />
    </div>
  )
}
