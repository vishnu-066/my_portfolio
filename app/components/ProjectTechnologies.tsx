"use client"

import { FaPython, FaDatabase, FaChartLine, FaCode, FaHtml5, FaCss3Alt, FaJs } from "react-icons/fa"
import { SiCplusplus, SiR, SiPandas } from "react-icons/si"
import type { ProjectTechnology } from "../data/projects"

interface ProjectTechnologiesProps {
  technologies: ProjectTechnology[]
}

const getTechIcon = (name: string) => {
  const lower = name.toLowerCase()
  if (lower === "c++") return SiCplusplus
  if (lower === "r" || lower === "caret" || lower === "dplyr") return SiR
  if (lower === "python") return FaPython
  if (lower === "pandas") return SiPandas
  if (lower === "ggplot2" || lower === "matplotlib" || lower === "seaborn") return FaChartLine
  if (lower === "html") return FaHtml5
  if (lower === "css") return FaCss3Alt
  if (lower === "javascript") return FaJs
  if (lower.includes("data")) return FaDatabase
  return FaCode
}

export default function ProjectTechnologies({ technologies }: ProjectTechnologiesProps) {
  return (
    <div className="floating-card border border-white/10 bg-[#121212]/90 p-7 mb-6 text-cream shadow-[0_15px_35px_rgba(0,0,0,0.5)]">
      <div className="text-[10px] font-bold font-mono tracking-widest uppercase text-cream/40 mb-4">
        TECHNOLOGY STACK
      </div>

      <div className="flex flex-wrap gap-2.5">
        {technologies.map((tech) => {
          const IconComponent = getTechIcon(tech.name)
          return (
            <div
              key={tech.name}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/15 bg-white/[0.03] hover:border-cream hover:bg-cream hover:text-[#0a0a0a] text-[11px] font-mono tracking-wider uppercase text-cream/80 transition-all duration-300 backdrop-blur-md active:scale-95"
            >
              <IconComponent size={13} aria-hidden="true" />
              <span>{tech.name}</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}
