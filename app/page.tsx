"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import {
  ArrowUpRight,
  Plus,
  Brain,
  Code2,
  Database,
  BarChart3,
  BookOpen,
  Award,
  Trophy,
  GraduationCap,
  Briefcase,
  ArrowDown,
} from "lucide-react"
import Navigation from "./components/Navigation"
import HeroSection from "./components/HeroSection"
import SkillsSection from "./components/SkillsSection"
import ContactUs from "./components/ContactUs"
import SandTransitionImage from "./components/SandTransitionImage"
import FuturisticLoader from "./components/FuturisticLoader"
import MobileDotMenu from "./components/MobileDotMenu"
import { assetPath } from "./lib/utils"

const projectsShowcase = [
  {
    id: "diabetes-prediction",
    slug: "diabetes-prediction",
    name: "Diabetes Prediction Model",
    category: "Machine Learning & Healthcare",
    date: "Nov 2024",
    metric: "85% Accuracy on Test Data",
    image: "/images/diabetes-prediction.png",
    githubUrl: "https://github.com/vishnu-066/Diabetes-prediction-Model",
    technologies: ["R", "ggplot2", "caret", "dplyr"],
    description:
      "A machine learning model that predicts the likelihood of diabetes based on clinical health parameters such as glucose levels, BMI, and age, achieving 85% accuracy on test data.",
    highlights: [
      "Compared Random Forest, Logistic Regression, and SVM classifiers with cross-validation",
      "Implemented SMOTE class balancing and recursive feature elimination for key predictors",
      "Built an interactive statistical dashboard with ROC curve and correlation analysis",
    ],
  },
  {
    id: "bst-visualization",
    slug: "bst-visualization",
    name: "Binary Search Tree Visualization",
    category: "Algorithms & WebAssembly",
    date: "Aug 2024",
    metric: "C++ & Wasm Engine",
    image: "/images/bst-visualization.png",
    githubUrl: "https://github.com/vishnu-066/cipher_schools_project",
    technologies: ["C++", "WebAssembly", "HTML", "CSS", "JavaScript"],
    description:
      "An interactive visualization tool for Binary Search Trees, demonstrating insertion, deletion, and traversal operations with step-by-step animated visual feedback.",
    highlights: [
      "Compiled C++ BST implementation to WebAssembly for near-native browser execution",
      "Step-by-step animated in-order, pre-order, and post-order tree traversals",
    ],
  },
  {
    id: "population-analysis",
    slug: "population-analysis",
    name: "Indian Population Analysis",
    category: "Demographic Data Science",
    date: "Oct 2024",
    metric: "Multi-Decade Census Analytics",
    image: "/images/population-analysis.png",
    githubUrl: "https://github.com/vishnu-066/population-of-india-_analysis",
    technologies: ["Python", "Pandas", "Matplotlib", "Seaborn"],
    description:
      "Analyzed and visualized the population trends of India across census periods, offering insights into growth patterns, age distribution, and urbanization.",
    highlights: [
      "Normalized multi-decade census datasets to model urban vs. rural demographic shifts",
      "Created state-wise population density heatmaps and age-gender pyramids",
    ],
  },
]

const experienceTimeline = [
  {
    index: "01",
    company: "Cipher Schools",
    role: "Data Structures & Algorithms Trainee",
    date: "June 2024 – Aug 2024",
    responsibilities:
      "Completed intensive hands-on training in C++ Data Structures and Algorithms and engineered an interactive Binary Search Tree visualization web application.",
    impact:
      "Awarded the Certificate of Excellence for outstanding performance; built a step-by-step BST visualizer supporting insertion, deletion, and 3 traversal algorithms.",
    technologies: ["C++", "WebAssembly", "DSA", "JavaScript", "HTML5", "CSS3"],
    url: "https://www.cipherschools.com/certificate/preview?id=66a76d5ed15c5abc1ea65e2a",
  },
  {
    index: "02",
    company: "Meenakshi Shiksha Samithi",
    role: "Environmental & Education Initiative Volunteer",
    date: "Community Initiative",
    responsibilities:
      "Collaborated with the non-profit organization to support educational outreach programs and environmental sustainability drives.",
    impact:
      "Planted 50+ trees to expand green spaces, promote environmental awareness, and increase local biodiversity for a healthier community environment.",
    technologies: ["Environmental Sustainability", "Community Outreach", "Leadership"],
    url: "https://drive.google.com/file/d/1zxoljsB4s4LqKpBSOs2qk31s_i1hynZQ/view?usp=drive_link",
  },
  {
    index: "03",
    company: "Public Health Community Relief",
    role: "COVID-19 Relief Volunteer",
    date: "Pandemic Relief Drive",
    responsibilities:
      "Volunteered in organizing and distributing masks, groceries, and essential supplies to vulnerable families during the pandemic.",
    impact:
      "Supported community welfare and public health safety across local neighborhoods, ensuring families had essential resources during critical lockdown periods.",
    technologies: ["Public Health Support", "Community Welfare", "Resource Coordination"],
  },
]

const educationList = [
  {
    index: "01",
    institution: "Lovely Professional University, Punjab",
    degree: "B.Tech Computer Science Engineering",
    score: "CGPA 7.06",
  },
  {
    index: "02",
    institution: "Sri Chaitanya Junior College, Hyderabad",
    degree: "Intermediate (MPC)",
    score: "98%",
  },
  {
    index: "03",
    institution: "St. Antony's E.M. School, Kadapa",
    degree: "Matriculation",
    score: "92%",
  },
]

const certificationsList = [
  {
    index: "01",
    title: "Cloud Computing",
    issuer: "NPTEL",
    date: "Nov 2024",
    url: "https://drive.google.com/file/d/1tNhlVdOQ_YV93KCCFNYJFK8WarbMIALB/view?usp=drive_link",
  },
  {
    index: "02",
    title: "Data Structures and Algorithms with C++",
    issuer: "Cipher Schools",
    date: "July 2024",
    url: "https://www.cipherschools.com/certificate/preview?id=66a8f3e260e87d863c8fd446",
  },
  {
    index: "03",
    title: "Become a Data Scientist",
    issuer: "LinkedIn Learning",
    date: "Feb 2023",
    url: "https://www.linkedin.com/learning/certificates/d08bbfa3c5f91e8628eb7996f81d81152572b830101e5cd91a0e203e3ab25398",
  },
  {
    index: "04",
    title: "Programming in Python",
    issuer: "HackerRank",
    date: "Dec 2022",
    url: "https://www.hackerrank.com/certificates/141f2bbc4534",
  },
  {
    index: "05",
    title: "Excel Skills for Business",
    issuer: "Coursera",
    date: "May 2024",
    url: "https://www.coursera.org/account/accomplishments/specialization/ZXE2NDFGR3C3",
  },
  {
    index: "06",
    title: "Data Analysis with Tableau",
    issuer: "Coursera",
    date: "June 2024",
    url: "https://www.coursera.org/account/accomplishments/verify/3C0MCD1QOS8M",
  },
]

const achievementsList = [
  {
    index: "01",
    badge: "Technical Excellence",
    stat: "Top Trainee",
    title: "Certificate of Excellence – Trainee",
    date: "June 2024",
    description:
      "Awarded by Cipher Schools for outstanding performance during Data Structures and Algorithms (DSA) training, showcasing deep understanding, practical skills, and dedication throughout the program.",
    url: "https://www.cipherschools.com/certificate/preview?id=66a76d5ed15c5abc1ea65e2a",
  },
  {
    index: "02",
    badge: "Algorithmic Consistency",
    stat: "Daily Streak",
    title: "HackerRank Consistency Badge",
    date: "Dec 2024",
    description:
      "Awarded for daily problem-solving streak, demonstrating strong commitment, problem-solving skills, and consistency in learning algorithms and data structures.",
    url: "https://www.hackerrank.com/profile/somulavishnu6",
  },
  {
    index: "03",
    badge: "Robotics & Innovation",
    stat: "2nd Place",
    title: "Runner-up in Interschool Drone Competition – LPU",
    date: "March 2024",
    description:
      "Secured second place in the prestigious drone competition at Lovely Professional University, demonstrating exceptional skills in drone programming, navigation, and innovative problem-solving.",
  },
  {
    index: "04",
    badge: "Sports Leadership",
    stat: "1st Place",
    title: "Winner in District Cricket Championship",
    date: "August 2023",
    description:
      "Led the team to victory in the district-level cricket championship, showcasing leadership, teamwork, and athletic excellence throughout the tournament.",
  },
]

const aboutPills = [
  { label: "Machine Learning", Icon: Brain, href: "#projects" },
  { label: "C++ & DSA", Icon: Code2, href: "#skills" },
  { label: "Data Science", Icon: Database, href: "#projects" },
  { label: "Statistical R", Icon: BarChart3, href: "#skills" },
  { label: "B.Tech CSE", Icon: BookOpen, href: "#education" },
]

export default function Home() {
  const [activeProject, setActiveProject] = useState(0)
  const [pauseAutoCycle, setPauseAutoCycle] = useState(false)

  // Auto-cycle projects every 3500ms unless paused by user interaction
  useEffect(() => {
    if (pauseAutoCycle) return
    const interval = setInterval(() => {
      setActiveProject((prev) => (prev + 1) % projectsShowcase.length)
    }, 3500)
    return () => clearInterval(interval)
  }, [pauseAutoCycle])

  const currentProject = projectsShowcase[activeProject]

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-cream selection:bg-cream selection:text-[#0a0a0a] overflow-x-hidden font-hn">
      {/* 0A. FUTURISTIC PRELOADER */}
      <FuturisticLoader />

      {/* 0B. MOBILE FLOATING DOT NAVIGATION MENU */}
      <MobileDotMenu />

      <a href="#main-content" className="skip-to-content">
        Skip to main content
      </a>

      {/* STICKY EDITORIAL NAVIGATION */}
      <Navigation />

      <main id="main-content">
        {/* SECTION 0: EDITORIAL HERO */}
        <HeroSection />

        {/* SECTION 1: ABOUT & VISION (Unified Dark Editorial & Floating Scroll Entrance) */}
        <section
          id="about"
          aria-label="About Me"
          className="relative w-full min-h-screen bg-[#0a0a0a] text-cream flex flex-col justify-between pt-24 md:pt-36 pb-20 md:pb-28 z-20 border-b border-white/10"
        >
          <div className="max-w-[1440px] mx-auto w-full px-6 md:px-16">
            {/* 1A. FLOATING SECTION HEADER */}
            <motion.div
              initial={{ y: 35, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center text-center"
            >
              <div className="text-[10px] md:text-[11px] font-mono tracking-[0.24em] mb-8">
                <span className="text-cream/40">[ 01 ]</span>{" "}
                <span className="text-cream font-bold uppercase">Profile &amp; Vision</span>
              </div>

              {/* 1B. EDITORIAL HEADING */}
              <h2 className="text-[2.2rem] md:text-[3.5rem] lg:text-[4.2rem] leading-[1.08] font-medium tracking-tight text-cream max-w-[1020px] text-center mb-12">
                Transforming complex datasets into predictive intelligence, <br className="hidden md:inline" />
                statistical clarity, and algorithmic software.
              </h2>

              {/* 1C. TACTILE ACTION PILLS */}
              <div className="flex flex-wrap justify-center gap-2.5 sm:gap-3.5 mb-16 md:mb-24">
                {aboutPills.map(({ label, Icon, href }) => (
                  <a
                    key={label}
                    href={href}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/15 text-[11px] font-mono uppercase tracking-[0.16em] bg-white/[0.03] text-cream/80 hover:border-cream hover:bg-cream hover:text-[#0a0a0a] active:scale-95 transition-all duration-300 backdrop-blur-md"
                  >
                    <Icon size={13} strokeWidth={2} />
                    <span>{label}</span>
                  </a>
                ))}
              </div>
            </motion.div>

            {/* 1D. ARCHITECTURAL EDITORIAL GRID (Floating Scroll Animation) */}
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: false, amount: 0.15 }}
              transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 lg:grid-cols-12 border-t border-white/10 pt-14 gap-12 items-start"
            >
              {/* Left Column (5 cols): Biography & Tactile Resume Button */}
              <div className="lg:col-span-5 space-y-6">
                <div className="flex items-center gap-3 text-xs font-mono">
                  <span className="text-cream/50">01</span>
                  <span className="w-16 h-[1px] bg-cream/30 block" />
                  <span className="text-[10px] tracking-[0.2em] uppercase text-cream/40">Biography</span>
                </div>

                <h3 className="text-[2.6rem] md:text-[3.5rem] font-normal tracking-tight leading-[1] text-cream">
                  INTELLIGENT
                  <br />
                  SYSTEMS
                </h3>

                <p className="text-[13px] md:text-[14px] text-cream/70 max-w-[400px] leading-[1.65]">
                  I&apos;m Somula Vishnuvardhan Reddy (Vishnu), an aspiring Data Scientist and AI/Software Engineer pursuing my B.Tech in Computer Science Engineering at Lovely Professional University, Punjab.
                </p>

                <p className="text-[13px] md:text-[14px] text-cream/70 max-w-[400px] leading-[1.65]">
                  My work spans interactive algorithm engineering with C++ and WebAssembly, predictive healthcare modeling in R, and demographic data analysis in Python.
                </p>

                <div className="pl-4 border-l border-cream/30 space-y-1 text-[12px] font-mono text-cream/50">
                  <p>&ldquo;Passionate about transforming data into meaningful insights.&rdquo;</p>
                  <p>&ldquo;Creating impactful solutions through data science and analytics.&rdquo;</p>
                </div>

                {/* Tactile Kinetic Sliding Resume Button */}
                <div className="pt-4">
                  <a
                    href="https://drive.google.com/file/d/1ggOPIq_zLPBrpEPNuoIiTS1tx0am1qX3/view?usp=drive_link"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative overflow-hidden inline-flex items-center gap-3 bg-cream text-[#0a0a0a] px-8 py-3.5 rounded-full border border-transparent shadow-[0_4px_20px_rgba(239,238,233,0.15)] active:scale-95 transition-all duration-300"
                  >
                    <span className="absolute inset-0 bg-white -translate-x-[101%] group-hover:translate-x-0 transition-transform duration-500 ease-out" />
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 24 24"
                      fill="none"
                      className="relative z-10 text-[#0a0a0a] group-hover:scale-110 transition-transform"
                    >
                      <path
                        d="M17 3C11 3 6 7.5 6 13.5C6 16.5 7.5 19 9.5 20.5"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                      />
                      <path
                        d="M17 3C19 7.5 17.5 13 13 16.5C10.5 18.5 7.5 19 4 19"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                      />
                      <path
                        d="M6 19L17 3"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                    <span className="relative z-10 text-[12px] font-mono tracking-[0.16em] uppercase font-semibold text-[#0a0a0a]">
                      Download Resume
                    </span>
                  </a>
                </div>
              </div>

              {/* Center Column (4 cols): Studio Portrait & Pillars */}
              <div className="lg:col-span-4 space-y-6">
                <div className="floating-card relative aspect-[4/4.3] w-full max-w-[340px] overflow-hidden border border-white/15 bg-[#121212] shadow-[0_15px_35px_rgba(0,0,0,0.7)] group">
                  <Image
                    src={assetPath("/new-portfolio-pic.jpg")}
                    alt="Somula Vishnuvardhan Reddy"
                    fill
                    sizes="(max-width: 768px) 100vw, 340px"
                    className="object-cover grayscale contrast-115 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
                  <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-[9px] font-mono tracking-widest uppercase text-cream/70">
                    <span>VISHNU VARDHAN</span>
                    <span>STUDIO // ARCHIVE</span>
                  </div>
                </div>

                <div className="space-y-4 pt-2">
                  <div className="border-t border-white/10 pt-3">
                    <div className="text-[10px] font-bold font-mono tracking-widest uppercase text-cream mb-1">
                      KEY STRENGTHS
                    </div>
                    <p className="text-[13px] text-cream/60 leading-[1.65]">
                      C++ Data Structures &amp; Algorithms, SMOTE feature engineering, and statistical visualization with Python, R, and Tableau.
                    </p>
                  </div>

                  <div className="border-t border-white/10 pt-3">
                    <div className="text-[10px] font-bold font-mono tracking-widest uppercase text-cream mb-1">
                      CAREER FOCUS
                    </div>
                    <p className="text-[13px] text-cream/60 leading-[1.65]">
                      Data Science, AI Engineering, and Software Engineering roles focused on reliable predictive models and scalable data systems.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column (3 cols): Floating Metrics Card */}
              <div className="lg:col-span-3 flex flex-col justify-between space-y-8 lg:pl-6 lg:border-l border-white/10">
                <div>
                  <div className="text-[10px] font-bold font-mono tracking-widest uppercase text-cream mb-2">
                    SOMULA VISHNUVARDHAN REDDY
                  </div>
                  <p className="text-[12px] text-cream/60 leading-[1.6]">
                    B.Tech Computer Science Engineering
                    <br />
                    Lovely Professional University
                  </p>
                </div>

                <div className="floating-card border border-white/10 bg-[#121212]/80 p-5 space-y-4 shadow-[0_10px_25px_rgba(0,0,0,0.5)]">
                  <div className="flex items-baseline justify-between border-b border-white/5 pb-3">
                    <span className="text-[10px] font-mono tracking-widest uppercase text-cream/40">
                      Projects Built
                    </span>
                    <span className="text-[13px] font-medium text-cream">03 Flagship</span>
                  </div>
                  <div className="flex items-baseline justify-between border-b border-white/5 pb-3">
                    <span className="text-[10px] font-mono tracking-widest uppercase text-cream/40">
                      Technologies
                    </span>
                    <span className="text-[13px] font-medium text-cream">16+ Core</span>
                  </div>
                  <div className="flex items-baseline justify-between border-b border-white/5 pb-3">
                    <span className="text-[10px] font-mono tracking-widest uppercase text-cream/40">
                      Certifications
                    </span>
                    <span className="text-[13px] font-medium text-cream">06 Verified</span>
                  </div>
                  <div className="flex items-baseline justify-between">
                    <span className="text-[10px] font-mono tracking-widest uppercase text-cream/40">
                      ML Benchmark
                    </span>
                    <span className="text-[13px] font-medium text-cream">85.0% Accuracy</span>
                  </div>
                </div>

                {/* Tactile Explore Button */}
                <a
                  href="#projects"
                  className="group inline-flex items-center gap-3.5 active:scale-95 transition-transform"
                >
                  <span className="w-10 h-10 rounded-full border border-cream/30 bg-white/[0.03] flex items-center justify-center text-cream group-hover:border-cream group-hover:bg-cream group-hover:text-[#0a0a0a] transition-all duration-300 shadow-[0_0_12px_rgba(239,238,233,0.1)]">
                    <Plus size={16} strokeWidth={1.5} />
                  </span>
                  <span className="text-[10px] font-mono uppercase tracking-[0.18em] font-semibold text-cream">
                    Explore Projects
                  </span>
                </a>
              </div>
            </motion.div>

            {/* Bottom Row */}
            <div className="hidden md:flex items-center justify-between pt-16 text-[10px] font-mono tracking-widest uppercase text-cream/40 font-medium">
              <span>WE DON&apos;T JUST ANALYZE DATA.</span>
              <span>AI &amp; DATA SCIENCE (C) 2026</span>
            </div>
          </div>
        </section>

        {/* SECTION 2: SELECTED PROJECTS (Dark #0a0a0a with Sand-Dissolve & Floating Interactive Viewer) */}
        <section
          id="projects"
          aria-label="Featured Projects"
          onMouseEnter={() => setPauseAutoCycle(true)}
          onMouseLeave={() => setPauseAutoCycle(false)}
          className="relative w-full bg-[#080808] text-cream flex flex-col z-30 border-b border-white/10"
        >
          {/* 2A. FLOATING HEADING AREA */}
          <motion.div
            initial={{ y: 35, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-[1440px] mx-auto w-full px-6 md:px-16 pt-24 md:pt-36 mb-16 z-10"
          >
            <div className="text-[10px] md:text-[11px] font-mono tracking-[0.24em] mb-8">
              <span className="text-cream/40">[ 02 ]</span>{" "}
              <span className="text-cream font-bold uppercase">Selected Engineering Works</span>
            </div>

            <div className="flex flex-col xl:flex-row justify-between xl:items-end gap-10">
              {/* Left -- Main heading with 3 inline circle icons */}
              <h2 className="text-[1.8rem] md:text-[3rem] lg:text-[3.8rem] xl:text-[4rem] leading-[1.12] font-medium tracking-tight text-cream max-w-4xl">
                Engineered from rigorous algorithms
                <span className="inline-flex gap-2 md:gap-3 align-middle mx-2 md:mx-4 translate-y-[-4px]">
                  <span className="w-10 h-10 md:w-13 md:h-13 rounded-full border border-cream/30 bg-[#121212] text-cream/80 hover:bg-cream hover:text-[#0a0a0a] inline-flex items-center justify-center transition-all duration-300">
                    <Brain size={20} />
                  </span>
                  <span className="w-10 h-10 md:w-13 md:h-13 rounded-full border border-cream/30 bg-[#121212] text-cream/80 hover:bg-cream hover:text-[#0a0a0a] inline-flex items-center justify-center transition-all duration-300">
                    <Code2 size={20} />
                  </span>
                  <span className="w-10 h-10 md:w-13 md:h-13 rounded-full border border-cream/30 bg-[#121212] text-cream/80 hover:bg-cream hover:text-[#0a0a0a] inline-flex items-center justify-center transition-all duration-300">
                    <BarChart3 size={20} />
                  </span>
                </span>
                &amp; data discovery.
              </h2>

              {/* Right -- Tagline + Pills */}
              <div className="flex flex-col items-start xl:items-end">
                <p className="text-[9px] md:text-[10px] font-mono tracking-widest text-cream/50 uppercase mb-6 leading-relaxed">
                  WE DON&apos;T JUST WRITE CODE
                  <br />
                  WE ENGINEER MEASURABLE IMPACT
                </p>
                <div className="flex flex-wrap gap-2.5">
                  {["Predictive ML", "WebAssembly", "Data Analytics"].map((pill) => (
                    <span
                      key={pill}
                      className="px-5 py-2 rounded-full border border-white/15 text-[9px] font-mono tracking-widest uppercase text-cream/70 bg-white/[0.03] backdrop-blur-md"
                    >
                      {pill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* 2B. TWO-COLUMN FLOATING INTERACTIVE SHOWCASE PANEL */}
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="border-t border-white/10 flex flex-col lg:flex-row max-w-[1440px] mx-auto w-full bg-[#0d0d0f]/50"
          >
            {/* Left panel (35% width) with SandTransitionImage */}
            <div className="lg:w-[35%] border-b lg:border-b-0 lg:border-r border-white/10 min-h-[420px] md:min-h-[540px] p-8 flex flex-col justify-between relative overflow-hidden">
              <div className="flex items-center justify-between z-10">
                <span className="text-cream/30 text-xl tracking-[0.3em] font-mono">***</span>
                <span className="text-[10px] font-mono tracking-widest uppercase text-cream/60">
                  {currentProject.metric}
                </span>
              </div>

              {/* Center: SandTransitionImage Dissolve Viewer */}
              <div className="relative w-full h-[260px] md:h-[320px] my-4 flex items-center justify-center">
                <AnimatePresence mode="wait">
                  <SandTransitionImage
                    key={currentProject.id}
                    src={currentProject.image}
                    alt={currentProject.name}
                    className="absolute inset-0 w-[88%] h-[88%] m-auto object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.8)]"
                  />
                </AnimatePresence>
              </div>

              {/* Bottom: Animated Chapter Counter + Tactile Links */}
              <div className="z-10 flex items-center justify-between pt-4 border-t border-white/10">
                <div className="flex items-center gap-2 text-[10px] font-mono tracking-widest uppercase">
                  <div className="overflow-hidden h-4 flex items-center">
                    <AnimatePresence mode="wait">
                      <motion.span
                        key={activeProject}
                        initial={{ y: 14, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -14, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="text-cream block font-bold"
                      >
                        {String(activeProject + 1).padStart(2, "0")}
                      </motion.span>
                    </AnimatePresence>
                  </div>
                  <span className="text-cream/30">/</span>
                  <span className="text-cream/50">
                    {String(projectsShowcase.length).padStart(2, "0")}
                  </span>
                </div>

                <div className="flex items-center gap-4 text-[10px] font-mono tracking-widest uppercase">
                  <Link
                    href={`/projects/${currentProject.slug}`}
                    className="text-cream hover:underline underline-offset-4 inline-flex items-center gap-1 active:scale-95 transition-transform"
                  >
                    <span>Case Study</span>
                    <ArrowUpRight size={13} />
                  </Link>
                  <a
                    href={currentProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cream/60 hover:text-cream inline-flex items-center gap-1 active:scale-95 transition-all"
                  >
                    <span>GitHub</span>
                    <ArrowUpRight size={13} />
                  </a>
                </div>
              </div>
            </div>

            {/* Right panel (65% width): Chapter Accordion & Details */}
            <div className="lg:w-[65%] flex flex-col justify-between">
              {/* Top bar */}
              <div className="border-b border-white/10 p-8 flex items-center justify-between text-[10px] font-mono text-cream/40 tracking-[0.24em] uppercase">
                <span>Explore the architecture. Understand the impact.</span>
                <span>PROJECT // 0{activeProject + 1}</span>
              </div>

              {/* Interactive Chapter List */}
              <div className="divide-y divide-white/10">
                {projectsShowcase.map((proj, index) => {
                  const isActive = activeProject === index
                  return (
                    <div
                      key={proj.id}
                      onClick={() => setActiveProject(index)}
                      className={`p-8 transition-colors duration-300 cursor-pointer ${
                        isActive ? "bg-white/[0.03]" : "hover:bg-white/[0.015]"
                      }`}
                    >
                      <div className="flex items-center justify-between gap-4">
                        <div className="flex items-baseline gap-4">
                          <span className="text-[10px] font-mono tracking-widest text-cream/40">
                            0{index + 1}
                          </span>
                          <h3
                            className={`text-2xl md:text-[2rem] font-medium tracking-tight transition-colors duration-300 ${
                              isActive ? "text-cream" : "text-cream/40 hover:text-cream/70"
                            }`}
                          >
                            {proj.name}
                          </h3>
                        </div>

                        <div className="flex items-center gap-4">
                          <span className="hidden sm:inline text-[10px] font-mono tracking-widest uppercase text-cream/40">
                            {proj.date}
                          </span>
                          <motion.div
                            animate={{
                              opacity: isActive ? 1 : 0.3,
                              x: isActive ? 0 : -4,
                            }}
                            transition={{ duration: 0.25 }}
                          >
                            <ArrowUpRight size={22} strokeWidth={1} className="text-cream" />
                          </motion.div>
                        </div>
                      </div>

                      {/* Expanded Active Details */}
                      <AnimatePresence initial={false}>
                        {isActive && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                            className="overflow-hidden"
                          >
                            <div className="pt-5 pl-0 sm:pl-8 space-y-4">
                              <p className="text-[13px] md:text-[14px] text-cream/70 leading-[1.65] max-w-2xl">
                                {proj.description}
                              </p>

                              <ul className="space-y-1.5 text-[12px] text-cream/60">
                                {proj.highlights.map((item) => (
                                  <li key={item} className="flex items-start gap-2">
                                    <span className="text-cream/40 font-mono">—</span>
                                    <span>{item}</span>
                                  </li>
                                ))}
                              </ul>

                              <div className="flex flex-wrap items-center justify-between gap-4 pt-4">
                                <div className="flex flex-wrap gap-2">
                                  {proj.technologies.map((tech) => (
                                    <span
                                      key={tech}
                                      className="px-3 py-1 rounded-full border border-white/10 bg-[#161616] text-[10px] font-mono tracking-widest uppercase text-cream/70"
                                    >
                                      {tech}
                                    </span>
                                  ))}
                                </div>

                                <div className="flex items-center gap-3">
                                  <Link
                                    href={`/projects/${proj.slug}`}
                                    onClick={(e) => e.stopPropagation()}
                                    className="px-4 py-2 rounded-full bg-cream text-[#0a0a0a] text-[10px] font-mono tracking-widest uppercase font-semibold hover:bg-white active:scale-95 transition-all inline-flex items-center gap-1.5 shadow-[0_0_12px_rgba(239,238,233,0.15)]"
                                  >
                                    <span>Explore Case Study</span>
                                    <ArrowUpRight size={12} />
                                  </Link>
                                  <a
                                    href={proj.githubUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={(e) => e.stopPropagation()}
                                    className="px-4 py-2 rounded-full border border-white/20 bg-white/[0.02] text-cream text-[10px] font-mono tracking-widest uppercase hover:bg-cream hover:text-[#0a0a0a] active:scale-95 transition-all inline-flex items-center gap-1.5"
                                  >
                                    <span>Source Code</span>
                                    <ArrowUpRight size={12} />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  )
                })}
              </div>
            </div>
          </motion.div>

          {/* Bottom Telemetry */}
          <div className="max-w-[1440px] mx-auto w-full px-6 md:px-16 py-8 flex items-center justify-between text-[10px] font-mono tracking-widest text-cream/40 uppercase bg-[#080808]">
            <span>ENGINEERING INTELLIGENT SYSTEMS</span>
            <span>03 PRODUCTION CASE STUDIES</span>
          </div>
        </section>

        {/* SECTION 3: SKILLS & TECHNOLOGY ECOSYSTEM (Dark #0a0a0a Section) */}
        <SkillsSection />

        {/* SECTION 4: EXPERIENCE & ACADEMIC FOUNDATION (Dark #0a0a0a Section with Floating Cards) */}
        <section
          id="experience"
          aria-label="Experience and Education"
          className="relative w-full bg-[#0a0a0a] text-cream flex flex-col z-30 border-b border-white/10"
        >
          <div id="social-work" className="max-w-[1440px] mx-auto w-full">
            {/* 4A. FLOATING HEADING AREA */}
            <motion.div
              initial={{ y: 35, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="px-6 md:px-16 pt-24 md:pt-36 mb-16 flex flex-col xl:flex-row justify-between xl:items-end gap-10"
            >
              <div>
                <div className="text-[10px] md:text-[11px] font-mono tracking-[0.24em] mb-6">
                  <span className="text-cream/40">[ 04 ]</span>{" "}
                  <span className="text-cream font-bold uppercase">Practical Journey &amp; Academia</span>
                </div>

                <h2 className="text-[2.2rem] md:text-[3.5rem] lg:text-[4.2rem] leading-[1.08] font-medium tracking-tight text-cream max-w-3xl">
                  Algorithmic training, community initiatives &amp; academic foundation.
                </h2>
              </div>

              <div className="flex flex-wrap gap-2.5">
                <span className="px-5 py-2.5 rounded-full border border-white/15 bg-white/[0.03] text-[9px] font-mono tracking-widest uppercase text-cream/80 inline-flex items-center gap-2">
                  <Briefcase size={12} />
                  <span>DSA Training</span>
                </span>
                <span className="px-5 py-2.5 rounded-full border border-white/15 bg-white/[0.03] text-[9px] font-mono tracking-widest uppercase text-cream/80 inline-flex items-center gap-2">
                  <GraduationCap size={12} />
                  <span>B.Tech CSE</span>
                </span>
              </div>
            </motion.div>

            {/* 4B. TWO-COLUMN FLOATING PANEL */}
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: false, amount: 0.15 }}
              transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
              className="border-t border-b border-white/10 flex flex-col lg:flex-row bg-[#0d0d0f]/50"
            >
              {/* Left Panel: Academic Foundation (`#education`) */}
              <div
                id="education"
                className="lg:w-[35%] border-b lg:border-b-0 lg:border-r border-white/10 p-8 md:p-12 flex flex-col justify-between"
              >
                <div>
                  <div className="text-cream/30 text-xl tracking-[0.3em] font-mono mb-6">***</div>
                  <div className="text-[10px] font-bold font-mono tracking-[0.24em] uppercase text-cream mb-2">
                    ACADEMIC FOUNDATION
                  </div>
                  <p className="text-[13px] text-cream/60 leading-[1.65] mb-10">
                    Computer Science Engineering degree and pre-university academic milestones.
                  </p>

                  <div className="space-y-8">
                    {educationList.map((edu) => (
                      <div key={edu.institution} className="floating-card border border-white/10 bg-[#121212]/90 p-6 shadow-[0_10px_25px_rgba(0,0,0,0.5)]">
                        <div className="flex items-center justify-between text-[10px] font-mono tracking-widest uppercase text-cream/40 mb-2">
                          <span>{edu.index} // Institution</span>
                          <span className="text-cream font-bold">{edu.score}</span>
                        </div>
                        <h3 className="text-lg font-medium text-cream mb-1">{edu.institution}</h3>
                        <p className="text-[13px] text-cream/60">{edu.degree}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-8 text-[10px] font-mono tracking-widest text-cream/40 uppercase">
                  03 / 03 ACADEMIC MILESTONES
                </div>
              </div>

              {/* Right Panel: Experience & Community Initiatives */}
              <div className="lg:w-[65%]">
                <div className="border-b border-white/10 p-8 flex items-center justify-between text-[10px] font-mono text-cream/40 tracking-[0.24em] uppercase">
                  <span>Technical Training &amp; Community Leadership</span>
                  <span>03 RECORDS</span>
                </div>

                <div className="divide-y divide-white/10">
                  {experienceTimeline.map((item) => (
                    <article key={item.company} className="p-8 md:p-10 hover:bg-white/[0.02] transition-colors">
                      <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                        <div>
                          <div className="text-[10px] font-mono tracking-widest uppercase text-cream/40 mb-1">
                            {item.index} // {item.company}
                          </div>
                          <h3 className="text-xl md:text-2xl font-medium tracking-tight text-cream">
                            {item.role}
                          </h3>
                        </div>

                        <div className="flex items-center gap-3">
                          <span className="px-3.5 py-1 rounded-full border border-white/15 bg-white/[0.03] text-[10px] font-mono tracking-widest uppercase text-cream/70">
                            {item.date}
                          </span>
                          {item.url && (
                            <a
                              href={item.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label={`View credential for ${item.company}`}
                              className="w-9 h-9 rounded-full border border-white/20 bg-white/[0.02] flex items-center justify-center text-cream hover:bg-cream hover:text-[#0a0a0a] active:scale-95 transition-all"
                            >
                              <ArrowUpRight size={15} />
                            </a>
                          )}
                        </div>
                      </div>

                      <p className="text-[13px] md:text-[14px] text-cream/65 leading-[1.65] mb-3">
                        {item.responsibilities}
                      </p>
                      <p className="text-[13px] md:text-[14px] text-cream/80 leading-[1.65] mb-5 pl-3 border-l border-cream/30">
                        <strong className="font-mono text-[10px] tracking-widest uppercase text-cream/50 block mb-0.5">
                          Impact &amp; Results
                        </strong>
                        {item.impact}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {item.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 rounded-full border border-white/10 bg-[#161616] text-[10px] font-mono tracking-widest uppercase text-cream/60"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </motion.div>

            <div className="px-6 md:px-16 py-8 text-[10px] font-mono tracking-widest text-cream/40 uppercase bg-[#0a0a0a]">
              CONTINUOUS LEARNING &amp; APPLIED PRACTICE
            </div>
          </div>
        </section>

        {/* SECTION 5: CERTIFICATIONS & ACHIEVEMENTS (Dark #080808 Section with Floating Cards) */}
        <section
          id="certifications"
          aria-label="Certifications and Achievements"
          className="relative w-full bg-[#080808] text-cream pt-24 md:pt-36 pb-20 md:pb-28 z-20 border-b border-white/10 font-hn"
        >
          <div className="max-w-[1440px] mx-auto px-6 md:px-16">
            {/* 5A. FLOATING CERTIFICATIONS HEADER */}
            <motion.div
              initial={{ y: 35, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center text-center mb-16"
            >
              <div className="text-[10px] md:text-[11px] font-mono tracking-[0.24em] mb-8">
                <span className="text-cream/40">[ 05 ]</span>{" "}
                <span className="text-cream font-bold uppercase">
                  Verified Credentials &amp; Recognition
                </span>
              </div>

              <h2 className="text-[2.2rem] md:text-[3.5rem] lg:text-[4.2rem] leading-[1.08] font-medium tracking-tight text-cream max-w-[950px]">
                Professional certifications across cloud computing, data science, and algorithms.
              </h2>
            </motion.div>

            {/* 6 Floating Certifications Grid */}
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: false, amount: 0.15 }}
              transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-24"
            >
              {certificationsList.map((cert) => (
                <article
                  key={cert.title}
                  className="floating-card group border border-white/10 bg-[#121212]/90 hover:border-cream/40 hover:bg-[#181818] p-7 md:p-8 flex flex-col justify-between transition-colors duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
                >
                  <div>
                    <div className="flex items-center justify-between text-[10px] font-mono tracking-[0.2em] uppercase text-cream/40 group-hover:text-cream/70 mb-6 transition-colors">
                      <span>
                        {cert.index} // {cert.issuer}
                      </span>
                      <span>{cert.date}</span>
                    </div>

                    <h3 className="text-xl font-medium tracking-tight text-cream mb-6 transition-colors">
                      {cert.title}
                    </h3>
                  </div>

                  <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 text-[10px] font-mono tracking-widest uppercase text-cream/50">
                      <Award size={13} className="text-cream" />
                      <span>Verified Credential</span>
                    </span>

                    <a
                      href={cert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Verify ${cert.title} credential`}
                      className="inline-flex items-center gap-1 text-[10px] font-mono tracking-widest uppercase font-bold text-cream hover:underline underline-offset-4 active:scale-95 transition-transform"
                    >
                      <span>Inspect</span>
                      <ArrowUpRight size={13} />
                    </a>
                  </div>
                </article>
              ))}
            </motion.div>

            {/* Achievements Sub-Section (`#achievements`) */}
            <div id="achievements" className="pt-8 border-t border-white/10">
              <motion.div
                initial={{ y: 35, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6"
              >
                <div>
                  <div className="text-[10px] md:text-[11px] font-mono tracking-[0.24em] mb-4">
                    <span className="text-cream/40">[ 05B ]</span>{" "}
                    <span className="text-cream font-bold uppercase">Honors &amp; Milestones</span>
                  </div>
                  <h3 className="text-[1.8rem] md:text-[2.6rem] leading-[1.12] font-medium tracking-tight text-cream">
                    Competitive awards, algorithmic consistency &amp; leadership.
                  </h3>
                </div>

                <div className="text-[10px] font-mono tracking-widest uppercase text-cream/40">
                  04 DISTINCTIONS RECORDED
                </div>
              </motion.div>

              {/* 4 Floating Achievement Cards */}
              <motion.div
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: false, amount: 0.15 }}
                transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
                className="grid grid-cols-1 md:grid-cols-2 gap-4"
              >
                {achievementsList.map((ach) => (
                  <article
                    key={ach.title}
                    className="floating-card group border border-white/10 bg-[#121212]/90 hover:border-cream/40 hover:bg-[#181818] p-8 md:p-10 flex flex-col justify-between transition-colors duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-6">
                        <span className="px-3.5 py-1 rounded-full border border-white/15 bg-white/[0.03] text-[10px] font-mono tracking-widest uppercase text-cream/80">
                          {ach.badge}
                        </span>
                        <span className="text-[10px] font-mono tracking-widest uppercase text-cream/40">
                          {ach.date}
                        </span>
                      </div>

                      <div className="flex items-baseline justify-between gap-4 mb-3">
                        <h4 className="text-xl md:text-2xl font-medium tracking-tight text-cream">
                          {ach.title}
                        </h4>
                        <span className="text-xs font-mono uppercase tracking-widest text-cream/50 flex-shrink-0">
                          [{ach.stat}]
                        </span>
                      </div>

                      <p className="text-[13px] md:text-[14px] text-cream/65 leading-[1.65]">
                        {ach.description}
                      </p>
                    </div>

                    <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between">
                      <span className="inline-flex items-center gap-1.5 text-[10px] font-mono tracking-widest uppercase text-cream/50">
                        <Trophy size={13} className="text-cream" />
                        <span>Milestone {ach.index}</span>
                      </span>

                      {ach.url && (
                        <a
                          href={ach.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-[10px] font-mono tracking-widest uppercase font-bold text-cream hover:underline underline-offset-4 active:scale-95 transition-transform"
                        >
                          <span>Verify Proof</span>
                          <ArrowUpRight size={13} />
                        </a>
                      )}
                    </div>
                  </article>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* SECTION 6: INITIATE COLLABORATION (Dark #0a0a0a Section) */}
        <section
          id="contact-us"
          aria-label="Contact Information and Form"
          className="relative w-full bg-[#0a0a0a] text-cream flex flex-col z-30"
        >
          <div className="max-w-[1440px] mx-auto w-full">
            <ContactUs />
          </div>
        </section>
      </main>

      {/* MINIMAL DARK EDITORIAL FOOTER */}
      <footer className="bg-[#050505] text-cream border-t border-white/10">
        <div className="max-w-[1440px] mx-auto px-6 md:px-16 py-10 flex flex-col sm:flex-row items-center justify-between gap-6 text-[10px] font-mono tracking-widest text-cream/50 uppercase">
          <span>
            &copy; {new Date().getFullYear()} SOMULA VISHNUVARDHAN REDDY &mdash; ALL RIGHTS RESERVED
          </span>
          <div className="flex flex-wrap items-center gap-6">
            <a href="#home" className="hover:text-cream transition-colors active:scale-95">
              Top // Hero
            </a>
            <a href="#about" className="hover:text-cream transition-colors active:scale-95">
              About
            </a>
            <a href="#projects" className="hover:text-cream transition-colors active:scale-95">
              Projects
            </a>
            <a href="#skills" className="hover:text-cream transition-colors active:scale-95">
              Skills
            </a>
            <a href="#contact-us" className="hover:text-cream transition-colors active:scale-95">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
