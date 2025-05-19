"use client"

import { motion } from "framer-motion"
import type { ProjectTechnology } from "../data/projects"

interface ProjectTechnologiesProps {
  technologies: ProjectTechnology[]
}

const ProjectTechnologies = ({ technologies }: ProjectTechnologiesProps) => {
  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold mb-6 text-white">Technologies Used</h2>

      <div className="flex flex-wrap gap-4">
        {technologies.map((tech, index) => (
          <motion.div
            key={tech.name}
            className="tech-badge flex items-center gap-2 bg-gray-800 bg-opacity-50 border border-gray-700 px-4 py-2 rounded-full"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 15px rgba(5, 217, 232, 0.3)",
              borderColor: "rgba(5, 217, 232, 0.5)",
            }}
          >
            <tech.icon style={{ color: tech.color || "#05d9e8" }} />
            <span>{tech.name}</span>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default ProjectTechnologies
