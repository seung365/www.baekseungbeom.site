import { style } from "@vanilla-extract/css";

export const grid = style({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))",
  gap: "16px",
});

export const emptyState = style({
  padding: "40px 0",
  textAlign: "center",
  color: "var(--color-text-secondary)",
});
