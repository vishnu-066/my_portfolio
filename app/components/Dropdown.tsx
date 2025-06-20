"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FaChevronDown } from "react-icons/fa"

interface DropdownProps {
  title: string
  items: {
    name: string
    href: string
  }[]
}

const Dropdown = ({ title, items }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  const handleItemClick = (href: string) => {
    setIsOpen(false)
    const element = document.getElementById(href.slice(1))
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="relative inline-block" ref={dropdownRef}>
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className={`magical-btn ml-6 ${isOpen ? "active" : ""}`}
        whileHover={{
          boxShadow: "0 0 15px rgba(5, 217, 232, 0.8), 0 0 25px rgba(5, 217, 232, 0.5)",
        }}
        whileTap={{ scale: 0.95 }}
      >
        {title}
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }} className="ml-1 inline-block">
          <FaChevronDown className="h-3 w-3" />
        </motion.div>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute mt-2 w-48 rounded-md bg-[#050816] bg-opacity-90 py-1 shadow-lg ring-1 ring-[#05d9e8] ring-opacity-20 backdrop-blur-sm z-50"
          >
            {items.map((item, index) => (
              <motion.button
                key={item.name}
                onClick={() => handleItemClick(item.href)}
                className="smoke-btn block w-full text-left px-4 py-2 text-sm mb-2 mx-2"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2, delay: index * 0.05 }}
                whileHover={{
                  backgroundColor: "rgba(5, 217, 232, 0.1)",
                  boxShadow: "0 0 10px rgba(5, 217, 232, 0.3)",
                }}
              >
                {item.name}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Dropdown
