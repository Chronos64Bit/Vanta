import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { PageHeader } from "@/components/page-header"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Read the terms and conditions for using Vanta Execution Software (V.E.S).",
}

export default function TermsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-gray-900 text-white">
      <div className="absolute top-0 left-0 right-0 h-[40vh] bg-gradient-to-b from-slate-800/30 to-transparent z-0"></div>
      <Navbar />
      <main className="flex-1">
        <PageHeader title="Terms of Service" description="Please read our terms and conditions carefully" />
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 max-w-3xl mx-auto space-y-8">
            <p className="text-gray-400">
              Welcome to Vanta Execution Software (V.E.S). By using our software and services, you agree to follow these
              Terms of Service. If you don't agree, please don't use V.E.S.
            </p>

            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-white">1. Use of the Service</h2>
              <p className="text-gray-400">
                V.E.S is provided for lawful use only. You agree not to misuse, take apart, use unfairly, or try to harm
                the safety or systems of our software.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-white">2. Modifications to the Service</h2>
              <p className="text-gray-400">
                We can change, pause, or stop any part of V.E.S at any time, with or without telling you. If you keep
                using the service after changes, it means you agree to them.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-white">3. Termination</h2>
              <p className="text-gray-400">
                We may suspend or terminate your access to V.E.S at any time, with or without reason, especially if you
                violate these terms.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-white">4. Intellectual Property</h2>
              <p className="text-gray-400">
                All content, code, and branding associated with V.E.S are the intellectual property of its developers
                unless stated otherwise. You may not reuse or redistribute any part of the platform without permission.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-white">5. Disclaimer of Warranties</h2>
              <p className="text-gray-400">
                V.E.S is given 'as is' without any promises. We don't guarantee it will always be online, perform
                perfectly, or be without issues.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-white">6. Limitation of Liability</h2>
              <p className="text-gray-400">
                We will not be responsible for any indirect or other damages that happen from using or not being able to
                use V.E.S.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-white">7. Governing Law</h2>
              <p className="text-gray-400">These terms will follow the laws of the United Kingdom.</p>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-white">8. Contact</h2>
              <p className="text-gray-400">
                For questions or concerns, contact us at:{" "}
                <a href="mailto:hi@getvanta.xyz" className="text-purple-400 hover:underline">
                  hi@getvanta.xyz
                </a>
                .
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
