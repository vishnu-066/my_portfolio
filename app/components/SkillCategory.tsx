import SkillIcon from "./SkillIcon"
import FadeInSection from "./FadeInSection"
import type { IconType } from "react-icons"

interface SkillCategoryProps {
  title: string
  skills: {
    name: string
    icon: IconType
    level: number
  }[]
  delay?: number
}

const SkillCategory = ({ title, skills, delay = 0 }: SkillCategoryProps) => {
  return (
    <FadeInSection delay={delay}>
      <div className="skill-category">
        <h3 className="text-xl font-bold mb-6 text-center">{title}</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill) => (
            <SkillIcon key={skill.name} name={skill.name} icon={skill.icon} level={skill.level} />
          ))}
        </div>
      </div>
    </FadeInSection>
  )
}

export default SkillCategory
