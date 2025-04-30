"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { FaCertificate } from "react-icons/fa"

interface CertificationCardProps {
  title: string
  issuer: string
  date: string
  url?: string
  delay?: number
}

const CertificationCard = ({ title, issuer, date, url, delay = 0 }: CertificationCardProps) => {
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
      <div className="certification-icon mr-4 mt-1 flex-shrink-0">
        <FaCertificate className="text-2xl enhanced-icon" />
      </div>
      <div className="flex-1">
        <h3 className="text-lg font-bold text-cosmic-teal">{title}</h3>
        <p className="text-gray-300">{issuer}</p>
        <p className="text-sm text-gray-400">{date}</p>
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

export default CertificationCard
