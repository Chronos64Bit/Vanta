"use client"

import { useEffect, useRef } from "react"

export function AnimatedGradient() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight * 0.5 // 50vh
    }

    setCanvasDimensions()
    window.addEventListener("resize", setCanvasDimensions)

    // Create gradient points
    const points = []
    const numPoints = 5

    for (let i = 0; i < numPoints; i++) {
      points.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: 100 + Math.random() * 200,
        xSpeed: (Math.random() - 0.5) * 0.3,
        ySpeed: (Math.random() - 0.5) * 0.3,
        hue: 260 + Math.random() * 30, // Purple hues
      })
    }

    // Animation
    const animate = () => {
      // Clear canvas with a very subtle base color
      ctx.fillStyle = "rgba(10, 10, 20, 0.01)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw gradient points
      for (const point of points) {
        // Move point
        point.x += point.xSpeed
        point.y += point.ySpeed

        // Bounce off edges
        if (point.x < 0 || point.x > canvas.width) point.xSpeed *= -1
        if (point.y < 0 || point.y > canvas.height) point.ySpeed *= -1

        // Create gradient
        const gradient = ctx.createRadialGradient(point.x, point.y, 0, point.x, point.y, point.radius)

        gradient.addColorStop(0, `hsla(${point.hue}, 70%, 60%, 0.05)`)
        gradient.addColorStop(1, "hsla(260, 70%, 30%, 0)")

        // Draw gradient
        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(point.x, point.y, point.radius, 0, Math.PI * 2)
        ctx.fill()
      }

      // Add a subtle fade-out at the bottom
      const fadeGradient = ctx.createLinearGradient(0, canvas.height * 0.7, 0, canvas.height)
      fadeGradient.addColorStop(0, "rgba(10, 10, 20, 0)")
      fadeGradient.addColorStop(1, "rgba(10, 10, 20, 0.8)")

      ctx.fillStyle = fadeGradient
      ctx.fillRect(0, canvas.height * 0.7, canvas.width, canvas.height * 0.3)

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", setCanvasDimensions)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 left-0 right-0 z-0 opacity-60 pointer-events-none"
      style={{ height: "50vh" }}
    />
  )
}
