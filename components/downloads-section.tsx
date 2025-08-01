"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Download, Code, Terminal, Cpu } from "lucide-react"

export function DownloadsSection() {
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

  // Roblox executor and API downloads
  const downloads = [
    {
      title: "Chronos Paid Executor",
      description: "Better version of our executor with special features and faster updates, now with ChronosenAI!",
      icon: <Terminal className="h-12 w-12 mb-4 text-purple-500" />,
      version: "v0.0.4",
      size: "401.3 MB",
      comingSoon: true,
    },
    {
      title: "Chronos Executor API",
      description: "Developer API for integrating with our Roblox executor. Build your own tools and extensions.",
      icon: <Code className="h-12 w-12 mb-4 text-purple-500" />,
      version: "v0.3.9",
      comingSoon: true,
    },
    {
      title: "ChronosenAI",
      description:
        "Advanced AI assistant for script generation and optimization for Roblox development, NOT PUBLIC YET!",
      icon: <Cpu className="h-12 w-12 mb-4 text-purple-500" />,
      version: "v0.1",
      comingSoon: true,
    },
    {
      title: "Chronos Free Executor",
      description:
        "Powerful Roblox script executor with great features and a high success rate, but fewer features than the paid one.",
      icon: <Terminal className="h-12 w-12 mb-4 text-purple-500" />,
      version: "Coming Soon",
      comingSoon: true,
    },
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6" ref={ref}>
        <motion.div
          className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-2"
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
        >
          {downloads.map((download, index) => (
            <motion.div key={index} variants={item} className="group">
              <Card className="bg-black border border-purple-900/50 overflow-hidden h-full">
                <CardHeader>
                  <div className="flex items-center justify-center">{download.icon}</div>
                  <CardTitle className="text-xl text-center text-white">{download.title}</CardTitle>
                  <CardDescription className="text-center text-gray-400">{download.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm text-gray-400">
                    <div className="flex justify-between">
                      <span>Version:</span>
                      <span className="text-white">{download.version}</span>
                    </div>
                    {download.size && (
                      <div className="flex justify-between">
                        <span>Size:</span>
                        <span className="text-white">{download.size}</span>
                      </div>
                    )}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button
                    className="w-full bg-purple-600 hover:bg-purple-700 text-white"
                    disabled={download.comingSoon}
                  >
                    {download.comingSoon ? (
                      "Coming Soon"
                    ) : (
                      <>
                        <Download className="mr-2 h-4 w-4" /> Download
                      </>
                    )}
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-12 text-center text-gray-400 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <p>
            All tools are provided for educational purposes only. Users are responsible for complying with Roblox's
            Terms of Service.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
