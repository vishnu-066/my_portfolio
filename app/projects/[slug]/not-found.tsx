import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function ProjectNotFound() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-cream font-hn flex flex-col items-center justify-center px-6 text-center select-none">
      <div className="floating-card border border-white/10 bg-[#121212]/90 p-10 md:p-12 max-w-md w-full shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
        <div className="text-[10px] font-mono uppercase tracking-[0.24em] text-cream/40 mb-3">
          [ ERROR 404 // ARCHIVE MISSING ]
        </div>
        <h1 className="text-3xl font-medium tracking-tight text-cream mb-4">
          Project Not Found
        </h1>
        <p className="text-cream/60 text-xs md:text-sm mb-8 leading-relaxed">
          The project case study you&apos;re looking for doesn&apos;t exist or has been relocated in the archive.
        </p>
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 rounded-full border border-transparent bg-cream text-[#0a0a0a] px-6 py-3 text-[10px] font-mono tracking-[0.2em] uppercase font-semibold hover:bg-white active:scale-95 transition-all shadow-[0_4px_15px_rgba(239,238,233,0.15)]"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          Back to Archive
        </Link>
      </div>
    </div>
  )
}
