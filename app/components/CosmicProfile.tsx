"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import * as THREE from "three"

interface CosmicProfileProps {
  imageSrc: string
  size?: number
}

const CosmicProfile = ({ imageSrc, size = 250 }: CosmicProfileProps) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (!containerRef.current || !canvasRef.current) return

    const canvas = canvasRef.current
    const container = containerRef.current
    const rect = container.getBoundingClientRect()

    // Set up Three.js scene
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
    })

    renderer.setSize(size * 1.5, size * 1.5)
    renderer.setPixelRatio(window.devicePixelRatio)

    // Create a torus for the 3D ring effect
    const torusGeometry = new THREE.TorusGeometry(size / 3, 2, 16, 100)
    const torusMaterial = new THREE.MeshBasicMaterial({
      color: 0x05d9e8,
      transparent: true,
      opacity: 0.7,
    })
    const torus = new THREE.Mesh(torusGeometry, torusMaterial)
    scene.add(torus)

    // Create a second torus with different rotation
    const torus2Geometry = new THREE.TorusGeometry(size / 2.7, 1.5, 16, 100)
    const torus2Material = new THREE.MeshBasicMaterial({
      color: 0xff4ec8,
      transparent: true,
      opacity: 0.5,
    })
    const torus2 = new THREE.Mesh(torus2Geometry, torus2Material)
    torus2.rotation.x = Math.PI / 2
    scene.add(torus2)

    // Add particles
    const particlesGeometry = new THREE.BufferGeometry()
    const particlesCount = 200
    const posArray = new Float32Array(particlesCount * 3)

    for (let i = 0; i < particlesCount * 3; i++) {
      // Create a sphere of particles around the center
      const angle = Math.random() * Math.PI * 2
      const radius = (Math.random() * size) / 2 + size / 4
      const i3 = i * 3

      posArray[i3] = Math.cos(angle) * radius * Math.random()
      posArray[i3 + 1] = (Math.random() - 0.5) * radius
      posArray[i3 + 2] = Math.sin(angle) * radius * Math.random()
    }

    particlesGeometry.setAttribute("position", new THREE.BufferAttribute(posArray, 3))

    const particlesMaterial = new THREE.PointsMaterial({
      size: 2,
      color: 0xffffff,
      transparent: true,
      opacity: 0.5,
    })

    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial)
    scene.add(particlesMesh)

    camera.position.z = size / 1.5

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate)

      torus.rotation.x += 0.01
      torus.rotation.y += 0.005

      torus2.rotation.y += 0.007
      torus2.rotation.z += 0.003

      particlesMesh.rotation.y += 0.002

      renderer.render(scene, camera)
    }

    animate()

    // Handle resize
    const handleResize = () => {
      renderer.setSize(size * 1.5, size * 1.5)
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)

      // Clean up Three.js resources
      scene.remove(torus)
      scene.remove(torus2)
      scene.remove(particlesMesh)

      torusGeometry.dispose()
      torusMaterial.dispose()
      torus2Geometry.dispose()
      torus2Material.dispose()
      particlesGeometry.dispose()
      particlesMaterial.dispose()

      renderer.dispose()
    }
  }, [size])

  return (
    <div ref={containerRef} className="cosmic-profile-container relative" style={{ width: size, height: size }}>
      <canvas
        ref={canvasRef}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0"
        style={{ width: size * 1.5, height: size * 1.5 }}
      />

      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 rounded-full overflow-hidden"
        style={{ width: size, height: size }}
        whileHover={{ scale: 1.05 }}
      >
        <Image
          src={imageSrc || "/placeholder.svg"}
          alt="Profile"
          width={size}
          height={size}
          className="rounded-full object-cover"
          priority
        />
      </motion.div>
    </div>
  )
}

export default CosmicProfile
