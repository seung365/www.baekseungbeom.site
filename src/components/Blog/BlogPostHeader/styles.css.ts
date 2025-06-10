// src/components/Blog/BlogPostHeader/styles.css.ts (향상된 버전)
import { themeVars } from "@/styles/theme.css";
import { style } from "@vanilla-extract/css";

export const header = style({
  marginBottom: "3rem",
  paddingBottom: "2rem",
  borderBottom: `1px solid ${themeVars.color.border}`,

  "@media": {
    [`screen and (max-width: ${themeVars.breakpoint.mobile})`]: {
      marginBottom: "2rem",
      paddingBottom: "1.5rem",
    },
  },
});

export const backLink = style({
  marginBottom: "2rem",

  selectors: {
    "& a": {
      color: themeVars.color.primary,
      textDecoration: "none",
      fontWeight: 500,
      display: "inline-flex",
      alignItems: "center",
      gap: "0.5rem",
      padding: "0.5rem 0",
      borderRadius: "4px",
      transition: "all 0.2s ease",
    },
    "& a:hover": {
      textDecoration: "underline",
      transform: "translateX(-2px)",
    },
    "& a:focus": {
      outline: `2px solid ${themeVars.color.primary}`,
      outlineOffset: "2px",
    },
  },

  "@media": {
    [`screen and (max-width: ${themeVars.breakpoint.mobile})`]: {
      marginBottom: "1.5rem",
    },
  },
});

export const title = style({
  fontSize: "2.5rem",
  fontWeight: 700,
  margin: "0 0 1.5rem 0",
  lineHeight: 1.3,
  color: themeVars.color.text,
  wordBreak: "keep-all",

  "@media": {
    [`screen and (max-width: ${themeVars.breakpoint.tablet})`]: {
      fontSize: "2.2rem",
    },
    [`screen and (max-width: ${themeVars.breakpoint.mobile})`]: {
      fontSize: "1.8rem",
      marginBottom: "1rem",
    },
  },
});

export const meta = style({
  display: "flex",
  flexWrap: "wrap",
  gap: "1.5rem",
  marginBottom: "1.5rem",
  fontSize: "0.9rem",
  color: themeVars.color.textSecondary,

  "@media": {
    [`screen and (max-width: ${themeVars.breakpoint.mobile})`]: {
      gap: "1rem",
      fontSize: "0.85rem",
    },
  },
});

export const metaItem = style({
  display: "flex",
  alignItems: "center",
  gap: "0.25rem",

  selectors: {
    "& strong": {
      color: themeVars.color.text,
    },
  },
});

export const tagList = style({
  display: "flex",
  flexWrap: "wrap",
  gap: "0.5rem",
  marginTop: "0.5rem",
});

export const tag = style({
  background: "rgba(102, 126, 234, 0.1)",
  color: "#667eea",
  padding: "0.5rem 1rem",
  borderRadius: "16px",
  fontSize: "0.9rem",
  fontWeight: 500,
  transition: "all 0.2s ease",
  cursor: "default",
  userSelect: "none",

  ":hover": {
    background: "rgba(102, 126, 234, 0.15)",
    transform: "translateY(-1px)",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  },

  "@media": {
    [`screen and (max-width: ${themeVars.breakpoint.mobile})`]: {
      fontSize: "0.8rem",
      padding: "0.4rem 0.8rem",
    },
  },
});
