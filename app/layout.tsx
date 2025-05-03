import "./globals.css"
import { Inter, Dancing_Script } from "next/font/google"
import type React from "react"
import ParticleBackground from "./components/ParticleBackground"

const inter = Inter({ subsets: ["latin"] })
const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-dancing-script",
})

export const metadata = {
  title: "Somula Vishnuvardhan Reddy | Portfolio",
  description: "Personal portfolio of Somula Vishnuvardhan Reddy, Emerging Data Scientist",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} ${dancingScript.variable} cosmic-bg text-white min-h-screen`}>
        <ParticleBackground />
        {children}
      </body>
    </html>
  )
}
