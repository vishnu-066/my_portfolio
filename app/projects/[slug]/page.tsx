import { notFound } from "next/navigation"
import { getProjectBySlug, getRelatedProjects } from "@/app/lib/projects"
import ProjectDetailHeader from "@/app/components/ProjectDetailHeader"
import ProjectTechnologies from "@/app/components/ProjectTechnologies"
import ProjectGallery from "@/app/components/ProjectGallery"
import RelatedProjects from "@/app/components/RelatedProjects"

interface ProjectPageProps {
  params: {
    slug: string
  }
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = getProjectBySlug(params.slug)

  if (!project) {
    notFound()
  }

  const relatedProjects = getRelatedProjects(project)

  return (
    <main className="min-h-screen bg-[#050816]">
      <ProjectDetailHeader project={project} />

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-white">Project Overview</h2>
              <p className="text-gray-300 mb-6 leading-relaxed">{project.longDescription}</p>
            </div>

            <ProjectGallery images={project.gallery} />

            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-white">Features</h2>
              <ul className="space-y-2">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-[#05d9e8] rounded-full mt-2 mr-3"></span>
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {project.challenges && project.solutions && (
              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-6 text-white">Challenges & Solutions</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gray-800 bg-opacity-50 p-6 rounded-lg border border-gray-700">
                    <h3 className="text-xl font-bold mb-4 text-[#ff4ec8]">Challenges</h3>
                    <ul className="space-y-3">
                      {project.challenges.map((challenge, index) => (
                        <li key={index} className="flex items-start">
                          <span className="inline-block w-2 h-2 bg-[#ff4ec8] rounded-full mt-2 mr-3"></span>
                          <span className="text-gray-300">{challenge}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-gray-800 bg-opacity-50 p-6 rounded-lg border border-gray-700">
                    <h3 className="text-xl font-bold mb-4 text-[#05d9e8]">Solutions</h3>
                    <ul className="space-y-3">
                      {project.solutions.map((solution, index) => (
                        <li key={index} className="flex items-start">
                          <span className="inline-block w-2 h-2 bg-[#05d9e8] rounded-full mt-2 mr-3"></span>
                          <span className="text-gray-300">{solution}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {project.learnings && (
              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-6 text-white">Key Learnings</h2>
                <ul className="space-y-2">
                  {project.learnings.map((learning, index) => (
                    <li key={index} className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-[#0ef] rounded-full mt-2 mr-3"></span>
                      <span className="text-gray-300">{learning}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <ProjectTechnologies technologies={project.technologies} />

              <div className="bg-gray-800 bg-opacity-50 p-6 rounded-lg border border-gray-700 mb-8">
                <h3 className="text-xl font-bold mb-4 text-white">Project Details</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm text-gray-400 mb-1">Date</h4>
                    <p className="text-gray-300">{project.date}</p>
                  </div>
                  <div>
                    <h4 className="text-sm text-gray-400 mb-1">Category</h4>
                    <p className="text-gray-300 capitalize">{project.category.replace("-", " ")}</p>
                  </div>
                  <div>
                    <h4 className="text-sm text-gray-400 mb-1">GitHub</h4>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#05d9e8] hover:underline"
                    >
                      View Repository
                    </a>
                  </div>
                  {project.liveUrl && (
                    <div>
                      <h4 className="text-sm text-gray-400 mb-1">Live Demo</h4>
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#05d9e8] hover:underline"
                      >
                        View Live Demo
                      </a>
                    </div>
                  )}
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
