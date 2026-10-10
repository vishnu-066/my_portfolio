"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import type { Project } from "../data/projects"

interface RelatedProjectsProps {
  projects: Project[]
}

export default function RelatedProjects({ projects }: RelatedProjectsProps) {
  if (projects.length === 0) return null

  return (
    <section className="mt-20 pt-16 border-t border-white/10 font-hn">
      <div className="flex items-center justify-between mb-10">
        <div>
          <div className="text-[10px] font-mono tracking-[0.24em] uppercase text-cream/40 mb-2">
            [ 02.B ] ARCHIVE CONTINUATION
          </div>
          <h2 className="text-2xl md:text-3xl font-medium tracking-tight text-cream">
            Related Engineering Case Studies
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((project, index) => (
          <Link
            key={project.id}
            href={`/projects/${project.slug}`}
            className="floating-card group border border-white/10 bg-[#121212]/90 hover:border-cream/40 hover:bg-[#181818] transition-colors duration-300 flex flex-col justify-between shadow-[0_15px_35px_rgba(0,0,0,0.5)] active:scale-[0.99]"
          >
            <div className="relative h-56 w-full overflow-hidden bg-[#0a0a0a] border-b border-white/10">
              <Image
                src={project.imageSrc || "/placeholder.svg"}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, 48vw"
                className="object-cover opacity-85 grayscale contrast-110 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-105"
              />
            </div>

            <div className="p-7 md:p-8">
              <div className="flex items-center justify-between text-[10px] font-mono tracking-widest uppercase text-cream/40 group-hover:text-cream/70 mb-3 transition-colors">
                <span>0{index + 1} // CASE STUDY</span>
                <span>{project.date}</span>
              </div>

              <div className="flex items-center justify-between gap-3 mb-2">
                <h3 className="text-xl font-medium tracking-tight text-cream">
                  {project.title}
                </h3>
                <ArrowUpRight
                  size={18}
                  strokeWidth={1.5}
                  className="text-cream/40 group-hover:text-cream transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 flex-shrink-0"
                />
              </div>

              <p className="text-[13px] text-cream/65 group-hover:text-cream/85 line-clamp-2 leading-[1.65] transition-colors">
                {project.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
