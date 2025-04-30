"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { FaTrophy } from "react-icons/fa"

interface AchievementCardProps {
  title: string
  date: string
  description: string
  url?: string
  delay?: number
}

const AchievementCard = ({ title, date, description, url, delay = 0 }: AchievementCardProps) => {
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
      <div className="achievement-icon mr-4 mt-1 flex-shrink-0">
        <FaTrophy className="text-2xl enhanced-icon" />
      </div>
      <div>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
          <h3 className="text-lg font-bold text-neon-pink">{title}</h3>
          <span className="text-sm text-gray-400">{date}</span>
        </div>
        <p className="text-gray-300">{description}</p>
      </div>
    </>
  )

  const cardClasses = `enhanced-card rounded-lg p-6 flex items-start ${isVisible ? "scale-in" : "opacity-0"}`

  if (url) {
    return (
      <a
        ref={cardRef as React.RefObject<HTMLAnchorElement>}
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className={cardClasses}
      >
        {content}
      </a>
    )
  }

  return (
    <div ref={cardRef as React.RefObject<HTMLDivElement>} className={cardClasses}>
      {content}
    </div>
  )
}

export default AchievementCard
