"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { FaGithub, FaExternalLinkAlt, FaArrowLeft } from "react-icons/fa"
import type { Project } from "../data/projects"

interface ProjectDetailHeaderProps {
  project: Project
}

const ProjectDetailHeader = ({ project }: ProjectDetailHeaderProps) => {
  return (
    <div className="relative">
      <div className="absolute top-0 left-0 z-10 p-4">
        <Link
          href="/#projects"
          className="flex items-center gap-2 text-white bg-gray-900 bg-opacity-50 backdrop-blur-sm px-4 py-2 rounded-full transition-all hover:bg-opacity-70"
        >
          <FaArrowLeft /> Back to Projects
        </Link>
      </div>

      <div className="relative h-[50vh] min-h-[400px] w-full overflow-hidden">
        <Image
          src={project.imageSrc || "/placeholder.svg"}
          alt={project.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[rgba(5,8,22,0.7)] to-[#050816]"></div>

        <div className="absolute bottom-0 left-0 w-full p-8 z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{project.title}</h1>

            <div className="flex flex-wrap items-center gap-4 mb-6">
              <span className="bg-[#05d9e8] bg-opacity-20 text-[#05d9e8] px-3 py-1 rounded-full text-sm">
                {project.date}
              </span>
              <span className="bg-[#ff4ec8] bg-opacity-20 text-[#ff4ec8] px-3 py-1 rounded-full text-sm capitalize">
                {project.category.replace("-", " ")}
              </span>
            </div>

            <div className="flex flex-wrap gap-4">
              <motion.a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-md transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaGithub /> View on GitHub
              </motion.a>

              {project.liveUrl && (
                <motion.a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-[#05d9e8] hover:bg-opacity-80 text-white px-4 py-2 rounded-md transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaExternalLinkAlt /> Live Demo
                </motion.a>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetailHeader
