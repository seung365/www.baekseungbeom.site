import { themeVars } from "@/styles/theme.css";
import { keyframes, style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

// Keyframes
const fadeIn = keyframes({
  from: {
    opacity: 0,
    transform: "translateY(20px)",
  },
  to: {
    opacity: 1,
    transform: "translateY(0)",
  },
});

const slideUp = keyframes({
  from: {
    opacity: 0,
    transform: "translateY(30px)",
  },
  to: {
    opacity: 1,
    transform: "translateY(0)",
  },
});

const modalFadeIn = keyframes({
  from: {
    opacity: 0,
    transform: "scale(0.95)",
  },
  to: {
    opacity: 1,
    transform: "scale(1)",
  },
});

const modalFadeOut = keyframes({
  from: {
    opacity: 1,
    transform: "scale(1)",
  },
  to: {
    opacity: 0,
    transform: "scale(0.95)",
  },
});

// Main Section
export const section = style({
  margin: "4rem auto",
  maxWidth: "1280px",
  padding: "0 2rem",

  "@media": {
    [`(max-width: ${themeVars.breakpoint.mobile})`]: {
      padding: "0 1rem",
      margin: "2rem auto",
    },
  },
});

export const title = style({
  fontSize: "3rem",
  fontWeight: "bold",
  textAlign: "center",
  marginBottom: "3rem",
  color: "var(--color-text)",

  "@media": {
    [`(max-width: ${themeVars.breakpoint.mobile})`]: {
      fontSize: "2.5rem",
      marginBottom: "2rem",
    },
  },
});

// Grid Container
export const gridContainer = style({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
  gap: "2rem",
  alignItems: "start",

  "@media": {
    [`(max-width: ${themeVars.breakpoint.mobile})`]: {
      gridTemplateColumns: "1fr",
      gap: "1.5rem",
    },
  },
});

// Project Items
export const projectItem = recipe({
  base: {
    background: "var(--color-card-background)",
    borderRadius: "12px",
    padding: "1.5rem",
    cursor: "pointer",
    transition: "all 0.3s ease",
    border: "1px solid var(--color-border)",
    opacity: 0,
    transform: "translateY(30px)",

    ":hover": {
      transform: "translateY(-5px)",
      boxShadow: "0 10px 30px rgba(0, 0, 0, 0.15)",
    },

    "@media": {
      [`(max-width: ${themeVars.breakpoint.mobile})`]: {
        padding: "1.25rem",
      },
    },
  },

  variants: {
    isVisible: {
      true: {},
      false: {},
    },
    index: {
      0: {},
      1: {},
      2: {},
      3: {},
      4: {},
      5: {},
      6: {},
      7: {},
      8: {},
      9: {},
    },
  },

  compoundVariants: [
    {
      variants: { isVisible: true, index: 0 },
      style: { animation: `${slideUp} 0.6s ease-out 0.1s forwards` },
    },
    {
      variants: { isVisible: true, index: 1 },
      style: { animation: `${slideUp} 0.6s ease-out 0.2s forwards` },
    },
    {
      variants: { isVisible: true, index: 2 },
      style: { animation: `${slideUp} 0.6s ease-out 0.3s forwards` },
    },
    {
      variants: { isVisible: true, index: 3 },
      style: { animation: `${slideUp} 0.6s ease-out 0.4s forwards` },
    },
    {
      variants: { isVisible: true, index: 4 },
      style: { animation: `${slideUp} 0.6s ease-out 0.5s forwards` },
    },
    {
      variants: { isVisible: true, index: 5 },
      style: { animation: `${slideUp} 0.6s ease-out 0.6s forwards` },
    },
    {
      variants: { isVisible: true, index: 6 },
      style: { animation: `${slideUp} 0.6s ease-out 0.7s forwards` },
    },
    {
      variants: { isVisible: true, index: 7 },
      style: { animation: `${slideUp} 0.6s ease-out 0.8s forwards` },
    },
    {
      variants: { isVisible: true, index: 8 },
      style: { animation: `${slideUp} 0.6s ease-out 0.9s forwards` },
    },
    {
      variants: { isVisible: true, index: 9 },
      style: { animation: `${slideUp} 0.6s ease-out 1.0s forwards` },
    },
  ],
});

export const projectTitle = style({
  fontSize: "1.5rem",
  fontWeight: "bold",
  marginBottom: "1rem",
  color: "var(--color-text)",

  selectors: {
    "& div": {
      fontSize: "1rem",
      fontWeight: "normal",
      color: "var(--color-text-secondary)",
      marginTop: "0.25rem",
    },
  },

  "@media": {
    [`(max-width: ${themeVars.breakpoint.mobile})`]: {
      fontSize: "1.3rem",
    },
  },
});

export const projectDescription = style({
  color: "var(--color-text-secondary)",
  lineHeight: 1.6,
  fontSize: "0.95rem",
});

// Modal Styles
export const modalOverlay = style({
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0, 0, 0, 0.7)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 1000,
  padding: "20px",
  animation: `${fadeIn} 0.3s ease-out`,

  selectors: {
    "&.closing": {
      animation: `${modalFadeOut} 0.3s ease-out`,
    },
  },

  "@media": {
    [`(max-width: ${themeVars.breakpoint.mobile})`]: {
      padding: "10px",
    },
  },
});

export const modalContent = style({
  backgroundColor: "var(--color-background)",
  borderRadius: "16px",
  maxWidth: "900px",
  maxHeight: "90vh",
  width: "100%",
  overflowY: "auto",
  position: "relative",
  animation: `${modalFadeIn} 0.3s ease-out`,

  selectors: {
    "&.closing": {
      animation: `${modalFadeOut} 0.3s ease-out`,
    },
  },

  "@media": {
    [`(max-width: ${themeVars.breakpoint.mobile})`]: {
      maxHeight: "95vh",
    },
  },
});

export const closeButton = style({
  position: "absolute",
  top: "20px",
  right: "20px",
  background: "none",
  border: "none",
  fontSize: "2rem",
  cursor: "pointer",
  color: "var(--color-text)",
  zIndex: 10,
  width: "40px",
  height: "40px",
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  transition: "background-color 0.2s ease",

  ":hover": {
    backgroundColor: "var(--color-border)",
  },

  "@media": {
    [`(max-width: ${themeVars.breakpoint.mobile})`]: {
      top: "15px",
      right: "15px",
      fontSize: "1.5rem",
      width: "35px",
      height: "35px",
    },
  },
});

// Project Detail Styles
export const projectContent = style({
  padding: "2rem",

  "@media": {
    [`(max-width: ${themeVars.breakpoint.mobile})`]: {
      padding: "1.5rem",
    },
  },
});

export const projectHeader = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-start",
  marginBottom: "2rem",
  paddingBottom: "1rem",
  borderBottom: "2px solid var(--color-border)",

  "@media": {
    [`(max-width: ${themeVars.breakpoint.mobile})`]: {
      flexDirection: "column",
      gap: "1rem",
    },
  },
});

export const projectTitleDetail = style({
  fontSize: "2rem",
  fontWeight: "bold",
  marginBottom: "0.5rem",
  color: "var(--color-text)",

  "@media": {
    [`(max-width: ${themeVars.breakpoint.mobile})`]: {
      fontSize: "1.5rem",
    },
  },
});

export const projectDate = style({
  color: "var(--color-text-secondary)",
  fontSize: "1rem",
});

export const projectLinks = style({
  display: "flex",
  gap: "1rem",

  selectors: {
    "& a": {
      backgroundColor: "var(--color-primary)",
      color: "white",
      padding: "0.5rem 1rem",
      borderRadius: "6px",
      textDecoration: "none",
      fontSize: "0.9rem",
      fontWeight: "500",
      transition: "background-color 0.2s ease",
    },
    "& a:hover": {
      backgroundColor: "var(--color-primary-dark)",
    },
  },
});

export const infoGrid = style({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
  gap: "1.5rem",
  marginBottom: "2rem",

  "@media": {
    [`(max-width: ${themeVars.breakpoint.mobile})`]: {
      gridTemplateColumns: "1fr",
      gap: "1rem",
    },
  },
});

export const infoItem = style({
  padding: "1rem",
  backgroundColor: "var(--color-card-background)",
  borderRadius: "8px",
  border: "1px solid var(--color-border)",

  selectors: {
    "& p": {
      margin: "0.5rem 0 0 0",
      color: "var(--color-text)",
      lineHeight: 1.5,
    },
  },
});

export const label = style({
  fontSize: "0.9rem",
  fontWeight: "600",
  color: "var(--color-primary)",
  marginBottom: "0.5rem",
  display: "block",
});

export const contentSection = style({
  marginBottom: "2rem",

  selectors: {
    "&:last-child": {
      marginBottom: 0,
    },
  },
});

export const sectionTitle = style({
  fontSize: "1.3rem",
  fontWeight: "600",
  marginBottom: "1rem",
  color: "var(--color-text)",
  paddingBottom: "0.5rem",
  borderBottom: "1px solid var(--color-border)",
});

export const list = style({
  paddingLeft: "1.5rem",
  color: "var(--color-text)",

  selectors: {
    "& li": {
      marginBottom: "0.5rem",
      lineHeight: 1.6,
    },
    "& li:last-child": {
      marginBottom: 0,
    },
  },
});

export const techSection = style({
  marginTop: "1.5rem",
  padding: "1rem",
  backgroundColor: "var(--color-card-background)",
  borderRadius: "8px",
  border: "1px solid var(--color-border)",

  selectors: {
    "& p": {
      margin: 0,
      color: "var(--color-text)",
      lineHeight: 1.5,
    },
  },
});
