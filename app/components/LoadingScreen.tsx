"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

interface LoadingScreenProps {
  onLoadingComplete: () => void
}

const LoadingScreen = ({ onLoadingComplete }: LoadingScreenProps) => {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      if (progress < 100) {
        setProgress((prev) => {
          const newProgress = prev + 1
          return newProgress
        })
      } else {
        setTimeout(() => {
          onLoadingComplete()
        }, 500)
      }
    }, 30)

    return () => clearTimeout(timer)
  }, [progress, onLoadingComplete])

  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#050816]"
      initial={{ opacity: 1 }}
      animate={{ opacity: progress === 100 ? 0 : 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <h1 className="text-5xl font-bold mb-2 text-white">
          <span className="text-[#0ef]">Vishnu</span>vardhan
        </h1>
        <p className="text-xl text-[#ff4ec8]">Aspiring Data Scientist</p>
      </motion.div>

      <div className="w-80 h-1 bg-gray-800 rounded-full overflow-hidden mb-4">
        <motion.div
          className="h-full bg-gradient-to-r from-[#0ef] to-[#ff4ec8]"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.1 }}
        />
      </div>

      <div className="text-white text-lg font-mono">Loading... {progress}%</div>
    </motion.div>
  )
}

export default LoadingScreen
