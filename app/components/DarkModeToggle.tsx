"use client"

import { Moon, Sun } from "lucide-react"
import { useDarkMode } from "../hooks/useDarkMode"

export function DarkModeToggle() {
  const [darkMode, setDarkMode] = useDarkMode()

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 transition-colors duration-200"
    >
      {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
    </button>
  )
}

