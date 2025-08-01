import FaqClientPage from "./FaqClientPage"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Find answers to common questions about V.E.S - Vanta Execution Software, installation, safety, and support.",
}

export default function FaqPage() {
  return <FaqClientPage />
}
