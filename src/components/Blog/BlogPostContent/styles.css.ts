import { themeVars } from "@/styles/theme.css";
import { style } from "@vanilla-extract/css";

export const contentWrapper = style({
  lineHeight: 1.8,
  fontSize: "1.1rem",
  color: themeVars.color.text,
  marginBottom: "3rem",
});

export const h1 = style({
  fontSize: "2.5rem",
  fontWeight: 700,
  margin: "2rem 0 1rem 0",
  lineHeight: 1.3,
  color: themeVars.color.text,
  borderBottom: `2px solid ${themeVars.color.primary}`,
  paddingBottom: "0.5rem",

  "@media": {
    [`screen and (max-width: ${themeVars.breakpoint.mobile})`]: {
      fontSize: "2rem",
    },
  },
});

export const h2 = style({
  fontSize: "2rem",
  fontWeight: 600,
  margin: "2.5rem 0 1rem 0",
  lineHeight: 1.4,
  color: themeVars.color.text,
  position: "relative",

  "::before": {
    content: '"#"',
    color: themeVars.color.primary,
    marginRight: "0.5rem",
    fontWeight: 700,
  },

  "@media": {
    [`screen and (max-width: ${themeVars.breakpoint.mobile})`]: {
      fontSize: "1.6rem",
    },
  },
});

export const h3 = style({
  fontSize: "1.6rem",
  fontWeight: 600,
  margin: "2rem 0 1rem 0",
  lineHeight: 1.4,
  color: themeVars.color.text,

  "::before": {
    content: '"##"',
    color: themeVars.color.primary,
    marginRight: "0.5rem",
    fontWeight: 700,
  },

  "@media": {
    [`screen and (max-width: ${themeVars.breakpoint.mobile})`]: {
      fontSize: "1.4rem",
    },
  },
});

export const paragraph = style({
  margin: "1.5rem 0",
  lineHeight: 1.8,
  color: themeVars.color.text,
  whiteSpace: "pre-wrap",
});

export const inlineCode = style({
  background: "rgba(102, 126, 234, 0.1)",
  color: themeVars.color.primary,
  padding: "0.2rem 0.4rem",
  borderRadius: "4px",
  fontSize: "0.9em",
  fontFamily: '"Fira Code", "Monaco", "Consolas", monospace',
});

export const codeBlock = style({
  background: themeVars.color.cardBackground,
  border: `1px solid ${themeVars.color.border}`,
  borderRadius: "8px",
  padding: "1.5rem",
  margin: "2rem 0",
  overflowX: "auto",
  fontFamily: '"Fira Code", "Monaco", "Consolas", monospace',
  fontSize: "0.9rem",
  lineHeight: 1.6,

  selectors: {
    "& code": {
      background: "none",
      color: themeVars.color.text,
      padding: 0,
      borderRadius: 0,
    },
  },
});

export const blockquote = style({
  borderLeft: `4px solid ${themeVars.color.primary}`,
  background: "rgba(102, 126, 234, 0.05)",
  margin: "2rem 0",
  padding: "1rem 1.5rem",
  borderRadius: "0 8px 8px 0",
  fontStyle: "italic",

  selectors: {
    "& p": {
      margin: "0.5rem 0",
    },
  },
});

export const ul = style({
  margin: "1.5rem 0",
  paddingLeft: "2rem",

  selectors: {
    "& li": {
      margin: "0.5rem 0",
    },
  },
});

export const ol = style({
  margin: "1.5rem 0",
  paddingLeft: "2rem",

  selectors: {
    "& li": {
      margin: "0.5rem 0",
    },
  },
});

export const li = style({
  lineHeight: 1.7,
  color: themeVars.color.text,
});

export const link = style({
  color: themeVars.color.primary,
  textDecoration: "none",
  borderBottom: "1px solid transparent",
  transition: "all 0.2s ease",

  ":hover": {
    borderBottomColor: themeVars.color.primary,
  },
});

export const image = style({
  width: "70%",
  maxWidth: "100%",
  height: "auto",
  borderRadius: "8px",
  margin: "2rem auto",
  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
  objectFit: "contain",
  display: "block",

  "@media": {
    [`screen and (max-width: ${themeVars.breakpoint.mobile})`]: {
      width: "100%",
      margin: "1rem auto",
    },
  },
});
