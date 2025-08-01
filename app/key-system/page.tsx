import { redirect } from "next/navigation"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Key System",
  description: "Learn how to obtain a key for Vanta Execution Software (V.E.S).",
}

export default function KeySystemPage() {
  // Redirect to the /error3 page
  redirect("/error3")

  // The component below will not be rendered due to the redirect
  // return (
  //   <div className="flex min-h-screen flex-col bg-gray-900 text-white">
  //     <div className="absolute top-0 left-0 right-0 h-[40vh] bg-gradient-to-b from-slate-800/30 to-transparent z-0"></div>
  //     <Navbar />
  //     <main className="flex-1">
  //       <PageHeader title="Key System" description="Access V.E.S through our secure key system" />
  //       <KeySystemSection />
  //     </main>
  //   <Footer />
  //   </div>
  // )
}
