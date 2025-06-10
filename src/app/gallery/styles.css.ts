import { style } from "@vanilla-extract/css";

export const wrapper = style({
  minHeight: "calc(100vh - 60px)",
  background: "var(--color-background)",
  color: "var(--color-text)",
  display: "flex",
  padding: "1rem 2rem",
  paddingBottom: "80px",
  flexDirection: "column",
});

export const title = style({
  fontSize: "2.5rem",
  fontWeight: "bold",
  textAlign: "center",
  marginBottom: "2rem",
  color: "var(--color-text)",
});

export const errorMessage = style({
  color: "#e53e3e",
  textAlign: "center",
  fontSize: "1.1rem",
  padding: "1rem",
  backgroundColor: "rgba(229, 62, 62, 0.1)",
  borderRadius: "8px",
  marginBottom: "2rem",
});

export const imageGrid = style({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
  gap: "20px",
  padding: "16px",

  selectors: {
    "& img": {
      width: "100%",
      height: "auto",
      borderRadius: "8px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    },
    "& p": {
      textAlign: "center",
      marginTop: "8px",
      fontSize: "14px",
      color: "var(--color-text-secondary)",
      margin: "8px 0 0 0",
    },
  },
});

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

export const skeletonWrapper = style({
  display: "flex",
  justifyContent: "center",
  width: "100%",
  marginTop: "8px",
});
