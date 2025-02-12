import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import type React from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Thribhuvan Sunkavalli - Full Stack Developer & ML Enthusiast",
  description:
    "Portfolio of Thribhuvan Sunkavalli, a Full Stack Developer and Machine Learning enthusiast specializing in Python, React, and Node.js.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  )
}



import './globals.css'