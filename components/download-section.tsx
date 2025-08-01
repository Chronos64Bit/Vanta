"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { AlertTriangle, Download, Users, MessageCircle, Clock, Star, Shield, Zap } from "lucide-react"
import Image from "next/image"
import { EarlyAccessForm } from "./early-access-form" // Import the new component

export function DownloadSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  // Set the target date for the countdown: October 1st, 2025, 00:00:00 BST (UTC+1)
  const targetDate = new Date("October 1, 2025 00:00:00 GMT+0100")

  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })
  const [emailInput, setEmailInput] = useState("")
  const [isEarlyAccessFormOpen, setIsEarlyAccessFormOpen] = useState(false) // State for modal

  // Countdown timer effect
  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime()
      const distance = targetDate.getTime() - now

      if (distance < 0) {
        setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 })
        return
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24))
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((distance % (1000 * 60)) / 1000)

      setCountdown({ days, hours, minutes, seconds })
    }

    const timer = setInterval(calculateTimeLeft, 1000)
    calculateTimeLeft() // Initial call to set the countdown immediately

    return () => clearInterval(timer)
  }, []) // Empty dependency array means it runs once on mount

  const features = [
    { icon: <Zap className="w-5 h-5" />, text: "Lightning Fast Execution" },
    { icon: <Shield className="w-5 h-5" />, text: "Advanced Security" },
    { icon: <Star className="w-5 h-5" />, text: "Premium Support" },
  ]

  return (
    <section className="w-full py-20 md:py-32 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              "radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 80% 20%, rgba(255, 107, 107, 0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 40% 40%, rgba(120, 119, 198, 0.1) 0%, transparent 50%)",
            ],
          }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
        />
      </div>

      <div className="container px-4 md:px-6 relative z-10" ref={ref}>
        <motion.div
          className="max-w-4xl mx-auto text-center space-y-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          {/* Enhanced Developer Access Notice */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <div className="bg-gradient-to-br from-amber-900/20 to-orange-900/20 border border-amber-700/50 rounded-2xl p-8 backdrop-blur-sm relative overflow-hidden">
              {/* Floating Particles */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-amber-500/30 rounded-full"
                  initial={{
                    x: Math.random() * 400,
                    y: Math.random() * 300,
                    opacity: 0,
                  }}
                  animate={{
                    y: [null, -100],
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 4,
                    delay: i * 0.5,
                    repeat: Number.POSITIVE_INFINITY,
                  }}
                />
              ))}

              <div className="flex items-center justify-center space-x-3 mb-6">
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                >
                  <AlertTriangle className="h-8 w-8 text-amber-500" />
                </motion.div>
                <motion.h2
                  className="text-3xl font-bold text-amber-200"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  Developer Access Only
                </motion.h2>
              </div>

              <motion.p
                className="text-amber-200/80 text-lg mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                V.E.S is currently in closed development. Join the waitlist for early access.
              </motion.p>

              {/* Countdown Timer */}
              <motion.div
                className="bg-black/20 rounded-xl p-6 mb-8"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 }}
              >
                <h3 className="text-amber-200 font-semibold mb-4">Estimated Public Release</h3>
                <div className="grid grid-cols-4 gap-4">
                  {Object.entries(countdown).map(([unit, value], index) => (
                    <motion.div
                      key={unit}
                      className="bg-amber-900/30 rounded-lg p-3 text-center"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1 + index * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <motion.div
                        className="text-2xl font-bold text-amber-200"
                        key={value} // Re-animate when value changes
                        initial={{ scale: 1.2 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.2 }}
                      >
                        {value.toString().padStart(2, "0")}
                      </motion.div>
                      <div className="text-xs text-amber-300 capitalize">{unit}</div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Preview Image */}
              <motion.div
                className="aspect-video bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl flex items-center justify-center mb-6 overflow-hidden max-w-md mx-auto relative"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="absolute inset-0 border-2 border-amber-500/30 rounded-xl"
                  animate={{
                    borderColor: ["rgba(245, 158, 11, 0.3)", "rgba(245, 158, 11, 0.6)", "rgba(245, 158, 11, 0.3)"],
                  }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                />
                <Image
                  src="/images/placeholder-meme.webp"
                  alt="V.E.S Preview"
                  width={400}
                  height={300}
                  className="rounded-xl object-cover w-full h-full"
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>

              {/* Feature Highlights */}
              <motion.div
                className="flex justify-center space-x-6 mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 }}
              >
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-2 text-amber-200/80"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.4 + index * 0.1 }}
                    whileHover={{ scale: 1.05, color: "#fbbf24" }}
                  >
                    {feature.icon}
                    <span className="text-sm">{feature.text}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>

          {/* Enhanced Download Section */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            {/* Main Download Button */}
            <motion.div className="relative" whileHover={{ scale: 1.02 }}>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-slate-600 to-slate-500 rounded-xl blur-lg opacity-30"
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
              />
              <Button
                size="lg"
                className="bg-slate-700 hover:bg-slate-600 text-white px-12 py-4 text-xl font-medium rounded-xl transition-all duration-300 relative overflow-hidden group"
                disabled
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-slate-600 to-slate-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={false}
                />
                <div className="relative z-10 flex items-center space-x-3">
                  <Download className="w-6 h-6" />
                  <span>Download V.E.S</span>
                </div>
                <motion.div
                  className="absolute inset-0 bg-white/10"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.8 }}
                />
              </Button>
            </motion.div>

            <motion.p
              className="text-gray-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              Download will be available once public build is ready
            </motion.p>

            {/* Email Signup */}
            <motion.div
              className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 max-w-md mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <h3 className="text-lg font-semibold text-white mb-4">Get Notified</h3>
              <div className="flex space-x-3">
                <motion.input
                  type="email"
                  placeholder="Enter your email"
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  className="flex-1 bg-gray-900/50 border border-gray-600 rounded-lg px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-slate-500 transition-colors"
                  whileFocus={{ scale: 1.02 }}
                />
                <motion.button
                  className="bg-slate-700 hover:bg-slate-600 text-white px-4 py-2 rounded-lg transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Notify Me
                </motion.button>
              </div>
            </motion.div>
          </motion.div>

          {/* Enhanced Community Links */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <motion.div
              className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 relative overflow-hidden group"
              whileHover={{ scale: 1.02, borderColor: "rgba(59, 130, 246, 0.5)" }}
              transition={{ duration: 0.3 }}
            >
              {/* Animated Background */}
              <motion.div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative z-10">
                <div className="flex items-center space-x-3 mb-4">
                  <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.5 }}>
                    <MessageCircle className="h-6 w-6 text-blue-400" />
                  </motion.div>
                  <h3 className="text-lg font-semibold text-white">Join Discord</h3>
                </div>
                <p className="text-gray-400 mb-6">
                  Get updates, connect with developers, and be first to know about releases
                </p>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    variant="outline"
                    className="w-full bg-transparent border-blue-500/50 text-blue-400 hover:bg-blue-900/20"
                  >
                    Join Server
                  </Button>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 relative overflow-hidden group"
              whileHover={{ scale: 1.02, borderColor: "rgba(34, 197, 94, 0.5)" }}
              transition={{ duration: 0.3 }}
            >
              {/* Animated Background */}
              <motion.div className="absolute inset-0 bg-gradient-to-br from-green-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative z-10">
                <div className="flex items-center space-x-3 mb-4">
                  <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.5 }}>
                    <Users className="h-6 w-6 text-green-400" />
                  </motion.div>
                  <h3 className="text-lg font-semibold text-white">Developer Early Access</h3>
                </div>
                <p className="text-gray-400 mb-6">
                  Apply for our developer early access program and help shape the future of V.E.S
                </p>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    variant="outline"
                    className="w-full bg-transparent border-green-500/50 text-green-400 hover:bg-green-900/20"
                    onClick={() => setIsEarlyAccessFormOpen(true)} // Open the modal
                  >
                    Request Early Access
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          {/* Enhanced System Requirements Preview */}
          <motion.div
            className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-8 text-left relative overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            {/* Animated Grid Background */}
            <motion.div
              className="absolute inset-0 opacity-5"
              animate={{
                backgroundPosition: ["0% 0%", "100% 100%"],
              }}
              transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
              style={{
                backgroundImage:
                  "linear-gradient(45deg, currentColor 1px, transparent 1px), linear-gradient(-45deg, currentColor 1px, transparent 1px)",
                backgroundSize: "20px 20px",
              }}
            />

            <motion.h3
              className="text-xl font-semibold text-white mb-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4 }}
            >
              System Requirements
            </motion.h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
              <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.6 }}>
                <h4 className="text-lg font-medium text-white mb-4 flex items-center">
                  <Clock className="w-5 h-5 mr-2 text-yellow-500" />
                  Minimum
                </h4>
                <motion.ul className="space-y-3 text-gray-400">
                  {["Windows 10 (64-bit)", "4GB RAM", "500MB Storage", ".NET Framework 4.8"].map((req, index) => (
                    <motion.li
                      key={index}
                      className="flex items-center space-x-2"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1.8 + index * 0.1 }}
                      whileHover={{ x: 5, color: "#e5e7eb" }}
                    >
                      <motion.div
                        className="w-2 h-2 bg-yellow-500 rounded-full"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: index * 0.2 }}
                      />
                      <span>{req}</span>
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>

              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.6 }}>
                <h4 className="text-lg font-medium text-white mb-4 flex items-center">
                  <Star className="w-5 h-5 mr-2 text-green-500" />
                  Recommended
                </h4>
                <motion.ul className="space-y-3 text-gray-400">
                  {["Windows 11 (64-bit)", "8GB+ RAM", "1GB Storage", "Latest .NET Runtime"].map((req, index) => (
                    <motion.li
                      key={index}
                      className="flex items-center space-x-2"
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1.8 + index * 0.1 }}
                      whileHover={{ x: -5, color: "#e5e7eb" }}
                    >
                      <motion.div
                        className="w-2 h-2 bg-green-500 rounded-full"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: index * 0.2 }}
                      />
                      <span>{req}</span>
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
      <EarlyAccessForm isOpen={isEarlyAccessFormOpen} onOpenChange={setIsEarlyAccessFormOpen} />
    </section>
  )
}
