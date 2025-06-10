import { themeVars } from "@/styles/theme.css";
import { style } from "@vanilla-extract/css";

export const wrapper = style({
  minHeight: "calc(100vh - 60px)",
  background: "var(--color-background)",
  color: "var(--color-text)",
  padding: "2rem 1rem",
  paddingBottom: "80px",

  "@media": {
    [`screen and (max-width: ${themeVars.breakpoint.mobile})`]: {
      padding: "1rem 0.5rem",
      paddingBottom: "60px",
    },
  },
});

export const container = style({
  maxWidth: "1000px",
  margin: "0 auto",
  padding: "16px",

  "@media": {
    [`screen and (max-width: ${themeVars.breakpoint.mobile})`]: {
      padding: "8px",
    },
  },
});
