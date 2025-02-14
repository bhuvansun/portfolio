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
  title: "Thribhuvan Sunkavalli - Data Analyst & AI Enthusiast",
  description:
    "Portfolio of Thribhuvan Sunkavalli, a Data Analyst and Artificial Intelligence enthusiast specializing in Python, Data Science, and AI.",
  icons: {
    icon: "/favicon.ico",
  },
    generator: 'v0.dev'
}


import Head from "next/head"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </Head>
      <body className={`${inter.variable} ${poppins.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}


import './globals.css'
