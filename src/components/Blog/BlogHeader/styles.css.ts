import { themeVars } from "@/styles/theme.css";
import { style } from "@vanilla-extract/css";

export const header = style({
  textAlign: "center",
  marginBottom: "3rem",

  "@media": {
    [`screen and (max-width: ${themeVars.breakpoint.mobile})`]: {
      marginBottom: "2rem",
    },
  },
});

export const title = style({
  fontSize: "3rem",
  fontWeight: 700,
  margin: "0 0 1rem 0",
  background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",

  "@media": {
    [`screen and (max-width: ${themeVars.breakpoint.mobile})`]: {
      fontSize: "2.5rem",
    },
  },
});

export const subtitle = style({
  fontSize: "1.2rem",
  color: "var(--color-text-secondary)",
  margin: 0,
  fontWeight: 300,

  "@media": {
    [`screen and (max-width: ${themeVars.breakpoint.mobile})`]: {
      fontSize: "1.1rem",
    },
  },
});
