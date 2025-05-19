"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { FaGithub, FaLayerGroup, FaExternalLinkAlt } from "react-icons/fa"
import { motion } from "framer-motion"

interface ProjectCardProps {
  title: string
  date: string
  description: string
  technologies: string
  githubUrl: string
  imageSrc: string
  slug: string
}

const ProjectCard = ({ title, date, description, technologies, githubUrl, imageSrc, slug }: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className="project-card bg-gray-800 bg-opacity-50 rounded-lg overflow-hidden border border-gray-700 transition-all duration-500"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{
        y: -10,
        boxShadow: "0 0 25px rgba(5, 217, 232, 0.4)",
        borderColor: "rgba(5, 217, 232, 0.5)",
      }}
      animate={{
        y: [0, -5, 0],
        transition: {
          y: {
            repeat: Number.POSITIVE_INFINITY,
            duration: 3,
            ease: "easeInOut",
          },
        },
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <Link href={`/projects/${slug}`} className="block">
        <div className="project-image relative overflow-hidden">
          <Image
            src={imageSrc || "/placeholder.svg"}
            alt={title}
            width={400}
            height={225}
            className="w-full h-48 object-cover transition-transform duration-700"
            style={{ transform: isHovered ? "scale(1.05)" : "scale(1)" }}
          />
          <div
            className={`absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-${
              isHovered ? "80" : "50"
            } transition-opacity duration-300`}
          ></div>

          <motion.div
            className="absolute bottom-4 right-4 bg-[#05d9e8] rounded-full p-2 text-white"
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: isHovered ? 1 : 0,
              scale: isHovered ? 1 : 0,
            }}
            transition={{ duration: 0.3 }}
          >
            <FaExternalLinkAlt size={14} />
          </motion.div>
        </div>
      </Link>

      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <motion.h3
            className="text-xl font-bold text-[#0ef]"
            animate={{
              textShadow: isHovered ? "0 0 8px rgba(5, 217, 232, 0.7)" : "0 0 0px rgba(5, 217, 232, 0)",
            }}
            transition={{ duration: 0.3 }}
          >
            <Link href={`/projects/${slug}`}>{title}</Link>
          </motion.h3>
          <span className="text-sm text-gray-400 bg-gray-800 px-2 py-1 rounded-full">{date}</span>
        </div>

        <div className="mb-4 text-gray-300 project-description">{description}</div>

        <div className="flex items-center mb-5 text-sm text-gray-400">
          <FaLayerGroup className="mr-2 text-[#ff4ec8]" />
          <div className="tech-tags flex flex-wrap gap-2">
            {technologies.split(", ").map((tech, index) => (
              <span key={index} className="bg-gray-800 px-2 py-1 rounded-md border border-gray-700">
                {tech}
              </span>
            ))}
          </div>
        </div>

        <motion.a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="github-button flex items-center justify-center w-full py-2 px-4 bg-gray-800 rounded-md border border-gray-700 text-white transition-all duration-300"
          whileHover={{
            scale: 1.03,
            boxShadow: "0 0 15px rgba(5, 217, 232, 0.5)",
            borderColor: "#0ef",
          }}
          animate={{
            boxShadow: isHovered ? "0 0 10px rgba(5, 217, 232, 0.3)" : "none",
          }}
        >
          <FaGithub className="mr-2" />
          <span>View on GitHub</span>
        </motion.a>
      </div>
    </motion.div>
  )
}

export default ProjectCard
