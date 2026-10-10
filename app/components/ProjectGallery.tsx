"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Plus, X } from "lucide-react"
import type { ProjectImage } from "../data/projects"
import SandTransitionImage from "./SandTransitionImage"
import { assetPath } from "../lib/utils"

interface ProjectGalleryProps {
  images: ProjectImage[]
}

export default function ProjectGallery({ images }: ProjectGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [lightboxOpen, setLightboxOpen] = useState(false)

  const nextImage = useCallback(() => {
    setActiveIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }, [images.length])

  const prevImage = useCallback(() => {
    setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }, [images.length])

  const closeLightbox = useCallback(() => {
    setLightboxOpen(false)
  }, [])

  useEffect(() => {
    if (!lightboxOpen) return
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox()
      if (e.key === "ArrowRight") nextImage()
      if (e.key === "ArrowLeft") prevImage()
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [lightboxOpen, closeLightbox, nextImage, prevImage])

  const currentImg = images[activeIndex] || images[0]

  return (
    <div className="floating-card border border-white/10 bg-[#0d0d0f] text-cream font-hn shadow-[0_15px_35px_rgba(0,0,0,0.6)]">
      {/* Top Bar */}
      <div className="border-b border-white/10 px-6 py-4 flex items-center justify-between text-[10px] font-mono tracking-widest uppercase text-cream/40">
        <span>Visual Documentation &amp; Artifacts</span>
        <span>
          {String(activeIndex + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
        </span>
      </div>

      {/* Main SandTransitionImage Stage */}
      <div
        onClick={() => setLightboxOpen(true)}
        className="relative h-[300px] sm:h-[400px] w-full flex items-center justify-center p-6 cursor-pointer group overflow-hidden"
      >
        <AnimatePresence mode="wait">
          <SandTransitionImage
            key={currentImg.src}
            src={assetPath(currentImg.src || "/placeholder.svg")}
            alt={currentImg.alt}
            className="w-[90%] h-[88%] object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.8)]"
          />
        </AnimatePresence>

        <button
          type="button"
          aria-label="Inspect full screen"
          className="absolute bottom-5 right-5 w-10 h-10 rounded-full border border-white/20 bg-black/80 text-cream flex items-center justify-center group-hover:bg-cream group-hover:text-[#0a0a0a] group-hover:border-cream transition-all duration-300 active:scale-95 shadow-[0_0_12px_rgba(239,238,233,0.1)]"
        >
          <Plus size={16} strokeWidth={1.5} />
        </button>
      </div>

      {/* Thumbnail Strip / Figure Selector */}
      <div className="border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
        {images.map((image, index) => {
          const isActive = activeIndex === index
          return (
            <button
              key={index}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`p-4 text-left transition-all duration-300 active:scale-98 ${
                isActive
                  ? "bg-cream text-[#0a0a0a]"
                  : "bg-[#0d0d0f] text-cream/60 hover:text-cream hover:bg-white/[0.03]"
              }`}
            >
              <div
                className={`text-[10px] font-mono tracking-widest uppercase mb-1 ${
                  isActive ? "text-[#0a0a0a]/60" : "text-cream/40"
                }`}
              >
                Fig. 0{index + 1}
              </div>
              <div className="text-xs font-medium truncate">{image.caption || image.alt}</div>
            </button>
          )
        })}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={currentImg.alt}
            className="fixed inset-0 z-50 bg-[#080808]/95 backdrop-blur-xl flex items-center justify-center p-4 select-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
            <button
              type="button"
              className="absolute top-6 right-6 w-11 h-11 rounded-full border border-white/20 bg-[#141414] flex items-center justify-center text-cream hover:bg-cream hover:text-[#0a0a0a] z-10 transition-colors active:scale-95"
              onClick={closeLightbox}
              aria-label="Close Lightbox"
            >
              <X size={18} strokeWidth={1.5} />
            </button>

            <button
              type="button"
              className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full border border-white/20 bg-[#141414] flex items-center justify-center text-cream hover:bg-cream hover:text-[#0a0a0a] z-10 transition-colors active:scale-95"
              onClick={(e) => {
                e.stopPropagation()
                prevImage()
              }}
              aria-label="Previous Image"
            >
              <ChevronLeft size={18} strokeWidth={1.5} />
            </button>

            <div
              className="relative w-full max-w-4xl h-[78vh] flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={assetPath(currentImg.src || "/placeholder.svg")}
                alt={currentImg.alt}
                fill
                sizes="90vw"
                className="object-contain"
              />
              {currentImg.caption && (
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-[#121212] border border-white/20 text-cream px-5 py-2 text-xs font-mono uppercase tracking-widest text-center shadow-2xl">
                  {currentImg.caption}
                </div>
              )}
            </div>

            <button
              type="button"
              className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full border border-white/20 bg-[#141414] flex items-center justify-center text-cream hover:bg-cream hover:text-[#0a0a0a] z-10 transition-colors active:scale-95"
              onClick={(e) => {
                e.stopPropagation()
                nextImage()
              }}
              aria-label="Next Image"
            >
              <ChevronRight size={18} strokeWidth={1.5} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
