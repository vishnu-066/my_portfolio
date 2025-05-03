"use client"

import type React from "react"

import { useState } from "react"
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaPaperPlane } from "react-icons/fa"
import NeonButton from "./NeonButton"

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
    <div className="bg-gray-800 bg-opacity-50 rounded-lg p-6 border border-gray-700">
      <h2 className="text-2xl font-bold mb-6 text-center">Contact Me</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div className="flex flex-col items-center">
          <FaMapMarkerAlt className="text-pink-400 text-2xl mb-2" />
          <h3 className="text-lg font-semibold">Address</h3>
          <p className="text-center text-gray-300">Kadapa, Andhra Pradesh</p>
        </div>
        <div className="flex flex-col items-center">
          <FaPhone className="text-pink-400 text-2xl mb-2" />
          <h3 className="text-lg font-semibold">Phone</h3>
          <p className="text-gray-300">9110752349</p>
        </div>
        <div className="flex flex-col items-center">
          <FaEnvelope className="text-pink-400 text-2xl mb-2" />
          <h3 className="text-lg font-semibold">Email</h3>
          <p className="text-gray-300">somulavishnu6@gmail.com</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 text-white"
            placeholder="John Doe"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
            Your Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 text-white"
            placeholder="john@example.com"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
            Your Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 text-white"
            placeholder="Hello, I'd like to discuss..."
          />
        </div>

        <div className="flex justify-center">
          <NeonButton type="submit" className="px-6 py-3" disabled={isSubmitting}>
            {isSubmitting ? (
              "Sending..."
            ) : (
              <>
                <FaPaperPlane className="mr-2" /> Send Message
              </>
            )}
          </NeonButton>
        </div>

        {submitted && (
          <div className="text-center text-green-400 mt-4 p-3 bg-green-900 bg-opacity-20 rounded-md">
            Thank you for your message! I'll get back to you soon.
          </div>
        )}
      </form>
    </div>
  )
}

export default ContactUs
