"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { FaCertificate, FaEye } from "react-icons/fa"

interface CertificationCardProps {
  title: string
  issuer: string
  date: string
  url?: string
  delay?: number
}

const CertificationCard = ({ title, issuer, date, url, delay = 0 }: CertificationCardProps) => {
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
    <motion.div
      ref={cardRef}
      className={`cosmic-card p-6 ${isVisible ? "scale-in" : "opacity-0"}`}
      initial={{ opacity: 0, y: 20 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: delay / 1000 }}
      whileHover={{ boxShadow: "0 0 15px rgba(5, 217, 232, 0.5)" }}
    >
      <div className="flex items-start">
        <div className="certification-icon mr-4 mt-1 flex-shrink-0">
          <FaCertificate className="text-2xl text-[#05d9e8]" />
        </div>
        <div className="flex-1">
          <div className="flex justify-between items-start">
            <h3 className="text-lg font-bold text-[#05d9e8]">{title}</h3>
            {url && (
              <motion.a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="view-certificate"
                whileHover={{ scale: 1.2, boxShadow: "0 0 10px rgba(5, 217, 232, 0.8)" }}
                aria-label="View certificate"
              >
                <FaEye />
              </motion.a>
            )}
          </div>
          <p className="text-gray-300">{issuer}</p>
          <p className="text-sm text-gray-400">{date}</p>
        </div>
      </div>
    </motion.div>
  )
}

export default CertificationCard
