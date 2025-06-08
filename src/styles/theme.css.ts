import { createTheme, createThemeContract } from "@vanilla-extract/css";

export const themeVars = createThemeContract({
  color: {
    background: null,
    cardBackground: null,
    text: null,
    textSecondary: null,
    primary: null,
    border: null,
  },
  space: {
    small: null,
    medium: null,
    large: null,
  },
  breakpoint: {
    mobile: null,
    tablet: null,
  },
});

export const lightTheme = createTheme(themeVars, {
  color: {
    background: "#ffffff",
    cardBackground: "#f8f9fa",
    text: "#333333",
    textSecondary: "#666666",
    primary: "#667eea",
    border: "#e0e0e0",
  },
  space: {
    small: "0.5rem",
    medium: "1rem",
    large: "2rem",
  },
  breakpoint: {
    mobile: "768px",
    tablet: "1024px",
  },
});

export const darkTheme = createTheme(themeVars, {
  color: {
    background: "#1a1a1a",
    cardBackground: "#2d2d2d",
    text: "#ffffff",
    textSecondary: "#cccccc",
    primary: "#667eea",
    border: "#404040",
  },
  space: {
    small: "0.5rem",
    medium: "1rem",
    large: "2rem",
  },
  breakpoint: {
    mobile: "768px",
    tablet: "1024px",
  },
});
