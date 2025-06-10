"use client";

import { useEffect, useState } from "react";
import * as styles from "./styles.css";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      className={styles.upButton({ visible: isVisible })}
      onClick={scrollToTop}
      type="button"
      aria-label="맨 위로 스크롤"
    >
      ↑
    </button>
  );
};

export default ScrollToTop;
