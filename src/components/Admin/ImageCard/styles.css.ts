import { style } from "@vanilla-extract/css";

export const card = style({
  borderRadius: "6px",
  overflow: "hidden",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  transition: "transform 0.2s",

  ":hover": {
    transform: "translateY(-4px)",
  },
});

export const thumbnail = style({
  height: "120px",
  backgroundColor: "#f5f5f5",
  position: "relative",

  selectors: {
    "& img": {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      opacity: 0,
      transition: "opacity 0.3s ease",
    },
    '& img[data-loaded="true"]': {
      opacity: 1,
    },
    "&:hover button": {
      display: "flex",
    },
  },
});

export const deleteBtn = style({
  position: "absolute",
  top: "5px",
  right: "5px",
  background: "rgba(0, 0, 0, 0.6)",
  color: "white",
  border: "none",
  borderRadius: "4px",
  width: "24px",
  height: "24px",
  display: "none",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",

  ":hover": {
    background: "rgba(255, 0, 0, 0.8)",
  },
});

export const deleteIcon = style({
  "::before": {
    content: '"×"',
    fontSize: "18px",
  },
});

export const details = style({
  padding: "8px",
  backgroundColor: "var(--color-card-background)",

  selectors: {
    "& p": {
      margin: "0 0 4px 0",
      fontSize: "14px",
      fontWeight: 500,
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
    },
    "& small": {
      color: "var(--color-text-secondary)",
      fontSize: "12px",
    },
  },
});
