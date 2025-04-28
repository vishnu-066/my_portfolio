import { FaGraduationCap } from "react-icons/fa"

interface EducationCardProps {
  institution: string
  degree: string
  score: string
}

const EducationCard = ({ institution, degree, score }: EducationCardProps) => {
  return (
    <div className="card bg-gray-800 bg-opacity-50 rounded-lg p-6 border border-gray-700 flex items-start">
      <FaGraduationCap className="text-pink-400 text-2xl mr-4 mt-1 flex-shrink-0" />
      <div>
        <h3 className="text-lg font-bold">{institution}</h3>
        <p className="text-gray-300">{degree}</p>
        <p className="text-sm text-gray-400">{score}</p>
      </div>
    </div>
  )
}

export default EducationCard
