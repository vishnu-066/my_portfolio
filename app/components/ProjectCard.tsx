import Image from "next/image"
import { FaGithub } from "react-icons/fa"
import NeonButton from "./NeonButton"

interface ProjectCardProps {
  title: string
  date: string
  description: string
  technologies: string
  githubUrl: string
  imageSrc: string
}

const ProjectCard = ({ title, date, description, technologies, githubUrl, imageSrc }: ProjectCardProps) => {
  return (
    <div className="card bg-gray-800 bg-opacity-50 rounded-lg p-6 border border-gray-700">
      <div className="project-image mb-4">
        <Image
          src={imageSrc || "/placeholder.svg"}
          alt={title}
          width={400}
          height={225}
          className="w-full h-48 object-cover rounded-md"
        />
      </div>
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-bold text-pink-400">{title}</h3>
        <span className="text-sm text-gray-400">{date}</span>
      </div>
      <p className="text-gray-300 mb-4">{description}</p>
      <p className="text-sm text-gray-400 mb-4">
        <span className="font-semibold">Technologies:</span> {technologies}
      </p>
      <NeonButton href={githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center">
        <FaGithub className="mr-2" /> View on GitHub
      </NeonButton>
    </div>
  )
}

export default ProjectCard
