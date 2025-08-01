"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Key, ExternalLink, CheckCircle, Terminal } from "lucide-react"

export function KeySystemSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const steps = [
    {
      title: "Visit Work.ink",
      description: "Click the 'Get Your Key' button below to be redirected to our key distribution partner, Work.ink.",
      icon: <ExternalLink className="h-6 w-6 text-blue-400" />,
    },
    {
      title: "Complete the Captcha",
      description: "Follow the instructions on Work.ink to complete the required captcha verification.",
      icon: <CheckCircle className="h-6 w-6 text-green-400" />,
    },
    {
      title: "Copy Your Key",
      description: "Once verified, your unique V.E.S key will be displayed. Copy it to your clipboard.",
      icon: <Key className="h-6 w-6 text-purple-400" />,
    },
    {
      title: "Paste into V.E.S",
      description: "Launch V.E.S and paste your key into the designated key input field to gain access.",
      icon: <Terminal className="h-6 w-6 text-yellow-400" />,
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6 max-w-4xl mx-auto" ref={ref}>
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-white mb-4">How to Get Your V.E.S Key</h2>
          <p className="text-lg text-gray-400">Follow these simple steps to gain access to Vanta Execution Software.</p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 text-center group hover:border-purple-500/50 transition-all duration-300"
            >
              <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                {step.title}
              </h3>
              <p className="text-gray-400 text-sm">{step.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white" asChild>
            {/* Placeholder link for work.ink - replace with actual URL */}
            <Link href="https://work.ink/your-key-link" target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-4 w-4" /> Get Your Key
            </Link>
          </Button>
        </motion.div>

        <motion.div
          className="mt-12 text-center text-gray-500 text-sm"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <p>Please ensure your ad-blocker is disabled on Work.ink to proceed with key retrieval.</p>
        </motion.div>
      </div>
    </section>
  )
}
