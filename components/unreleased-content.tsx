"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { AlertTriangle } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function UnreleasedContent() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 flex items-center justify-center min-h-[60vh]">
      <div className="container px-4 md:px-6 max-w-2xl mx-auto text-center" ref={ref}>
        <motion.div
          className="bg-gray-800/50 border border-gray-700/50 rounded-xl p-8 space-y-6 relative overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          {/* Animated background elements */}
          <motion.div
            className="absolute inset-0 opacity-5"
            animate={{
              backgroundPosition: ["0% 0%", "100% 100%"],
            }}
            transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
            style={{
              backgroundImage: "radial-gradient(circle, currentColor 1px, transparent 1px)",
              backgroundSize: "20px 20px",
            }}
          />

          <motion.div
            className="flex flex-col items-center justify-center space-y-4 relative z-10"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <AlertTriangle className="h-16 w-16 text-amber-500" />
            <h2 className="text-3xl md:text-4xl font-bold text-white">Content Not Yet Released</h2>
            <p className="text-lg text-gray-400">
              This section of the website is currently under development and not yet available to the public.
            </p>
            <p className="text-gray-500 text-sm">
              Please check back later for updates, or join our Discord for announcements.
            </p>
          </motion.div>

          <motion.div
            className="flex justify-center gap-4 pt-4 relative z-10"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <Button asChild className="bg-slate-700 hover:bg-slate-600 text-white">
              <Link href="/">Go to Homepage</Link>
            </Button>
            <Button
              variant="outline"
              asChild
              className="border-purple-500/50 text-purple-400 hover:bg-purple-900/20 bg-transparent"
            >
              <Link href="/">Join Discord</Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
