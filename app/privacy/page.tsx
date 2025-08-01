import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { PageHeader } from "@/components/page-header"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Our commitment to protecting your privacy at Vanta Execution Software (V.E.S).",
}

export default function PrivacyPage() {
  return (
    <div className="flex min-h-screen flex-col bg-gray-900 text-white">
      <div className="absolute top-0 left-0 right-0 h-[40vh] bg-gradient-to-b from-slate-800/30 to-transparent z-0"></div>
      <Navbar />
      <main className="flex-1">
        <PageHeader title="Privacy Policy" description="Your privacy is important to us" />
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 max-w-3xl mx-auto space-y-8">
            <p className="text-gray-400">
              At Vanta Execution Software (V.E.S), your privacy is important to us. This Privacy Policy explains how we
              get, use, and keep your data safe.
            </p>

            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-white">1. Information We Collect</h2>
              <ul className="list-disc list-inside text-gray-400 space-y-2">
                <li>Email addresses for accounts (if needed)</li>
                <li>Data about how you use it, like what you click and error logs</li>
                <li>Optional feedback and messages from contact forms</li>
              </ul>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-white">2. How We Use Your Information</h2>
              <p className="text-gray-400">We use the information we collect to:</p>
              <ul className="list-disc list-inside text-gray-400 space-y-2">
                <li>Improve V.E.S functionality and stability</li>
                <li>Respond to user support requests</li>
                <li>Communicate critical updates (if you’ve opted in)</li>
              </ul>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-white">3. Data Storage and Security</h2>
              <p className="text-gray-400">
                We take reasonable precautions to protect your data. All data saved is coded, and only approved
                developers can get to it.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-white">4. Third-Party Services</h2>
              <p className="text-gray-400">
                V.E.S may use third-party services (e.g., analytics or hosting providers). These services have their own
                privacy rules and are picked for safety and reliability.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-white">5. Cookies</h2>
              <p className="text-gray-400">
                V.E.S might use basic cookies to remember your visits or choices. We don't use tracking cookies for ads.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-white">6. Your Rights</h2>
              <p className="text-gray-400">
                You may request to view, update, or delete your data at any time by contacting us. We follow all needed
                data protection laws, like GDPR.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-white">7. Changes to This Policy</h2>
              <p className="text-gray-400">
                We may update this Privacy Policy as needed. If you keep using V.E.S after changes, it means you agree
                to the new rules.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-white">8. Contact Us</h2>
              <p className="text-gray-400">
                For privacy-related concerns, please email:{" "}
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
