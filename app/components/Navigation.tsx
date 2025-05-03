"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { FaDownload } from "react-icons/fa"
import Dropdown from "./Dropdown"
import NeonButton from "./NeonButton"
import "./navigation-effects.css"

const Navigation = () => {
  const [activeSection, setActiveSection] = useState("home")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const dropdownItems = [
    { name: "Achievements", href: "#achievements" },
    { name: "Social Work", href: "#social-work" },
    { name: "Contact Us", href: "#contact-us" },
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

  return (
    <header
      className={`fixed top-0 left-0 w-full px-[10%] py-5 flex justify-between items-center z-50 transition-all duration-500 ${
        scrolled ? "bg-opacity-90 backdrop-blur-sm bg-gray-900" : "bg-transparent"
      }`}
    >
      <Link href="/" className="text-2xl font-semibold text-white logo-text">
        Portfolio
      </Link>

      <nav className="navbar hidden md:block">
        <button
          onClick={() => scrollToSection("home")}
          className={`bubble-button text-lg font-medium ml-8 transition-colors duration-300 ${
            activeSection === "home" ? "text-[#0ef]" : "text-white"
          }`}
        >
          Home
        </button>
        <button
          onClick={() => scrollToSection("skills")}
          className={`bubble-button text-lg font-medium ml-8 transition-colors duration-300 ${
            activeSection === "skills" ? "text-[#0ef]" : "text-white"
          }`}
        >
          Skills
        </button>
        <button
          onClick={() => scrollToSection("projects")}
          className={`bubble-button text-lg font-medium ml-8 transition-colors duration-300 ${
            activeSection === "projects" ? "text-[#0ef]" : "text-white"
          }`}
        >
          Projects
        </button>
        <button
          onClick={() => scrollToSection("certifications")}
          className={`bubble-button text-lg font-medium ml-8 transition-colors duration-300 ${
            activeSection === "certifications" ? "text-[#0ef]" : "text-white"
          }`}
        >
          Certifications
        </button>
        <button
          onClick={() => scrollToSection("education")}
          className={`bubble-button text-lg font-medium ml-8 transition-colors duration-300 ${
            activeSection === "education" ? "text-[#0ef]" : "text-white"
          }`}
        >
          Education
        </button>
        <Dropdown title="More" items={dropdownItems} />
      </nav>

      <div className="hidden md:block">
        <NeonButton
          href="https://drive.google.com/file/d/1ggOPIq_zLPBrpEPNuoIiTS1tx0am1qX3/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center"
        >
          <FaDownload className="mr-2" /> Resume
        </NeonButton>
      </div>

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
        <div className="md:hidden absolute top-full left-0 right-0 bg-gray-900 bg-opacity-95 backdrop-blur-sm">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <button
              onClick={() => scrollToSection("home")}
              className={`block w-full text-left px-3 py-2 rounded-md ${
                activeSection === "home" ? "text-[#0ef]" : "text-white"
              }`}
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className={`block w-full text-left px-3 py-2 rounded-md ${
                activeSection === "skills" ? "text-[#0ef]" : "text-white"
              }`}
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className={`block w-full text-left px-3 py-2 rounded-md ${
                activeSection === "projects" ? "text-[#0ef]" : "text-white"
              }`}
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("certifications")}
              className={`block w-full text-left px-3 py-2 rounded-md ${
                activeSection === "certifications" ? "text-[#0ef]" : "text-white"
              }`}
            >
              Certifications
            </button>
            <button
              onClick={() => scrollToSection("education")}
              className={`block w-full text-left px-3 py-2 rounded-md ${
                activeSection === "education" ? "text-[#0ef]" : "text-white"
              }`}
            >
              Education
            </button>
            <button
              onClick={() => scrollToSection("achievements")}
              className={`block w-full text-left px-3 py-2 rounded-md ${
                activeSection === "achievements" ? "text-[#0ef]" : "text-white"
              }`}
            >
              Achievements
            </button>
            <button
              onClick={() => scrollToSection("social-work")}
              className={`block w-full text-left px-3 py-2 rounded-md ${
                activeSection === "social-work" ? "text-[#0ef]" : "text-white"
              }`}
            >
              Social Work
            </button>
            <button
              onClick={() => scrollToSection("contact-us")}
              className={`block w-full text-left px-3 py-2 rounded-md ${
                activeSection === "contact-us" ? "text-[#0ef]" : "text-white"
              }`}
            >
              Contact Us
            </button>
            <div className="mt-4 px-3">
              <NeonButton
                href="https://drive.google.com/file/d/1ggOPIq_zLPBrpEPNuoIiTS1tx0am1qX3/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full"
              >
                <FaDownload className="mr-2 inline" /> Resume
              </NeonButton>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navigation
