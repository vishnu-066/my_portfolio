"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { motion } from "framer-motion"

interface CosmicProfileProps {
  imageSrc: string
  size?: number
}

const CosmicProfile = ({ imageSrc, size = 250 }: CosmicProfileProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number
    const particles: Array<{
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      color: string
      alpha: number
      decay: number
      angle: number
      radius: number
      orbitSpeed: number
    }> = []

    const colors = ["#ff4ec8", "#6a5af9", "#00ffe7", "#0ef"]

    const resizeCanvas = () => {
      canvas.width = size * 1.8
      canvas.height = size * 1.8
    }

    const createParticles = () => {
      const centerX = canvas.width / 2
      const centerY = canvas.height / 2
      const radius = size / 2 - 10

      // Create orbiting particles
      for (let i = 0; i < 30; i++) {
        const angle = Math.random() * Math.PI * 2
        const orbitRadius = radius * 0.9 + Math.random() * radius * 0.4

        particles.push({
          x: centerX + Math.cos(angle) * orbitRadius,
          y: centerY + Math.sin(angle) * orbitRadius,
          size: Math.random() * 4 + 1,
          speedX: (Math.random() - 0.5) * 0.2,
          speedY: (Math.random() - 0.5) * 0.2,
          color: colors[Math.floor(Math.random() * colors.length)],
          alpha: Math.random() * 0.8 + 0.2,
          decay: Math.random() * 0.005 + 0.002,
          angle: angle,
          radius: orbitRadius,
          orbitSpeed: (Math.random() * 0.01 + 0.005) * (Math.random() > 0.5 ? 1 : -1),
        })
      }

      // Create floating particles
      for (let i = 0; i < 20; i++) {
        const angle = Math.random() * Math.PI * 2
        const distance = radius * 1.2 + Math.random() * radius * 0.5

        particles.push({
          x: centerX + Math.cos(angle) * distance,
          y: centerY + Math.sin(angle) * distance,
          size: Math.random() * 3 + 0.5,
          speedX: (Math.random() - 0.5) * 0.5,
          speedY: (Math.random() - 0.5) * 0.5,
          color: colors[Math.floor(Math.random() * colors.length)],
          alpha: Math.random() * 0.7 + 0.3,
          decay: Math.random() * 0.01 + 0.005,
          angle: 0,
          radius: 0,
          orbitSpeed: 0,
        })
      }
    }

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw outer glow
      const centerX = canvas.width / 2
      const centerY = canvas.height / 2
      const radius = size / 2 + 10

      // Create radial gradient for the cosmic glow
      const gradient = ctx.createRadialGradient(centerX, centerY, radius - 20, centerX, centerY, radius + 40)
      gradient.addColorStop(0, "rgba(255, 78, 200, 0.3)")
      gradient.addColorStop(0.5, "rgba(106, 90, 249, 0.2)")
      gradient.addColorStop(1, "rgba(0, 255, 231, 0)")

      ctx.fillStyle = gradient
      ctx.beginPath()
      ctx.arc(centerX, centerY, radius + 40, 0, Math.PI * 2)
      ctx.fill()

      // Draw particles
      particles.forEach((particle, index) => {
        ctx.globalAlpha = particle.alpha
        ctx.fillStyle = particle.color
        ctx.beginPath()

        // Update orbiting particles
        if (particle.orbitSpeed !== 0) {
          // This is an orbiting particle
          particle.angle += particle.orbitSpeed
          particle.x = centerX + Math.cos(particle.angle) * particle.radius
          particle.y = centerY + Math.sin(particle.angle) * particle.radius

          // Add slight variation to orbit
          particle.radius += (Math.random() - 0.5) * 0.3

          // Keep radius within bounds
          if (particle.radius < radius * 0.8) particle.radius = radius * 0.8
          if (particle.radius > radius * 1.3) particle.radius = radius * 1.3

          // Draw with glow
          ctx.shadowBlur = 10
          ctx.shadowColor = particle.color
        } else {
          // This is a floating particle
          particle.x += particle.speedX
          particle.y += particle.speedY

          // Boundary check and bounce
          if (particle.x < centerX - radius * 1.5 || particle.x > centerX + radius * 1.5) {
            particle.speedX *= -1
          }
          if (particle.y < centerY - radius * 1.5 || particle.y > centerY + radius * 1.5) {
            particle.speedY *= -1
          }

          ctx.shadowBlur = 5
          ctx.shadowColor = particle.color
        }

        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fill()
        ctx.shadowBlur = 0

        // Fade particles and regenerate
        particle.alpha -= particle.decay

        if (particle.alpha <= 0) {
          if (particle.orbitSpeed !== 0) {
            // Regenerate orbiting particle
            const angle = Math.random() * Math.PI * 2
            const orbitRadius = radius * 0.9 + Math.random() * radius * 0.4

            particles[index] = {
              x: centerX + Math.cos(angle) * orbitRadius,
              y: centerY + Math.sin(angle) * orbitRadius,
              size: Math.random() * 4 + 1,
              speedX: (Math.random() - 0.5) * 0.2,
              speedY: (Math.random() - 0.5) * 0.2,
              color: colors[Math.floor(Math.random() * colors.length)],
              alpha: Math.random() * 0.8 + 0.2,
              decay: Math.random() * 0.005 + 0.002,
              angle: angle,
              radius: orbitRadius,
              orbitSpeed: (Math.random() * 0.01 + 0.005) * (Math.random() > 0.5 ? 1 : -1),
            }
          } else {
            // Regenerate floating particle
            const angle = Math.random() * Math.PI * 2
            const distance = radius * 1.2 + Math.random() * radius * 0.5

            particles[index] = {
              x: centerX + Math.cos(angle) * distance,
              y: centerY + Math.sin(angle) * distance,
              size: Math.random() * 3 + 0.5,
              speedX: (Math.random() - 0.5) * 0.5,
              speedY: (Math.random() - 0.5) * 0.5,
              color: colors[Math.floor(Math.random() * colors.length)],
              alpha: Math.random() * 0.7 + 0.3,
              decay: Math.random() * 0.01 + 0.005,
              angle: 0,
              radius: 0,
              orbitSpeed: 0,
            }
          }
        }
      })

      // Draw rotating rings with time-based animation
      const time = Date.now() / 1000

      // First ring - pink
      ctx.strokeStyle = "#ff4ec8"
      ctx.lineWidth = 2
      ctx.globalAlpha = 0.6 + Math.sin(time) * 0.2
      ctx.beginPath()
      ctx.arc(centerX, centerY, radius + 5, 0, Math.PI * 2)
      ctx.stroke()

      // Second ring - blue
      ctx.strokeStyle = "#00ffe7"
      ctx.lineWidth = 2
      ctx.globalAlpha = 0.6 + Math.cos(time) * 0.2
      ctx.beginPath()
      ctx.arc(centerX, centerY, radius + 15, 0, Math.PI * 2)
      ctx.stroke()

      // Third ring - purple
      ctx.strokeStyle = "#6a5af9"
      ctx.lineWidth = 1.5
      ctx.globalAlpha = 0.5 + Math.sin(time * 1.5) * 0.2
      ctx.beginPath()
      ctx.arc(centerX, centerY, radius + 25, 0, Math.PI * 2)
      ctx.stroke()

      // Add glow to rings
      ctx.shadowBlur = 15
      ctx.shadowColor = "#00ffe7"
      ctx.strokeStyle = "#00ffe7"
      ctx.lineWidth = 1
      ctx.globalAlpha = 0.4 + Math.sin(time * 0.8) * 0.1
      ctx.beginPath()
      ctx.arc(centerX, centerY, radius + 35, 0, Math.PI * 2)
      ctx.stroke()
      ctx.shadowBlur = 0

      ctx.globalAlpha = 1

      animationFrameId = requestAnimationFrame(drawParticles)
    }

    resizeCanvas()
    createParticles()
    drawParticles()

    return () => {
      cancelAnimationFrame(animationFrameId)
    }
  }, [size])

  return (
    <div className="cosmic-profile-container floating-animation" style={{ width: size, height: size }}>
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 z-0"
        style={{ width: size * 1.8, height: size * 1.8, transform: `translate(-${size * 0.4}px, -${size * 0.4}px)` }}
      />
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10"
      >
        <div className="cosmic-image-container pulse-glow" style={{ width: size, height: size }}>
          <Image
            src={imageSrc || "/placeholder.svg"}
            alt="Profile"
            width={size}
            height={size}
            className="rounded-full object-cover border-4 border-[#00ffe7] shadow-[0_0_15px_rgba(0,255,231,0.8)]"
            priority
          />
        </div>
      </motion.div>
    </div>
  )
}

export default CosmicProfile
