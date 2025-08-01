import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { PageHeader } from "@/components/page-header"
import { TestimonialForm } from "@/components/testimonial-form"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Submit Feedback",
  description: "Share your experience and provide feedback on Vanta Execution Software (V.E.S).",
}

export default function SubmitTestimonialPage() {
  return (
    <div className="flex min-h-screen flex-col bg-gray-900 text-white">
      <div className="absolute top-0 left-0 right-0 h-[40vh] bg-gradient-to-b from-slate-800/30 to-transparent z-0"></div>
      <Navbar />
      <main className="flex-1">
        <PageHeader title="Submit Testimonial" description="We'd love to hear your feedback!" />
        <TestimonialForm />
      </main>
      <Footer />
    </div>
  )
}
