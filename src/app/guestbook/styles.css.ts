import { themeVars } from "@/styles/theme.css";
import { style } from "@vanilla-extract/css";

export const wrapper = style({
  minHeight: "calc(100vh - 60px)",
  background: "var(--color-background)",
  padding: "1rem 2rem",
  paddingBottom: "80px",
});

export const container = style({
  maxWidth: "1000px",
  margin: "0 auto",
  gap: "20px",
  padding: "16px",
});

export const header = style({
  textAlign: "center",
  marginBottom: "2rem",
  color: "white",
});

export const title = style({
  fontSize: "3rem",
  fontWeight: 700,
  margin: "0 0 0.5rem 0",
  textShadow: "0 2px 4px rgba(0, 0, 0, 0.3)",

  "@media": {
    [`(max-width: ${themeVars.breakpoint.mobile})`]: {
      fontSize: "2.5rem",
    },
  },
});

export const subtitle = style({
  fontSize: "1.1rem",
  opacity: 0.9,
  margin: 0,
  fontWeight: 300,
});

export const contentLayout = style({
  display: "grid",
  gridTemplateColumns: "400px 1fr",
  gap: "2rem",
  alignItems: "start",

  "@media": {
    [`(max-width: ${themeVars.breakpoint.tablet})`]: {
      gridTemplateColumns: "1fr",
      gap: "1.5rem",
    },
  },
});

export const formSection = style({
  top: "2rem",
});
