"use client"

import { useRef, useMemo } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import * as THREE from "three"
import { useWindowSize } from "../hooks/useWindowSize"

// Generate random points in 3D space
function generatePoints(count: number) {
  const points = new Float32Array(count * 3)
  const colors = new Float32Array(count * 3)
  const scales = new Float32Array(count)
  const speeds = new Float32Array(count)

  for (let i = 0; i < count; i++) {
    const i3 = i * 3
    points[i3] = (Math.random() - 0.5) * 20 // x
    points[i3 + 1] = (Math.random() - 0.5) * 20 // y
    points[i3 + 2] = (Math.random() - 0.5) * 10 // z

    // Dark theme colors: mix of blue and pink for futuristic feel
    const colorChoice = Math.random()
    if (colorChoice < 0.6) {
      // Blue tones (60% of particles)
      colors[i3] = 0.05 + Math.random() * 0.1 // R
      colors[i3 + 1] = 0.5 + Math.random() * 0.3 // G
      colors[i3 + 2] = 0.8 + Math.random() * 0.2 // B
    } else {
      // Pink tones (40% of particles)
      colors[i3] = 0.8 + Math.random() * 0.2 // R
      colors[i3 + 1] = 0.1 + Math.random() * 0.1 // G
      colors[i3 + 2] = 0.5 + Math.random() * 0.3 // B
    }

    // Random sizes
    scales[i] = Math.random() * 0.5 + 0.1

    // Random speeds
    speeds[i] = Math.random() * 0.02 + 0.005
  }

  return { positions: points, colors, scales, speeds }
}

function Points() {
  const pointsRef = useRef<THREE.Points>(null!)
  const { positions, colors, scales, speeds } = useMemo(() => generatePoints(1500), [])

  useFrame((state) => {
    const time = state.clock.getElapsedTime()
    const points = pointsRef.current
    const positionArray = points.geometry.attributes.position.array as Float32Array

    // Animate each point
    for (let i = 0; i < positionArray.length / 3; i++) {
      const i3 = i * 3
      const speed = speeds[i]

      // Gentle wave motion
      positionArray[i3 + 1] += Math.sin(time * speed + i) * 0.01
      positionArray[i3] += Math.cos(time * speed + i) * 0.01
    }

    points.geometry.attributes.position.needsUpdate = true
    points.rotation.y = time * 0.05
  })

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={positions.length / 3} array={positions} itemSize={3} />
        <bufferAttribute attach="attributes-color" count={colors.length / 3} array={colors} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial
        size={0.1}
        vertexColors
        transparent
        opacity={0.6}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  )
}

export default function ParticleBackground() {
  const { width, height } = useWindowSize()

  return (
    <div className="fixed top-0 left-0 w-full h-full z-[-1] pointer-events-none">
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }} style={{ background: "transparent" }} dpr={[1, 2]}>
        <Points />
      </Canvas>
    </div>
  )
}
