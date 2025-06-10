import { themeVars } from "@/styles/theme.css";
import { style } from "@vanilla-extract/css";

export const navWrapper = style({
  marginTop: "4rem",
  paddingTop: "2rem",
  borderTop: "1px solid var(--color-border)",

  "@media": {
    [`screen and (max-width: ${themeVars.breakpoint.mobile})`]: {
      marginTop: "3rem",
      paddingTop: "1.5rem",
    },
  },
});

export const navTitle = style({
  fontSize: "1.2rem",
  fontWeight: 600,
  marginBottom: "1.5rem",
  color: "var(--color-text)",
  textAlign: "center",

  "@media": {
    [`screen and (max-width: ${themeVars.breakpoint.mobile})`]: {
      fontSize: "1.1rem",
      marginBottom: "1rem",
    },
  },
});

export const navContainer = style({
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "1rem",

  "@media": {
    [`screen and (max-width: ${themeVars.breakpoint.mobile})`]: {
      gridTemplateColumns: "1fr",
    },
  },
});

export const navCard = style({
  background: "var(--color-card-background)",
  border: "1px solid var(--color-border)",
  borderRadius: "12px",
  padding: "1.5rem",
  transition: "all 0.3s ease",
  position: "relative",

  ":hover": {
    borderColor: "var(--color-primary)",
    transform: "translateY(-2px)",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
  },

  selectors: {
    "& a": {
      textDecoration: "none",
      color: "inherit",
      display: "block",
    },
    "& a:focus": {
      outline: `2px solid ${themeVars.color.primary}`,
      outlineOffset: "2px",
      borderRadius: "4px",
    },
  },

  "@media": {
    [`screen and (max-width: ${themeVars.breakpoint.mobile})`]: {
      padding: "1.25rem",
    },
  },
});

export const navCardPrev = style([
  navCard,
  {
    textAlign: "left",
  },
]);

export const navCardNext = style([
  navCard,
  {
    textAlign: "right",
  },
]);

export const navCardPlaceholder = style({
  minHeight: "100px",

  "@media": {
    [`screen and (max-width: ${themeVars.breakpoint.mobile})`]: {
      display: "none",
    },
  },
});

export const navLabel = style({
  fontSize: "0.8rem",
  color: "var(--color-text-secondary)",
  marginBottom: "0.5rem",
  textTransform: "uppercase",
  fontWeight: 600,
  letterSpacing: "0.5px",

  "@media": {
    [`screen and (max-width: ${themeVars.breakpoint.mobile})`]: {
      fontSize: "0.75rem",
    },
  },
});

export const navPostTitle = style({
  fontSize: "1rem",
  fontWeight: 600,
  margin: "0 0 1rem 0",
  lineHeight: 1.4,
  color: "var(--color-text)",
  display: "-webkit-box",
  WebkitLineClamp: 2,
  WebkitBoxOrient: "vertical",
  overflow: "hidden",
  wordBreak: "keep-all",

  "@media": {
    [`screen and (max-width: ${themeVars.breakpoint.mobile})`]: {
      fontSize: "0.95rem",
      marginBottom: "0.75rem",
    },
  },
});

export const navArrow = style({
  fontSize: "0.9rem",
  color: "var(--color-primary)",
  fontWeight: 600,
  transition: "transform 0.2s ease",

  selectors: {
    [`${navCard}:hover &`]: {
      transform: "translateX(2px)",
    },
  },

  "@media": {
    [`screen and (max-width: ${themeVars.breakpoint.mobile})`]: {
      fontSize: "0.85rem",
    },
  },
});

export const navArrowPrev = style([
  navArrow,
  {
    selectors: {
      [`${navCard}:hover &`]: {
        transform: "translateX(-2px)",
      },
    },
  },
]);
