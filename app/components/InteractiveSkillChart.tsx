"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import type { IconType } from "react-icons"

interface InteractiveSkillChartProps {
  name: string
  icon: IconType
  level: number
  color?: string
  index?: number
}

const InteractiveSkillChart = ({
  name,
  icon: Icon,
  level,
  color = "#05d9e8",
  index = 0,
}: InteractiveSkillChartProps) => {
  const [isHovered, setIsHovered] = useState(false)
  const radius = 40
  const circumference = 2 * Math.PI * radius
  const strokeDashoffset = circumference - (level / 100) * circumference

  // Generate a gradient ID that's unique for each skill
  const gradientId = `skillGradient-${name.replace(/\s+/g, "-").toLowerCase()}`

  return (
    <motion.div
      className="skill-chart-container"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative flex flex-col items-center justify-center p-4">
        <svg width="120" height="120" viewBox="0 0 120 120" className="skill-chart">
          <defs>
            <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#05d9e8" />
              <stop offset="100%" stopColor="#ff4ec8" />
            </linearGradient>
          </defs>

          {/* Background circle */}
          <circle cx="60" cy="60" r={radius} fill="transparent" stroke="rgba(255, 255, 255, 0.1)" strokeWidth="8" />

          {/* Progress circle with animation */}
          <motion.circle
            cx="60"
            cy="60"
            r={radius}
            fill="transparent"
            stroke={`url(#${gradientId})`}
            strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            style={{
              transformOrigin: "center",
              transform: "rotate(-90deg)",
              filter: isHovered ? "drop-shadow(0 0 8px rgba(5, 217, 232, 0.8))" : "none",
            }}
          />

          {/* Percentage text */}
          <motion.text
            x="60"
            y="60"
            textAnchor="middle"
            dominantBaseline="middle"
            className="skill-percentage"
            fill={isHovered ? "#fff" : "#ccc"}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            style={{
              fontSize: "1.5rem",
              fontWeight: "bold",
              filter: isHovered ? "drop-shadow(0 0 5px rgba(255, 255, 255, 0.8))" : "none",
            }}
          >
            {level}%
          </motion.text>
        </svg>

        <div className="skill-icon-container">
          <motion.div
            className="skill-icon-wrapper"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.2 + index * 0.1 }}
            whileHover={{ scale: 1.1, rotate: [0, -10, 10, -5, 5, 0] }}
          >
            <Icon
              className="skill-icon"
              style={{
                color: isHovered ? "#ff4ec8" : color,
                filter: isHovered ? "drop-shadow(0 0 8px rgba(255, 78, 200, 0.8))" : "none",
                transition: "all 0.3s ease",
              }}
              size={28}
            />
          </motion.div>
        </div>

        <motion.h3
          className="skill-name mt-4 text-center font-medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
          style={{
            color: isHovered ? "#fff" : "#ccc",
            textShadow: isHovered ? "0 0 10px rgba(255, 255, 255, 0.5)" : "none",
          }}
        >
          {name}
        </motion.h3>

        {/* Skill details that appear on hover */}
        <motion.div
          className="skill-details mt-2 text-center text-xs"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: isHovered ? 1 : 0, height: isHovered ? "auto" : 0 }}
          transition={{ duration: 0.3 }}
        >
          <p className="text-gray-400">
            {level < 50 && "Familiar"}
            {level >= 50 && level < 70 && "Proficient"}
            {level >= 70 && level < 85 && "Advanced"}
            {level >= 85 && "Expert"}
          </p>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default InteractiveSkillChart
