import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

export const switchContainer = style({
  display: "flex",
  alignItems: "center",
});

export const switch_ = style({
  position: "relative",
  display: "inline-block",
  width: "60px",
  height: "30px",
});

export const input = style({
  opacity: 0,
  width: 0,
  height: 0,

  selectors: {
    "&:checked + .slider": {
      backgroundColor: "var(--color-surface)",
    },
    "&:checked + .slider:before": {
      transform: "translateX(30px)",
    },
  },
});

export const slider = style({
  position: "absolute",
  cursor: "pointer",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "var(--color-background)",
  border: "1px solid var(--color-border)",
  transition: "var(--transition-default)",
  borderRadius: "34px",
  padding: 0,
  margin: 0,

  "::before": {
    position: "absolute",
    content: '""',
    height: "22px",
    width: "22px",
    left: "4px",
    bottom: "3px",
    backgroundColor: "var(--color-text)",
    transition: "var(--transition-default)",
    borderRadius: "50%",
  },
});

export const sliderIcon = recipe({
  base: {
    position: "absolute",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "16px",
    transition: "var(--transition-default)",
    top: "52%",
    transform: "translateY(-50%)",
    height: "22px",
    width: "22px",
    textAlign: "center",
    lineHeight: 1,
  },

  variants: {
    icon: {
      sun: {
        right: "2px",
      },
      moon: {
        right: "32.5px",
      },
    },
  },
});
