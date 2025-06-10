import { keyframes, style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

const spin = keyframes({
  "0%": {
    transform: "rotate(0deg)",
  },
  "100%": {
    transform: "rotate(360deg)",
  },
});

export const formWrapper = style({
  background: "rgba(255, 255, 255, 0.95)",
  backdropFilter: "blur(10px)",
  borderRadius: "16px",
  padding: "1.5rem",
  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
  border: "1px solid rgba(255, 255, 255, 0.2)",
});

export const formHeader = style({
  display: "flex",
  alignItems: "center",
  gap: "0.5rem",
  marginBottom: "1.5rem",
});

export const formIcon = style({
  fontSize: "1.5rem",
});

export const formTitle = style({
  fontSize: "1.1rem",
  margin: 0,
  color: "#333",
  fontWeight: 600,
});

export const formGrid = style({
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  marginBottom: "1.5rem",
});

export const inputWrapper = style({
  position: "relative",
});

export const input = style({
  width: "100%",
  padding: "0.75rem 1rem",
  border: "2px solid #e2e8f0",
  borderRadius: "12px",
  fontSize: "0.9rem",
  background: "white",
  color: "#333",
  transition: "all 0.2s ease",

  ":focus": {
    borderColor: "#667eea",
    outline: "none",
    boxShadow: "0 0 0 3px rgba(102, 126, 234, 0.1)",
  },

  "::placeholder": {
    color: "#a0aec0",
  },
});

export const textareaWrapper = style({
  position: "relative",
});

export const textarea = style({
  width: "100%",
  padding: "0.75rem 1rem",
  border: "2px solid #e2e8f0",
  borderRadius: "12px",
  fontSize: "0.9rem",
  background: "white",
  color: "#333",
  resize: "none",
  fontFamily: "inherit",
  transition: "all 0.2s ease",

  ":focus": {
    borderColor: "#667eea",
    outline: "none",
    boxShadow: "0 0 0 3px rgba(102, 126, 234, 0.1)",
  },

  "::placeholder": {
    color: "#a0aec0",
  },
});

export const charCount = recipe({
  base: {
    position: "absolute",
    bottom: "0.6rem",
    right: "0.75rem",
    fontSize: "0.75rem",
    background: "white",
    padding: "0.25rem",
  },

  variants: {
    isLimit: {
      true: {
        color: "#e53e3e",
      },
      false: {
        color: "#a0aec0",
      },
    },
  },

  defaultVariants: {
    isLimit: false,
  },
});

export const submitButton = style({
  width: "100%",
  background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
  color: "white",
  border: "none",
  borderRadius: "12px",
  padding: "0.75rem 1.5rem",
  fontSize: "0.9rem",
  fontWeight: 600,
  cursor: "pointer",
  transition: "all 0.2s ease",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "0.5rem",

  selectors: {
    "&:hover:not(:disabled)": {
      transform: "translateY(-2px)",
      boxShadow: "0 4px 12px rgba(102, 126, 234, 0.4)",
    },
    "&:disabled": {
      opacity: 0.7,
      cursor: "not-allowed",
      transform: "none",
    },
  },
});

export const spinner = style({
  width: "1rem",
  height: "1rem",
  border: "2px solid transparent",
  borderTop: "2px solid currentColor",
  borderRadius: "50%",
  animation: `${spin} 1s linear infinite`,
});

export const errorMessage = style({
  background: "linear-gradient(135deg, #fed7d7 0%, #feb2b2 100%)",
  color: "#c53030",
  padding: "0.75rem 1rem",
  borderRadius: "12px",
  marginBottom: "1rem",
  border: "1px solid #fca5a5",
  fontSize: "0.875rem",
  fontWeight: 500,
});
