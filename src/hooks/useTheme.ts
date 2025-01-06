import { useEffect } from "react"

export const useTheme = (isDark: boolean, setIsDark: (isDark: boolean) => void) => {
  useEffect(() => {
    const savedTheme = localStorage.getItem("baekseungbeom-theme")
    if (savedTheme) {
      setIsDark(savedTheme === "dark")
    }
  }, [setIsDark])

  const toggleTheme = () => {
    const newTheme = !isDark
    setIsDark(newTheme)
    localStorage.setItem("baekseungbeom-theme", newTheme ? "dark" : "light")
  }

  return { toggleTheme }
}
