"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"

export function Footer() {
  return (
    <footer className="w-full border-t border-gray-800/50 py-12 bg-gray-900/50">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <motion.div
            className="flex flex-col space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3">
              <Image src="/images/chronos-logo.png" alt="V.E.S Logo" width={24} height={24} className="h-6 w-auto" />
              <div className="flex flex-col">
                <span className="text-lg font-bold text-white">V.E.S</span>
                <span className="text-xs text-gray-400 -mt-1">Vanta Execution</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm">
              Precision in Execution. The most advanced Roblox executor for professionals.
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-white font-semibold">Product</h3>
            <div className="flex flex-col space-y-2">
              <Link href="#features" className="text-gray-400 hover:text-white transition-colors text-sm">
                Features
              </Link>
              <Link href="#screenshots" className="text-gray-400 hover:text-white transition-colors text-sm">
                Screenshots
              </Link>
              <Link href="#compatibility" className="text-gray-400 hover:text-white transition-colors text-sm">
                Compatibility
              </Link>
            </div>
          </motion.div>

          <motion.div
            className="flex flex-col space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-white font-semibold">Legal</h3>
            <div className="flex flex-col space-y-2">
              <Link href="/terms" className="text-gray-400 hover:text-white transition-colors text-sm">
                Terms of Service
              </Link>
              <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors text-sm">
                Privacy Policy
              </Link>
            </div>
          </motion.div>

          <motion.div
            className="flex flex-col space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-white font-semibold">Community</h3>
            <div className="flex flex-col space-y-2">
              <Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                Discord
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                GitHub
              </Link>
              <Link href="/submit-testimonial" className="text-gray-400 hover:text-white transition-colors text-sm">
                Submit Testimonial
              </Link>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="mt-8 pt-8 border-t border-gray-800/50 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p className="text-sm text-gray-400">© {new Date().getFullYear()} V.E.S - Vanta Execution Software</p>
          <p className="text-sm text-gray-500 mt-2 md:mt-0">Developer access only - Public release coming soon</p>
        </motion.div>
      </div>
    </footer>
  )
}
