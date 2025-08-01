"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6" ref={ref}>
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-12 items-center">
          <motion.div
            className="flex flex-col justify-center space-y-6"
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
          >
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-white">Our Story</h2>
              <p className="text-xl text-gray-400">From Roblox fans to executor makers.</p>
            </div>
            <div className="space-y-4">
              <p className="text-gray-400">
                We started as a small group of Roblox developers who wanted better ways to run scripts and test things.
              </p>
              <p className="text-gray-400">
                Today, we make one of the most solid Roblox executors, focusing on being steady, fast, and getting
                regular updates.
              </p>
            </div>
          </motion.div>
          <motion.div
            className="flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Image
              src="/images/executor-screenshot.png"
              alt="Chronos Executor"
              fill
              className="object-cover rounded-xl"
            />
          </motion.div>
        </div>

        <motion.div
          className="mt-20 grid gap-8 md:grid-cols-3"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="rounded-xl border border-purple-900/50 bg-black p-8">
            <h3 className="text-2xl font-bold mb-2 text-white">Mission</h3>
            <p className="text-gray-400">To make the most solid and strong Roblox executor you can get.</p>
          </div>
          <div className="rounded-xl border border-purple-900/50 bg-black p-8">
            <h3 className="text-2xl font-bold mb-2 text-white">Vision</h3>
            <p className="text-gray-400">
              A world where Roblox creators have the tools they need to make amazing things.
            </p>
          </div>
          <div className="rounded-xl border border-purple-900/50 bg-black p-8">
            <h3 className="text-2xl font-bold mb-2 text-white">Values</h3>
            <p className="text-gray-400">New ideas. Being solid. Community. Getting better all the time.</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
