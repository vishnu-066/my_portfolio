"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import type { Project } from "../data/projects"

interface RelatedProjectsProps {
  projects: Project[]
}

const RelatedProjects = ({ projects }: RelatedProjectsProps) => {
  if (projects.length === 0) return null

  return (
    <div className="mt-16 mb-12">
      <h2 className="text-2xl font-bold mb-6 text-white">Related Projects</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className="bg-gray-800 bg-opacity-50 rounded-lg overflow-hidden border border-gray-700 transition-all duration-300 hover:border-[#05d9e8] hover:shadow-lg hover:shadow-[rgba(5,217,232,0.2)]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ y: -5 }}
          >
            <Link href={`/projects/${project.slug}`} className="block">
              <div className="relative h-48 w-full">
                <Image
                  src={project.imageSrc || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-300 text-sm line-clamp-2">{project.description}</p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default RelatedProjects
