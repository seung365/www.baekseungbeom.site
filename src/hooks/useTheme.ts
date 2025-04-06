import { useEffect } from "react";
import useThemeStore from "../store/ThemeStore";

export const useTheme = () => {
  const { isDark, setIsDark } = useThemeStore();

  useEffect(() => {
    const savedTheme = localStorage.getItem("baekseungbeom-theme");
    if (savedTheme) {
      setIsDark(savedTheme === "dark");
    }
  }, [setIsDark]);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    localStorage.setItem("baekseungbeom-theme", newTheme ? "dark" : "light");
  };

  return { toggleTheme };
};
