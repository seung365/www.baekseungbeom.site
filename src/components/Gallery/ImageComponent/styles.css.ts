import { style } from "@vanilla-extract/css";

export const imageCard = style({
  display: "flex",
  flexDirection: "column",
  borderRadius: "8px",
  overflow: "hidden",
  transition: "transform 0.3s ease",

  ":hover": {
    transform: "translateY(-5px)",
  },
});

export const imageWrapper = style({
  position: "relative",
  aspectRatio: "1 / 1",
  background: "var(--color-card-background)",
  borderRadius: "8px",
  overflow: "hidden",
});

export const styledImage = style({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  borderRadius: "8px",
  boxShadow: "var(--shadow)",
  transition: "opacity 0.3s ease",
});

export const imageTitle = style({
  textAlign: "center",
  marginTop: "8px",
  fontSize: "14px",
  color: "var(--color-text-secondary)",
});
