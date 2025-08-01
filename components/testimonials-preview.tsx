"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export function TestimonialsPreview() {
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
    <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6" ref={ref}>
        <motion.div
          className="flex flex-col items-center justify-center space-y-4 text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-white">User Feedback</h2>
          <p className="text-xl text-gray-400">What users think about our Roblox executor</p>
        </motion.div>

        <motion.div
          className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2"
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
        >
          <motion.div variants={item}>
            <Card className="h-full bg-black border border-purple-900/50">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src="/images/hoxyton-character.png" alt="Hoxyton" />
                    <AvatarFallback>HX</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-lg font-semibold text-white">Hoxyton</p>
                    <p className="text-sm text-purple-400">Chronos User</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400">
                  "Chronos gave me better aim with chance on Forsaken. Best executor I've ever used!"
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={item}>
            <Card className="h-full bg-black border border-purple-900/50">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Avatar" />
                    <AvatarFallback>JS</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-lg font-semibold text-white">Jane Smith</p>
                    <p className="text-sm text-purple-400">Roblox Developer</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400">
                  "The API integration is flawless. I was able to build my own tools on top of Chronos in no time."
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>

        <motion.div
          className="flex justify-center mt-10"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white" asChild>
            <Link href="/testimonials">More Stories</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
