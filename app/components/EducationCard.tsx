"use client"

import { useState, useEffect, useRef } from "react"
import { FaGraduationCap } from "react-icons/fa"

interface EducationCardProps {
  institution: string
  degree: string
  score: string
  delay?: number
}

const EducationCard = ({ institution, degree, score, delay = 0 }: EducationCardProps) => {
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
    <div
      ref={cardRef}
      className={`enhanced-card rounded-lg p-6 flex items-start ${isVisible ? "scale-in" : "opacity-0"}`}
    >
      <div className="education-icon mr-4 mt-1 flex-shrink-0">
        <FaGraduationCap className="text-2xl enhanced-icon" />
      </div>
      <div>
        <h3 className="text-lg font-bold text-neon-blue">{institution}</h3>
        <p className="text-gray-300">{degree}</p>
        <p className="text-sm text-gray-400">{score}</p>
      </div>
    </div>
  )
}

export default EducationCard
