import { type Project, projects } from "../data/projects"

export function getAllProjects(): Project[] {
  return projects
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug)
}

export function getRelatedProjects(currentProject: Project, limit = 2): Project[] {
  const sameCategory = projects.filter(
    (project) => project.id !== currentProject.id && project.category === currentProject.category,
  )

  if (sameCategory.length >= limit) {
    return sameCategory.slice(0, limit)
  }

  const others = projects.filter(
    (project) => project.id !== currentProject.id && project.category !== currentProject.category,
  )

  return [...sameCategory, ...others].slice(0, limit)
}

export function getProjectCategories() {
  const categories = new Set(projects.map((project) => project.category))
  return Array.from(categories)
}
