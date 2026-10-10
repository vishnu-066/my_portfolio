"use client"

import { useState, useEffect } from "react"
import { X } from "lucide-react"

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact-us" },
]

const socialLinks = [
  { label: "LinkedIn", href: "https://linkedin.com/in/vishnuvardhan06/", external: true },
  { label: "GitHub", href: "https://github.com/vishnu-066?tab=repositories", external: true },
  { label: "LeetCode", href: "https://leetcode.com/u/Vishnu_vardhan_2004/", external: true },
  {
    label: "Resume",
    href: "https://drive.google.com/file/d/1ggOPIq_zLPBrpEPNuoIiTS1tx0am1qX3/view?usp=drive_link",
    external: true,
  },
]

const HeroSection = () => {
  const [drawerOpen, setDrawerOpen] = useState(false)

  useEffect(() => {
    if (drawerOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [drawerOpen])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && drawerOpen) {
        setDrawerOpen(false)
      }
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [drawerOpen])

  return (
    <section
      id="home"
      aria-label="Hero"
      className="relative h-[100dvh] w-full overflow-hidden bg-black font-hn text-cream"
    >
      {/* Layer 0 (default): Full-bleed background image */}
      <img
        src="/vishnu-hero-bg.png"
        alt=""
        className="anim-fade-in absolute inset-0 h-full w-full object-cover"
      />

      {/* Layer z-10: Giant scrolling marquee name */}
      <div
        className="anim-fade-up absolute inset-x-0 top-[16vh] sm:top-[14vh] z-10 overflow-hidden"
        style={{ animationDelay: "500ms" }}
      >
        <h1 className="sr-only">Somula Vishnuvardhan Reddy (Vishnu — Vardhan)</h1>
        <div
          className="marquee flex w-max whitespace-nowrap font-hn text-[16vh] sm:text-[26vh] leading-none text-cream"
          aria-hidden="true"
        >
          <span className="pr-[6vw]">Vishnu &mdash; Vardhan&nbsp;</span>
          <span className="pr-[6vw]">Vishnu &mdash; Vardhan&nbsp;</span>
        </div>
      </div>

      {/* Layer z-10: Horizontal cream rule above footer */}
      <div
        className="anim-line absolute inset-x-6 sm:inset-x-10 bottom-[5.5rem] sm:bottom-28 z-10 h-0.5 bg-cream origin-left"
        style={{ animationDelay: "1200ms" }}
      />

      {/* Layer z-20: Front portrait cutout overlay (above marquee, pointer-events-none) */}
      <img
        src="/vishnu-cutout.png"
        alt="Portrait"
        className="anim-rise-in pointer-events-none absolute inset-0 z-20 h-full w-full object-cover"
        style={{ animationDelay: "300ms" }}
      />

      {/* Layer z-30: Editorial Header */}
      <header className="absolute inset-x-0 top-0 z-30 flex items-start justify-between px-6 pt-6 sm:px-10 sm:pt-8">
        {/* Left: Brand */}
        <a
          href="#home"
          className="anim-fade-up font-hn text-lg tracking-wide text-cream"
          style={{ animationDelay: "800ms" }}
        >
          Vishnu
        </a>

        {/* Right cluster (desktop sm: and up) */}
        <div className="hidden sm:flex items-start gap-16 lg:gap-24">
          {/* Year */}
          <span
            className="anim-fade-up text-sm text-cream"
            style={{ animationDelay: "900ms" }}
          >
            2025
          </span>

          {/* Nav column */}
          <nav className="flex flex-col gap-0.5 text-sm" aria-label="Hero Navigation">
            {navLinks.map((item, i) => (
              <a
                key={item.label}
                href={item.href}
                className="anim-fade-up text-cream transition-opacity duration-300 hover:opacity-60"
                style={{ animationDelay: `${1000 + i * 80}ms` }}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Social column */}
          <div className="flex flex-col gap-0.5 text-sm">
            {socialLinks.map((item, i) => (
              <a
                key={item.label}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                className="anim-fade-up text-cream transition-opacity duration-300 hover:opacity-60"
                style={{ animationDelay: `${1150 + i * 80}ms` }}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </header>

      {/* Layer z-50: Mobile-only Futuristic Dot Menu Button */}
      <button
        type="button"
        aria-label={drawerOpen ? "Close menu" : "Open menu"}
        aria-expanded={drawerOpen}
        onClick={() => setDrawerOpen((prev) => !prev)}
        className="anim-fade-up absolute right-6 top-5 z-50 flex h-11 w-11 items-center justify-center rounded-full border border-cream/30 bg-[#141414]/90 backdrop-blur-xl text-cream shadow-[0_4px_20px_rgba(0,0,0,0.6)] active:scale-90 transition-all duration-300 sm:hidden group"
        style={{ animationDelay: "900ms" }}
      >
        {drawerOpen ? (
          <X size={20} strokeWidth={1.5} className="text-cream" />
        ) : (
          <div className="relative flex items-center justify-center">
            {/* Core Glowing Dot */}
            <span className="w-2.5 h-2.5 rounded-full bg-cream shadow-[0_0_10px_#efeee9] group-hover:scale-125 transition-transform" />
            {/* Orbital Micro-Dots */}
            <span className="absolute -top-2 -right-2 w-1 h-1 rounded-full bg-cream/70" />
            <span className="absolute -bottom-1.5 -left-1.5 w-1 h-1 rounded-full bg-cream/50" />
          </div>
        )}
      </button>

      {/* Layer z-30 (mobile) / sm:z-10 (desktop): Bottom Footer Copy */}
      <div className="absolute inset-x-0 bottom-0 z-30 sm:z-10 flex items-end justify-between px-6 pb-5 sm:px-10 sm:pb-8 text-xs sm:text-sm leading-relaxed font-hn text-cream">
        <div
          className="anim-fade-up"
          style={{ animationDelay: "1400ms" }}
        >
          <div>AI &amp; Data Scientist</div>
          <div>Software Engineer</div>
          <div>Algorithm Crafter</div>
        </div>

        <div
          className="anim-fade-up text-right"
          style={{ animationDelay: "1550ms" }}
        >
          <div>B.Tech CSE &mdash; LPU</div>
          <div>Somula Vishnuvardhan Reddy</div>
        </div>
      </div>

      {/* Layer z-40: Mobile Drawer (sm:hidden) */}
      <div
        className={`fixed inset-0 z-40 sm:hidden transition-opacity duration-500 ${
          drawerOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/40 backdrop-blur-sm"
          onClick={() => setDrawerOpen(false)}
        />

        {/* Slide-in Panel */}
        <div
          className={`absolute right-0 top-0 h-full w-[80%] max-w-sm bg-[#141414] px-8 py-10 flex flex-col justify-between transition-transform duration-[600ms] [transition-timing-function:cubic-bezier(0.76,0,0.24,1)] ${
            drawerOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Close Button (Lucide X, size 26, strokeWidth 1.5) */}
          <button
            type="button"
            aria-label="Close drawer"
            onClick={() => setDrawerOpen(false)}
            className={`absolute right-6 top-6 text-cream transition-all duration-300 ${
              drawerOpen ? "rotate-0 opacity-100 delay-300" : "rotate-90 opacity-0"
            }`}
          >
            <X size={26} strokeWidth={1.5} />
          </button>

          {/* Site Index Section */}
          <div className="mt-12">
            <div
              className={`text-xs uppercase tracking-[0.2em] text-cream/50 mb-6 transition-all duration-500 ${
                drawerOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
              }`}
              style={{ transitionDelay: drawerOpen ? "250ms" : "0ms" }}
            >
              Site Index
            </div>

            <nav className="flex flex-col gap-3">
              {navLinks.map((item, i) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setDrawerOpen(false)}
                  className={`text-4xl font-hn text-cream transition-all duration-500 hover:opacity-60 ${
                    drawerOpen ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
                  }`}
                  style={{ transitionDelay: drawerOpen ? `${300 + i * 80}ms` : "0ms" }}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Find Me Section */}
          <div>
            <div
              className={`text-xs uppercase tracking-[0.2em] text-cream/50 mb-4 transition-all duration-500 ${
                drawerOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
              }`}
              style={{ transitionDelay: drawerOpen ? "500ms" : "0ms" }}
            >
              Find Me
            </div>

            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
              {socialLinks.map((item, i) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                  onClick={() => setDrawerOpen(false)}
                  className={`text-cream transition-all duration-500 hover:opacity-60 ${
                    drawerOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                  }`}
                  style={{ transitionDelay: drawerOpen ? `${550 + i * 60}ms` : "0ms" }}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
