"use client"

import { useEffect, useRef, useId } from "react"
import { usePresence } from "framer-motion"

interface SandTransitionImageProps {
  src: string
  alt: string
  className?: string
}

export default function SandTransitionImage({ src, alt, className = "" }: SandTransitionImageProps) {
  const [isPresent, safeToRemove] = usePresence()
  const reactId = useId().replace(/:/g, "")
  const filterId = `sand-filter-${reactId}`

  const dispRef = useRef<SVGFEDisplacementMapElement>(null)
  const offsetRef = useRef<SVGFEOffsetElement>(null)
  const blurRef = useRef<SVGFEGaussianBlurElement>(null)
  const colorRef = useRef<SVGFEColorMatrixElement>(null)

  useEffect(() => {
    let rafId: number
    const duration = 900
    const startTime = performance.now()

    const updateFilter = (progress: number, entering: boolean) => {
      const p = Math.max(0, Math.min(1, progress))
      const scale = p * 150
      const dy = entering ? -p * 80 : p * 120
      const dx = entering ? -p * 30 : p * 30
      const blur = p * 6
      const alpha = Math.max(0, 1 - p * 1.2)

      if (dispRef.current) {
        dispRef.current.setAttribute("scale", scale.toFixed(2))
      }
      if (offsetRef.current) {
        offsetRef.current.setAttribute("dx", dx.toFixed(2))
        offsetRef.current.setAttribute("dy", dy.toFixed(2))
      }
      if (blurRef.current) {
        blurRef.current.setAttribute("stdDeviation", blur.toFixed(2))
      }
      if (colorRef.current) {
        colorRef.current.setAttribute(
          "values",
          `1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 ${alpha.toFixed(3)} 0`,
        )
      }
    }

    const animate = (now: number) => {
      const elapsed = now - startTime
      const t = Math.min(1, elapsed / duration)

      if (isPresent) {
        // Quartic ease-out: 1 - (1 - t)^4, progress goes from 1 -> 0
        const eased = 1 - Math.pow(1 - t, 4)
        const progress = 1 - eased
        updateFilter(progress, true)
      } else {
        // Cubic ease-in: t^3, progress goes from 0 -> 1
        const progress = Math.pow(t, 3)
        updateFilter(progress, false)
      }

      if (t < 1) {
        rafId = requestAnimationFrame(animate)
      } else if (!isPresent && safeToRemove) {
        safeToRemove()
      }
    }

    rafId = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(rafId)
  }, [isPresent, safeToRemove])

  return (
    <>
      <svg className="pointer-events-none absolute h-0 w-0 opacity-0" aria-hidden="true">
        <defs>
          <filter id={filterId} x="-30%" y="-30%" width="160%" height="160%">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="1.8"
              numOctaves={4}
              seed={12}
              result="noise"
            />
            <feDisplacementMap
              ref={dispRef}
              in="SourceGraphic"
              in2="noise"
              scale="0"
              xChannelSelector="R"
              yChannelSelector="G"
              result="displaced"
            />
            <feOffset ref={offsetRef} in="displaced" dx="0" dy="0" result="offset" />
            <feGaussianBlur ref={blurRef} in="offset" stdDeviation="0" result="blurred" />
            <feColorMatrix
              ref={colorRef}
              in="blurred"
              type="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0"
            />
          </filter>
        </defs>
      </svg>

      <img
        src={src}
        alt={alt}
        crossOrigin="anonymous"
        referrerPolicy="no-referrer"
        style={{ filter: `url(#${filterId})` }}
        className={className}
      />
    </>
  )
}
