"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

interface FloatingImageProps {
  src: string
  alt: string
  width: number
  height: number
  className?: string
}

export function FloatingImage({ src, alt, width, height, className }: FloatingImageProps) {
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.pageYOffset)
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const floatY = Math.sin(offset * 0.05) * 10

  return (
    <div style={{ transform: `translateY(${floatY}px)` }} className="transition-transform duration-300 ease-in-out">
      <Image src={src || "/placeholder.svg"} alt={alt} width={width} height={height} className={className} />
    </div>
  )
}

