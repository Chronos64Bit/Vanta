"use client"

import { Code, Terminal, Shield, Zap, Cpu, Lock, Layers, Settings } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export function ServicesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

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

  const services = [
    {
      icon: <Terminal className="h-12 w-12 mb-4 text-purple-500" />,
      title: "Script Execution",
      description: "Run any Lua script with a good success rate and without crashes.",
    },
    {
      icon: <Shield className="h-12 w-12 mb-4 text-purple-500" />,
      title: "Anti-Detection",
      description: "Smart ways to get around being found and blocked.",
    },
    {
      icon: <Code className="h-12 w-12 mb-4 text-purple-500" />,
      title: "Developer API",
      description: "Connect our executor with your own programs.",
    },
    {
      icon: <Zap className="h-12 w-12 mb-4 text-purple-500" />,
      title: "Fast Injection",
      description: "Quick start-up and hook-in with almost no wait.",
    },
    {
      icon: <Cpu className="h-12 w-12 mb-4 text-purple-500" />,
      title: "Low Resource Usage",
      description: "Runs well using very little computer power, so your game stays fast.",
    },
    {
      icon: <Lock className="h-12 w-12 mb-4 text-purple-500" />,
      title: "Secure Updates",
      description: "Regular updates to keep working with Roblox.",
    },
    {
      icon: <Layers className="h-12 w-12 mb-4 text-purple-500" />,
      title: "Script Library",
      description: "Get access to more and more ready-made scripts.",
    },
    {
      icon: <Settings className="h-12 w-12 mb-4 text-purple-500" />,
      title: "Customization",
      description: "Make your executor your own with themes and settings.",
    },
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6" ref={ref}>
        <motion.div
          className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={item} className="group">
              <div className="relative overflow-hidden rounded-xl border border-purple-900/50 bg-black p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                {service.icon}
                <h3 className="text-2xl font-bold mb-2 text-white">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
