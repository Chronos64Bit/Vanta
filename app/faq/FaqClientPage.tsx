"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { PageHeader } from "@/components/page-header"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export default function FaqClientPage() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const faqItems = [
    {
      question: "What is V.E.S?",
      answer:
        "V.E.S (Vanta Execution Software) is a powerful Roblox executor designed for powerful script running and game changes. It gives a solid and feature-packed place for developers and fans.",
    },
    {
      question: "How do I get a key for V.E.S?",
      answer:
        "V.E.S uses a key system to let you in. Keys are distributed through our official Discord server during specific release windows or through special events. Please join our Discord for more information on how to obtain a key.",
    },
    {
      question: "Is V.E.S free to use?",
      answer:
        "Yes, V.E.S is currently offered for free. However, access is managed via a key system to ensure stability and control user distribution. Future premium features or versions may be introduced.",
    },
    {
      question: "How do I install V.E.S?",
      answer:
        "You can download the latest version of V.E.S from our Downloads page. After downloading, run the installer and follow the on-screen instructions. Make sure to temporarily disable your antivirus if it interferes with the installation.",
    },
    {
      question: "Is V.E.S safe to use?",
      answer:
        "We care a lot about keeping our users safe and private. V.E.S is made with smart ways to avoid being found. However, users are responsible for complying with Roblox's Terms of Service. We recommend using V.E.S responsibly.",
    },
    {
      question: "What operating systems are supported?",
      answer:
        "V.E.S is primarily optimized for Windows 10 (64-bit) and Windows 11. For detailed compatibility requirements, please visit our Compatibility page.",
    },
    {
      question: "How often is V.E.S updated?",
      answer:
        "We send out updates often to make sure it works with Roblox, add new things, and fix any problems. You can find the latest announcements and update logs on our Announcements page and Discord server.",
    },
    {
      question: "I'm having an issue. How can I get support?",
      answer:
        "If you find any problems, check our Troubleshooting part in the Documentation (if we have it) or join our Discord server for help from our community and team.",
    },
  ]

  return (
    <div className="flex min-h-screen flex-col bg-gray-900 text-white">
      <div className="absolute top-0 left-0 right-0 h-[40vh] bg-gradient-to-b from-slate-800/30 to-transparent z-0"></div>
      <Navbar />
      <main className="flex-1">
        <PageHeader title="Frequently Asked Questions" description="Find answers to common questions about V.E.S" />
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 max-w-3xl mx-auto" ref={ref}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
            >
              <Accordion type="single" collapsible className="w-full space-y-4">
                {faqItems.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <AccordionItem value={`item-${index}`} className="border-b border-gray-700/50">
                      <AccordionTrigger className="text-lg font-semibold text-white hover:no-underline hover:text-purple-300 transition-colors">
                        {item.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-400 pt-2 pb-4">{item.answer}</AccordionContent>
                    </AccordionItem>
                  </motion.div>
                ))}
              </Accordion>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
