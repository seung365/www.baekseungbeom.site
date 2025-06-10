import { themeVars } from "@/styles/theme.css";
import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

export const filterWrapper = style({
  marginBottom: "2rem",

  "@media": {
    [`screen and (max-width: ${themeVars.breakpoint.mobile})`]: {
      marginBottom: "1.5rem",
    },
  },
});

export const tagList = style({
  display: "flex",
  flexWrap: "wrap",
  gap: "0.5rem",

  "@media": {
    [`screen and (max-width: ${themeVars.breakpoint.mobile})`]: {
      gap: "0.4rem",
    },
  },
});

export const tagItem = recipe({
  base: {
    padding: "0.5rem 1rem",
    border: "2px solid",
    borderRadius: "20px",
    cursor: "pointer",
    fontSize: "0.9rem",
    fontWeight: 500,
    transition: "all 0.2s ease",
    background: "none",
    outline: "none",

    ":focus": {
      outline: `2px solid ${themeVars.color.primary}`,
      outlineOffset: "2px",
    },

    "@media": {
      [`screen and (max-width: ${themeVars.breakpoint.mobile})`]: {
        fontSize: "0.85rem",
        padding: "0.4rem 0.8rem",
      },
    },
  },

  variants: {
    selected: {
      true: {
        borderColor: "#667eea",
        background: "#667eea",
        color: "white",

        ":hover": {
          borderColor: "#667eea",
          background: "#5a6fd8",
        },
      },
      false: {
        borderColor: "var(--color-border)",
        background: "var(--color-background)",
        color: "var(--color-text)",

        ":hover": {
          borderColor: "#667eea",
          background: "rgba(102, 126, 234, 0.1)",
        },
      },
    },
  },

  defaultVariants: {
    selected: false,
  },
});
