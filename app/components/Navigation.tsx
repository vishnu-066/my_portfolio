"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, ArrowUpRight } from "lucide-react"

const navItems = [
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "certifications", label: "Credentials" },
  { id: "achievements", label: "Awards" },
  { id: "contact-us", label: "Contact" },
]

export default function Navigation() {
  const [activeSection, setActiveSection] = useState("home")
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [pastHero, setPastHero] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const heroThreshold = typeof window !== "undefined" ? window.innerHeight * 0.8 : 600
      const isPast = window.scrollY > heroThreshold
      setPastHero(isPast)
      if (!isPast) {
        setIsMobileMenuOpen(false)
      }

      for (const item of navItems) {
        const element = document.getElementById(item.id)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(item.id)
            break
          }
        }
      }
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isMobileMenuOpen) {
        setIsMobileMenuOpen(false)
      }
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [isMobileMenuOpen])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setActiveSection(sectionId)
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <>
      {/* DESKTOP & HEADER FLOATING STRIP (Dark Editorial Theme matching Hero) */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          pastHero
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
        aria-hidden={!pastHero}
      >
        <div className="bg-[#0a0a0a]/90 backdrop-blur-xl border-b border-white/10 px-6 md:px-16 py-3.5 text-cream">
          <div className="max-w-[1440px] mx-auto flex justify-between items-center text-[10px] md:text-[11px] font-mono tracking-[0.2em] uppercase">
            {/* Left column: Brand Logo */}
            <button
              type="button"
              tabIndex={pastHero ? 0 : -1}
              onClick={() => scrollToSection("home")}
              className="text-left leading-tight font-semibold text-cream hover:opacity-70 transition-opacity w-auto md:w-[15%] active:scale-95"
            >
              <span className="block font-hn text-sm font-normal">Vishnu &mdash; Vardhan</span>
              <span className="block text-cream/40 font-mono text-[9px]">AI &bull; SOFTWARE ENG</span>
            </button>

            {/* Separator */}
            <div className="hidden lg:flex w-[4%] justify-center">
              <ArrowRight size={13} strokeWidth={1} className="text-cream/30" />
            </div>

            {/* Center column: Telemetry */}
            <div className="hidden lg:block w-[30%] text-cream/60 leading-relaxed font-mono text-[10px] tracking-[0.18em]">
              Autonomous reasoning, statistical models &amp; high-performance code.
            </div>

            {/* Separator */}
            <div className="hidden lg:flex w-[4%] justify-center">
              <ArrowRight size={13} strokeWidth={1} className="text-cream/30" />
            </div>

            {/* Right column: Desktop Navigation Links */}
            <nav
              className="hidden md:flex items-center gap-5 lg:gap-7"
              aria-label="Primary Navigation"
            >
              {navItems.map((item) => {
                const isActive = activeSection === item.id
                return (
                  <button
                    key={item.id}
                    type="button"
                    tabIndex={pastHero ? 0 : -1}
                    onClick={() => scrollToSection(item.id)}
                    className={`transition-all duration-200 py-1 relative active:scale-95 ${
                      isActive
                        ? "text-cream font-semibold"
                        : "text-cream/60 hover:text-cream"
                    }`}
                  >
                    <span>{item.label}</span>
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-cream shadow-[0_0_8px_#efeee9]" />
                    )}
                  </button>
                )
              })}
            </nav>

            {/* Mobile Header Right: Futuristic Dot Menu Trigger */}
            <div className="md:hidden flex items-center">
              <button
                type="button"
                tabIndex={pastHero ? 0 : -1}
                onClick={() => setIsMobileMenuOpen((prev) => !prev)}
                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={isMobileMenuOpen}
                className="relative flex items-center justify-center w-9 h-9 rounded-full bg-[#181818] border border-cream/30 active:scale-90 transition-all duration-300"
              >
                <span className="w-2.5 h-2.5 rounded-full bg-cream shadow-[0_0_8px_#efeee9]" />
                <span className="absolute -top-1 -right-1 w-1.5 h-1.5 rounded-full bg-cream/70" />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Panel (when opened from sticky header) */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.28, ease: "easeOut" }}
              className="md:hidden bg-[#0c0c0c]/98 border-b border-white/10 shadow-2xl px-6 py-8 backdrop-blur-2xl"
            >
              <div className="text-[10px] font-mono tracking-[0.24em] text-cream/40 uppercase mb-5">
                SECTOR NAVIGATION
              </div>
              <nav className="flex flex-col space-y-4 text-sm font-mono tracking-[0.2em] uppercase text-cream">
                <button
                  type="button"
                  onClick={() => scrollToSection("home")}
                  className="text-left text-cream/50 hover:text-cream transition-colors active:scale-95"
                >
                  00 // TOP (HERO)
                </button>
                {navItems.map((item, idx) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => scrollToSection(item.id)}
                    className={`text-left transition-colors flex items-center justify-between active:scale-95 ${
                      activeSection === item.id
                        ? "text-cream font-bold underline underline-offset-4"
                        : "text-cream/80 hover:text-cream"
                    }`}
                  >
                    <span>0{idx + 1} // {item.label}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-cream/40" />
                  </button>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  )
}
