import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { PageHeader } from "@/components/page-header"
import { ServicesSection } from "@/components/services-section"
import { ContactCta } from "@/components/contact-cta"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Executor Features",
  description:
    "Explore the powerful features of V.E.S, including script execution, anti-detection, and API integration.",
}

export default function ServicesPage() {
  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <div className="absolute top-0 left-0 right-0 h-[40vh] bg-gradient-to-b from-purple-900/20 to-transparent z-0"></div>
      <Navbar />
      <main className="flex-1">
        <PageHeader title="Security Services" description="Advanced protection for modern threats" />
        <ServicesSection />
        <ContactCta />
      </main>
      <Footer />
    </div>
  )
}
