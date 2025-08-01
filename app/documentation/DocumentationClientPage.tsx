"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { PageHeader } from "@/components/page-header"
import { motion } from "framer-motion"
import { BookOpen, Code, Lightbulb, HelpCircle } from "lucide-react"
import Link from "next/link"

export default function DocumentationClientPage() {
  const sections = [
    {
      title: "Getting Started",
      description: "Learn how to install and set up V.E.S for the first time.",
      icon: <BookOpen className="h-8 w-8 text-purple-400" />,
      link: "#getting-started",
    },
    {
      title: "API Reference",
      description: "Detailed documentation for integrating with the V.E.S API.",
      icon: <Code className="h-8 w-8 text-blue-400" />,
      link: "#api-reference",
    },
    {
      title: "Scripting Guides",
      description: "Tutorials and examples for writing and executing scripts.",
      icon: <Lightbulb className="h-8 w-8 text-yellow-400" />,
      link: "#scripting-guides",
    },
    {
      title: "Troubleshooting",
      description: "Find solutions to common issues and frequently asked questions.",
      icon: <HelpCircle className="h-8 w-8 text-red-400" />,
      link: "#troubleshooting",
    },
  ]

  return (
    <div className="flex min-h-screen flex-col bg-gray-900 text-white">
      <div className="absolute top-0 left-0 right-0 h-[40vh] bg-gradient-to-b from-slate-800/30 to-transparent z-0"></div>
      <Navbar />
      <main className="flex-1">
        <PageHeader title="Documentation" description="Comprehensive guides and API references for V.E.S" />
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 max-w-6xl mx-auto">
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
              initial="hidden"
              animate="show"
              variants={{
                hidden: { opacity: 0 },
                show: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1,
                  },
                },
              }}
            >
              {sections.map((section, index) => (
                <motion.div
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                  }}
                  className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 text-center hover:border-purple-500/50 transition-all duration-300 group"
                >
                  <Link href={section.link} className="block">
                    <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      {section.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                      {section.title}
                    </h3>
                    <p className="text-gray-400 text-sm">{section.description}</p>
                  </Link>
                </motion.div>
              ))}
            </motion.div>

            <div className="mt-20 space-y-16">
              {/* Getting Started Section */}
              <motion.div
                id="getting-started"
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-8"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                  <BookOpen className="h-7 w-7 mr-3 text-purple-400" /> Getting Started
                </h2>
                <div className="space-y-4 text-gray-400">
                  <p>Welcome to V.E.S! Follow these steps to get your executor up and running quickly.</p>
                  <ol className="list-decimal list-inside space-y-2">
                    <li>
                      Download the latest V.E.S installer from our{" "}
                      <Link href="/download" className="text-purple-400 hover:underline">
                        Downloads page
                      </Link>
                      .
                    </li>
                    <li>Run the installer and follow the on-screen instructions.</li>
                    <li>Launch V.E.S and inject it into your Roblox game.</li>
                    <li>Start executing your favorite scripts!</li>
                  </ol>
                  <p>
                    For detailed system requirements, please visit our{" "}
                    <Link href="/compatibility" className="text-purple-400 hover:underline">
                      Compatibility page
                    </Link>
                    .
                  </p>
                </div>
              </motion.div>

              {/* API Reference Section */}
              <motion.div
                id="api-reference"
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-8"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                  <Code className="h-7 w-7 mr-3 text-blue-400" /> API Reference
                </h2>
                <div className="space-y-4 text-gray-400">
                  <p>
                    Our powerful API allows developers to integrate V.E.S functionality into their own applications.
                  </p>
                  <h3 className="text-xl font-semibold text-white mt-4">Authentication</h3>
                  <p>All API requests require an API key, which can be generated from your V.E.S dashboard.</p>
                  <pre className="bg-gray-900 p-4 rounded-md text-sm overflow-x-auto">
                    <code className="text-green-400">
                      {`GET /api/v1/execute?script=your_script_here
Authorization: Bearer YOUR_API_KEY`}
                    </code>
                  </pre>
                  <h3 className="text-xl font-semibold text-white mt-4">Endpoints</h3>
                  <ul className="list-disc list-inside space-y-2">
                    <li>
                      <code className="text-purple-300">/api/v1/execute</code>: Execute a Lua script.
                    </li>
                    <li>
                      <code className="text-purple-300">/api/v1/status</code>: Check executor status.
                    </li>
                    <li>
                      <code className="text-purple-300">/api/v1/scripts</code>: Manage your script library.
                    </li>
                  </ul>
                  <p>
                    Full API documentation with code examples for various languages is available on our developer portal
                    (coming soon).
                  </p>
                </div>
              </motion.div>

              {/* Scripting Guides Section */}
              <motion.div
                id="scripting-guides"
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-8"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                  <Lightbulb className="h-7 w-7 mr-3 text-yellow-400" /> Scripting Guides
                </h2>
                <div className="space-y-4 text-gray-400">
                  <p>Master script execution with our comprehensive guides.</p>
                  <h3 className="text-xl font-semibold text-white mt-4">Basic Script Structure</h3>
                  <pre className="bg-gray-900 p-4 rounded-md text-sm overflow-x-auto">
                    <code className="text-orange-400">
                      {`-- Simple Lua script example
local player = game.Players.LocalPlayer
player.Character.Humanoid.WalkSpeed = 50`}
                    </code>
                  </pre>
                  <h3 className="text-xl font-semibold text-white mt-4">Advanced Techniques</h3>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Using `getgenv()` for global variables.</li>
                    <li>Implementing custom UI with `loadstring()`.</li>
                    <li>Optimizing scripts for performance.</li>
                  </ul>
                  <p>
                    Explore our{" "}
                    <Link href="/downloads" className="text-purple-400 hover:underline">
                      ChronosenAI
                    </Link>{" "}
                    for advanced script generation and optimization.
                  </p>
                </div>
              </motion.div>

              {/* Troubleshooting Section */}
              <motion.div
                id="troubleshooting"
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-8"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                  <HelpCircle className="h-7 w-7 mr-3 text-red-400" /> Troubleshooting
                </h2>
                <div className="space-y-4 text-gray-400">
                  <p>Encountering an issue? Here are some common problems and their solutions.</p>
                  <h3 className="text-xl font-semibold text-white mt-4">"Injection Failed" Error</h3>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Ensure your antivirus is temporarily disabled.</li>
                    <li>Run V.E.S as administrator.</li>
                    <li>Check for Roblox updates; V.E.S might need an update.</li>
                  </ul>
                  <h3 className="text-xl font-semibold text-white mt-4">Script Not Executing</h3>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Verify script syntax for errors.</li>
                    <li>Ensure the script is compatible with the current Roblox version.</li>
                    <li>Try a different injection method if available.</li>
                  </ul>
                  <p>
                    If your issue persists, please contact our support team via the{" "}
                    <Link href="/contact" className="text-purple-400 hover:underline">
                      Contact page
                    </Link>{" "}
                    or join our Discord server.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
