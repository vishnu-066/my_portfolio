"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
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

  return (
    <div className="relative" ref={dropdownRef}>
      <button onClick={() => setIsOpen(!isOpen)} className={`nav-button flex items-center ${isOpen ? "active" : ""}`}>
        {title} <FaChevronDown className="ml-1 h-3 w-3" />
      </button>

      {isOpen && (
        <div className="dropdown-menu absolute mt-2 w-48 rounded-md bg-gray-800 bg-opacity-90 py-1 shadow-lg ring-1 ring-black ring-opacity-5 backdrop-blur-sm z-50">
          {items.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="dropdown-item block px-4 py-2 text-sm text-gray-200 hover:text-pink-400"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

export default Dropdown
