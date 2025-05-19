"use client"

import { motion } from "framer-motion"
import InteractiveSkillChart from "./InteractiveSkillChart"
import type { IconType } from "react-icons"

interface SkillCategoryGridProps {
  title: string
  skills: {
    name: string
    icon: IconType
    level: number
  }[]
  delay?: number
}

const SkillCategoryGrid = ({ title, skills, delay = 0 }: SkillCategoryGridProps) => {
  return (
    <motion.div
      className="skill-category mb-16"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay / 1000 }}
      viewport={{ once: true }}
    >
      <motion.h3
        className="text-2xl font-bold mb-8 text-center relative inline-block"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: (delay + 100) / 1000 }}
        viewport={{ once: true }}
      >
        {title}
        <motion.span
          className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-[#05d9e8] to-[#ff4ec8]"
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          transition={{ duration: 0.8, delay: (delay + 300) / 1000 }}
          viewport={{ once: true }}
        ></motion.span>
      </motion.h3>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {skills.map((skill, index) => (
          <InteractiveSkillChart
            key={skill.name}
            name={skill.name}
            icon={skill.icon}
            level={skill.level}
            index={index}
          />
        ))}
      </div>
    </motion.div>
  )
}

export default SkillCategoryGrid
