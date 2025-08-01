"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/hooks/use-toast"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog"
import { MessageSquarePlus } from "lucide-react" // Assuming Discord icon is available or using a placeholder

interface EarlyAccessFormProps {
  onOpenChange: (open: boolean) => void
  isOpen: boolean
}

export function EarlyAccessForm({ onOpenChange, isOpen }: EarlyAccessFormProps) {
  const [formData, setFormData] = useState({
    discordUsername: "",
    discordId: "", // Optional Discord ID
    currentRole: "",
    message: "",
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
      const response = await fetch("/api/early-access", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (response.ok) {
        toast({
          title: "Early access request sent!",
          description: "We'll review your application and get back to you soon.",
        })
        setFormData({
          discordUsername: "",
          discordId: "",
          currentRole: "",
          message: "",
        })
        onOpenChange(false) // Close the dialog on success
      } else {
        toast({
          title: "Submission failed",
          description: result.error || "Please try again.",
          variant: "destructive",
        })
      }
    } catch (error) {
      console.error("Error submitting early access request:", error)
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
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="bg-gray-800/90 border border-gray-700/50 text-white p-6 rounded-lg max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-white flex items-center">
            <MessageSquarePlus className="w-6 h-6 mr-2 text-purple-400" /> Request Early Access
          </DialogTitle>
          <DialogDescription className="text-gray-400">
            Fill out the form below to apply for developer early access to V.E.S.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 py-4">
          <div className="space-y-2">
            <Input
              id="discordUsername"
              name="discordUsername"
              placeholder="Discord Username (e.g., Vanta#1234)"
              value={formData.discordUsername}
              onChange={handleChange}
              required
              className="bg-gray-900/50 border-gray-800 text-white placeholder:text-gray-500"
            />
          </div>
          <div className="space-y-2">
            <Input
              id="discordId"
              name="discordId"
              placeholder="Discord User ID (optional)"
              value={formData.discordId}
              onChange={handleChange}
              className="bg-gray-900/50 border-gray-800 text-white placeholder:text-gray-500"
            />
          </div>
          <div className="space-y-2">
            <Input
              id="currentRole"
              name="currentRole"
              placeholder="Your Current Role (e.g., Developer, Scripter, Tester)"
              value={formData.currentRole}
              onChange={handleChange}
              required
              className="bg-gray-900/50 border-gray-800 text-white placeholder:text-gray-500"
            />
          </div>
          <div className="space-y-2">
            <Textarea
              id="message"
              name="message"
              placeholder="Why do you want early access? (max 500 characters)"
              value={formData.message}
              onChange={handleChange}
              required
              maxLength={500}
              className="min-h-[100px] bg-gray-900/50 border-gray-800 text-white placeholder:text-gray-500"
            />
          </div>
          <DialogFooter>
            <Button
              type="submit"
              className="w-full bg-purple-600 hover:bg-purple-700 text-white"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit Request"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
