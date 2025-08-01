"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { AlertTriangle, Sparkles, Zap, Shield } from "lucide-react"
import { useState, useEffect } from "react"

export function HeroSection() {
  const [isHovered, setIsHovered] = useState(false)
  const [windowSize, setWindowSize] = useState({ width: 1200, height: 800 }) // Default values for SSR
  const [initialParticlePositions, setInitialParticlePositions] = useState<Array<{ x: number; y: number }>>([])

  useEffect(() => {
    // Set window size after component mounts
    const currentWidth = window.innerWidth
    const currentHeight = window.innerHeight
    setWindowSize({
      width: currentWidth,
      height: currentHeight,
    })

    // Generate initial positions for particles only on client
    const newPositions = Array.from({ length: 20 }).map(() => ({
      x: Math.random() * currentWidth,
      y: Math.random() * currentHeight,
    }))
    setInitialParticlePositions(newPositions)

    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const floatingIcons = [
    { icon: Zap, delay: 0, x: 100, y: 50 },
    { icon: Shield, delay: 0.5, x: -80, y: 80 },
    { icon: Sparkles, delay: 1, x: 120, y: -60 },
  ]

  return (
    <section className="w-full py-20 md:py-32 lg:py-40 overflow-hidden relative z-10">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {initialParticlePositions.map((pos, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-slate-400 rounded-full opacity-30"
            initial={{
              x: pos.x, // Use the state-managed position
              y: pos.y, // Use the state-managed position
              scale: 0,
            }}
            animate={{
              y: [null, -100],
              scale: [0, 1, 0],
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center justify-center space-y-8 text-center">
          {/* Floating Icons */}
          {floatingIcons.map((item, index) => (
            <motion.div
              key={index}
              className="absolute text-slate-500/20"
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: [0, 0.3, 0],
                scale: [0, 1.2, 0],
                x: [0, item.x, 0],
                y: [0, item.y, 0],
                rotate: [0, 360],
              }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                delay: item.delay,
              }}
            >
              <item.icon className="w-16 h-16" />
            </motion.div>
          ))}

          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            {/* Animated Title */}
            <motion.div className="relative">
              <motion.h1
                className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white relative z-10"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                onHoverStart={() => setIsHovered(true)}
                onHoverEnd={() => setIsHovered(false)}
              >
                {"V.E.S".split("").map((letter, index) => (
                  <motion.span
                    key={index}
                    className="inline-block"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.5 + index * 0.1,
                      type: "spring",
                      stiffness: 200,
                    }}
                    whileHover={{
                      scale: 1.1,
                      color: "#64748b",
                      textShadow: "0 0 20px rgba(100, 116, 139, 0.5)",
                    }}
                  >
                    {letter}
                  </motion.span>
                ))}
              </motion.h1>

              {/* Glowing Effect */}
              <motion.div
                className="absolute inset-0 text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-slate-400 blur-sm opacity-20"
                animate={isHovered ? { scale: 1.05, opacity: 0.4 } : { scale: 1, opacity: 0.2 }}
                transition={{ duration: 0.3 }}
              >
                V.E.S
              </motion.div>
            </motion.div>

            {/* Animated Tagline */}
            <motion.div className="relative overflow-hidden">
              <motion.p
                className="text-xl md:text-2xl text-gray-300 font-light"
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                {"Exact and Fast Execution".split(" ").map((word, index) => (
                  <motion.span
                    key={index}
                    className="inline-block mr-2"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: 1 + index * 0.2,
                    }}
                    whileHover={{
                      scale: 1.05,
                      color: "#e2e8f0",
                    }}
                  >
                    {word}
                  </motion.span>
                ))}
              </motion.p>
            </motion.div>

            {/* Animated Description */}
            <motion.p
              className="max-w-2xl text-gray-400 text-lg leading-relaxed"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              Vanta Execution Software delivers top-tier performance and reliability for powerful script execution. Made
              for users who need the best.
            </motion.p>
          </motion.div>

          {/* Enhanced Status Notice */}
          <motion.div
            className="flex flex-col items-center space-y-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
          >
            <motion.div
              className="flex items-center space-x-3 bg-amber-900/20 border border-amber-700/50 rounded-lg px-6 py-3 backdrop-blur-sm"
              whileHover={{ scale: 1.05, backgroundColor: "rgba(146, 64, 14, 0.3)" }}
              transition={{ duration: 0.2 }}
            >
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              >
                <AlertTriangle className="h-5 w-5 text-amber-500" />
              </motion.div>
              <span className="text-amber-200 text-sm font-medium">Not public build yet - Developer access only</span>
            </motion.div>

            {/* Animated Download Button */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                className="bg-slate-700 hover:bg-slate-600 text-white px-8 py-3 text-lg font-medium rounded-lg transition-all duration-300 relative overflow-hidden group"
                disabled
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-slate-600 to-slate-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={false}
                />
                <span className="relative z-10">Download Now</span>
                <motion.div
                  className="absolute inset-0 bg-white/10"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.6 }}
                />
              </Button>
            </motion.div>

            <motion.p
              className="text-gray-500 text-sm mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.8 }}
            >
              Public release coming soon. Join our Discord for updates.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
