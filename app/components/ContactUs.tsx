"use client"

import type React from "react"
import { useState, useRef } from "react"
import { motion } from "framer-motion"
import { ArrowUpRight, Check, Copy, Mail, MapPin, Phone, Send } from "lucide-react"

const EMAIL_ADDRESS = "somulavishnu6@gmail.com"

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [copiedEmail, setCopiedEmail] = useState(false)
  const nameInputRef = useRef<HTMLInputElement>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitted(true)
      setFormData({ name: "", email: "", message: "" })

      setTimeout(() => {
        setSubmitted(false)
      }, 5000)
    }, 800)
  }

  const focusContactForm = () => {
    nameInputRef.current?.focus({ preventScroll: false })
    nameInputRef.current?.scrollIntoView({ behavior: "smooth", block: "center" })
  }

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL_ADDRESS)
      setCopiedEmail(true)
      setTimeout(() => setCopiedEmail(false), 2400)
    } catch {
      window.location.href = `mailto:${EMAIL_ADDRESS}`
    }
  }

  return (
    <div className="w-full bg-[#0a0a0a] text-cream font-hn border-b border-white/10 pb-20 md:pb-28">
      {/* Top Heading Area */}
      <div className="px-6 md:px-16 pt-24 md:pt-36 mb-16 flex flex-col xl:flex-row justify-between xl:items-end gap-10 max-w-[1440px] mx-auto">
        <div>
          <div className="text-[10px] md:text-[11px] font-mono tracking-[0.24em] mb-6">
            <span className="text-cream/40">[ 06 ]</span>{" "}
            <span className="text-cream font-bold uppercase">Initiate Collaboration</span>
          </div>

          <h2 className="text-[2.2rem] md:text-[3.5rem] lg:text-[4.2rem] leading-[1.08] font-medium tracking-tight text-cream max-w-3xl">
            Have an idea worth building?{" "}
            <span className="text-cream/50">Let&apos;s turn it into something useful.</span>
          </h2>
        </div>

        <div className="flex flex-col items-start xl:items-end">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-cream animate-pulse" />
            <p className="text-[10px] font-mono tracking-[0.2em] text-cream/60 uppercase">
              AVAILABLE FOR AI, DATA SCIENCE &amp; SOFTWARE ROLES
            </p>
          </div>

          <div className="flex flex-wrap gap-2.5">
            <a
              href={`mailto:${EMAIL_ADDRESS}`}
              className="px-5 py-2.5 rounded-full border border-white/20 bg-white/[0.03] text-[10px] font-mono tracking-[0.16em] uppercase text-cream hover:bg-cream hover:text-[#0a0a0a] active:scale-95 transition-all duration-300 inline-flex items-center gap-1.5"
            >
              <span>Email Direct</span>
              <ArrowUpRight size={12} />
            </a>

            <button
              type="button"
              onClick={handleCopyEmail}
              aria-live="polite"
              className="px-5 py-2.5 rounded-full border border-white/20 bg-white/[0.03] text-[10px] font-mono tracking-[0.16em] uppercase text-cream hover:bg-cream hover:text-[#0a0a0a] active:scale-95 transition-all duration-300 inline-flex items-center gap-1.5"
            >
              {copiedEmail ? (
                <>
                  <Check size={12} className="text-cream group-hover:text-[#0a0a0a]" />
                  <span>Copied Address</span>
                </>
              ) : (
                <>
                  <Copy size={12} />
                  <span>Copy Address</span>
                </>
              )}
            </button>

            <button
              type="button"
              onClick={focusContactForm}
              className="px-5 py-2.5 rounded-full border border-white/20 bg-white/[0.03] text-[10px] font-mono tracking-[0.16em] uppercase text-cream hover:bg-cream hover:text-[#0a0a0a] active:scale-95 transition-all duration-300"
            >
              Write Transmission
            </button>
          </div>
        </div>
      </div>

      {/* Hairline Two-Column Panel (35% Left Info / 65% Right Message Form) */}
      <div className="max-w-[1440px] mx-auto border-t border-b border-white/10 flex flex-col lg:flex-row bg-[#0d0d0e]/60">
        {/* Left Panel (35%) */}
        <div className="lg:w-[35%] border-b lg:border-b-0 lg:border-r border-white/10 p-8 md:p-12 flex flex-col justify-between min-h-[440px]">
          <div>
            <div className="text-cream/30 text-lg tracking-[0.3em] font-mono mb-8">***</div>

            <div className="text-[10px] font-bold font-mono tracking-[0.24em] uppercase text-cream mb-2">
              DIRECT COORDINATES
            </div>
            <p className="text-[13px] text-cream/60 leading-[1.65] mb-10">
              Reach out directly via email, phone, or professional engineering networks.
            </p>

            <div className="space-y-6">
              <div className="border-b border-white/10 pb-5">
                <div className="text-[10px] font-mono tracking-[0.2em] uppercase text-cream/40 mb-1 flex items-center gap-2">
                  <MapPin size={12} />
                  <span>Location</span>
                </div>
                <div className="text-[14px] font-medium text-cream">Kadapa, Andhra Pradesh, India</div>
              </div>

              <div className="border-b border-white/10 pb-5">
                <div className="text-[10px] font-mono tracking-[0.2em] uppercase text-cream/40 mb-1 flex items-center gap-2">
                  <Phone size={12} />
                  <span>Telephone</span>
                </div>
                <a
                  href="tel:9110752349"
                  className="text-[14px] font-medium text-cream hover:opacity-75 transition-opacity"
                >
                  +91 9110752349
                </a>
              </div>

              <div className="pb-2">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[10px] font-mono tracking-[0.2em] uppercase text-cream/40 flex items-center gap-2">
                    <Mail size={12} />
                    <span>Electronic Mail</span>
                  </span>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="text-[9px] font-mono tracking-widest uppercase text-cream/60 hover:text-cream transition-colors active:scale-95"
                  >
                    {copiedEmail ? "COPIED" : "COPY"}
                  </button>
                </div>
                <a
                  href={`mailto:${EMAIL_ADDRESS}`}
                  className="text-[14px] font-medium text-cream hover:opacity-75 break-all transition-opacity"
                >
                  {EMAIL_ADDRESS}
                </a>
              </div>
            </div>
          </div>

          <div className="pt-10 border-t border-white/10 mt-8">
            <div className="text-[10px] font-mono tracking-[0.24em] text-cream/40 uppercase mb-4">
              NETWORKS / PROFILES
            </div>
            <div className="flex flex-wrap gap-5 text-xs font-mono uppercase tracking-[0.16em]">
              <a
                href="https://linkedin.com/in/vishnuvardhan06/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cream/70 hover:text-cream inline-flex items-center gap-1 active:scale-95 transition-all"
              >
                <span>LinkedIn</span>
                <ArrowUpRight size={12} />
              </a>
              <a
                href="https://github.com/vishnu-066?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cream/70 hover:text-cream inline-flex items-center gap-1 active:scale-95 transition-all"
              >
                <span>GitHub</span>
                <ArrowUpRight size={12} />
              </a>
              <a
                href="https://leetcode.com/u/Vishnu_vardhan_2004/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cream/70 hover:text-cream inline-flex items-center gap-1 active:scale-95 transition-all"
              >
                <span>LeetCode</span>
                <ArrowUpRight size={12} />
              </a>
            </div>
          </div>
        </div>

        {/* Right Panel (65% — Message Form) */}
        <div className="lg:w-[65%] flex flex-col justify-between">
          <div className="border-b border-white/10 px-8 py-6 flex items-center justify-between text-[10px] font-mono text-cream/40 tracking-[0.24em] uppercase">
            <span>Transmit a direct message</span>
            <span>FORM // 01</span>
          </div>

          <form onSubmit={handleSubmit} className="p-8 md:p-12 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-[10px] font-mono tracking-[0.2em] uppercase text-cream/50 mb-2.5"
                >
                  01 / Your Name
                </label>
                <input
                  ref={nameInputRef}
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  autoComplete="name"
                  className="w-full bg-[#141416] border border-white/10 focus:border-cream/60 focus:bg-[#18181b] rounded-none px-4 py-3.5 text-[14px] text-cream placeholder:text-cream/30 focus:outline-none transition-colors"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-[10px] font-mono tracking-[0.2em] uppercase text-cream/50 mb-2.5"
                >
                  02 / Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  autoComplete="email"
                  className="w-full bg-[#141416] border border-white/10 focus:border-cream/60 focus:bg-[#18181b] rounded-none px-4 py-3.5 text-[14px] text-cream placeholder:text-cream/30 focus:outline-none transition-colors"
                  placeholder="name@company.com"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-[10px] font-mono tracking-[0.2em] uppercase text-cream/50 mb-2.5"
              >
                03 / Project or Opportunity Details
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full bg-[#141416] border border-white/10 focus:border-cream/60 focus:bg-[#18181b] rounded-none px-4 py-3.5 text-[14px] text-cream placeholder:text-cream/30 focus:outline-none resize-none transition-colors"
                placeholder="Hello Vishnu, I'd like to discuss an engineering role or technical project..."
              />
            </div>

            <div className="pt-2 flex flex-wrap items-center justify-between gap-4">
              {/* Kinetic Sliding Button with Tactile Active Click */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="group relative overflow-hidden inline-flex items-center gap-3 bg-cream text-[#0a0a0a] px-8 py-3.5 rounded-full border border-transparent shadow-[0_4px_20px_rgba(239,238,233,0.15)] active:scale-95 transition-all duration-300"
              >
                <span className="absolute inset-0 bg-white -translate-x-[101%] group-hover:translate-x-0 transition-transform duration-500 ease-out" />
                <Send
                  size={14}
                  className="relative z-10 text-[#0a0a0a] group-hover:scale-110 transition-transform"
                />
                <span className="relative z-10 text-[12px] font-mono tracking-[0.16em] uppercase font-semibold text-[#0a0a0a]">
                  {isSubmitting ? "Transmitting..." : "Send Transmission"}
                </span>
              </button>

              {submitted && (
                <motion.div
                  role="status"
                  aria-live="polite"
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-xs font-mono tracking-widest uppercase text-cream border border-cream/30 bg-[#161616] px-4 py-2.5 flex items-center gap-2"
                >
                  <Check size={13} className="text-cream" />
                  <span>Message dispatched. I will respond promptly.</span>
                </motion.div>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
