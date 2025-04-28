"use client";
import { useState, useEffect } from "react";
import styled from "@emotion/styled";

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setIsDark(savedTheme === "dark");
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = isDark ? "light" : "dark";

    setIsDark(!isDark);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <SwitchContainer>
      <Switch>
        <Input type="checkbox" checked={isDark} onChange={toggleTheme} />
        <Slider className="slider">
          <SliderIcon>{isDark ? "☀️" : "🌙"}</SliderIcon>
        </Slider>
      </Switch>
    </SwitchContainer>
  );
};

export default ThemeToggle;

const SwitchContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Switch = styled.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 30px;
`;

const Input = styled.input`
  opacity: 0;
  width: 0;
  height: 0;

  &:checked + .slider {
    background-color: var(--color-surface);
  }

  &:checked + .slider:before {
    transform: translateX(30px);
  }
`;

const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--color-background);
  border: 1px solid var(--color-border);
  transition: var(--transition-default);
  border-radius: 34px;
  padding: 0;
  margin: 0;

  &:before {
    position: absolute;
    content: "";
    height: 22px;
    width: 22px;
    left: 4px;
    bottom: 3px;
    background-color: var(--color-text);
    transition: var(--transition-default);
    border-radius: 50%;
  }
`;

const SliderIcon = styled.span`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  transition: var(--transition-default);
  top: 52%;
  transform: translateY(-50%);
  right: ${(props) => (props.children === "☀️" ? "2px" : "32.5px")};
  height: 22px;
  width: 22px;
  text-align: center;
  line-height: 1;
`;
