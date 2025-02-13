"use client"

import { useState, useEffect } from "react"

export function ScrollProgressBar() {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
      const scroll = `${(totalScroll / windowHeight) * 100}`

      setScrollProgress(Number.parseFloat(scroll))
    }

    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="fixed top-0 left-0 w-full h-1 z-50">
      <div
        style={{ width: `${scrollProgress}%` }}
        className="h-full bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-100 ease-out"
      ></div>
    </div>
  )
}

