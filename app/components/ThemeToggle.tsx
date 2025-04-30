"use client"

import { useTheme } from "../context/ThemeContext"
import { FaSun, FaMoon } from "react-icons/fa"
import { motion } from "framer-motion"

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <motion.button
      onClick={toggleTheme}
      className="theme-toggle"
      whileTap={{ scale: 0.9 }}
      whileHover={{ scale: 1.1 }}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
    >
      <div className="theme-toggle-track">
        <div className="theme-toggle-thumb">
          {theme === "dark" ? <FaSun className="theme-icon sun" /> : <FaMoon className="theme-icon moon" />}
        </div>
      </div>
    </motion.button>
  )
}

export default ThemeToggle
