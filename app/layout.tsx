import "./globals.css"
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google"
import type React from "react"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
  variable: "--font-space-grotesk",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
  variable: "--font-jetbrains-mono",
})

export const metadata = {
  title: "Vishnu — Vardhan | AI, Data Science & Software Engineer",
  description:
    "Portfolio of Somula Vishnuvardhan Reddy (Vishnu — Vardhan) — Computer Science Engineer specializing in AI, Machine Learning, Data Science, C++ Algorithms, and Predictive Analytics.",
  generator: "Next.js",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <head>
        <link
          rel="stylesheet"
          href="https://db.onlinewebfonts.com/c/95cecf452d3208890088a5b4c19c7ecf?family=Helvetica+Neue+ME"
          media="all"
        />
      </head>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} bg-[#0a0a0a] text-cream antialiased selection:bg-cream selection:text-[#0a0a0a] min-h-screen`}
      >
        {children}
      </body>
    </html>
  )
}
