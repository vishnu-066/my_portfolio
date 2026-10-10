"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, ArrowUpRight } from "lucide-react"

interface MobileDotMenuProps {
  activeSection?: string
  onNavigate?: (id: string) => void
}

const navItems = [
  { id: "about", num: "01", label: "Profile & Vision" },
  { id: "projects", num: "02", label: "Selected Works" },
  { id: "skills", num: "03", label: "Tech Ecosystem" },
  { id: "experience", num: "04", label: "Journey & Academia" },
  { id: "certifications", num: "05", label: "Credentials & Honors" },
  { id: "contact-us", num: "06", label: "Direct Transmission" },
]

const socialLinks = [
  { label: "LinkedIn", href: "https://linkedin.com/in/vishnuvardhan06/" },
  { label: "GitHub", href: "https://github.com/vishnu-066?tab=repositories" },
  { label: "LeetCode", href: "https://leetcode.com/u/Vishnu_vardhan_2004/" },
  { label: "Resume", href: "https://drive.google.com/file/d/1ggOPIq_zLPBrpEPNuoIiTS1tx0am1qX3/view?usp=drive_link" },
]

export default function MobileDotMenu({ activeSection, onNavigate }: MobileDotMenuProps) {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  const handleSelect = (id: string) => {
    setIsOpen(false)
    if (onNavigate) {
      onNavigate(id)
    } else {
      const el = document.getElementById(id)
      if (el) {
        el.scrollIntoView({ behavior: "smooth" })
      }
    }
  }

  return (
    <>
      {/* FLOATING FUTURISTIC DOT BUTTON (Mobile Only) */}
      <div className="fixed bottom-6 right-6 z-[70] md:hidden">
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label={isOpen ? "Close mobile HUD menu" : "Open mobile HUD menu"}
          aria-expanded={isOpen}
          className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#121212]/90 border border-cream/30 text-cream backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.8)] active:scale-90 transition-all duration-300 group"
        >
          {/* Outer Pulsing Radar Ring */}
          <span className="absolute inset-0 rounded-full border border-cream/20 animate-ping opacity-40 pointer-events-none" />

          {/* Central Animated Dot Icon */}
          {isOpen ? (
            <X size={22} strokeWidth={1.5} className="text-cream animate-in spin-in-90 duration-200" />
          ) : (
            <div className="relative flex items-center justify-center">
              {/* Primary Glowing Core Dot */}
              <span className="w-3.5 h-3.5 rounded-full bg-cream shadow-[0_0_14px_#efeee9] transition-transform duration-300 group-hover:scale-125" />
              {/* Orbital Satellite Dots */}
              <span className="absolute -top-2.5 -right-2.5 w-1.5 h-1.5 rounded-full bg-cream/70" />
              <span className="absolute -bottom-2 -left-2 w-1.5 h-1.5 rounded-full bg-cream/50" />
            </div>
          )}
        </button>
      </div>

      {/* FULL-SCREEN FUTURISTIC HUD OVERLAY */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[65] md:hidden bg-[#070707]/95 backdrop-blur-2xl flex flex-col justify-between p-6 sm:p-8 font-hn text-cream select-none overflow-y-auto"
          >
            {/* HUD Top Bar */}
            <div className="flex items-center justify-between border-b border-white/10 pb-4 text-[10px] font-mono tracking-[0.24em] uppercase text-cream/50">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cream animate-pulse" />
                <span>NAVIGATION HUD // SECTORS</span>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="text-cream hover:opacity-70 p-1 font-mono text-xs uppercase tracking-widest active:scale-95"
              >
                [ CLOSE ]
              </button>
            </div>

            {/* Nav Items List */}
            <div className="my-auto py-8 space-y-5">
              <button
                type="button"
                onClick={() => handleSelect("home")}
                className="w-full text-left group flex items-baseline justify-between border-b border-white/5 pb-3 active:scale-[0.98] transition-transform"
              >
                <div className="flex items-baseline gap-4">
                  <span className="text-xs font-mono tracking-[0.2em] text-cream/40">00</span>
                  <span className="text-3xl font-medium tracking-tight text-cream/70 group-hover:text-cream">
                    Top // Hero
                  </span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-cream/40 group-hover:text-cream group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </button>

              {navItems.map((item) => {
                const isActive = activeSection === item.id
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => handleSelect(item.id)}
                    className="w-full text-left group flex items-baseline justify-between border-b border-white/5 pb-3 active:scale-[0.98] transition-transform"
                  >
                    <div className="flex items-baseline gap-4">
                      <span className="text-xs font-mono tracking-[0.2em] text-cream/40">{item.num}</span>
                      <span
                        className={`text-3xl font-medium tracking-tight transition-colors ${
                          isActive ? "text-cream underline underline-offset-8" : "text-cream/80 group-hover:text-cream"
                        }`}
                      >
                        {item.label}
                      </span>
                    </div>
                    <ArrowUpRight
                      className={`w-4 h-4 transition-all ${
                        isActive
                          ? "text-cream"
                          : "text-cream/40 group-hover:text-cream group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      }`}
                    />
                  </button>
                )
              })}
            </div>

            {/* Bottom Coordinates & Direct Links */}
            <div className="border-t border-white/10 pt-5 space-y-4">
              <div className="text-[10px] font-mono tracking-[0.2em] uppercase text-cream/40">
                EXTERNAL CHANNELS
              </div>
              <div className="flex flex-wrap gap-x-5 gap-y-2 text-xs font-mono uppercase tracking-[0.15em]">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsOpen(false)}
                    className="text-cream/70 hover:text-cream active:scale-95 transition-all inline-flex items-center gap-1"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight className="w-3 h-3 text-cream/40" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
