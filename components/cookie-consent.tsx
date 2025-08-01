"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"
import { Cookie } from "lucide-react"

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem("cookie_consent")
    if (!consent) {
      setIsVisible(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem("cookie_consent", "accepted")
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: "100%", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: "100%", opacity: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className="fixed bottom-0 left-0 right-0 z-50 bg-gray-800/90 backdrop-blur-lg border-t border-gray-700/50 p-4 shadow-lg"
      >
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-gray-300">
            <Cookie className="h-6 w-6 text-purple-400" />
            <p className="text-sm">
              We use essential cookies to ensure the proper functioning of our website. By continuing, you agree to
              their use.
            </p>
          </div>
          <Button onClick={handleAccept} className="bg-purple-600 hover:bg-purple-700 text-white">
            Accept
          </Button>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
