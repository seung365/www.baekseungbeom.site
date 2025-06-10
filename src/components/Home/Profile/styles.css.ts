import { themeVars } from "@/styles/theme.css";
import { keyframes, style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

const fadeInQuote = keyframes({
  from: {
    opacity: 0,
    transform: "translateY(10px)",
  },
  to: {
    opacity: 1,
    transform: "translateY(0)",
  },
});

const float = keyframes({
  "0%": {
    transform: "translateY(0px)",
  },
  "50%": {
    transform: "translateY(-5px)",
  },
  "100%": {
    transform: "translateY(0px)",
  },
});

export const profileSection = recipe({
  base: {
    margin: "4rem auto",
    display: "flex",
    transition: "opacity 0.8s ease-out, transform 0.8s ease-out",
    alignItems: "center",
    gap: "2rem",
    maxWidth: "1280px",

    "@media": {
      [`(max-width: ${themeVars.breakpoint.mobile})`]: {
        flexDirection: "column",
      },
    },
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

export const profileInfo = style({
  flex: 1,
});

export const gradientTitle = style({
  fontSize: "2.5rem",
  marginBottom: "2rem",
  color: "var(--color-text)",
});

export const introText = style({
  fontSize: "1.2rem",
  lineHeight: 1.6,
  margin: "1rem 0",
  color: "var(--color-text)",
});

export const infoTag = style({
  background: "rgba(78, 205, 196, 0.2)",
  color: "#4ecdc4",
  padding: "0.3rem 0.8rem",
  borderRadius: "15px",
  fontSize: "0.9rem",
  marginRight: "0.5rem",
  marginBottom: "0.5rem",
  display: "inline-block",
});

export const quoteWrapper = style({
  display: "inline-block",
  position: "relative",
});

export const quote = recipe({
  base: {
    display: "inline-block",
    opacity: 0,
    transform: "translateY(10px)",
    fontFamily: "Inter, sans-serif",
  },

  variants: {
    isVisible: {
      true: {},
      false: {},
    },
    position: {
      first: {},
      second: {},
    },
  },

  compoundVariants: [
    {
      variants: { isVisible: true, position: "first" },
      style: {
        animation: `${fadeInQuote} 1s ease-out 0.8s forwards, ${float} 2s ease-in-out 1.8s infinite`,
      },
    },
    {
      variants: { isVisible: true, position: "second" },
      style: {
        animation: `${fadeInQuote} 1s ease-out 1s forwards, ${float} 2s ease-in-out 2s infinite`,
      },
    },
  ],

  defaultVariants: {
    isVisible: false,
    position: "first",
  },
});

export const tagsContainer = style({
  marginTop: "1rem",
});
