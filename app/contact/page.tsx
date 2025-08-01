import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { PageHeader } from "@/components/page-header"
import { ContactForm } from "@/components/contact-form"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with the V.E.S support team for inquiries, support, or partnerships.",
}

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <div className="absolute top-0 left-0 right-0 h-[40vh] bg-gradient-to-b from-purple-900/20 to-transparent z-0"></div>
      <Navbar />
      <main className="flex-1">
        <PageHeader title="Contact" description="Get in touch with us" />
        <ContactForm />
      </main>
      <Footer />
    </div>
  )
}
