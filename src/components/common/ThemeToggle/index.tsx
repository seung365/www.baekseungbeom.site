"use client";
import { useEffect, useState } from "react";
import * as styles from "./styles.css";

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("baekseungbeom-theme") || "light";
    setIsDark(savedTheme === "dark");
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = isDark ? "light" : "dark";

    setIsDark(!isDark);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("baekseungbeom-theme", newTheme);
  };

  return (
    <div className={styles.switchContainer}>
      <label className={styles.switch_}>
        <input type="checkbox" checked={isDark} onChange={toggleTheme} className={styles.input} />
        <span className={`${styles.slider} slider`}>
          <span className={styles.sliderIcon({ icon: isDark ? "sun" : "moon" })}>{isDark ? "☀️" : "🌙"}</span>
        </span>
      </label>
    </div>
  );
};

export default ThemeToggle;
