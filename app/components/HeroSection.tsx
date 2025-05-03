"use client"

import { useRef } from "react"
import { motion } from "framer-motion"
import { FaLinkedin, FaGithub, FaFileAlt } from "react-icons/fa"
import LeetCodeIcon from "./LeetCodeIcon"
import CosmicProfile from "./CosmicProfile"

const HeroSection = () => {
  // Refs for scroll animations
  const sectionRef = useRef<HTMLDivElement>(null)

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  }

  const socialVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: (i: number) => ({
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        delay: 0.8 + i * 0.1,
      },
    }),
  }

  const profileVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 50,
        delay: 0.5,
      },
    },
  }

  // Text glow animation
  const textGlowVariants = {
    initial: { textShadow: "0 0 0px rgba(5, 217, 232, 0)" },
    animate: {
      textShadow: [
        "0 0 4px rgba(5, 217, 232, 0.5)",
        "0 0 8px rgba(5, 217, 232, 0.8)",
        "0 0 15px rgba(5, 217, 232, 0.6)",
        "0 0 4px rgba(5, 217, 232, 0.5)",
      ],
      transition: {
        duration: 3,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "reverse",
      },
    },
  }

  const nameGlowVariants = {
    initial: {
      textShadow: "0 0 0px rgba(255, 42, 109, 0)",
      color: "#fff",
    },
    animate: {
      textShadow: [
        "0 0 5px rgba(255, 42, 109, 0.5)",
        "0 0 10px rgba(255, 42, 109, 0.7)",
        "0 0 20px rgba(255, 42, 109, 0.5)",
        "0 0 5px rgba(255, 42, 109, 0.5)",
      ],
      color: ["#fff", "#ff2a6d", "#ff4ec8", "#fff"],
      transition: {
        duration: 5,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "reverse",
      },
    },
  }

  return (
    <section
      ref={sectionRef}
      id="home"
      className="min-h-screen flex items-center relative overflow-hidden py-20 px-6 md:px-10 lg:px-[10%]"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#050816] via-[#0a192f] to-[#050816] z-[-2]"></div>

      {/* Animated background elements */}
      <div className="absolute inset-0 z-[-1]">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-[#ff2a6d] opacity-5 blur-[100px]"></div>
        <div className="absolute bottom-1/3 right-1/3 w-80 h-80 rounded-full bg-[#05d9e8] opacity-5 blur-[120px]"></div>
        <div className="absolute top-2/3 left-1/2 w-72 h-72 rounded-full bg-[#9d4edd] opacity-5 blur-[100px]"></div>
      </div>

      {/* Grid container */}
      <motion.div
        className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        {/* Left column - Text content */}
        <div className="order-2 lg:order-1">
          <motion.div className="space-y-6" variants={containerVariants}>
            <motion.p
              className="text-xl md:text-2xl font-medium text-[#05d9e8]"
              variants={itemVariants}
              custom={1}
              initial="initial"
              animate="animate"
              variants={textGlowVariants}
            >
              Hello, I'm
            </motion.p>

            <motion.h1
              className="text-5xl md:text-6xl lg:text-7xl font-bold"
              variants={itemVariants}
              custom={2}
              initial="initial"
              animate="animate"
              variants={nameGlowVariants}
            >
              Vishnuvardhan
            </motion.h1>

            <motion.h2 className="text-2xl md:text-3xl font-medium text-[#ff4ec8]" variants={itemVariants} custom={3}>
              Aspiring Data Scientist
            </motion.h2>

            <motion.div className="space-y-3 mt-4" variants={itemVariants} custom={4}>
              <p className="handwriting-text">"Passionate about transforming data into meaningful insights."</p>
              <p className="handwriting-text">"Creating impactful solutions through data science and analytics."</p>
            </motion.div>

            {/* Social media links */}
            <motion.div className="flex space-x-5 pt-4" variants={containerVariants}>
              <motion.a
                href="https://linkedin.com/in/vishnuvardhan06/"
                target="_blank"
                rel="noopener noreferrer"
                className="cosmic-social-btn"
                variants={socialVariants}
                custom={0}
                whileHover={{
                  scale: 1.1,
                  boxShadow: "0 0 15px rgba(5, 217, 232, 0.8)",
                }}
                aria-label="LinkedIn"
              >
                <FaLinkedin size={22} />
              </motion.a>

              <motion.a
                href="https://github.com/vishnu-066?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="cosmic-social-btn"
                variants={socialVariants}
                custom={1}
                whileHover={{
                  scale: 1.1,
                  boxShadow: "0 0 15px rgba(255, 42, 109, 0.8)",
                }}
                aria-label="GitHub"
              >
                <FaGithub size={22} />
              </motion.a>

              <motion.a
                href="https://leetcode.com/u/Vishnu_vardhan_2004/"
                target="_blank"
                rel="noopener noreferrer"
                className="cosmic-social-btn"
                variants={socialVariants}
                custom={2}
                whileHover={{
                  scale: 1.1,
                  boxShadow: "0 0 15px rgba(157, 78, 221, 0.8)",
                }}
                aria-label="LeetCode"
              >
                <LeetCodeIcon size={22} />
              </motion.a>
            </motion.div>

            {/* Resume Button */}
            <motion.div variants={itemVariants} custom={5} className="mt-6">
              <motion.a
                href="https://drive.google.com/file/d/1ggOPIq_zLPBrpEPNuoIiTS1tx0am1qX3/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="cosmic-resume-btn"
                whileHover={{
                  y: -5,
                  boxShadow: "0 10px 25px -5px rgba(5, 217, 232, 0.6), 0 5px 10px rgba(255, 42, 109, 0.4)",
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.5 }}
              >
                <FaFileAlt className="mr-2" /> Download Resume
              </motion.a>
            </motion.div>
          </motion.div>
        </div>

        {/* Right column - Profile image */}
        <motion.div className="order-1 lg:order-2 flex justify-center lg:justify-end" variants={profileVariants}>
          <div className="relative">
            <CosmicProfile imageSrc="/portfolio-pic.jpg" size={320} />
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default HeroSection
