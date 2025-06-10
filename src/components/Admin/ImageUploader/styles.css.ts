import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

export const uploaderForm = style({
  background: "var(--color-card-background)",
  borderRadius: "8px",
  padding: "24px",
  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
});

export const sectionTitle = style({
  fontSize: "20px",
  marginTop: 0,
  marginBottom: "20px",
  paddingBottom: "10px",
  borderBottom: "1px solid var(--color-border)",
});

export const fileInput = style({
  width: "100%",
  padding: "12px",
  marginBottom: "20px",
  border: "2px dashed #ddd",
  borderRadius: "4px",
  cursor: "pointer",

  ":hover": {
    borderColor: "#aaa",
  },
});

export const previewContainer = style({
  marginBottom: "20px",
});

export const previewTitle = style({
  fontSize: "16px",
  marginBottom: "10px",
});

export const imagePreview = style({
  maxWidth: "100%",
  marginBottom: "10px",
  borderRadius: "4px",
  overflow: "hidden",

  selectors: {
    "& img": {
      width: "100%",
      maxHeight: "300px",
      objectFit: "contain",
    },
  },
});

export const previewInfo = style({
  fontSize: "14px",
  color: "var(--color-text-secondary)",

  selectors: {
    "& p": {
      margin: "5px 0",
    },
  },
});

export const customInput = style({
  width: "100%",
  padding: "12px",
  marginBottom: "20px",
  border: "1px solid #ddd",
  borderRadius: "4px",
  fontSize: "14px",

  ":focus": {
    borderColor: "#0070f3",
    outline: "none",
    boxShadow: "0 0 0 2px rgba(0, 112, 243, 0.2)",
  },
});

export const buttonGroup = style({
  display: "flex",
  gap: "10px",
  marginBottom: "20px",
});

export const primaryButton = style({
  backgroundColor: "#0070f3",
  color: "white",
  border: "none",
  borderRadius: "4px",
  padding: "10px 20px",
  fontWeight: 500,
  cursor: "pointer",
  transition: "background-color 0.2s",

  selectors: {
    "&:hover:not(:disabled)": {
      backgroundColor: "#0051a8",
    },
    "&:disabled": {
      backgroundColor: "#cccccc",
      cursor: "not-allowed",
    },
  },
});

export const secondaryButton = style({
  backgroundColor: "#f5f5f5",
  color: "#333",
  border: "none",
  borderRadius: "4px",
  padding: "10px 20px",
  fontWeight: 500,
  cursor: "pointer",
  transition: "background-color 0.2s",

  ":hover": {
    backgroundColor: "#e0e0e0",
  },
});

export const statusMessage = recipe({
  base: {
    padding: "12px",
    borderRadius: "4px",
    fontSize: "14px",
  },

  variants: {
    success: {
      true: {
        backgroundColor: "#e6f7e6",
        color: "#2e7d32",
      },
      false: {
        backgroundColor: "#ffecec",
        color: "#c62828",
      },
    },
  },

  defaultVariants: {
    success: false,
  },
});
