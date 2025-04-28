"use client";
import { useState, useEffect } from "react";
import { S } from "./styles";

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
    <S.SwitchContainer>
      <S.Switch>
        <S.Input type="checkbox" checked={isDark} onChange={toggleTheme} />
        <S.Slider className="slider">
          <S.SliderIcon>{isDark ? "☀️" : "🌙"}</S.SliderIcon>
        </S.Slider>
      </S.Switch>
    </S.SwitchContainer>
  );
};

export default ThemeToggle;
