"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Code, Wifi } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export function ServicesPreview() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section id="services" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6" ref={ref}>
        <motion.div
          className="flex flex-col items-center justify-center space-y-4 text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-white">Hacking Tools & Services</h2>
          <p className="text-xl text-gray-400">Professional-grade offensive security solutions</p>
        </motion.div>

        <motion.div
          className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2"
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
        >
          <motion.div variants={item} className="group">
            <div className="relative overflow-hidden rounded-xl border border-purple-900/50 bg-black p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <Code className="h-12 w-12 mb-4 text-purple-500" />
              <h3 className="text-2xl font-bold mb-2 text-white">Security Testing</h3>
              <p className="text-gray-400 mb-4">Custom security assessments for penetration testing.</p>
            </div>
          </motion.div>

          <motion.div variants={item} className="group">
            <div className="relative overflow-hidden rounded-xl border border-purple-900/50 bg-black p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <Wifi className="h-12 w-12 mb-4 text-purple-500" />
              <h3 className="text-2xl font-bold mb-2 text-white">Network Infiltration</h3>
              <p className="text-gray-400 mb-4">Advanced tools for network access and data extraction.</p>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="flex justify-center mt-10"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Button size="lg" asChild>
            <Link href="/services">All Tools</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
