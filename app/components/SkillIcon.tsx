import type React from "react"
import type { IconType } from "react-icons"

interface SkillIconProps {
  name: string
  icon: IconType
  level?: number
}

const SkillIcon = ({ name, icon: Icon, level = 80 }: SkillIconProps) => {
  return (
    <div className="mb-6">
      <div className="flex items-center mb-2">
        <Icon className="text-2xl mr-2 skill-icon text-pink-400" />
        <span className="text-sm font-medium">{name}</span>
      </div>
      <div className="skill-bar">
        <div className="skill-progress" style={{ "--skill-level": `${level}%` } as React.CSSProperties}></div>
      </div>
    </div>
  )
}

export default SkillIcon
