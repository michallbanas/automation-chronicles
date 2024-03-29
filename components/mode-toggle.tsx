"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import LoadingSkeleton from "./loading"

export function ModeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [, setLoading] = useState(true)

  useEffect(() => {
    const initializeTheme = () => {
      const localStorageValue = localStorage.getItem("theme")
      if (!localStorageValue) {
        const prefersLightMode = window.matchMedia("(prefers-color-scheme: light)").matches
        setTheme(prefersLightMode ? "light" : "dark")
      }
    }

    try {
      initializeTheme()
    } catch (error) {
      console.error("Failed to initialize theme", error)
    } finally {
      setLoading(false)
      setMounted(true)
    }
  }, [setTheme, theme])

  if (!mounted || !resolvedTheme) return <LoadingSkeleton />

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light"
    setTheme(newTheme)
  }

  return (
    <button
      onClick={toggleTheme}
      id="theme-toggle"
      name="theme-toggle"
      data-test="theme-toggle"
      className="border border-slate-200 rounded-md w-6 h-6 flex items-center justify-center">
      <span className="sr-only">Toggle mode</span>
      {theme === "light" ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          data-test="light-mode"
          className="w-4 h-4">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          data-test="dark-mode"
          className="w-4 h-4">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
          />
        </svg>
      )}
    </button>
  )
}
