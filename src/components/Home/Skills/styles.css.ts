import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

export const section = recipe({
  base: {
    transition: "all 1s cubic-bezier(0.4, 0, 0.2, 1)",
    padding: "2rem 0",
    maxWidth: "1280px",
    margin: "0 auto",
  },

  variants: {
    isVisible: {
      true: {
        opacity: 1,
        transform: "translateY(0)",
      },
      false: {
        opacity: 0,
        transform: "translateY(20px)",
      },
    },
  },

  defaultVariants: {
    isVisible: false,
  },
});

export const gradientTitle = style({
  fontSize: "2.5rem",
  fontWeight: 700,
  textAlign: "center",
  marginBottom: "3rem",
  letterSpacing: "0.1em",
  textShadow: "2px 2px 0px rgba(0, 0, 0, 0.1)",
  color: "var(--color-text)",
});

export const skillsContainer = style({
  display: "flex",
  flexDirection: "column",
  gap: "3rem",
});

export const categorySection = recipe({
  base: {
    transition: "all 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
  },

  variants: {
    isVisible: {
      true: {
        opacity: 1,
        transform: "translateY(0)",
      },
      false: {
        opacity: 0,
        transform: "translateY(20px)",
      },
    },
    delay: {
      0: { transitionDelay: "0s" },
      0.1: { transitionDelay: "0.1s" },
      0.2: { transitionDelay: "0.2s" },
      0.3: { transitionDelay: "0.3s" },
      0.4: { transitionDelay: "0.4s" },
      0.5: { transitionDelay: "0.5s" },
    },
  },

  defaultVariants: {
    isVisible: false,
    delay: 0,
  },
});

export const categoryTitle = style({
  fontSize: "1.25rem",
  fontWeight: 600,
  marginBottom: "1.5rem",
  paddingBottom: "0.5rem",
  borderBottom: "2px solid rgba(78, 205, 196, 0.3)",
  color: "var(--color-text)",
});

export const skillsGrid = style({
  display: "flex",
  flexWrap: "wrap",
  gap: "2rem",
  justifyContent: "flex-start",
});

export const skillItem = recipe({
  base: {
    transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
  },

  variants: {
    isVisible: {
      true: {
        opacity: 1,
        transform: "scale(1)",
      },
      false: {
        opacity: 0,
        transform: "scale(0.8)",
      },
    },
    delay: {
      0: { transitionDelay: "0s" },
      0.05: { transitionDelay: "0.05s" },
      0.1: { transitionDelay: "0.1s" },
      0.15: { transitionDelay: "0.15s" },
      0.2: { transitionDelay: "0.2s" },
      0.25: { transitionDelay: "0.25s" },
      0.3: { transitionDelay: "0.3s" },
      0.35: { transitionDelay: "0.35s" },
      0.4: { transitionDelay: "0.4s" },
      0.45: { transitionDelay: "0.45s" },
      0.5: { transitionDelay: "0.5s" },
    },
  },

  defaultVariants: {
    isVisible: false,
    delay: 0,
  },
});

export const iconWrapper = style({
  position: "relative",
  width: "70px",
  height: "70px",
  cursor: "pointer",

  selectors: {
    "&:hover .back": {
      opacity: 1,
      transform: "rotateY(0deg)",
    },
  },
});

export const cardFront = style({
  position: "absolute",
  width: "100%",
  height: "100%",
  WebkitBackfaceVisibility: "hidden",
  backfaceVisibility: "hidden",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "rgba(0, 0, 0, 0.03)",
  borderRadius: "12px",

  selectors: {
    "& svg, & span": {
      fontSize: "40px",
    },
  },
});

export const cardBack = style({
  position: "absolute",
  fontSize: "0.75rem",
  fontWeight: 600,
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  background: "black",
  borderRadius: "12px",
  padding: "0.5rem",
  opacity: 0,
  transform: "rotateY(90deg)",
  transition: "all 0.4s ease",
  WebkitBackfaceVisibility: "hidden",
  backfaceVisibility: "hidden",
});

export const skillName = style({
  fontWeight: 700,
  color: "#fff",
  fontSize: "0.75rem",
  textAlign: "center",
  marginBottom: "0.25rem",
  wordBreak: "keep-all",
});

export const skillLevel = style({
  fontWeight: 600,
  fontSize: "0.75rem",
});
