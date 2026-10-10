"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function FuturisticLoader() {
  const [progress, setProgress] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)
  const [telemetry, setTelemetry] = useState("INITIALIZING NEURAL KERNEL...")

  useEffect(() => {
    const telemetrySteps = [
      { at: 15, text: "CALIBRATING STATISTICAL ENGINES..." },
      { at: 40, text: "LOADING C++ / WASM RUNTIMES..." },
      { at: 65, text: "MOUNTING ML PREDICTIVE MODELS..." },
      { at: 85, text: "SYNCHRONIZING REPOSITORY ARCHIVES..." },
      { at: 98, text: "SYS.INITIALIZED // ALL CORES NOMINAL" },
    ]

    const startTime = performance.now()
    const duration = 1100 // 1.1s smooth rapid sequence

    const frame = (now: number) => {
      const elapsed = now - startTime
      const pct = Math.min(Math.round((elapsed / duration) * 100), 100)
      setProgress(pct)

      const currentStep = telemetrySteps.filter((s) => pct >= s.at).pop()
      if (currentStep) {
        setTelemetry(currentStep.text)
      }

      if (pct < 100) {
        requestAnimationFrame(frame)
      } else {
        setTimeout(() => {
          setIsLoaded(true)
        }, 250)
      }
    }

    const rafId = requestAnimationFrame(frame)
    return () => cancelAnimationFrame(rafId)
  }, [])

  return (
    <AnimatePresence>
      {!isLoaded && (
        <motion.div
          key="futuristic-loader"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            y: -20,
            transition: { duration: 0.65, ease: [0.76, 0, 0.24, 1] },
          }}
          className="fixed inset-0 z-[100] flex flex-col justify-between bg-[#080808] p-6 sm:p-12 font-mono text-cream select-none pointer-events-none"
        >
          {/* Top Telemetry Header */}
          <div className="flex items-center justify-between text-[10px] tracking-[0.24em] text-cream/50 uppercase">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cream animate-ping" />
              <span>SYS.BOOT // VISHNU VARDHAN</span>
            </div>
            <div className="hidden sm:block">
              LAT 31.25° N // LON 75.70° E
            </div>
            <div>STATUS: ONLINE</div>
          </div>

          {/* Center Cinematic Display */}
          <div className="max-w-2xl mx-auto w-full flex flex-col items-center text-center">
            {/* Minimal Brand Monogram */}
            <div className="text-xs uppercase tracking-[0.3em] text-cream/40 mb-3 font-hn">
              PORTFOLIO ARCHITECTURE
            </div>

            <div className="text-2xl sm:text-4xl font-hn tracking-tight font-medium text-cream mb-8">
              Vishnu &mdash; Vardhan
            </div>

            {/* Glowing Laser Progress Bar */}
            <div className="w-full max-w-md h-[2px] bg-white/10 relative overflow-hidden mb-6">
              <motion.div
                className="h-full bg-cream relative"
                style={{ width: `${progress}%` }}
                transition={{ ease: "easeOut" }}
              >
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-cream shadow-[0_0_12px_#efeee9]" />
              </motion.div>
            </div>

            {/* Counter and Telemetry Status */}
            <div className="flex items-center justify-between w-full max-w-md text-[11px] tracking-[0.2em] uppercase">
              <span className="text-cream/60 truncate mr-4">{telemetry}</span>
              <span className="font-bold text-cream tabular-nums">{String(progress).padStart(2, "0")}%</span>
            </div>
          </div>

          {/* Bottom Telemetry Footer */}
          <div className="flex items-center justify-between text-[10px] tracking-[0.24em] text-cream/40 uppercase">
            <div>AI &bull; DATA SCIENCE &bull; SOFTWARE ENG</div>
            <div className="hidden sm:block">EST. 2025 // EDITION 2.0</div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
