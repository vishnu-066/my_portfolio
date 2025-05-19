import Link from "next/link"

export default function ProjectNotFound() {
  return (
    <div className="min-h-screen bg-[#050816] flex flex-col items-center justify-center px-4">
      <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Project Not Found</h1>
      <p className="text-gray-300 text-lg mb-8">The project you're looking for doesn't exist or has been moved.</p>
      <Link
        href="/#projects"
        className="px-6 py-3 bg-[#05d9e8] text-white rounded-md hover:bg-opacity-80 transition-all"
      >
        Back to Projects
      </Link>
    </div>
  )
}
