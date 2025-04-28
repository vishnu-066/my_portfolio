"use client"

import { useEffect } from "react"
import Link from "next/link"

const Header = () => {
  useEffect(() => {
    const handleScroll = (e: Event) => {
      e.preventDefault()
      const target = e.target as HTMLAnchorElement
      const id = target.getAttribute("href")?.slice(1)
      if (id) {
        const element = document.getElementById(id)
        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
          })
        }
      }
    }

    const links = document.querySelectorAll('nav a[href^="#"]')
    links.forEach((link) => {
      link.addEventListener("click", handleScroll)
    })

    return () => {
      links.forEach((link) => {
        link.removeEventListener("click", handleScroll)
      })
    }
  }, [])

  return (
    <header className="bg-white bg-opacity-80 shadow-md sticky top-0 z-10">
      <nav className="container mx-auto px-4 py-4">
        <ul className="flex justify-center space-x-6">
          <li>
            <Link href="#personal-info" className="text-gray-800 hover:text-blue-600">
              Home
            </Link>
          </li>
          <li>
            <Link href="#skills" className="text-gray-800 hover:text-blue-600">
              Skills
            </Link>
          </li>
          <li>
            <Link href="#education" className="text-gray-800 hover:text-blue-600">
              Education
            </Link>
          </li>
          <li>
            <Link href="#projects" className="text-gray-800 hover:text-blue-600">
              Projects
            </Link>
          </li>
          <li>
            <Link href="#achievements" className="text-gray-800 hover:text-blue-600">
              Achievements
            </Link>
          </li>
          <li>
            <Link href="#certifications" className="text-gray-800 hover:text-blue-600">
              Certifications
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
