import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { getProjectBySlug, getRelatedProjects, getAllProjects } from "@/app/lib/projects"
import ProjectDetailHeader from "@/app/components/ProjectDetailHeader"
import ProjectTechnologies from "@/app/components/ProjectTechnologies"
import ProjectGallery from "@/app/components/ProjectGallery"
import RelatedProjects from "@/app/components/RelatedProjects"
import MobileDotMenu from "@/app/components/MobileDotMenu"

export async function generateStaticParams() {
  const allProjects = getAllProjects()
  return allProjects.map((project) => ({
    slug: project.slug,
  }))
}

interface ProjectPageProps {
  params: Promise<{ slug: string }> | { slug: string }
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const resolvedParams = await Promise.resolve(params)
  const project = getProjectBySlug(resolvedParams.slug)

  if (!project) {
    notFound()
  }

  const relatedProjects = getRelatedProjects(project)

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-cream font-hn selection:bg-cream selection:text-[#0a0a0a]">
      {/* Mobile Floating Dot Menu */}
      <MobileDotMenu />

      <ProjectDetailHeader project={project} />

      <div className="max-w-7xl mx-auto px-6 md:px-10 py-14 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Main Content */}
          <div className="lg:col-span-8 space-y-12">
            {/* Project Overview */}
            <section className="floating-card border border-white/10 bg-[#121212]/90 p-8 md:p-10 shadow-[0_15px_35px_rgba(0,0,0,0.5)]">
              <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
                <span className="text-[10px] font-mono tracking-[0.24em] uppercase text-cream/40 font-semibold">
                  [ 01 ] Architecture &amp; Overview
                </span>
                <span className="text-[10px] font-mono tracking-[0.2em] uppercase text-cream/30">
                  SYS // CASE STUDY
                </span>
              </div>
              <h2 className="text-2xl md:text-3xl font-medium tracking-tight text-cream mb-4">
                Executive Summary
              </h2>
              <p className="text-sm md:text-base text-cream/70 leading-relaxed font-normal">
                {project.longDescription}
              </p>
            </section>

            {/* Interactive Sand-Dissolve Gallery */}
            <ProjectGallery images={project.gallery} />

            {/* Key Features */}
            <section className="floating-card border border-white/10 bg-[#121212]/90 p-8 md:p-10 shadow-[0_15px_35px_rgba(0,0,0,0.5)]">
              <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
                <span className="text-[10px] font-mono tracking-[0.24em] uppercase text-cream/40 font-semibold">
                  [ 02 ] Core Capabilities
                </span>
                <span className="text-[10px] font-mono tracking-[0.2em] uppercase text-cream/30">
                  {String(project.features.length).padStart(2, "0")} MODULES
                </span>
              </div>
              <h2 className="text-2xl font-medium tracking-tight text-cream mb-6">
                Key Features &amp; Specifications
              </h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/10 border border-white/10">
                {project.features.map((feature, index) => (
                  <li
                    key={index}
                    className="bg-[#0e0e10] p-5 flex items-start gap-3.5 hover:bg-[#161619] transition-colors"
                  >
                    <span className="text-[10px] font-mono tracking-[0.2em] text-cream/40 mt-0.5 shrink-0">
                      {String(index + 1).padStart(2, "0")}.
                    </span>
                    <span className="text-xs md:text-sm text-cream/80 leading-relaxed">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Technical Challenges & Solutions */}
            {project.challenges && project.solutions && (
              <section className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 border border-white/10">
                <div className="bg-[#121214] p-8">
                  <div className="text-[10px] font-mono tracking-[0.2em] uppercase text-cream/40 mb-2">
                    [ 03.A ] Bottlenecks
                  </div>
                  <h3 className="text-xl font-medium tracking-tight text-cream mb-6 pb-4 border-b border-white/10">
                    Technical Challenges
                  </h3>
                  <ul className="space-y-4">
                    {project.challenges.map((challenge, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 bg-cream mt-2 shrink-0" />
                        <span className="text-xs md:text-sm text-cream/70 leading-relaxed">
                          {challenge}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-[#080808] text-cream p-8">
                  <div className="text-[10px] font-mono tracking-[0.2em] uppercase text-cream/40 mb-2">
                    [ 03.B ] Resolution
                  </div>
                  <h3 className="text-xl font-medium tracking-tight text-cream mb-6 pb-4 border-b border-white/10">
                    Engineering Solutions
                  </h3>
                  <ul className="space-y-4">
                    {project.solutions.map((solution, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 bg-cream mt-2 shrink-0 shadow-[0_0_8px_#efeee9]" />
                        <span className="text-xs md:text-sm text-cream/90 leading-relaxed">
                          {solution}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {/* Key Takeaways & Learnings */}
            {project.learnings && (
              <section className="floating-card border border-white/10 bg-[#121212]/90 p-8 md:p-10 shadow-[0_15px_35px_rgba(0,0,0,0.5)]">
                <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
                  <span className="text-[10px] font-mono tracking-[0.24em] uppercase text-cream/40 font-semibold">
                    [ 04 ] Retrospective
                  </span>
                  <span className="text-[10px] font-mono tracking-[0.2em] uppercase text-cream/30">
                    OUTCOMES
                  </span>
                </div>
                <h2 className="text-2xl font-medium tracking-tight text-cream mb-6">
                  Key Takeaways &amp; Learnings
                </h2>
                <ul className="space-y-3.5">
                  {project.learnings.map((learning, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-4 pb-3.5 border-b border-white/5 last:border-b-0 last:pb-0"
                    >
                      <span className="text-[10px] font-mono tracking-[0.2em] uppercase text-cream/40 mt-1 shrink-0">
                        [{String(index + 1).padStart(2, "0")}]
                      </span>
                      <span className="text-xs md:text-sm text-cream/80 leading-relaxed">
                        {learning}
                      </span>
                    </li>
                  ))}
                </ul>
              </section>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4">
            <div className="sticky top-24 space-y-8">
              <ProjectTechnologies technologies={project.technologies} />

              <div className="floating-card border border-white/10 bg-[#121212]/90 p-6 md:p-8 shadow-[0_15px_35px_rgba(0,0,0,0.5)]">
                <div className="text-[10px] font-mono tracking-[0.2em] uppercase text-cream/40 mb-2">
                  [ ARCHIVE RECORD ]
                </div>
                <h3 className="text-lg font-medium tracking-tight text-cream mb-6 pb-4 border-b border-white/10">
                  Project Metadata
                </h3>

                <div className="space-y-4 text-xs">
                  <div className="pb-3.5 border-b border-white/10 flex justify-between items-center">
                    <span className="font-mono uppercase tracking-[0.16em] text-cream/40 text-[10px]">
                      Timeline
                    </span>
                    <span className="text-cream font-mono font-medium">
                      {project.date}
                    </span>
                  </div>

                  <div className="pb-3.5 border-b border-white/10 flex justify-between items-center">
                    <span className="font-mono uppercase tracking-[0.16em] text-cream/40 text-[10px]">
                      Domain
                    </span>
                    <span className="text-cream font-mono uppercase tracking-[0.12em] text-[11px]">
                      {project.category.replace("-", " ")}
                    </span>
                  </div>

                  <div className="pb-3.5 border-b border-white/10 flex justify-between items-center">
                    <span className="font-mono uppercase tracking-[0.16em] text-cream/40 text-[10px]">
                      Repository
                    </span>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-cream hover:opacity-75 font-mono uppercase tracking-[0.14em] text-[10px] font-semibold transition-opacity active:scale-95"
                    >
                      GitHub Source <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>

                  {project.liveUrl && (
                    <div className="flex justify-between items-center pt-1">
                      <span className="font-mono uppercase tracking-[0.16em] text-cream/40 text-[10px]">
                        Deployment
                      </span>
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-cream hover:opacity-75 font-mono uppercase tracking-[0.14em] text-[10px] font-semibold transition-opacity active:scale-95"
                      >
                        Live Production <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  )}
                </div>

                <div className="mt-8 pt-6 border-t border-white/10">
                  <Link
                    href="/#contact-us"
                    className="w-full inline-flex items-center justify-between border border-cream/30 bg-cream text-[#0a0a0a] px-5 py-3 text-[10px] font-mono tracking-[0.2em] uppercase font-semibold hover:bg-white active:scale-95 transition-all shadow-[0_4px_15px_rgba(239,238,233,0.15)]"
                  >
                    <span>Discuss This Architecture</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <RelatedProjects projects={relatedProjects} />
      </div>
    </main>
  )
}
