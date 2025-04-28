"use client"

import type React from "react"

import { useRef, useEffect, useState } from "react"

interface FadeInSectionProps {
  children: React.ReactNode
  delay?: number
}

const FadeInSection = ({ children, delay = 0 }: FadeInSectionProps) => {
  const [isVisible, setVisible] = useState(false)
  const domRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setVisible(true)
          }, delay)
        }
      })
    })

    const { current } = domRef
    if (current) {
      observer.observe(current)
    }

    return () => {
      if (current) {
        observer.unobserve(current)
      }
    }
  }, [delay])

  return (
    <div ref={domRef} className={`fade-in ${isVisible ? "visible" : ""}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  )
}

export default FadeInSection
