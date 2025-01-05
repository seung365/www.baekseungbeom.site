import { RefObject, useEffect } from "react"

// hooks/useScroll.ts
export const useScroll = (
  sectionRef: RefObject<HTMLElement>,
  contentRef: RefObject<HTMLDivElement>,
  contactRef: RefObject<HTMLDivElement>,
) => {
  useEffect(() => {
    const handleScroll = () => {
      if (contentRef.current) {
        contentRef.current.style.setProperty("--scroll-position", window.scrollY.toString())
      }
      if (contactRef.current) {
        contactRef.current.style.setProperty("--scroll-position", window.scrollY.toString())
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [contentRef, contactRef])

  const handleScrollDown = () => {
    const nextSection = sectionRef.current?.nextElementSibling
    nextSection?.scrollIntoView({ behavior: "smooth" })
  }

  return { handleScrollDown }
}
