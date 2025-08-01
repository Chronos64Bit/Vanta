"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/hooks/use-toast"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { MessageSquarePlus } from "lucide-react"

export function TestimonialForm() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const [formData, setFormData] = useState({
    name: "",
    role: "",
    content: "",
    avatarUrl: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/submit-testimonial", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (response.ok) {
        toast({
          title: "Testimonial submitted!",
          description: "Thank you for your feedback.",
        })
        setFormData({
          name: "",
          role: "",
          content: "",
          avatarUrl: "",
        })
      } else {
        toast({
          title: "Submission failed",
          description: result.error || "Please try again.",
          variant: "destructive",
        })
      }
    } catch (error) {
      console.error("Error submitting testimonial:", error)
      toast({
        title: "Something went wrong",
        description: "Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6 max-w-md mx-auto" ref={ref}>
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <div className="bg-gray-800/50 border border-gray-700/50 rounded-lg overflow-hidden">
            <div className="bg-gradient-to-r from-purple-900/20 to-blue-900/20 h-8 flex items-center px-4">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="ml-4 text-sm text-gray-400 flex items-center">
                <MessageSquarePlus className="w-4 h-4 mr-2" /> submit-feedback@ves:~
              </div>
            </div>

            <div className="p-6">
              <h3 className="text-2xl font-bold mb-4 text-white">Share Your Experience</h3>
              <p className="text-gray-400 mb-6">We'd love to hear what you think about V.E.S!</p>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Input
                    id="name"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-gray-900/50 border-gray-800 text-white placeholder:text-gray-500"
                  />
                </div>
                <div className="space-y-2">
                  <Input
                    id="role"
                    name="role"
                    placeholder="Your Role (e.g., V.E.S User, Developer)"
                    value={formData.role}
                    onChange={handleChange}
                    className="bg-gray-900/50 border-gray-800 text-white placeholder:text-gray-500"
                  />
                </div>
                <div className="space-y-2">
                  <Textarea
                    id="content"
                    name="content"
                    placeholder="Your Testimonial (max 500 characters)"
                    value={formData.content}
                    onChange={handleChange}
                    required
                    maxLength={500}
                    className="min-h-[120px] bg-gray-900/50 border-gray-800 text-white placeholder:text-gray-500"
                  />
                </div>
                <div className="space-y-2">
                  <Input
                    id="avatarUrl"
                    name="avatarUrl"
                    type="url"
                    placeholder="Link to your avatar image (optional)"
                    value={formData.avatarUrl}
                    onChange={handleChange}
                    className="bg-gray-900/50 border-gray-800 text-white placeholder:text-gray-500"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Submit Testimonial"}
                </Button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
