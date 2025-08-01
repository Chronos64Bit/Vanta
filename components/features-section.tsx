"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Zap, Shield, Code, Cpu, Lock, Settings, Star, TrendingUp } from "lucide-react"

export function FeaturesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const features = [
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Lightning Fast",
      description: "Quick injection with very little slowdown on your computer.",
      stats: "< 0.1s",
      colorFrom: "#eab308",
      colorTo: "#f97316",
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Advanced Protection",
      description: "It has built-in ways to avoid Byfron and Hyperion from detecting you.",
      stats: "99.9%",
      colorFrom: "#22c55e",
      colorTo: "#10b981",
    },
    {
      icon: <Code className="h-8 w-8" />,
      title: "Script Library",
      description: "Access to a curated collection of high-quality scripts and tools.",
      stats: "500+",
      colorFrom: "#3b82f6",
      colorTo: "#06b6d4",
    },
    {
      icon: <Cpu className="h-8 w-8" />,
      title: "Optimized Performance",
      description: "Made to run very well, using only a little of your computer's power.",
      stats: "2% CPU",
      colorFrom: "#a855f7",
      colorTo: "#ec4899",
    },
    {
      icon: <Lock className="h-8 w-8" />,
      title: "Secure Execution",
      description: "Top-level security keeps your data and private info safe.",
      stats: "256-bit",
      colorFrom: "#ef4444",
      colorTo: "#f43f5e",
    },
    {
      icon: <Settings className="h-8 w-8" />,
      title: "Customizable",
      description: "Change how it looks and works to fit what you need.",
      stats: "∞",
      colorFrom: "#6366f1",
      colorTo: "#8b5cf6",
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 50, scale: 0.8 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        type: "spring",
        stiffness: 100,
      },
    },
  }

  return (
    <section className="w-full py-20 md:py-32 relative overflow-hidden">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="container px-4 md:px-6 relative z-10" ref={ref}>
        {/* Enhanced Header */}
        <motion.div
          className="text-center mb-20"
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
            <Star className="w-4 h-4 text-yellow-500" />
            <span className="text-sm text-gray-300">Premium Features</span>
          </motion.div>

          <motion.h2
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Features
          </motion.h2>

          <motion.p
            className="text-xl text-gray-400 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            See what makes V.E.S the most powerful execution software out there.
          </motion.p>

          {/* Stats Counter */}
          <motion.div
            className="flex justify-center items-center space-x-8 mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            <div className="text-center">
              <motion.div
                className="text-2xl font-bold text-white"
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : { scale: 0 }}
                transition={{ delay: 1, type: "spring" }}
              >
                6
              </motion.div>
              <div className="text-sm text-gray-400">Core Features</div>
            </div>
            <div className="text-center">
              <motion.div
                className="text-2xl font-bold text-white flex items-center"
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : { scale: 0 }}
                transition={{ delay: 1.2, type: "spring" }}
              >
                <TrendingUp className="w-5 h-5 mr-1 text-green-500" />
                99%
              </motion.div>
              <div className="text-sm text-gray-400">Reliability</div>
            </div>
          </motion.div>
        </motion.div>

        {/* Enhanced Features Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={item}
              className="group relative"
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
            >
              {/* Animated Border */}
              <motion.div
                className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-[1px]"
                style={{
                  background: `linear-gradient(45deg, ${feature.colorFrom}, ${feature.colorTo})`,
                }}
              >
                <div className="w-full h-full bg-gray-800 rounded-xl" />
              </motion.div>

              <div className="relative bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-8 h-full hover:bg-gray-800/70 transition-all duration-500 overflow-hidden">
                {/* Floating Particles */}
                {hoveredIndex === index && (
                  <>
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-white rounded-full"
                        initial={{
                          x: Math.random() * 300,
                          y: Math.random() * 200,
                          opacity: 0,
                        }}
                        animate={{
                          y: -50,
                          opacity: [0, 1, 0],
                        }}
                        transition={{
                          duration: 2,
                          delay: i * 0.2,
                          repeat: Number.POSITIVE_INFINITY,
                        }}
                      />
                    ))}
                  </>
                )}

                {/* Icon with Animation */}
                <motion.div
                  className="text-purple-400 mb-4 group-hover:text-purple-300 transition-colors relative"
                  whileHover={{
                    scale: 1.1,
                    rotate: [0, -10, 10, 0],
                  }}
                  transition={{ duration: 0.5 }}
                >
                  {feature.icon}

                  {/* Glowing Effect */}
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-50 transition-opacity duration-300 blur-lg"
                    style={{
                      background: `linear-gradient(45deg, ${feature.colorFrom}, ${feature.colorTo})`,
                    }}
                  />
                </motion.div>

                {/* Stats Badge */}
                <motion.div
                  className="absolute top-4 right-4 bg-slate-700/50 rounded-full px-3 py-1 text-xs font-bold text-white"
                  initial={{ scale: 0, rotate: -180 }}
                  animate={hoveredIndex === index ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
                  transition={{ duration: 0.3 }}
                >
                  {feature.stats}
                </motion.div>

                <motion.h3
                  className="text-xl font-semibold text-white mb-3"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  {feature.title}
                </motion.h3>

                <motion.p
                  className="text-gray-400 leading-relaxed"
                  initial={{ opacity: 0.8 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                >
                  {feature.description}
                </motion.p>

                {/* Progress Bar Animation */}
                <motion.div
                  className="absolute bottom-0 left-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: `linear-gradient(90deg, ${feature.colorFrom}, ${feature.colorTo})`,
                  }}
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <motion.p className="text-gray-400 mb-4" whileHover={{ scale: 1.05 }}>
            Ready to see how powerful this software is?
          </motion.p>
          <motion.button
            className="bg-slate-700 hover:bg-slate-600 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 disabled:opacity-50"
            whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(0,0,0,0.3)" }}
            whileTap={{ scale: 0.95 }}
            disabled
          >
            Get Early Access
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
