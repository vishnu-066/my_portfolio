"use client"

import { motion } from "framer-motion"
import { FaTrophy, FaExternalLinkAlt } from "react-icons/fa"

interface AchievementCardProps {
  title: string
  date: string
  description: string
  url?: string
  delay?: number
}

const AchievementCard = ({ title, date, description, url, delay = 0 }: AchievementCardProps) => {
  return (
    <motion.div
      className="achievement-badge"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay / 1000 }}
      viewport={{ once: true }}
      whileHover={{
        y: -8,
        boxShadow: "0 15px 30px rgba(255, 42, 109, 0.3), 0 5px 15px rgba(5, 217, 232, 0.2)",
      }}
    >
      <div className="flex items-center mb-4">
        <div className="achievement-icon mr-3">
          <FaTrophy className="text-2xl gradient-icon" />
        </div>
        <h3 className="text-lg font-bold gradient-text-primary">{title}</h3>
        {url && (
          <motion.a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 gradient-icon hover:scale-110 transition-transform"
            whileHover={{ scale: 1.2 }}
          >
            <FaExternalLinkAlt />
          </motion.a>
        )}
      </div>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
        <span className="text-sm gradient-text">{date}</span>
      </div>
      <p className="text-gray-300">{description}</p>
    </motion.div>
  )
}

export default AchievementCard
