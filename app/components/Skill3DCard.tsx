import type React from "react"
import type { IconType } from "react-icons"

interface Skill3DCardProps {
  name: string
  icon: IconType
  level?: number
}

const Skill3DCard = ({ name, icon: Icon, level = 80 }: Skill3DCardProps) => {
  return (
    <div className="skill-card bg-opacity-20 bg-gray-800 p-4 rounded-lg border border-gray-700 flex flex-col items-center justify-center mb-4 hover:shadow-lg transition-all duration-300">
      <Icon className="text-3xl mb-3 skill-icon text-blue-400" />
      <h3 className="text-sm font-medium text-center mb-2">{name}</h3>
      <div className="w-full mt-2">
        <div className="skill-bar">
          <div className="skill-progress" style={{ "--skill-level": `${level}%` } as React.CSSProperties}></div>
        </div>
        <div className="text-xs text-right text-gray-400">{level}%</div>
      </div>
    </div>
  )
}

export default Skill3DCard
