import { themeVars } from "@/styles/theme.css";
import { style } from "@vanilla-extract/css";

export const postList = style({
  display: "grid",
  gap: "2rem",

  "@media": {
    [`screen and (max-width: ${themeVars.breakpoint.mobile})`]: {
      gap: "1.5rem",
    },
  },
});

export const postCard = style({
  background: "var(--color-card-background)",
  borderRadius: "12px",
  padding: "2rem",
  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
  transition: "all 0.3s ease",
  border: "1px solid var(--color-border)",
  position: "relative",
  overflow: "hidden",

  ":hover": {
    transform: "translateY(-4px)",
    boxShadow: "0 8px 24px rgba(0, 0, 0, 0.15)",
    borderColor: "var(--color-primary)",
  },

  ":focus-within": {
    outline: `2px solid ${themeVars.color.primary}`,
    outlineOffset: "2px",
  },

  selectors: {
    "& a": {
      textDecoration: "none",
      color: "inherit",
      display: "block",
      height: "100%",
    },
    "& a:focus": {
      outline: "none",
    },
  },

  "@media": {
    [`screen and (max-width: ${themeVars.breakpoint.mobile})`]: {
      padding: "1.5rem",
      borderRadius: "8px",
    },
  },
});

export const postHeader = style({
  marginBottom: "1rem",
});

export const postTitle = style({
  fontSize: "1.5rem",
  fontWeight: 700,
  margin: "0 0 0.5rem 0",
  color: "var(--color-text)",
  lineHeight: 1.4,
  wordBreak: "keep-all",
  transition: "color 0.2s ease",

  selectors: {
    [`${postCard}:hover &`]: {
      color: themeVars.color.primary,
    },
  },

  "@media": {
    [`screen and (max-width: ${themeVars.breakpoint.mobile})`]: {
      fontSize: "1.3rem",
    },
  },
});

export const postMeta = style({
  display: "flex",
  alignItems: "center",
  gap: "1rem",
  fontSize: "0.9rem",
  color: "var(--color-text-secondary)",

  "@media": {
    [`screen and (max-width: ${themeVars.breakpoint.mobile})`]: {
      fontSize: "0.85rem",
      gap: "0.8rem",
      flexWrap: "wrap",
    },
  },
});

export const postDate = style({
  display: "flex",
  alignItems: "center",
});

export const readingTime = style({
  display: "flex",
  alignItems: "center",

  "::before": {
    content: '"•"',
    marginRight: "0.5rem",
    color: "var(--color-border)",
  },
});

export const postDescription = style({
  fontSize: "1rem",
  lineHeight: 1.6,
  color: "var(--color-text-secondary)",
  margin: "0 0 1.5rem 0",
  display: "-webkit-box",
  WebkitLineClamp: 3,
  WebkitBoxOrient: "vertical",
  overflow: "hidden",

  "@media": {
    [`screen and (max-width: ${themeVars.breakpoint.mobile})`]: {
      fontSize: "0.95rem",
      marginBottom: "1rem",
      WebkitLineClamp: 2,
    },
  },
});

export const tagList = style({
  display: "flex",
  flexWrap: "wrap",
  gap: "0.5rem",
  marginTop: "auto",
});

export const tag = style({
  background: "rgba(102, 126, 234, 0.1)",
  color: "#667eea",
  padding: "0.25rem 0.75rem",
  borderRadius: "12px",
  fontSize: "0.8rem",
  fontWeight: 500,
  transition: "all 0.2s ease",
  userSelect: "none",

  selectors: {
    [`${postCard}:hover &`]: {
      background: "rgba(102, 126, 234, 0.15)",
      transform: "translateY(-1px)",
    },
  },

  "@media": {
    [`screen and (max-width: ${themeVars.breakpoint.mobile})`]: {
      fontSize: "0.75rem",
      padding: "0.2rem 0.6rem",
    },
  },
});

export const emptyState = style({
  textAlign: "center",
  padding: "4rem 2rem",
  color: "var(--color-text-secondary)",

  "@media": {
    [`screen and (max-width: ${themeVars.breakpoint.mobile})`]: {
      padding: "3rem 1rem",
    },
  },
});

export const emptyIcon = style({
  fontSize: "4rem",
  marginBottom: "1rem",
  opacity: 0.6,

  "@media": {
    [`screen and (max-width: ${themeVars.breakpoint.mobile})`]: {
      fontSize: "3rem",
    },
  },
});

export const emptyTitle = style({
  fontSize: "1.5rem",
  color: "var(--color-text)",
  margin: "0 0 0.5rem 0",
  fontWeight: 600,

  "@media": {
    [`screen and (max-width: ${themeVars.breakpoint.mobile})`]: {
      fontSize: "1.3rem",
    },
  },
});

export const emptySubtext = style({
  fontSize: "1rem",
  margin: 0,
  opacity: 0.8,

  "@media": {
    [`screen and (max-width: ${themeVars.breakpoint.mobile})`]: {
      fontSize: "0.9rem",
    },
  },
});
