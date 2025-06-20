"use client"

import { motion } from "framer-motion"
import { FaGraduationCap, FaUniversity, FaClock } from "react-icons/fa"

interface EducationCardProps {
  institution: string
  degree: string
  score: string
  isLeft?: boolean
  delay?: number
}

const EducationCard = ({ institution, degree, score, isLeft = true, delay = 0 }: EducationCardProps) => {
  return (
    <motion.div
      className={`timeline-item ${isLeft ? "timeline-left" : "timeline-right"}`}
      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: delay / 1000 }}
      viewport={{ once: true }}
    >
      <div className="cosmic-card p-6">
        <div className="flex items-center mb-3">
          <FaGraduationCap className="text-2xl gradient-icon mr-3" />
          <h3 className="text-lg font-bold gradient-text-primary">{institution}</h3>
        </div>

        <div className="flex items-center mb-2 text-gray-300">
          <FaUniversity className="text-sm mr-2 gradient-icon" />
          <p>{degree}</p>
        </div>

        <div className="flex items-center text-gray-400 text-sm">
          <FaClock className="text-sm mr-2 gradient-icon" />
          <p className="gradient-text">{score}</p>
        </div>
      </div>
    </motion.div>
  )
}

export default EducationCard
