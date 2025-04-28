import { FaTrophy } from "react-icons/fa"

interface AchievementCardProps {
  title: string
  date: string
  description: string
  url?: string
}

const AchievementCard = ({ title, date, description, url }: AchievementCardProps) => {
  const content = (
    <>
      <FaTrophy className="text-pink-400 text-2xl mr-4 mt-1 flex-shrink-0" />
      <div>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
          <h3 className="text-lg font-bold">{title}</h3>
          <span className="text-sm text-gray-400">{date}</span>
        </div>
        <p className="text-gray-300">{description}</p>
      </div>
    </>
  )

  if (url) {
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="card bg-gray-800 bg-opacity-50 rounded-lg p-6 border border-gray-700 flex items-start hover:border-pink-400 transition-colors"
      >
        {content}
      </a>
    )
  }

  return (
    <div className="card bg-gray-800 bg-opacity-50 rounded-lg p-6 border border-gray-700 flex items-start">
      {content}
    </div>
  )
}

export default AchievementCard
