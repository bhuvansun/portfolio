import "./globals.css"
import type { Metadata } from "next"
import { Inter, Poppins } from "next/font/google"
import type React from "react"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const poppins = Poppins({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Thribhuvan Sunkavalli - Data Analyst & ML Enthusiast",
  description:
    "Portfolio of Thribhuvan Sunkavalli, a Data Analyst and Machine Learning enthusiast specializing in Python, Data Science, and AI.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body className={`${inter.variable} ${poppins.variable} font-sans antialiased`}>{children}</body>
    </html>
  )
}



import './globals.css'