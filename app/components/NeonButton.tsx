"use client"

import type { ReactNode } from "react"

interface NeonButtonProps {
  children: ReactNode
  onClick?: () => void
  href?: string
  className?: string
  target?: string
  rel?: string
  type?: "button" | "submit" | "reset"
}

const NeonButton = ({ children, onClick, href, className = "", target, rel, type = "button" }: NeonButtonProps) => {
  if (href) {
    return (
      <a href={href} className={`neon-button ${className}`} onClick={onClick} target={target} rel={rel}>
        {children}
      </a>
    )
  }

  return (
    <button type={type} className={`neon-button ${className}`} onClick={onClick}>
      {children}
    </button>
  )
}

export default NeonButton
