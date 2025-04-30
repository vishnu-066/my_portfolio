"use client"

import { useState, useEffect, useRef } from "react"
import { FaHandsHelping } from "react-icons/fa"

interface SocialWorkCardProps {
  title: string
  description: string
  delay?: number
}

const SocialWorkCard = ({ title, description, delay = 0 }: SocialWorkCardProps) => {
  const [isVisible, setIsVisible] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setIsVisible(true)
            }, delay)
          }
        })
      },
      { threshold: 0.1 },
    )

    if (cardRef.current) {
      observer.observe(cardRef.current)
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current)
      }
    }
  }, [delay])

  return (
    <div ref={cardRef} className={`enhanced-card rounded-lg p-6 ${isVisible ? "scale-in" : "opacity-0"}`}>
      <div className="flex items-center mb-4">
        <div className="social-work-icon mr-3">
          <FaHandsHelping className="text-2xl enhanced-icon" />
        </div>
        <h3 className="text-xl font-bold text-cosmic-purple">{title}</h3>
      </div>
      <p className="text-gray-300">{description}</p>
    </div>
  )
}

export default SocialWorkCard
