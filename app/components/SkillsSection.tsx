"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  FaPython,
  FaRProject,
  FaDatabase,
  FaChartBar,
  FaFileExcel,
  FaChartLine,
  FaBrain,
  FaChartArea,
  FaCode,
  FaTools,
  FaLayerGroup,
  FaRobot,
} from "react-icons/fa"
import { SiCplusplus, SiPandas, SiNumpy, SiMysql, SiTableau, SiR } from "react-icons/si"
import SkillCategoryGrid from "./SkillCategoryGrid"
import SectionHeading from "./SectionHeading"

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all")

  // Define skill categories
  const programmingSkills = [
    { name: "C++", icon: SiCplusplus, level: 85 },
    { name: "Python", icon: FaPython, level: 90 },
    { name: "R", icon: FaRProject, level: 80 },
  ]

  const frameworkSkills = [
    { name: "Pandas", icon: SiPandas, level: 85 },
    { name: "NumPy", icon: SiNumpy, level: 80 },
    { name: "ggplot2", icon: FaChartArea, level: 75 },
    { name: "dplyr", icon: SiR, level: 75 },
    { name: "caret", icon: SiR, level: 70 },
  ]

  const toolsSkills = [
    { name: "MySQL", icon: SiMysql, level: 80 },
    { name: "Tableau", icon: SiTableau, level: 75 },
    { name: "Excel", icon: FaFileExcel, level: 90 },
  ]

  const mldsSkills = [
    { name: "Statistical Analysis", icon: FaChartLine, level: 85 },
    { name: "Data Mining", icon: FaDatabase, level: 80 },
    { name: "Predictive Modeling", icon: FaBrain, level: 75 },
    { name: "Data Visualization", icon: FaChartBar, level: 90 },
  ]

  const categories = [
    { id: "all", name: "All Skills", icon: FaCode },
    { id: "programming", name: "Programming", icon: FaCode },
    { id: "frameworks", name: "Frameworks", icon: FaLayerGroup },
    { id: "tools", name: "Tools", icon: FaTools },
    { id: "ml", name: "ML & DS", icon: FaRobot },
  ]

  return (
    <section id="skills" className="section-padding">
      <div className="container mx-auto px-4">
        <SectionHeading title="Skills" icon={<FaChartLine className="text-[#0ef] text-4xl" />} />

        {/* Category filter buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <motion.button
              key={category.id}
              className={`px-4 py-2 rounded-full flex items-center gap-2 transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-gradient-to-r from-[#05d9e8] to-[#ff4ec8] text-white"
                  : "bg-gray-800 bg-opacity-50 text-gray-300 hover:bg-gray-700"
              }`}
              onClick={() => setActiveCategory(category.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <category.icon className="text-sm" />
              {category.name}
            </motion.button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {/* Show all categories or the selected one */}
            {(activeCategory === "all" || activeCategory === "programming") && (
              <SkillCategoryGrid title="Programming Languages" skills={programmingSkills} delay={100} />
            )}

            {(activeCategory === "all" || activeCategory === "frameworks") && (
              <SkillCategoryGrid title="Frameworks & Libraries" skills={frameworkSkills} delay={200} />
            )}

            {(activeCategory === "all" || activeCategory === "tools") && (
              <SkillCategoryGrid title="Tools & Platforms" skills={toolsSkills} delay={300} />
            )}

            {(activeCategory === "all" || activeCategory === "ml") && (
              <SkillCategoryGrid title="Machine Learning & Data Science" skills={mldsSkills} delay={400} />
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}

export default SkillsSection
