"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { CalendarDays } from "lucide-react"

export function AnnouncementsSection() {
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

  // Roblox executor announcements
  const announcements = [
    {
      title: "Chronos Paid Executor v0.0.4 Released",
      date: "April 3, 2025",
      description: "Our newest update brings in ChronosenAI. It has the latest info needed to work!",
      content: "The new version has the latest AI with all the necessary data! Get it now from our Downloads page.",
    },
    {
      title: "Chronos payment",
      date: "March 16, 2025",
      description: "Chronos has moved payment types!",
      content:
        "We had a meeting and thought that this would make payments easer for not only for us but you as the user!",
    },
    {
      title: "API Documentation Updated",
      date: "February 22, 2025",
      description: "We've updated our API documentation with new examples and integration guides.",
      content:
        "Developers can now access our comprehensive API documentation for C#. Check out the new developer portal for more information.",
    },
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6" ref={ref}>
        <motion.div
          className="mx-auto max-w-4xl space-y-8"
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
        >
          {announcements.map((announcement, index) => (
            <motion.div key={index} variants={item}>
              <Card className="bg-black border border-purple-900/50 overflow-hidden">
                <CardHeader>
                  <div className="flex items-center text-gray-400 mb-2">
                    <CalendarDays className="h-4 w-4 mr-2" />
                    <span className="text-sm">{announcement.date}</span>
                  </div>
                  <CardTitle className="text-xl text-white">{announcement.title}</CardTitle>
                  <CardDescription className="text-gray-400">{announcement.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">{announcement.content}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
