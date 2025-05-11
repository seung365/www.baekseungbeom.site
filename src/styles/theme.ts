export const defaultTheme = {
  colors: {
    primary: "#4ecdc4",
    secondary: "#ff6b6b",
    background: "#1a1a1a",
    text: "#ffffff",
  },
  transitions: {
    default: "all 0.3s ease",
  },
  breakpoints: {
    mobile: "768px",
    tablet: "1024px",
  },
};

export const lightTheme = {
  ...defaultTheme,
  background: "linear-gradient(135deg, #ffffff 0%, #f0f0f0 100%)",
  text: "#000000",
  primary: "#4ebdb4",
  secondary: "#ff6b6b",
  surface: "#ffffff",
  cardBackground: "#ffffff",
  borderColor: "#eaeaea",
  textSecondary: "#666666",
  buttonPrimary: "#0070f3",
  buttonPrimaryHover: "#0051a8",
  buttonSecondary: "#f5f5f5",
  buttonSecondaryHover: "#e0e0e0",
  success: "#2e7d32",
  error: "#c62828",
  successBackground: "#e6f7e6",
  errorBackground: "#ffecec",
};

export const darkTheme = {
  ...defaultTheme,
  background: "linear-gradient(135deg, #000000 0%, #1a1a1a 100%)",
  text: "#ffffff",
  primary: "#4ecdc4",
  secondary: "#ff6b6b",
  surface: "#2a2a2a",
  cardBackground: "#2a2a2a",
  borderColor: "#444444",
  textSecondary: "#aaaaaa",
  buttonPrimary: "#0070f3",
  buttonPrimaryHover: "#0051a8",
  buttonSecondary: "#3a3a3a",
  buttonSecondaryHover: "#4a4a4a",
  success: "#4caf50",
  error: "#f44336",
  successBackground: "#1e3620",
  errorBackground: "#3e1a1a",
};

export const BREAKPOINTS = {
  mobile: "768px",
  tablet: "1024px",
};

export type Theme = typeof lightTheme;
