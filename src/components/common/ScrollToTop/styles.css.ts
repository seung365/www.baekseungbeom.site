import { recipe } from "@vanilla-extract/recipes";

export const upButton = recipe({
  base: {
    position: "fixed",
    bottom: "2rem",
    right: "2rem",
    width: "48px",
    height: "48px",
    borderRadius: "50%",
    background: "var(--color-surface)",
    color: "var(--color-text)",
    fontSize: "1.5rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    transition: "all 0.3s ease",
    zIndex: 10,
    border: "none",
    outline: "none",

    ":hover": {
      transform: "scale(1.1)",
      boxShadow: "0 0 10px rgba(102, 126, 234, 0.25)", // --color-primary-rgb 대체
    },

    ":focus": {
      outline: "2px solid var(--color-primary)",
      outlineOffset: "2px",
    },

    ":active": {
      transform: "scale(0.95)",
    },
  },

  variants: {
    visible: {
      true: {
        opacity: 1,
        transform: "translateY(0)",
        pointerEvents: "auto",
      },
      false: {
        opacity: 0,
        transform: "translateY(20px)",
        pointerEvents: "none",
      },
    },
  },

  defaultVariants: {
    visible: false,
  },
});
