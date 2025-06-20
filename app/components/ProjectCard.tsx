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
      className="project-card transition-all duration-500"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{
        y: -10,
        boxShadow: "0 0 35px rgba(5, 217, 232, 0.4), 0 0 70px rgba(255, 78, 200, 0.2)",
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
            className="absolute bottom-4 right-4 rounded-full p-2 text-white"
            style={{
              background: "linear-gradient(135deg, #05d9e8 0%, #ff4ec8 100%)",
            }}
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
            className="text-xl font-bold gradient-text-primary"
            animate={{
              textShadow: isHovered ? "0 0 8px rgba(5, 217, 232, 0.7)" : "0 0 0px rgba(5, 217, 232, 0)",
            }}
            transition={{ duration: 0.3 }}
          >
            <Link href={`/projects/${slug}`}>{title}</Link>
          </motion.h3>
          <span className="text-sm gradient-text bg-gray-800 px-2 py-1 rounded-full">{date}</span>
        </div>

        <div className="mb-4 text-gray-300 project-description">{description}</div>

        <div className="flex items-center mb-5 text-sm text-gray-400">
          <FaLayerGroup className="mr-2 gradient-icon" />
          <div className="tech-tags flex flex-wrap gap-2">
            {technologies.split(", ").map((tech, index) => (
              <span
                key={index}
                className="bg-gray-800 px-2 py-1 rounded-md border border-gray-700 hover:border-[#05d9e8] transition-colors"
                style={{
                  background: isHovered
                    ? "linear-gradient(135deg, rgba(5, 217, 232, 0.1) 0%, rgba(255, 78, 200, 0.1) 100%)"
                    : "",
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <motion.a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="github-button flex items-center justify-center w-full py-2 px-4 rounded-md border border-gray-700 text-white transition-all duration-300"
          style={{
            background: isHovered
              ? "linear-gradient(135deg, rgba(5, 217, 232, 0.2) 0%, rgba(255, 78, 200, 0.2) 100%)"
              : "rgba(5, 8, 22, 0.8)",
          }}
          whileHover={{
            scale: 1.03,
            boxShadow: "0 0 20px rgba(5, 217, 232, 0.5), 0 0 40px rgba(255, 78, 200, 0.3)",
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
