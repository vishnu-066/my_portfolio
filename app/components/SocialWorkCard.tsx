import { FaHandsHelping } from "react-icons/fa"

interface SocialWorkCardProps {
  title: string
  description: string
}

const SocialWorkCard = ({ title, description }: SocialWorkCardProps) => {
  return (
    <div className="card bg-gray-800 bg-opacity-50 rounded-lg p-6 border border-gray-700">
      <div className="flex items-center mb-4">
        <FaHandsHelping className="text-pink-400 text-2xl mr-3" />
        <h3 className="text-xl font-bold">{title}</h3>
      </div>
      <p className="text-gray-300">{description}</p>
    </div>
  )
}

export default SocialWorkCard
