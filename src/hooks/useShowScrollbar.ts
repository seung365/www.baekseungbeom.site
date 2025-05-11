"use client";

import { useEffect } from "react";

const useShowScrollbar = () => {
  useEffect(() => {
    let timer: NodeJS.Timeout;

    const showScrollbar = () => {
      document.body.classList.add("show-scrollbar");
      clearTimeout(timer);
      timer = setTimeout(() => {
        document.body.classList.remove("show-scrollbar");
      }, 800);
    };

    window.addEventListener("scroll", showScrollbar, { passive: true });

    return () => {
      window.removeEventListener("scroll", showScrollbar);
      clearTimeout(timer);
    };
  }, []);
};

export default useShowScrollbar;
