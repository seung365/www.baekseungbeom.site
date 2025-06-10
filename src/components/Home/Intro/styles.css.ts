import { keyframes, style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

const fadeIn = keyframes({
  "0%": {
    opacity: 0,
  },
  "100%": {
    opacity: 1,
  },
});

const fadeInUp = keyframes({
  "0%": {
    opacity: 0,
    transform: "translateY(20px)",
  },
  "100%": {
    opacity: 1,
    transform: "translateY(0)",
  },
});

const pulseAnimation = keyframes({
  "0%": {
    transform: "translateY(0)",
    opacity: 1,
  },
  "50%": {
    transform: "translateY(10px)",
    opacity: 0.5,
  },
  "100%": {
    transform: "translateY(0)",
    opacity: 1,
  },
});

const gridMove = keyframes({
  "0%": {
    transform: "translate(0, 0)",
  },
  "100%": {
    transform: "translate(50px, 50px)",
  },
});

const rotateGradient = keyframes({
  "0%": {
    transform: "translate(-50%, -50%) rotate(0deg)",
  },
  "100%": {
    transform: "translate(-50%, -50%) rotate(360deg)",
  },
});

export const section = style({
  minHeight: "calc(100vh - 60px)",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "flex-start",
  padding: "0 2rem",
  paddingBottom: "1rem",
  position: "relative",
  overflow: "hidden",
  background: "var(--color-background)",

  "::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: `
      linear-gradient(rgba(78, 205, 196, 0.03) 1px, transparent 1px),
      linear-gradient(90deg, rgba(78, 205, 196, 0.03) 1px, transparent 1px)
    `,
    backgroundSize: "50px 50px",
    animation: `${gridMove} 15s linear infinite`,
  },

  "::after": {
    content: '""',
    position: "absolute",
    top: "50%",
    left: "50%",
    width: "150vmax",
    height: "150vmax",
    background: `
      radial-gradient(
        circle at center,
        transparent 15%,
        rgba(78, 205, 196, 0.03) 25%,
        rgba(255, 107, 107, 0.03) 35%,
        transparent 45%
      )
    `,
    transformOrigin: "center",
    animation: `${rotateGradient} 20s linear infinite`,
  },
});

export const contentWrapper = style({
  marginTop: "30vh",
  transform: "translateY(calc(var(--scroll-position, 0) * -0.5px))",
  opacity: "calc(1 - (var(--scroll-position, 0) / 500))",
  transition: "transform 0.3s ease-out, opacity 0.3s ease-out",
});

export const nameContainer = style({
  display: "flex",
  flexDirection: "column",
  fontSize: "8vw",
  fontWeight: 900,
  textTransform: "uppercase",
  zIndex: 1,
  gap: "0.5rem",
});

export const firstName = style({
  color: "var(--color-text)",
  fontWeight: 600,
  opacity: 0,
  marginBottom: "1rem",
  lineHeight: 1,
  letterSpacing: "-0.05em",
  animation: `${fadeIn} 0.8s ease forwards`,
});

export const lastName = style({
  color: "var(--color-text)",
  fontWeight: 600,
  opacity: 0,
  lineHeight: 1,
  letterSpacing: "-0.05em",
  animation: `${fadeIn} 0.8s ease 0.2s forwards`,
});

export const contactWrapper = style({
  color: "var(--color-text)",
  display: "flex",
  flexDirection: "column",
  fontSize: "1rem",
  alignSelf: "flex-end",
  textAlign: "right",
  gap: "0.8rem",
  transform: "translateY(calc(var(--scroll-position, 0) * -0.5px))",
  opacity: "calc(1 - (var(--scroll-position, 0) / 500))",
  transition: "transform 0.3s ease-out, opacity 0.3s ease-out",
  zIndex: 1,
});

export const contactItem = recipe({
  base: {
    opacity: 0,
    animation: `${fadeInUp} 0.5s ease forwards`,
  },

  variants: {
    delay: {
      0.6: { animationDelay: "0.6s" },
      0.8: { animationDelay: "0.8s" },
      1.0: { animationDelay: "1.0s" },
      1.2: { animationDelay: "1.2s" },
    },
  },
});

export const link = style({
  textDecoration: "underline",
  color: "inherit",
});

export const scrollDownButton = recipe({
  base: {
    position: "absolute",
    bottom: "2rem",
    left: "50%",
    transform: "translateX(-50%)",
    cursor: "pointer",
    transition: "opacity 0.3s ease",
    zIndex: 2,
    background: "none",
    border: "none",

    ":hover": {
      opacity: 0.7,
    },
  },

  variants: {
    isVisible: {
      true: {
        opacity: 1,
      },
      false: {
        opacity: 0,
      },
    },
  },

  defaultVariants: {
    isVisible: false,
  },
});

export const scrollArrow = style({
  color: "var(--color-text)",
  fontSize: "2rem",
  animation: `${pulseAnimation} 2s ease-in-out infinite`,
});
