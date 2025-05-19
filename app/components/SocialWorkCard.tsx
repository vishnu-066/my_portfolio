"use client"

import { motion } from "framer-motion"
import { FaHandsHelping, FaExternalLinkAlt } from "react-icons/fa"

interface SocialWorkCardProps {
  title: string
  description: string
  url?: string
  delay?: number
}

const SocialWorkCard = ({ title, description, url, delay = 0 }: SocialWorkCardProps) => {
  return (
    <motion.div
      className="cosmic-card p-6"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay / 1000 }}
      viewport={{ once: true }}
      whileHover={{
        y: -10,
        boxShadow: "0 0 20px rgba(5, 217, 232, 0.3)",
        borderColor: "rgba(5, 217, 232, 0.5)",
      }}
    >
      <div className="flex items-center mb-4">
        <div className="social-work-icon mr-3">
          <FaHandsHelping className="text-2xl text-[#05d9e8]" />
        </div>
        <h3 className="text-xl font-bold text-[#05d9e8]">{title}</h3>
        {url && (
          <motion.a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 text-[#05d9e8] hover:text-[#ff4ec8]"
            whileHover={{ scale: 1.2 }}
          >
            <FaExternalLinkAlt />
          </motion.a>
        )}
      </div>
      <p className="text-gray-300">{description}</p>
    </motion.div>
  )
}

export default SocialWorkCard
