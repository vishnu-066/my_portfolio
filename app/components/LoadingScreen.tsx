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
      className="fixed inset-0 z-50 flex flex-col items-center justify-center"
      style={{
        background: "linear-gradient(135deg, #050816 0%, #0a192f 50%, #1a1a2e 100%)",
      }}
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
        <h1 className="text-5xl font-bold mb-2">
          <span className="gradient-text-primary">Vishnu</span>
          <span className="gradient-text-secondary">vardhan</span>
        </h1>
        <p className="text-xl gradient-text">Aspiring Data Scientist</p>
      </motion.div>

      <div className="w-80 h-2 bg-gray-800 rounded-full overflow-hidden mb-4 relative">
        <div
          className="absolute inset-0 rounded-full"
          style={{
            background: "linear-gradient(90deg, rgba(5, 217, 232, 0.2) 0%, rgba(255, 78, 200, 0.2) 100%)",
          }}
        />
        <motion.div
          className="h-full rounded-full"
          style={{
            background: "linear-gradient(90deg, #05d9e8 0%, #ff4ec8 50%, #9d4edd 100%)",
            backgroundSize: "200% 100%",
            animation: "gradientShift 2s ease infinite",
          }}
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.1 }}
        />
      </div>

      <div className="gradient-text text-lg font-mono">Loading... {progress}%</div>
    </motion.div>
  )
}

export default LoadingScreen
