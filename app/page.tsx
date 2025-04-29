"use client"

import { useEffect } from "react"
import Image from "next/image"
import {
  FaLinkedin,
  FaGithub,
  FaPython,
  FaRProject,
  FaDatabase,
  FaChartBar,
  FaFileExcel,
  FaChartLine,
  FaBrain,
  FaChartArea,
} from "react-icons/fa"
import { SiCplusplus, SiPandas, SiNumpy, SiMysql, SiTableau, SiR } from "react-icons/si"
import Navigation from "./components/Navigation"
import FadeInSection from "./components/FadeInSection"
import SkillCategory from "./components/SkillCategory"
import ProjectCard from "./components/ProjectCard"
import CertificationCard from "./components/CertificationCard"
import EducationCard from "./components/EducationCard"
import AchievementCard from "./components/AchievementCard"
import SocialWorkCard from "./components/SocialWorkCard"
import LeetCodeIcon from "./components/LeetCodeIcon"
import ContactUs from "./components/ContactUs"
import dynamic from "next/dynamic"

// Dynamically import the ParticleBackground to avoid SSR issues
const ParticleBackground = dynamic(() => import("./components/ParticleBackground"), {
  ssr: false,
})

export default function Home() {
  useEffect(() => {
    // Initialize animations when component mounts
    const handleScroll = () => {
      const fadeElements = document.querySelectorAll(".fade-in")
      fadeElements.forEach((element) => {
        const rect = element.getBoundingClientRect()
        const isVisible = rect.top <= window.innerHeight * 0.8
        if (isVisible) {
          element.classList.add("visible")
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    // Trigger once on load
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Define skill categories
  const programmingSkills = [
    { name: "C++", icon: SiCplusplus, level: 85 },
    { name: "Python", icon: FaPython, level: 90 },
    { name: "R", icon: FaRProject, level: 80 },
  ]

  const frameworkSkills = [
    { name: "Pandas", icon: SiPandas, level: 85 },
    { name: "NumPy", icon: SiNumpy, level: 80 },
    { name: "ggplot2", icon: FaChartArea, level: 75 }, // Replaced SiGgplot2 with FaChartArea
    { name: "dplyr", icon: SiR, level: 75 },
    { name: "caret", icon: SiR, level: 70 },
  ]

  const toolsSkills = [
    { name: "MySQL", icon: SiMysql, level: 80 },
    { name: "Tableau", icon: SiTableau, level: 75 },
    { name: "Excel", icon: FaFileExcel, level: 90 },
  ]

  const mldsSkills = [
    { name: "Statistical Analysis", icon: FaChartLine, level: 85 },
    { name: "Data Mining", icon: FaDatabase, level: 80 },
    { name: "Predictive Modeling", icon: FaBrain, level: 75 },
    { name: "Data Visualization", icon: FaChartBar, level: 90 },
  ]

  return (
    <>
      <Navigation />

      {/* Home Section */}
      <section id="home" className="min-h-screen pt-20 pb-10 flex flex-col justify-center section-padding">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <FadeInSection>
              <div className="flex flex-col items-center">
                <div className="mb-6 cosmic-profile-centered">
                  <Image
                    src="/profile-pic.jpeg"
                    alt="Somula Vishnuvardhan Reddy"
                    width={200}
                    height={200}
                    className="rounded-full object-cover relative z-10"
                  />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-2 text-center">
                  <span className="text-pink-500">Somula</span> Vishnuvardhan Reddy
                </h1>
                <p className="text-xl mb-6 text-gray-300 font-dancing-script text-center">Emerging Data Scientist</p>
                <div className="flex space-x-4 justify-center">
                  <a
                    href="https://linkedin.com/in/vishnuvardhan06/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedin size={30} />
                  </a>
                  <a
                    href="https://github.com/vishnu-066?tab=repositories"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon"
                    aria-label="GitHub"
                  >
                    <FaGithub size={30} />
                  </a>
                  <a
                    href="https://leetcode.com/u/Vishnu_vardhan_2004/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon"
                    aria-label="LeetCode"
                  >
                    <LeetCodeIcon />
                  </a>
                </div>
              </div>
            </FadeInSection>

            <FadeInSection delay={200}>
              <div className="bg-gray-800 bg-opacity-20 p-6 rounded-lg border border-gray-700 backdrop-blur-sm floating">
                <h2 className="text-2xl font-bold mb-4 text-pink-400">About Me</h2>
                <p className="text-gray-300 leading-relaxed">
                  I am a passionate and dedicated emerging Data Scientist with a strong foundation in programming,
                  statistical analysis, and machine learning. My expertise includes Python, R, and C++ programming,
                  along with frameworks like Pandas, NumPy, and visualization tools such as Tableau.
                  <br />
                  <br />I am constantly exploring new technologies and methodologies in the field of data science to
                  solve complex problems and derive meaningful insights from data. My goal is to leverage data-driven
                  approaches to make impactful contributions to the field and help organizations make informed
                  decisions.
                </p>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section-padding">
        <div className="container mx-auto px-4">
          <FadeInSection>
            <h2 className="text-3xl font-bold mb-12 text-center">
              <span className="text-pink-500">My</span> Skills
            </h2>
          </FadeInSection>

          <SkillCategory title="Programming Languages" skills={programmingSkills} delay={100} />
          <SkillCategory title="Frameworks & Libraries" skills={frameworkSkills} delay={200} />
          <SkillCategory title="Tools & Platforms" skills={toolsSkills} delay={300} />
          <SkillCategory title="Machine Learning & Data Science" skills={mldsSkills} delay={400} />
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-900 bg-opacity-30 section-padding">
        <div className="container mx-auto px-4">
          <FadeInSection>
            <h2 className="text-3xl font-bold mb-12 text-center">
              <span className="text-pink-500">My</span> Projects
            </h2>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FadeInSection delay={100}>
              <ProjectCard
                title="Binary Search Tree Visualization"
                date="Aug 2024"
                description="An interactive visualization tool for Binary Search Trees, demonstrating insertion, deletion, and traversal operations with animated visual feedback."
                technologies="C++, WebAssembly, HTML, CSS, JavaScript"
                githubUrl="https://github.com/vishnu-066/cipher_schools_project"
                imageSrc="/images/bst-visualization.png"
              />
            </FadeInSection>

            <FadeInSection delay={200}>
              <ProjectCard
                title="Diabetes Prediction Model"
                date="Nov 2024"
                description="A machine learning model that predicts the likelihood of diabetes based on various health parameters, with an accuracy of 85% on test data."
                technologies="R, ggplot2, caret, dplyr"
                githubUrl="https://github.com/vishnu-066/Diabetes-prediction-Model"
                imageSrc="/images/diabetes-prediction.png"
              />
            </FadeInSection>

            <FadeInSection delay={300}>
              <ProjectCard
                title="Indian Population Analysis"
                date="Oct 2024"
                description="Analyzed and visualized the population trends of India, offering insights into growth patterns, age distribution, and urbanization."
                technologies="Python, Pandas, Matplotlib, Seaborn"
                githubUrl="https://github.com/vishnu-066/population-of-india-_analysis"
                imageSrc="/images/population-analysis.png"
              />
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="section-padding">
        <div className="container mx-auto px-4">
          <FadeInSection>
            <h2 className="text-3xl font-bold mb-12 text-center">
              <span className="text-pink-500">My</span> Certifications
            </h2>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FadeInSection delay={100}>
              <CertificationCard title="Cloud Computing" issuer="NPTEL" date="Nov 2024" />
            </FadeInSection>

            <FadeInSection delay={200}>
              <CertificationCard
                title="Data Structures and Algorithms with C++"
                issuer="Cipher Schools"
                date="July 2024"
              />
            </FadeInSection>

            <FadeInSection delay={300}>
              <CertificationCard title="Become a Data Scientist" issuer="LinkedIn" date="Feb 2023" />
            </FadeInSection>

            <FadeInSection delay={400}>
              <CertificationCard title="Programming in Python" issuer="HackerRank" date="Dec 2022" />
            </FadeInSection>

            <FadeInSection delay={500}>
              <CertificationCard
                title="Excel Skills for Business"
                issuer="Coursera"
                date="May 2024"
                url="https://www.coursera.org/account/accomplishments/specialization/ZXE2NDFGR3C3"
              />
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 bg-gray-900 bg-opacity-30 section-padding">
        <div className="container mx-auto px-4">
          <FadeInSection>
            <h2 className="text-3xl font-bold mb-12 text-center">
              <span className="text-pink-500">My</span> Education
            </h2>
          </FadeInSection>

          <div className="grid grid-cols-1 gap-6 mb-12">
            <FadeInSection delay={100}>
              <EducationCard
                institution="Lovely Professional University, Punjab"
                degree="B.Tech Computer Science Engineering"
                score="CGPA 7.06"
              />
            </FadeInSection>

            <FadeInSection delay={200}>
              <EducationCard institution="Sri Chaitanya Junior College, Hyderabad" degree="Intermediate" score="98%" />
            </FadeInSection>

            <FadeInSection delay={300}>
              <EducationCard institution="St. Antony's E.M. School, Kadapa" degree="Matriculation" score="92%" />
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="section-padding">
        <div className="container mx-auto px-4">
          <FadeInSection>
            <h2 className="text-3xl font-bold mb-12 text-center">
              <span className="text-pink-500">My</span> Achievements
            </h2>
          </FadeInSection>

          <div className="grid grid-cols-1 gap-6">
            <FadeInSection delay={100}>
              <AchievementCard
                title="HackerRank Consistency Badge"
                date="Dec 2024"
                description="Awarded for daily problem-solving streak, demonstrating strong commitment, problem-solving skills, and consistency in learning algorithms and data structures."
              />
            </FadeInSection>

            <FadeInSection delay={200}>
              <AchievementCard
                title="Certificate of Excellence – Trainee"
                date="June 2024"
                description="Awarded by Cipher Schools for outstanding performance during Data Structures and Algorithms (DSA) training, showcasing deep understanding, practical skills, and dedication throughout the program."
                url="https://www.cipherschools.com/certificate/preview?id=66a76d5ed15c5abc1ea65e2a"
              />
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Social Work Section */}
      <section id="social-work" className="py-20 bg-gray-900 bg-opacity-30 section-padding">
        <div className="container mx-auto px-4">
          <FadeInSection>
            <h2 className="text-3xl font-bold mb-12 text-center">
              <span className="text-pink-500">My</span> Social Work
            </h2>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FadeInSection delay={100}>
              <SocialWorkCard
                title="Meenakshi Shiksha Samithi"
                description="Meenakshi Shiksha Samithi is a non-profit organization dedicated to supporting education and environmental sustainability. I actively participated in their initiatives, planting 50+ trees to promote green spaces and environmental consciousness. This initiative helped increase local biodiversity and provided a natural, healthier environment for the community. Additionally, I collaborated in raising awareness about the importance of environmental sustainability within the local community, aiming to foster long-term positive change."
              />
            </FadeInSection>

            <FadeInSection delay={200}>
              <SocialWorkCard
                title="COVID-19 Relief Efforts"
                description="Volunteered in distributing masks, groceries, and essential supplies to families during the pandemic, supporting public health and community welfare. My efforts were focused on helping vulnerable groups during a critical time, ensuring that families had the necessary resources to navigate the crisis safely."
              />
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section id="contact-us" className="section-padding">
        <div className="container mx-auto px-4">
          <FadeInSection>
            <h2 className="text-3xl font-bold mb-12 text-center">
              <span className="text-pink-500">Contact</span> Me
            </h2>
          </FadeInSection>

          <FadeInSection delay={100}>
            <ContactUs />
          </FadeInSection>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 bg-gray-900 bg-opacity-80">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Somula Vishnuvardhan Reddy. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  )
}
