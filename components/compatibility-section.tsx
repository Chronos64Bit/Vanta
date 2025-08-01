"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Monitor, CheckCircle, Cpu, HardDrive, MemoryStick, Wifi, AlertCircle } from "lucide-react"

export function CompatibilitySection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const [activeTab, setActiveTab] = useState(0)

  const systemSpecs = [
    {
      category: "Operating System",
      icon: <Monitor className="w-6 h-6" />,
      requirements: [
        { name: "Windows 10", status: "supported", version: "Build 1903+" },
        { name: "Windows 11", status: "optimized", version: "All builds" },
      ],
    },
    {
      category: "Hardware",
      icon: <Cpu className="w-6 h-6" />,
      requirements: [
        { name: "CPU", status: "minimum", version: "Intel i3 / AMD Ryzen 3" },
        { name: "RAM", status: "recommended", version: "8GB+ DDR4" },
        { name: "Storage", status: "required", version: "500MB SSD space" },
      ],
    },
    {
      category: "Network",
      icon: <Wifi className="w-6 h-6" />,
      requirements: [
        { name: "Internet", status: "required", version: "Broadband connection" },
        { name: "Firewall", status: "supported", version: "Windows Defender" },
        { name: "Antivirus", status: "compatible", version: "Most AV software" },
      ],
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "supported":
        return "text-blue-400 bg-blue-900/20"
      case "optimized":
        return "text-green-400 bg-green-900/20"
      case "required":
        return "text-red-400 bg-red-900/20"
      case "recommended":
        return "text-yellow-400 bg-yellow-900/20"
      case "limited":
        return "text-orange-400 bg-orange-900/20"
      case "compatible":
        return "text-purple-400 bg-purple-900/20"
      case "minimum":
        return "text-gray-400 bg-gray-900/20"
      default:
        return "text-gray-400 bg-gray-900/20"
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "optimized":
      case "supported":
      case "compatible":
        return <CheckCircle className="w-4 h-4" />
      case "required":
      case "minimum":
        return <AlertCircle className="w-4 h-4" />
      default:
        return <CheckCircle className="w-4 h-4" />
    }
  }

  return (
    <section className="w-full py-20 md:py-32 relative overflow-hidden">
      {/* Animated Circuit Background */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 100 100">
          <motion.path
            d="M10,10 L90,10 L90,90 L10,90 Z"
            stroke="currentColor"
            strokeWidth="0.5"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
          />
          <motion.circle
            cx="20"
            cy="20"
            r="2"
            fill="currentColor"
            initial={{ scale: 0 }}
            animate={{ scale: [0, 1, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
          />
          <motion.circle
            cx="80"
            cy="80"
            r="2"
            fill="currentColor"
            initial={{ scale: 0 }}
            animate={{ scale: [0, 1, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 2 }}
          />
        </svg>
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
            <Monitor className="w-4 h-4 text-green-500" />
            <span className="text-sm text-gray-300">System Requirements</span>
          </motion.div>

          <motion.h2
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Compatibility
          </motion.h2>

          <motion.p
            className="text-xl text-gray-400 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            V.E.S works best on new Windows systems with full hardware support.
          </motion.p>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          className="flex justify-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-2 flex space-x-2">
            {systemSpecs.map((spec, index) => (
              <motion.button
                key={index}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                  activeTab === index
                    ? "bg-slate-700 text-white"
                    : "text-gray-400 hover:text-white hover:bg-slate-800/50"
                }`}
                onClick={() => setActiveTab(index)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {spec.icon}
                <span className="text-sm font-medium">{spec.category}</span>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Enhanced Compatibility Content */}
        <motion.div
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-8 relative overflow-hidden">
            {/* Animated Background Pattern */}
            <motion.div
              className="absolute inset-0 opacity-5"
              animate={{
                backgroundPosition: ["0% 0%", "100% 100%"],
              }}
              transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
              style={{
                backgroundImage: "radial-gradient(circle, currentColor 1px, transparent 1px)",
                backgroundSize: "20px 20px",
              }}
            />

            {/* Tab Content */}
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="relative z-10"
            >
              <div className="flex items-center justify-center mb-8">
                <motion.div
                  className="text-slate-400"
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  {systemSpecs[activeTab].icon}
                </motion.div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {systemSpecs[activeTab].requirements.map((req, index) => (
                  <motion.div
                    key={index}
                    className="bg-gray-900/50 rounded-lg p-6 border border-gray-700/30 hover:border-gray-600/50 transition-all duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    whileHover={{ y: -5, scale: 1.02 }}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-lg font-semibold text-white">{req.name}</h3>
                      <motion.div
                        className={`flex items-center space-x-1 px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(req.status)}`}
                        whileHover={{ scale: 1.05 }}
                      >
                        {getStatusIcon(req.status)}
                        <span className="capitalize">{req.status}</span>
                      </motion.div>
                    </div>
                    <p className="text-gray-400 text-sm">{req.version}</p>

                    {/* Progress Bar */}
                    <motion.div
                      className="mt-4 h-2 bg-gray-700 rounded-full overflow-hidden"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                    >
                      <motion.div
                        className={`h-full rounded-full ${
                          req.status === "optimized"
                            ? "bg-green-500"
                            : req.status === "supported"
                              ? "bg-blue-500"
                              : req.status === "required"
                                ? "bg-red-500"
                                : "bg-yellow-500"
                        }`}
                        initial={{ width: 0 }}
                        animate={{
                          width:
                            req.status === "optimized"
                              ? "100%"
                              : req.status === "supported"
                                ? "85%"
                                : req.status === "required"
                                  ? "60%"
                                  : "75%",
                        }}
                        transition={{ delay: 0.7 + index * 0.1, duration: 1, ease: "easeOut" }}
                      />
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Performance Metrics */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            {[
              { label: "Boot Time", value: "< 2s", icon: <Cpu className="w-5 h-5" /> },
              { label: "Memory Usage", value: "< 50MB", icon: <MemoryStick className="w-5 h-5" /> },
              { label: "Disk Space", value: "500MB", icon: <HardDrive className="w-5 h-5" /> },
              { label: "CPU Usage", value: "< 5%", icon: <Monitor className="w-5 h-5" /> },
            ].map((metric, index) => (
              <motion.div
                key={index}
                className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/30 rounded-lg p-4 text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.4 + index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.05, backgroundColor: "rgba(55, 65, 81, 0.5)" }}
              >
                <motion.div
                  className="text-slate-400 mb-2 flex justify-center"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  {metric.icon}
                </motion.div>
                <div className="text-lg font-bold text-white">{metric.value}</div>
                <div className="text-sm text-gray-400">{metric.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
