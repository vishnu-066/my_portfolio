"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { FaDownload, FaBars, FaTimes } from "react-icons/fa"
import Dropdown from "./Dropdown"
import NeonButton from "./NeonButton"

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 minimalist-navbar ${
        scrolled ? "scrolled" : ""
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center py-3">
        <div>
          <Link href="/" className="text-xl font-bold text-pink-500 hover:text-pink-400 transition-colors">
            SVR
          </Link>
        </div>

        {/* Mobile menu button */}
        <button className="md:hidden text-white focus:outline-none" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <button
            onClick={() => scrollToSection("home")}
            className={`nav-button ${activeSection === "home" ? "active" : ""}`}
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection("skills")}
            className={`nav-button ${activeSection === "skills" ? "active" : ""}`}
          >
            Skills
          </button>
          <button
            onClick={() => scrollToSection("projects")}
            className={`nav-button ${activeSection === "projects" ? "active" : ""}`}
          >
            Projects
          </button>
          <button
            onClick={() => scrollToSection("certifications")}
            className={`nav-button ${activeSection === "certifications" ? "active" : ""}`}
          >
            Certifications
          </button>
          <button
            onClick={() => scrollToSection("education")}
            className={`nav-button ${activeSection === "education" ? "active" : ""}`}
          >
            Education
          </button>
          <Dropdown title="More" items={dropdownItems} />
        </nav>

        <NeonButton
          href="https://drive.google.com/file/d/1ggOPIq_zLPBrpEPNuoIiTS1tx0am1qX3/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:flex items-center"
        >
          <FaDownload className="mr-2" /> Resume
        </NeonButton>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-gray-900 bg-opacity-95 backdrop-blur-sm">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <button
              onClick={() => scrollToSection("home")}
              className={`block w-full text-left px-3 py-2 rounded-md ${
                activeSection === "home" ? "text-pink-500" : "text-white"
              }`}
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className={`block w-full text-left px-3 py-2 rounded-md ${
                activeSection === "skills" ? "text-pink-500" : "text-white"
              }`}
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className={`block w-full text-left px-3 py-2 rounded-md ${
                activeSection === "projects" ? "text-pink-500" : "text-white"
              }`}
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("certifications")}
              className={`block w-full text-left px-3 py-2 rounded-md ${
                activeSection === "certifications" ? "text-pink-500" : "text-white"
              }`}
            >
              Certifications
            </button>
            <button
              onClick={() => scrollToSection("education")}
              className={`block w-full text-left px-3 py-2 rounded-md ${
                activeSection === "education" ? "text-pink-500" : "text-white"
              }`}
            >
              Education
            </button>
            <button
              onClick={() => scrollToSection("achievements")}
              className={`block w-full text-left px-3 py-2 rounded-md ${
                activeSection === "achievements" ? "text-pink-500" : "text-white"
              }`}
            >
              Achievements
            </button>
            <button
              onClick={() => scrollToSection("social-work")}
              className={`block w-full text-left px-3 py-2 rounded-md ${
                activeSection === "social-work" ? "text-pink-500" : "text-white"
              }`}
            >
              Social Work
            </button>
            <button
              onClick={() => scrollToSection("contact-us")}
              className={`block w-full text-left px-3 py-2 rounded-md ${
                activeSection === "contact-us" ? "text-pink-500" : "text-white"
              }`}
            >
              Contact Us
            </button>
            <NeonButton
              href="https://drive.google.com/file/d/1ggOPIq_zLPBrpEPNuoIiTS1tx0am1qX3/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full mt-4"
            >
              <FaDownload className="mr-2 inline" /> Resume
            </NeonButton>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navigation
