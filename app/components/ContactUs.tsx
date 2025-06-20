"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaPaperPlane, FaComments } from "react-icons/fa"

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitted(true)
      setFormData({ name: "", email: "", message: "" })

      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitted(false)
      }, 5000)
    }, 1500)
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Left Section - Get in Touch */}
      <motion.div
        className="cosmic-card p-8"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="flex items-center mb-6">
          <FaComments className="text-3xl gradient-icon mr-3" />
          <h3 className="text-2xl font-bold gradient-text-primary">Get in Touch</h3>
        </div>

        <p className="text-gray-300 mb-8">
          I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision. Feel
          free to reach out!
        </p>

        <div className="space-y-6">
          <div className="flex items-center">
            <FaMapMarkerAlt className="text-xl gradient-icon mr-4" />
            <div>
              <h4 className="text-lg font-semibold gradient-text">Location</h4>
              <p className="text-gray-300">Kadapa, Andhra Pradesh</p>
            </div>
          </div>

          <div className="flex items-center">
            <FaPhone className="text-xl gradient-icon mr-4" />
            <div>
              <h4 className="text-lg font-semibold gradient-text">Phone</h4>
              <p className="text-gray-300">9110752349</p>
            </div>
          </div>

          <div className="flex items-center">
            <FaEnvelope className="text-xl gradient-icon mr-4" />
            <div>
              <h4 className="text-lg font-semibold gradient-text">Email</h4>
              <p className="text-gray-300">somulavishnu6@gmail.com</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Right Section - Contact Form */}
      <motion.div
        className="cosmic-card p-8"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h3 className="text-2xl font-bold gradient-text-primary mb-6">Contact Me</h3>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium gradient-text mb-1">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="cosmic-input w-full"
              placeholder="John Doe"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium gradient-text mb-1">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="cosmic-input w-full"
              placeholder="john@example.com"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium gradient-text mb-1">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="cosmic-input w-full"
              placeholder="Hello, I'd like to discuss..."
            />
          </div>

          <div className="flex justify-center">
            <motion.button
              type="submit"
              className="cosmic-button flex items-center"
              disabled={isSubmitting}
              whileHover={{
                y: -3,
                boxShadow: "0 0 25px rgba(5, 217, 232, 0.7), 0 0 50px rgba(255, 78, 200, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              {isSubmitting ? (
                "Sending..."
              ) : (
                <>
                  <FaPaperPlane className="mr-2" /> Send Message
                </>
              )}
            </motion.button>
          </div>

          {submitted && (
            <motion.div
              className="text-center gradient-text mt-4 p-3 bg-green-900 bg-opacity-20 rounded-md border border-green-500"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              Thank you for your message! I'll get back to you soon.
            </motion.div>
          )}
        </form>
      </motion.div>
    </div>
  )
}

export default ContactUs
