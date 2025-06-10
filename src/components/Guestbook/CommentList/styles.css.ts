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

const slideInUp = keyframes({
  from: {
    opacity: 0,
    transform: "translateY(20px)",
  },
  to: {
    opacity: 1,
    transform: "translateY(0)",
  },
});

export const commentsSection = style({
  background: "rgba(255, 255, 255, 0.95)",
  backdropFilter: "blur(10px)",
  borderRadius: "16px",
  padding: "1.5rem",
  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
  border: "1px solid rgba(255, 255, 255, 0.2)",
  maxHeight: "600px",
});

export const sectionHeader = style({
  marginBottom: "1.5rem",
});

export const sectionTitle = style({
  fontSize: "1.25rem",
  margin: 0,
  color: "#333",
  fontWeight: 600,
  display: "flex",
  alignItems: "center",
  gap: "0.5rem",
});

export const commentIcon = style({
  fontSize: "1.25rem",
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

export const commentsContainer = style({
  maxHeight: "50vh",
  overflow: "auto",
  scrollbarWidth: "none",
  paddingRight: "0.5rem",

  selectors: {
    "&::-webkit-scrollbar": {
      width: "6px",
    },
    "&::-webkit-scrollbar-track": {
      background: "#f1f5f9",
      borderRadius: "3px",
    },
    "&::-webkit-scrollbar-thumb": {
      background: "#cbd5e0",
      borderRadius: "3px",
    },
    "&::-webkit-scrollbar-thumb:hover": {
      background: "#a0aec0",
    },
  },
});

export const loadingState = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: "3rem 0",
  gap: "1rem",
});

export const spinner = recipe({
  base: {
    border: "2px solid transparent",
    borderTop: "2px solid currentColor",
    borderRadius: "50%",
    animation: `${spin} 1s linear infinite`,
  },

  variants: {
    large: {
      true: {
        width: "2rem",
        height: "2rem",
      },
      false: {
        width: "1rem",
        height: "1rem",
      },
    },
  },

  defaultVariants: {
    large: false,
  },
});

export const loadingText = style({
  color: "#718096",
  fontSize: "0.9rem",
  margin: 0,
});

export const emptyState = style({
  textAlign: "center",
  padding: "3rem 1rem",
  color: "#718096",
});

export const emptyIcon = style({
  fontSize: "3rem",
  marginBottom: "1rem",
});

export const emptyTitle = style({
  fontSize: "1.1rem",
  color: "#4a5568",
  margin: "0 0 0.5rem 0",
  fontWeight: 600,
});

export const emptySubtext = style({
  fontSize: "0.9rem",
  margin: 0,
  opacity: 0.8,
});

export const commentListWrapper = style({
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
});

export const commentItem = recipe({
  base: {
    animation: `${slideInUp} 0.5s ease-out both`,
  },

  variants: {
    delay: {
      0: { animationDelay: "0s" },
      1: { animationDelay: "0.1s" },
      2: { animationDelay: "0.2s" },
      3: { animationDelay: "0.3s" },
      4: { animationDelay: "0.4s" },
      5: { animationDelay: "0.5s" },
      6: { animationDelay: "0.6s" },
      7: { animationDelay: "0.7s" },
      8: { animationDelay: "0.8s" },
      9: { animationDelay: "0.9s" },
    },
  },
});

export const commentContent = style({
  background: "white",
  borderRadius: "12px",
  padding: "1.25rem",
  border: "1px solid #e2e8f0",
  transition: "all 0.2s ease",

  ":hover": {
    borderColor: "#cbd5e0",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
  },
});

export const commentHeader = style({
  marginBottom: "0.75rem",
});

export const authorInfo = style({
  display: "flex",
  alignItems: "center",
  gap: "0.75rem",
});

export const avatar = recipe({
  base: {
    width: "2.7rem",
    height: "2.7rem",
    color: "white",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: 600,
    fontSize: "1.2rem",
    flexShrink: 0,
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15)",
    transition: "all 0.2s ease",

    ":hover": {
      transform: "scale(1.05)",
      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
    },
  },

  variants: {
    gradient: {
      "linear-gradient(135deg, #667eea 0%, #764ba2 100%)": {
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      },
      "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)": {
        background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      },
      "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)": {
        background: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
      },
      "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)": {
        background: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
      },
      "linear-gradient(135deg, #fa709a 0%, #fee140 100%)": {
        background: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
      },
      "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)": {
        background: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
      },
      "linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)": {
        background: "linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)",
      },
      "linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)": {
        background: "linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)",
      },
    },
  },
});

export const authorDetails = style({
  display: "flex",
  flexDirection: "column",
  gap: "0.125rem",
});

export const commentAuthor = style({
  fontWeight: 600,
  color: "#2d3748",
  fontSize: "0.9rem",
});

export const commentDate = style({
  fontSize: "0.75rem",
  color: "#a0aec0",
});

export const commentMessage = style({
  margin: 0,
  lineHeight: 1.6,
  color: "#4a5568",
  fontSize: "0.9rem",
  whiteSpace: "pre-wrap",
});
