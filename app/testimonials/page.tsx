import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { PageHeader } from "@/components/page-header"
import { TestimonialsSection } from "@/components/testimonials-section"
import { ContactCta } from "@/components/contact-cta"
import { AnimatedGradient } from "@/components/animated-gradient"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "User Testimonials",
  description: "Hear what our users say about V.E.S - the leading Roblox executor.",
}

export default function TestimonialsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <AnimatedGradient />
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent z-0"></div>
      <Navbar />
      <main className="flex-1">
        <PageHeader title="Client Stories" description="Hear from our happy clients" />
        <TestimonialsSection />
        <ContactCta />
      </main>
      <Footer />
    </div>
  )
}
