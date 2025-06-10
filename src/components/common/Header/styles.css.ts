import { themeVars } from "@/styles/theme.css";
import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

export const wrapper = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  zIndex: 1000,
  height: "60px",
  width: "100%",
  background: "var(--color-background)",
  color: "var(--color-text)",
  fontSize: "0.9rem",
  fontWeight: 400,
  padding: "0.8rem 1rem",
  borderBottom: "1px solid var(--color-border)",
  position: "relative",
});

export const logo = style({
  fontSize: "1.5rem",
  fontWeight: 700,
  color: "var(--color-primary)",
  cursor: "pointer",
  transition: "all 0.3s ease",
  zIndex: 1001,

  selectors: {
    "& a": {
      textDecoration: "none",
      color: "inherit",
    },
  },

  ":hover": {
    transform: "scale(1.1)",
  },
});

export const desktopNav = style({
  display: "flex",
  alignItems: "center",
  gap: "20px",

  "@media": {
    [`screen and (max-width: ${themeVars.breakpoint.mobile})`]: {
      display: "none",
    },
  },
});

export const mobileNav = style({
  display: "none",
  alignItems: "center",
  gap: "15px",
  zIndex: 1001,

  "@media": {
    [`screen and (max-width: ${themeVars.breakpoint.mobile})`]: {
      display: "flex",
    },
  },
});

export const navList = style({
  display: "flex",
  gap: "20px",
  alignItems: "center",
  listStyle: "none",
  margin: 0,
  padding: 0,
});

export const navItem = style({
  margin: 0,
  padding: 0,
  transition: "all 0.3s ease",

  ":hover": {
    transform: "scale(1.1)",
  },
});

export const styledLink = style({
  textDecoration: "none",
  color: "inherit",
  display: "block",
  padding: "0.5rem 0",
  border: "none",
  transition: "color 0.3s ease",

  ":hover": {
    color: "var(--color-primary)",
  },
});

export const hamburgerButton = recipe({
  base: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    width: "24px",
    height: "18px",
    background: "transparent",
    border: "none",
    cursor: "pointer",
    padding: 0,
    zIndex: 1001,

    ":focus": {
      outline: "none",
    },
  },
});

export const hamburgerLine = recipe({
  base: {
    width: "100%",
    height: "2px",
    background: "var(--color-text)",
    borderRadius: "1px",
    transition: "all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55)",
    transformOrigin: "center",
  },

  variants: {
    position: {
      first: {},
      second: {},
      third: {},
    },
    isOpen: {
      true: {},
      false: {},
    },
  },

  compoundVariants: [
    {
      variants: { position: "first", isOpen: true },
      style: { transform: "translateY(8px) rotate(45deg)" },
    },
    {
      variants: { position: "first", isOpen: false },
      style: { transform: "translateY(0) rotate(0)" },
    },
    {
      variants: { position: "second", isOpen: true },
      style: { opacity: 0, transform: "scale(0.2)" },
    },
    {
      variants: { position: "second", isOpen: false },
      style: { opacity: 1, transform: "scale(1)" },
    },
    {
      variants: { position: "third", isOpen: true },
      style: { transform: "translateY(-8px) rotate(-45deg)" },
    },
    {
      variants: { position: "third", isOpen: false },
      style: { transform: "translateY(0) rotate(0)" },
    },
  ],
});

export const mobileMenu = recipe({
  base: {
    position: "fixed",
    top: "60px",
    right: 0,
    width: "280px",
    height: "calc(100vh - 60px)",
    background: "var(--color-background)",
    borderLeft: "1px solid var(--color-border)",
    transition: "transform 0.3s ease-in-out",
    zIndex: 999,
    padding: "2rem 0",

    "@media": {
      [`screen and (min-width: calc(${themeVars.breakpoint.mobile} + 1px))`]: {
        display: "none",
      },
    },
  },

  variants: {
    isOpen: {
      true: {
        transform: "translateX(0)",
        boxShadow: "-2px 0 10px rgba(0, 0, 0, 0.1)",
      },
      false: {
        transform: "translateX(100%)",
        boxShadow: "none",
      },
    },
  },

  defaultVariants: {
    isOpen: false,
  },
});

export const mobileNavList = style({
  listStyle: "none",
  margin: 0,
  padding: 0,
  display: "flex",
  flexDirection: "column",
});

export const mobileNavItem = style({
  margin: 0,
  padding: 0,
});

export const mobileStyledLink = style({
  display: "block",
  padding: "1rem 2rem",
  textDecoration: "none",
  color: "var(--color-text)",
  fontSize: "1.1rem",
  fontWeight: 500,
  transition: "all 0.3s ease",
  borderBottom: "1px solid var(--color-border)",

  ":hover": {
    background: "var(--color-card-background)",
    color: "var(--color-primary)",
    transform: "translateX(10px)",
  },

  ":last-child": {
    borderBottom: "none",
  },
});

export const overlay = style({
  position: "fixed",
  top: 0,
  left: 0,
  width: "100vw",
  height: "100vh",
  background: "rgba(0, 0, 0, 0.5)",
  zIndex: 998,
  backdropFilter: "blur(2px)",

  "@media": {
    [`screen and (min-width: calc(${themeVars.breakpoint.mobile} + 1px))`]: {
      display: "none",
    },
  },
});
