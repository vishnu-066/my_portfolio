"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { FaLinkedin, FaGithub } from "react-icons/fa"
import Dropdown from "./Dropdown"
import LeetCodeIcon from "./LeetCodeIcon"

const Navigation = () => {
  const [activeSection, setActiveSection] = useState("home")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const dropdownItems = [
    { name: "Achievements", href: "#achievements" },
    { name: "Social Work", href: "#social-work" },
    { name: "Contact Me", href: "#contact-us" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      // Set scrolled state for navbar background change
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }

      // Active section detection
      const sections = [
        "home",
        "skills",
        "projects",
        "certifications",
        "education",
        "achievements",
        "social-work",
        "contact-us",
      ]

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setMobileMenuOpen(false)
    }
  }

  // Define gradient colors for each section
  const sectionColors = {
    home: { from: "#05d9e8", to: "#ff4ec8" },
    skills: { from: "#05d9e8", to: "#9d4edd" },
    projects: { from: "#ff4ec8", to: "#05d9e8" },
    certifications: { from: "#9d4edd", to: "#05d9e8" },
    education: { from: "#05d9e8", to: "#ff4ec8" },
  }

  return (
    <header
      className={`fixed top-0 left-0 w-full px-[10%] py-5 flex justify-between items-center z-50 transition-all duration-500 ${
        scrolled ? "bg-opacity-90 backdrop-blur-sm bg-[#050816]" : "bg-transparent"
      }`}
    >
      <Link href="/" className="text-2xl font-semibold text-white neon-text">
        Portfolio
      </Link>

      <nav className="navbar hidden md:flex items-center">
        {["home", "skills", "projects", "certifications", "education"].map((section) => {
          const isActive = activeSection === section
          const colors = sectionColors[section as keyof typeof sectionColors] || { from: "#05d9e8", to: "#ff4ec8" }

          return (
            <motion.button
              key={section}
              onClick={() => scrollToSection(section)}
              className={`magical-btn ml-6 ${isActive ? "active" : ""}`}
              style={{
                background: isActive
                  ? `linear-gradient(45deg, rgba(${colors.from
                      .replace("#", "")
                      .match(/.{1,2}/g)
                      ?.map((val) => Number.parseInt(val, 16))
                      .join(", ")}, 0.3), rgba(${colors.to
                      .replace("#", "")
                      .match(/.{1,2}/g)
                      ?.map((val) => Number.parseInt(val, 16))
                      .join(", ")}, 0.3))`
                  : "",
              }}
              whileHover={{
                boxShadow: `0 0 15px ${colors.from}80`,
              }}
              whileTap={{ scale: 0.95 }}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </motion.button>
          )
        })}

        <Dropdown title="More" items={dropdownItems} />

        <div className="flex space-x-4 ml-8">
          <motion.a
            href="https://linkedin.com/in/vishnuvardhan06/"
            target="_blank"
            rel="noopener noreferrer"
            className="cosmic-social-btn-new"
            whileHover={{
              scale: 1.1,
              boxShadow: "0 0 15px rgba(5, 217, 232, 0.8), 0 0 25px rgba(5, 217, 232, 0.5)",
            }}
            aria-label="LinkedIn"
          >
            <FaLinkedin size={20} />
          </motion.a>

          <motion.a
            href="https://github.com/vishnu-066?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="cosmic-social-btn-new"
            whileHover={{
              scale: 1.1,
              boxShadow: "0 0 15px rgba(255, 42, 109, 0.8), 0 0 25px rgba(255, 42, 109, 0.5)",
            }}
            aria-label="GitHub"
          >
            <FaGithub size={20} />
          </motion.a>

          <motion.a
            href="https://leetcode.com/u/Vishnu_vardhan_2004/"
            target="_blank"
            rel="noopener noreferrer"
            className="cosmic-social-btn-new"
            whileHover={{
              scale: 1.1,
              boxShadow: "0 0 15px rgba(157, 78, 221, 0.8), 0 0 25px rgba(157, 78, 221, 0.5)",
            }}
            aria-label="LeetCode"
          >
            <LeetCodeIcon size={20} />
          </motion.a>
        </div>
      </nav>

      {/* Mobile menu button */}
      <button className="md:hidden text-white focus:outline-none" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          {mobileMenuOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <motion.div
          className="md:hidden absolute top-full left-0 right-0 bg-[#050816] bg-opacity-95 backdrop-blur-sm"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {[
              "home",
              "skills",
              "projects",
              "certifications",
              "education",
              "achievements",
              "social-work",
              "contact-us",
            ].map((section) => {
              const isActive = activeSection === section
              const colors = sectionColors[section as keyof typeof sectionColors] || { from: "#05d9e8", to: "#ff4ec8" }

              return (
                <motion.button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`smoke-btn block w-full text-left mb-2 ${isActive ? "active" : ""}`}
                  style={{
                    background: isActive
                      ? `linear-gradient(45deg, rgba(${colors.from
                          .replace("#", "")
                          .match(/.{1,2}/g)
                          ?.map((val) => Number.parseInt(val, 16))
                          .join(", ")}, 0.3), rgba(${colors.to
                          .replace("#", "")
                          .match(/.{1,2}/g)
                          ?.map((val) => Number.parseInt(val, 16))
                          .join(", ")}, 0.3))`
                      : "",
                  }}
                  whileHover={{
                    boxShadow: `0 0 15px ${colors.from}80`,
                  }}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1).replace(/-/g, " ")}
                </motion.button>
              )
            })}

            <div className="flex justify-center space-x-6 mt-4 px-3 py-2">
              <motion.a
                href="https://linkedin.com/in/vishnuvardhan06/"
                target="_blank"
                rel="noopener noreferrer"
                className="cosmic-social-btn-new"
                whileHover={{
                  scale: 1.1,
                  boxShadow: "0 0 15px rgba(5, 217, 232, 0.8), 0 0 25px rgba(5, 217, 232, 0.5)",
                }}
                aria-label="LinkedIn"
              >
                <FaLinkedin size={24} />
              </motion.a>

              <motion.a
                href="https://github.com/vishnu-066?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="cosmic-social-btn-new"
                whileHover={{
                  scale: 1.1,
                  boxShadow: "0 0 15px rgba(255, 42, 109, 0.8), 0 0 25px rgba(255, 42, 109, 0.5)",
                }}
                aria-label="GitHub"
              >
                <FaGithub size={24} />
              </motion.a>

              <motion.a
                href="https://leetcode.com/u/Vishnu_vardhan_2004/"
                target="_blank"
                rel="noopener noreferrer"
                className="cosmic-social-btn-new"
                whileHover={{
                  scale: 1.1,
                  boxShadow: "0 0 15px rgba(157, 78, 221, 0.8), 0 0 25px rgba(157, 78, 221, 0.5)",
                }}
                aria-label="LeetCode"
              >
                <LeetCodeIcon size={24} />
              </motion.a>
            </div>
          </div>
        </motion.div>
      )}
    </header>
  )
}

export default Navigation
