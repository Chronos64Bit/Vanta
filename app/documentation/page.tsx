import DocumentationClientPage from "./DocumentationClientPage"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Documentation",
  description: "Comprehensive guides and API references for Vanta Execution Software (V.E.S) and its features.",
}

export default function DocumentationPage() {
  return <DocumentationClientPage />
}
