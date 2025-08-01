import { redirect } from "next/navigation"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Pricing Plans",
  description: "Future pricing plans and premium tiers for Vanta Execution Software (V.E.S) will be announced soon.",
}

export default function PricingPage() {
  // Redirect to the /error3 page
  redirect("/error3")
}
