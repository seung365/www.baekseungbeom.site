import { RefObject, useEffect } from "react";

export const useScroll = (
  sectionRef: RefObject<HTMLElement | null>,
  contentRef: RefObject<HTMLElement | null>,
  contactRef: RefObject<HTMLDivElement | null>,
) => {
  useEffect(() => {
    const handleScroll = () => {
      if (contentRef.current) {
        contentRef.current.style.setProperty("--scroll-position", window.scrollY.toString());
      }
      if (contactRef.current) {
        contactRef.current.style.setProperty("--scroll-position", window.scrollY.toString());
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [contentRef, contactRef]);

  const handleScrollDown = () => {
    const nextSection = sectionRef.current?.nextElementSibling;
    nextSection?.scrollIntoView({ behavior: "smooth" });
  };

  return { handleScrollDown };
};
