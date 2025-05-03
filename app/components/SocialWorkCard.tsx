"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { FaHandsHelping, FaExternalLinkAlt } from "react-icons/fa"

interface SocialWorkCardProps {
  title: string
  description: string
  url?: string
  delay?: number
}

const SocialWorkCard = ({ title, description, url, delay = 0 }: SocialWorkCardProps) => {
  const [isVisible, setIsVisible] = useState(false)
  const cardRef = useRef<HTMLDivElement | HTMLAnchorElement>(null)

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

  const content = (
    <>
      <div className="flex items-center mb-4">
        <div className="social-work-icon mr-3">
          <FaHandsHelping className="text-2xl enhanced-icon" />
        </div>
        <h3 className="text-xl font-bold text-cosmic-purple">{title}</h3>
        {url && (
          <a href={url} target="_blank" rel="noopener noreferrer" className="ml-2 text-[#0ef] hover:text-pink-400">
            <FaExternalLinkAlt />
          </a>
        )}
      </div>
      <p className="text-gray-300">{description}</p>
    </>
  )

  const cardClasses = `enhanced-card rounded-lg p-6 ${isVisible ? "scale-in" : "opacity-0"}`

  if (url) {
    return (
      <div ref={cardRef as React.RefObject<HTMLDivElement>} className={cardClasses}>
        {content}
      </div>
    )
  }

  return (
    <div ref={cardRef as React.RefObject<HTMLDivElement>} className={cardClasses}>
      {content}
    </div>
  )
}

export default SocialWorkCard
