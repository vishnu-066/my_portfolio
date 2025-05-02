"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface SectionHeadingProps {
  title: string
  icon?: ReactNode
}

const SectionHeading = ({ title, icon }: SectionHeadingProps) => {
  return (
    <div className="section-title-wrapper text-center mb-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="inline-flex items-center justify-center"
      >
        {icon && <div className="mr-4">{icon}</div>}
        <h2 className="text-4xl font-bold section-title relative">
          <span className="text-[#0ef]">My</span> {title}
          <motion.span
            className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-[#ff4ec8] via-[#6a5af9] to-[#00ffe7]"
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
          ></motion.span>
        </h2>
      </motion.div>
    </div>
  )
}

export default SectionHeading
