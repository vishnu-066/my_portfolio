"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react"
import type { Project } from "../data/projects"

interface ProjectDetailHeaderProps {
  project: Project
}

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
}

export default function ProjectDetailHeader({ project }: ProjectDetailHeaderProps) {
  return (
    <header className="relative w-full bg-[#0a0a0a] text-cream border-b border-white/10 pt-6 pb-16 px-6 md:px-16 font-hn">
      <div className="max-w-[1440px] mx-auto">
        {/* SUB-NAV BAR STYLE */}
        <motion.div
          initial="initial"
          animate="animate"
          variants={fadeUp}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex flex-wrap justify-between items-start gap-6 pb-12 border-b border-white/10 text-[10px] md:text-[11px] font-mono tracking-[0.2em] uppercase text-cream/70"
        >
          {/* Left column */}
          <div className="w-auto md:w-[15%] leading-relaxed">
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 font-semibold text-cream hover:opacity-70 transition-opacity active:scale-95"
            >
              <ArrowLeft size={14} strokeWidth={1.5} />
              <span>Back to Index</span>
            </Link>
            <div className="text-cream/40 mt-1">CASE STUDY // SYS</div>
          </div>

          {/* Arrow separator */}
          <div className="hidden md:flex w-[5%] justify-center pt-1">
            <ArrowRight size={14} strokeWidth={1} className="text-cream/30" />
          </div>

          {/* Center column */}
          <div className="flex-1 md:w-[32%] text-cream/60 leading-relaxed font-mono">
            {project.description}
          </div>

          {/* Arrow separator */}
          <div className="hidden md:flex w-[5%] justify-center pt-1">
            <ArrowRight size={14} strokeWidth={1} className="text-cream/30" />
          </div>

          {/* Right column */}
          <div className="hidden md:flex flex-col gap-1.5 w-[15%] text-cream/60">
            <Link href="/#about" className="hover:text-cream transition-colors">
              01 // About
            </Link>
            <Link href="/#projects" className="hover:text-cream transition-colors">
              02 // Projects
            </Link>
            <Link href="/#skills" className="hover:text-cream transition-colors">
              03 // Skills
            </Link>
            <Link href="/#contact-us" className="hover:text-cream transition-colors">
              06 // Contact
            </Link>
          </div>
        </motion.div>

        {/* Hero Title & Actions Grid */}
        <div className="pt-14 grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-8 space-y-6"
          >
            <div className="flex items-center gap-3 text-xs font-mono">
              <span className="text-cream/50">02</span>
              <span className="w-16 h-[1px] bg-cream/30 block" />
              <span className="text-[10px] tracking-[0.2em] uppercase text-cream/50">
                {project.category.replace("-", " ")} // {project.date}
              </span>
            </div>

            <h1 className="text-[2.6rem] sm:text-[3.5rem] md:text-[4.6rem] font-medium tracking-tight leading-[1.02] text-cream uppercase">
              {project.title}
            </h1>
          </motion.div>

          {/* Right Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="lg:col-span-4 flex flex-wrap lg:justify-end gap-3"
          >
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden inline-flex items-center gap-3 bg-cream text-[#0a0a0a] px-7 py-3.5 rounded-full border border-transparent shadow-[0_4px_20px_rgba(239,238,233,0.15)] active:scale-95 transition-all duration-300"
            >
              <span className="absolute inset-0 bg-white -translate-x-[101%] group-hover:translate-x-0 transition-transform duration-500 ease-out" />
              <span className="relative z-10 text-[12px] font-mono tracking-[0.16em] uppercase font-semibold text-[#0a0a0a]">
                Source Repository
              </span>
              <ArrowUpRight
                size={14}
                className="relative z-10 text-[#0a0a0a] group-hover:scale-110 transition-transform"
              />
            </a>

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-white/20 bg-white/[0.03] text-[12px] font-mono tracking-[0.16em] uppercase text-cream hover:bg-cream hover:text-[#0a0a0a] active:scale-95 transition-all duration-300"
              >
                <span>Live Deployment</span>
                <ArrowUpRight size={14} />
              </a>
            )}
          </motion.div>
        </div>
      </div>
    </header>
  )
}
