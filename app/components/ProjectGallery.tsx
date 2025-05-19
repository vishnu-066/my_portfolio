"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { FaChevronLeft, FaChevronRight, FaExpand, FaTimes } from "react-icons/fa"
import type { ProjectImage } from "../data/projects"

interface ProjectGalleryProps {
  images: ProjectImage[]
}

const ProjectGallery = ({ images }: ProjectGalleryProps) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [lightboxOpen, setLightboxOpen] = useState(false)

  const nextImage = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }

  const prevImage = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  const openLightbox = (index: number) => {
    setCurrentIndex(index)
    setLightboxOpen(true)
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
  }

  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold mb-6 text-white">Project Gallery</h2>

      {/* Main Gallery */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        {images.map((image, index) => (
          <motion.div
            key={index}
            className="relative aspect-video overflow-hidden rounded-lg border border-gray-700 cursor-pointer group"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
            onClick={() => openLightbox(index)}
          >
            <Image
              src={image.src || "/placeholder.svg"}
              alt={image.alt}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
              <FaExpand
                className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                size={24}
              />
            </div>
            {image.caption && (
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white p-2 text-sm transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                {image.caption}
              </div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
            <button className="absolute top-4 right-4 text-white hover:text-gray-300 z-10" onClick={closeLightbox}>
              <FaTimes size={24} />
            </button>

            <button
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 z-10"
              onClick={(e) => {
                e.stopPropagation()
                prevImage()
              }}
            >
              <FaChevronLeft size={24} />
            </button>

            <div
              className="relative w-full max-w-4xl h-[80vh] flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  className="relative w-full h-full"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src={images[currentIndex].src || "/placeholder.svg"}
                    alt={images[currentIndex].alt}
                    fill
                    className="object-contain"
                  />
                  {images[currentIndex].caption && (
                    <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white p-4 text-center">
                      {images[currentIndex].caption}
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>

            <button
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 z-10"
              onClick={(e) => {
                e.stopPropagation()
                nextImage()
              }}
            >
              <FaChevronRight size={24} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default ProjectGallery
