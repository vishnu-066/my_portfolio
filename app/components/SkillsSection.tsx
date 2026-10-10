"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  FaPython,
  FaRProject,
  FaDatabase,
  FaChartBar,
  FaChartPie,
  FaFileExcel,
  FaChartLine,
  FaBrain,
  FaChartArea,
  FaCode,
  FaHtml5,
  FaCss3Alt,
  FaJs,
} from "react-icons/fa"
import {
  SiCplusplus,
  SiPandas,
  SiNumpy,
  SiMysql,
  SiR,
} from "react-icons/si"
import { Layers, Code2, Cpu, Wrench, Sparkles } from "lucide-react"

const allSkillsData = [
  // Programming
  {
    category: "programming",
    categoryLabel: "Programming",
    name: "Python",
    icon: FaPython,
    descriptor: "Data analysis, demographic modeling, and scientific computing workflows.",
  },
  {
    category: "programming",
    categoryLabel: "Programming",
    name: "C++",
    icon: SiCplusplus,
    descriptor: "Core data structures, algorithmic problem-solving, and tree implementations.",
  },
  {
    category: "programming",
    categoryLabel: "Programming",
    name: "R",
    icon: FaRProject,
    descriptor: "Statistical computing, hypothesis evaluation, and healthcare risk modeling.",
  },
  {
    category: "programming",
    categoryLabel: "Programming",
    name: "JavaScript",
    icon: FaJs,
    descriptor: "Interactive browser logic and step-by-step data structure animations.",
  },
  // AI / Data
  {
    category: "ai-data",
    categoryLabel: "AI / Data",
    name: "Predictive Modeling",
    icon: FaBrain,
    descriptor: "Supervised learning with Random Forest, Logistic Regression, and SVM.",
  },
  {
    category: "ai-data",
    categoryLabel: "AI / Data",
    name: "Statistical Analysis",
    icon: FaChartLine,
    descriptor: "Feature correlation matrices, ROC-AUC evaluation, and trend forecasting.",
  },
  {
    category: "ai-data",
    categoryLabel: "AI / Data",
    name: "Data Mining",
    icon: FaDatabase,
    descriptor: "SMOTE class balancing, recursive feature elimination, and data imputation.",
  },
  {
    category: "ai-data",
    categoryLabel: "AI / Data",
    name: "Data Visualization",
    icon: FaChartBar,
    descriptor: "Communicating complex demographic and clinical insights through visual charts.",
  },
  {
    category: "ai-data",
    categoryLabel: "AI / Data",
    name: "Pandas",
    icon: SiPandas,
    descriptor: "DataFrame manipulation, multi-period census cleaning, and data normalization.",
  },
  {
    category: "ai-data",
    categoryLabel: "AI / Data",
    name: "NumPy",
    icon: SiNumpy,
    descriptor: "High-performance numerical computing and multi-dimensional array operations.",
  },
  {
    category: "ai-data",
    categoryLabel: "AI / Data",
    name: "ggplot2",
    icon: FaChartArea,
    descriptor: "Declarative statistical graphics and multi-variable healthcare visualizations.",
  },
  {
    category: "ai-data",
    categoryLabel: "AI / Data",
    name: "dplyr & caret",
    icon: SiR,
    descriptor: "R data wrangling pipelines, hyperparameter grid search, and cross-validation.",
  },
  // Development
  {
    category: "development",
    categoryLabel: "Development",
    name: "WebAssembly",
    icon: FaCode,
    descriptor: "Compiling C++ algorithms to run at near-native speed in web browsers.",
  },
  {
    category: "development",
    categoryLabel: "Development",
    name: "HTML5",
    icon: FaHtml5,
    descriptor: "Semantic interface architecture for interactive educational web applications.",
  },
  {
    category: "development",
    categoryLabel: "Development",
    name: "CSS3",
    icon: FaCss3Alt,
    descriptor: "Responsive interface layouts and custom visual state transitions.",
  },
  // Tools
  {
    category: "tools",
    categoryLabel: "Tools",
    name: "MySQL",
    icon: SiMysql,
    descriptor: "Relational database querying, schema organization, and structured storage.",
  },
  {
    category: "tools",
    categoryLabel: "Tools",
    name: "Tableau",
    icon: FaChartPie,
    descriptor: "Interactive business intelligence dashboards and visual data storytelling.",
  },
  {
    category: "tools",
    categoryLabel: "Tools",
    name: "Microsoft Excel",
    icon: FaFileExcel,
    descriptor: "Business data modeling, spreadsheet analytics, and quantitative reporting.",
  },
]

const categories = [
  { id: "all", name: "All Ecosystem", Icon: Layers },
  { id: "programming", name: "Programming", Icon: Code2 },
  { id: "ai-data", name: "AI / Data", Icon: Sparkles },
  { id: "development", name: "Development", Icon: Cpu },
  { id: "tools", name: "Tools", Icon: Wrench },
]

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState("all")

  const filteredSkills =
    activeCategory === "all"
      ? allSkillsData
      : allSkillsData.filter((s) => s.category === activeCategory)

  return (
    <section
      id="skills"
      aria-label="Skills and Technology Ecosystem"
      className="relative w-full bg-[#0a0a0a] text-cream pt-24 md:pt-36 pb-20 md:pb-28 z-20 border-b border-white/10 font-hn"
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-16">
        {/* Section Label */}
        <div className="flex flex-col items-center text-center">
          <div className="text-[10px] md:text-[11px] font-mono tracking-[0.24em] mb-8">
            <span className="text-cream/40">[ 03 ]</span>{" "}
            <span className="text-cream font-bold uppercase">Technology Ecosystem</span>
          </div>

          {/* Main Heading */}
          <motion.h2
            initial={{ y: 35, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-[2.2rem] md:text-[3.5rem] lg:text-[4.2rem] leading-[1.08] font-medium tracking-tight text-cream max-w-[1020px] text-center mb-12"
          >
            Core programming languages, predictive modeling frameworks, and analytical tools.
          </motion.h2>

          {/* Action / Filter Pills with tactile feedback */}
          <div
            role="tablist"
            aria-label="Filter skills by category"
            className="flex flex-wrap justify-center gap-2.5 sm:gap-3.5 mb-14 md:mb-20"
          >
            {categories.map(({ id, name, Icon }) => {
              const isActive = activeCategory === id
              return (
                <button
                  key={id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveCategory(id)}
                  className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full border text-[11px] font-mono uppercase tracking-[0.16em] backdrop-blur-md active:scale-95 transition-all duration-300 ${
                    isActive
                      ? "border-cream bg-cream text-[#0a0a0a] font-semibold shadow-[0_0_20px_rgba(239,238,233,0.25)]"
                      : "border-white/15 bg-white/[0.03] text-cream/70 hover:border-cream/50 hover:text-cream"
                  }`}
                >
                  <Icon size={13} strokeWidth={2} />
                  <span>{name}</span>
                </button>
              )
            })}
          </div>
        </div>

        {/* Floating Dark Editorial Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {filteredSkills.map((skill, idx) => {
              const SkillIcon = skill.icon
              return (
                <motion.div
                  key={skill.name}
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="floating-card group border border-white/10 bg-[#121212]/90 hover:border-cream/40 hover:bg-[#181818] p-7 md:p-8 flex flex-col justify-between transition-colors duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-[10px] font-mono tracking-[0.2em] uppercase text-cream/40 group-hover:text-cream/70 transition-colors">
                        {String(idx + 1).padStart(2, "0")} // {skill.categoryLabel}
                      </span>
                      <div className="w-9 h-9 rounded-full border border-white/15 group-hover:border-cream/40 flex items-center justify-center text-cream/80 group-hover:text-cream transition-colors bg-white/[0.02]">
                        <SkillIcon size={16} />
                      </div>
                    </div>

                    <h3 className="text-xl font-medium tracking-tight text-cream mb-2.5 transition-colors">
                      {skill.name}
                    </h3>

                    <p className="text-[13px] md:text-[14px] text-cream/65 group-hover:text-cream/90 leading-[1.65] transition-colors">
                      {skill.descriptor}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[9px] font-mono tracking-widest uppercase text-cream/30 group-hover:text-cream/60 transition-colors">
                    <span>STATUS // PRODUCTION</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-cream/40 group-hover:bg-cream group-hover:shadow-[0_0_6px_#efeee9]" />
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </AnimatePresence>

        {/* Bottom Telemetry Row */}
        <div className="hidden md:flex items-center justify-between pt-14 text-[10px] font-mono tracking-widest uppercase text-cream/40 font-medium border-t border-white/10 mt-14">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-cream animate-pulse" />
            <span>BUILT FOR PRECISION &amp; SCALE.</span>
          </div>
          <span>16+ CORE SPECIALIZED CAPABILITIES</span>
        </div>
      </div>
    </section>
  )
}
