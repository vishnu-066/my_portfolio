"use client"

import { useEffect, useRef, useState } from "react"
import { FaTrophy, FaMedal, FaAward, FaEnvelope, FaGithub, FaDatabase } from "react-icons/fa"
import Navigation from "./components/Navigation"
import HeroSection from "./components/HeroSection"
import SkillsSection from "./components/SkillsSection"
import ProjectCard from "./components/ProjectCard"
import CertificationCard from "./components/CertificationCard"
import EducationCard from "./components/EducationCard"
import AchievementCard from "./components/AchievementCard"
import SocialWorkCard from "./components/SocialWorkCard"
import ContactUs from "./components/ContactUs"
import SectionHeading from "./components/SectionHeading"
import LoadingScreen from "./components/LoadingScreen"
import dynamic from "next/dynamic"

// Dynamically import the ParticleBackground to avoid SSR issues
const ParticleBackground = dynamic(() => import("./components/ParticleBackground"), {
  ssr: false,
})

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)
  const staggeredRefs = {
    certifications: useRef<HTMLDivElement>(null),
    education: useRef<HTMLDivElement>(null),
    achievements: useRef<HTMLDivElement>(null),
    socialWork: useRef<HTMLDivElement>(null),
  }

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

      // Handle staggered animations
      Object.values(staggeredRefs).forEach((ref) => {
        if (ref.current) {
          const rect = ref.current.getBoundingClientRect()
          const isVisible = rect.top <= window.innerHeight * 0.8

          if (isVisible) {
            const children = ref.current.children
            Array.from(children).forEach((child, index) => {
              setTimeout(() => {
                child.classList.add("visible")
              }, index * 100) // 100ms delay between each child
            })
          }
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    // Trigger once on load
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleLoadingComplete = () => {
    setIsLoading(false)
  }

  return (
    <>
      {isLoading && <LoadingScreen onLoadingComplete={handleLoadingComplete} />}

      <div className={`cosmic-bg ${isLoading ? "hidden" : ""}`}>
        <Navigation />

        {/* Hero Section */}
        <HeroSection />

        {/* Skills Section - Now using the new interactive charts */}
        <SkillsSection />

        {/* Projects Section */}
        <section id="projects" className="py-20 bg-[#050816] bg-opacity-70 section-padding">
          <div className="container mx-auto px-4">
            <SectionHeading title="Projects" icon={<FaDatabase className="text-[#0ef] text-4xl" />} />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <ProjectCard
                title="Binary Search Tree Visualization"
                date="Aug 2024"
                description="An interactive visualization tool for Binary Search Trees, demonstrating insertion, deletion, and traversal operations with animated visual feedback."
                technologies="C++, WebAssembly, HTML, CSS, JavaScript"
                githubUrl="https://github.com/vishnu-066/cipher_schools_project"
                imageSrc="/images/bst-visualization.png"
                slug="bst-visualization"
              />

              <ProjectCard
                title="Diabetes Prediction Model"
                date="Nov 2024"
                description="A machine learning model that predicts the likelihood of diabetes based on various health parameters, with an accuracy of 85% on test data."
                technologies="R, ggplot2, caret, dplyr"
                githubUrl="https://github.com/vishnu-066/Diabetes-prediction-Model"
                imageSrc="/images/diabetes-prediction.png"
                slug="diabetes-prediction"
              />

              <ProjectCard
                title="Indian Population Analysis"
                date="Oct 2024"
                description="Analyzed and visualized the population trends of India, offering insights into growth patterns, age distribution, and urbanization."
                technologies="Python, Pandas, Matplotlib, Seaborn"
                githubUrl="https://github.com/vishnu-066/population-of-india-_analysis"
                imageSrc="/images/population-analysis.png"
                slug="population-analysis"
              />
            </div>
          </div>
        </section>

        {/* Certifications Section */}
        <section id="certifications" className="section-padding highlight-section">
          <div className="container mx-auto px-4">
            <SectionHeading title="Certifications" icon={<FaAward className="text-[#0ef] text-4xl" />} />

            <div
              ref={staggeredRefs.certifications}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 staggered-animation"
            >
              <CertificationCard
                title="Cloud Computing"
                issuer="NPTEL"
                date="Nov 2024"
                url="https://drive.google.com/file/d/1tNhlVdOQ_YV93KCCFNYJFK8WarbMIALB/view?usp=drive_link"
                delay={100}
              />
              <CertificationCard
                title="Data Structures and Algorithms with C++"
                issuer="Cipher Schools"
                date="July 2024"
                url="https://www.cipherschools.com/certificate/preview?id=66a8f3e260e87d863c8fd446"
                delay={200}
              />
              <CertificationCard
                title="Become a Data Scientist"
                issuer="LinkedIn"
                date="Feb 2023"
                url="https://www.linkedin.com/learning/certificates/d08bbfa3c5f91e8628eb7996f81d81152572b830101e5cd91a0e203e3ab25398"
                delay={300}
              />
              <CertificationCard
                title="Programming in Python"
                issuer="HackerRank"
                date="Dec 2022"
                url="https://www.hackerrank.com/certificates/141f2bbc4534"
                delay={400}
              />
              <CertificationCard
                title="Excel Skills for Business"
                issuer="Coursera"
                date="May 2024"
                url="https://www.coursera.org/account/accomplishments/specialization/ZXE2NDFGR3C3"
                delay={500}
              />
              <CertificationCard
                title="Data Analysis with Tableau"
                issuer="Coursera"
                date="June 2024"
                url="https://www.coursera.org/account/accomplishments/verify/3C0MCD1QOS8M"
                delay={600}
              />
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="py-20 bg-[#050816] bg-opacity-70 section-padding highlight-section">
          <div className="container mx-auto px-4">
            <SectionHeading title="Education" icon={<FaGithub className="text-[#0ef] text-4xl" />} />

            <div className="timeline-container py-10">
              <EducationCard
                institution="Lovely Professional University, Punjab"
                degree="B.Tech Computer Science Engineering"
                score="CGPA 7.06"
                isLeft={true}
                delay={100}
              />
              <EducationCard
                institution="Sri Chaitanya Junior College, Hyderabad"
                degree="Intermediate"
                score="98%"
                isLeft={false}
                delay={300}
              />
              <EducationCard
                institution="St. Antony's E.M. School, Kadapa"
                degree="Matriculation"
                score="92%"
                isLeft={true}
                delay={500}
              />
            </div>
          </div>
        </section>

        {/* Achievements Section */}
        <section id="achievements" className="section-padding highlight-section">
          <div className="container mx-auto px-4">
            <SectionHeading title="Achievements" icon={<FaTrophy className="text-[#0ef] text-4xl" />} />

            <div className="mb-8 text-center">
              <p className="text-lg text-gray-300 italic handwriting-text">
                "Achieved excellence in tech and sports through national and interschool recognition, awards, and
                innovation challenges."
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <AchievementCard
                title="Certificate of Excellence – Trainee"
                date="June 2024"
                description="Awarded by Cipher Schools for outstanding performance during Data Structures and Algorithms (DSA) training, showcasing deep understanding, practical skills, and dedication throughout the program."
                url="https://www.cipherschools.com/certificate/preview?id=66a76d5ed15c5abc1ea65e2a"
                delay={100}
              />
              <AchievementCard
                title="HackerRank Consistency Badge"
                date="Dec 2024"
                description="Awarded for daily problem-solving streak, demonstrating strong commitment, problem-solving skills, and consistency in learning algorithms and data structures."
                url="https://www.hackerrank.com/profile/somulavishnu6"
                delay={200}
              />
              <AchievementCard
                title="Runner-up in Interschool Drone Competition – LPU"
                date="March 2024"
                description="Secured second place in the prestigious drone competition at Lovely Professional University, demonstrating exceptional skills in drone programming, navigation, and innovative problem-solving."
                delay={300}
              />
              <AchievementCard
                title="Winner in District Cricket Championship"
                date="August 2023"
                description="Led the team to victory in the district-level cricket championship, showcasing leadership, teamwork, and athletic excellence throughout the tournament."
                delay={400}
              />
            </div>
          </div>
        </section>

        {/* Social Work Section */}
        <section id="social-work" className="py-20 bg-[#050816] bg-opacity-70 section-padding highlight-section">
          <div className="container mx-auto px-4">
            <SectionHeading title="Social Work" icon={<FaMedal className="text-[#0ef] text-4xl" />} />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <SocialWorkCard
                title="Meenakshi Shiksha Samithi"
                description="Meenakshi Shiksha Samithi is a non-profit organization dedicated to supporting education and environmental sustainability. I actively participated in their initiatives, planting 50+ trees to promote green spaces and environmental consciousness. This initiative helped increase local biodiversity and provided a natural, healthier environment for the community."
                url="https://drive.google.com/file/d/1zxoljsB4s4LqKpBSOs2qk31s_i1hynZQ/view?usp=drive_link"
                delay={100}
              />
              <SocialWorkCard
                title="COVID-19 Relief Efforts"
                description="Volunteered in distributing masks, groceries, and essential supplies to families during the pandemic, supporting public health and community welfare. My efforts were focused on helping vulnerable groups during a critical time, ensuring that families had the necessary resources to navigate the crisis safely."
                delay={200}
              />
            </div>
          </div>
        </section>

        {/* Contact Me Section */}
        <section id="contact-us" className="section-padding">
          <div className="container mx-auto px-4">
            <SectionHeading title="Contact Me" icon={<FaEnvelope className="text-[#0ef] text-4xl" />} />

            <ContactUs />
          </div>
        </section>

        {/* Footer */}
        <footer className="py-6 bg-[#050816] bg-opacity-90">
          <div className="container mx-auto px-4 text-center">
            <p className="text-gray-400">
              &copy; {new Date().getFullYear()} Somula Vishnuvardhan Reddy. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </>
  )
}
