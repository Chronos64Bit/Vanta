"use client"

import { motion } from "framer-motion"
import { usePathname } from "next/navigation"

interface PageHeaderProps {
  title: string
  description: string
}

export function PageHeader({ title, description }: PageHeaderProps) {
  const pathname = usePathname()
  const displayTitle = pathname === "/submit-testimonial" ? "Feedback" : title

  return (
    <section className="w-full py-20 md:py-32 relative z-10">
      <div className="container px-4 md:px-6">
        <motion.div
          className="flex flex-col items-center justify-center space-y-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="space-y-2">
            <motion.h1
              className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              {displayTitle}
            </motion.h1>
            <motion.p
              className="text-xl text-gray-400 max-w-2xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              {description}
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
