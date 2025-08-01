"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import Image from "next/image"
import { Eye, Maximize2, Play, Pause } from "lucide-react"

export function ScreenshotsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [isPlaying, setIsPlaying] = useState(true)

  const screenshots = [
    {
      title: "Main Interface",
      description: "Clean and intuitive main dashboard with real-time monitoring",
      category: "Dashboard",
    },
    {
      title: "Script Editor",
      description: "Advanced script editing with syntax highlighting and auto-completion",
      category: "Editor",
    },
    {
      title: "Execution Panel",
      description: "Real-time execution monitoring with detailed logs and performance metrics",
      category: "Execution",
    },
    {
      title: "Settings Panel",
      description: "Comprehensive configuration options with theme customization",
      category: "Settings",
    },
    {
      title: "Library Manager",
      description: "Organized script library with search and filtering capabilities",
      category: "Library",
    },
    {
      title: "Performance Monitor",
      description: "System resource monitoring and optimization tools",
      category: "Monitor",
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 50, rotateX: -15 },
    show: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.8,
        type: "spring",
        stiffness: 100,
      },
    },
  }

  return (
    <section className="w-full py-20 md:py-32 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-slate-800/10 to-slate-900/10"
          animate={{
            background: [
              "radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 80% 20%, rgba(120, 119, 198, 0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 40% 80%, rgba(120, 119, 198, 0.1) 0%, transparent 50%)",
            ],
          }}
          transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY }}
        />
      </div>

      <div className="container px-4 md:px-6 relative z-10" ref={ref}>
        {/* Enhanced Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center space-x-2 bg-slate-800/50 rounded-full px-4 py-2 mb-6"
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : { scale: 0 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          >
            <Eye className="w-4 h-4 text-blue-500" />
            <span className="text-sm text-gray-300">Visual Preview</span>
          </motion.div>

          <motion.h2
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Screenshots
          </motion.h2>

          <motion.p
            className="text-xl text-gray-400 max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            See V.E.S in action with our sleek, intuitive interface designed for professionals.
          </motion.p>

          {/* Slideshow Controls */}
          <motion.div
            className="flex items-center justify-center space-x-4"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.7 }}
          >
            <motion.button
              className="flex items-center space-x-2 bg-slate-700/50 hover:bg-slate-600/50 rounded-lg px-4 py-2 transition-colors"
              onClick={() => setIsPlaying(!isPlaying)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              <span className="text-sm">{isPlaying ? "Pause" : "Play"} Slideshow</span>
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Enhanced Screenshots Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
        >
          {screenshots.map((screenshot, index) => (
            <motion.div
              key={index}
              variants={item}
              className="group relative cursor-pointer"
              onClick={() => setSelectedImage(selectedImage === index ? null : index)}
              whileHover={{ y: -10 }}
            >
              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-4 transition-all duration-500 hover:bg-gray-800/70 hover:border-gray-600/50 overflow-hidden">
                {/* Category Badge */}
                <motion.div
                  className="absolute top-6 left-6 z-10 bg-slate-700/80 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-medium text-white"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                >
                  {screenshot.category}
                </motion.div>

                {/* Expand Icon */}
                <motion.div
                  className="absolute top-6 right-6 z-10 bg-slate-700/80 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity"
                  whileHover={{ scale: 1.1 }}
                >
                  <Maximize2 className="w-4 h-4 text-white" />
                </motion.div>

                {/* Image Container */}
                <motion.div
                  className="aspect-video bg-gradient-to-br from-gray-700 to-gray-800 rounded-lg flex items-center justify-center mb-4 overflow-hidden relative"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Animated Border */}
                  <motion.div
                    className="absolute inset-0 border-2 border-transparent rounded-lg"
                    animate={
                      selectedImage === index
                        ? {
                            borderColor: ["#64748b", "#94a3b8", "#64748b"],
                          }
                        : {}
                    }
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  />

                  <motion.div
                    className="relative w-full h-full"
                    animate={
                      isPlaying
                        ? {
                            scale: [1, 1.05, 1],
                          }
                        : {}
                    }
                    transition={{
                      duration: 4,
                      repeat: Number.POSITIVE_INFINITY,
                      delay: index * 0.5,
                    }}
                  >
                    <Image
                      src="/images/placeholder-meme.webp"
                      alt={screenshot.title}
                      fill
                      className="object-cover rounded-lg transition-transform duration-500 group-hover:scale-110"
                    />
                  </motion.div>

                  {/* Overlay Effect */}
                  <motion.div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Floating Elements */}
                  {selectedImage === index && (
                    <>
                      {[...Array(8)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute w-2 h-2 bg-slate-400 rounded-full"
                          initial={{
                            x: Math.random() * 300,
                            y: Math.random() * 200,
                            opacity: 0,
                            scale: 0,
                          }}
                          animate={{
                            y: [null, -100],
                            opacity: [0, 1, 0],
                            scale: [0, 1, 0],
                          }}
                          transition={{
                            duration: 3,
                            delay: i * 0.2,
                            repeat: Number.POSITIVE_INFINITY,
                          }}
                        />
                      ))}
                    </>
                  )}
                </motion.div>

                {/* Content */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  <motion.h3
                    className="text-lg font-semibold text-white mb-2 group-hover:text-slate-200 transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    {screenshot.title}
                  </motion.h3>
                  <motion.p
                    className="text-gray-400 text-sm leading-relaxed"
                    initial={{ opacity: 0.8 }}
                    whileHover={{ opacity: 1 }}
                  >
                    {screenshot.description}
                  </motion.p>
                </motion.div>

                {/* Progress Indicator */}
                <motion.div
                  className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-slate-500 to-slate-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 1, ease: "easeOut" }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Gallery Stats */}
        <motion.div
          className="flex justify-center items-center space-x-8 mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <div className="text-center">
            <motion.div
              className="text-2xl font-bold text-white"
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : { scale: 0 }}
              transition={{ delay: 1.5, type: "spring" }}
            >
              {screenshots.length}
            </motion.div>
            <div className="text-sm text-gray-400">Interface Views</div>
          </div>
          <div className="text-center">
            <motion.div
              className="text-2xl font-bold text-white"
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : { scale: 0 }}
              transition={{ delay: 1.7, type: "spring" }}
            >
              4K
            </motion.div>
            <div className="text-sm text-gray-400">Resolution</div>
          </div>
          <div className="text-center">
            <motion.div
              className="text-2xl font-bold text-white"
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : { scale: 0 }}
              transition={{ delay: 1.9, type: "spring" }}
            >
              60fps
            </motion.div>
            <div className="text-sm text-gray-400">Smooth UI</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
