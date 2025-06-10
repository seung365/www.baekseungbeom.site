import { style } from "@vanilla-extract/css";

export const container = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "100vh",
  backgroundColor: "#f5f5f5",
});

export const loginBox = style({
  width: "100%",
  maxWidth: "400px",
  padding: "2rem",
  backgroundColor: "white",
  borderRadius: "8px",
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
});

export const title = style({
  marginBottom: "1.5rem",
  textAlign: "center",
  color: "#333",
  margin: "0 0 1.5rem 0",
  fontSize: "1.5rem",
  fontWeight: "bold",
});

export const form = style({
  display: "flex",
  flexDirection: "column",
});

export const inputGroup = style({
  marginBottom: "1rem",
});

export const label = style({
  display: "block",
  marginBottom: "0.5rem",
  fontWeight: 500,
  color: "#333",
});

export const input = style({
  width: "100%",
  padding: "0.75rem",
  border: "1px solid #ddd",
  borderRadius: "4px",
  fontSize: "1rem",
  transition: "border-color 0.2s, box-shadow 0.2s",

  ":focus": {
    outline: "none",
    borderColor: "#0070f3",
    boxShadow: "0 0 0 2px rgba(0, 112, 243, 0.2)",
  },
});

export const loginButton = style({
  width: "100%",
  padding: "0.75rem",
  marginTop: "1rem",
  backgroundColor: "#0070f3",
  color: "white",
  border: "none",
  borderRadius: "4px",
  fontSize: "1rem",
  fontWeight: "500",
  cursor: "pointer",
  transition: "background-color 0.2s, transform 0.1s",

  ":hover": {
    backgroundColor: "#0051a8",
  },

  ":active": {
    transform: "translateY(1px)",
  },

  ":disabled": {
    backgroundColor: "#cccccc",
    cursor: "not-allowed",
    transform: "none",
  },
});

export const errorMessage = style({
  padding: "0.75rem",
  marginBottom: "1rem",
  backgroundColor: "#fff0f0",
  color: "#e00",
  borderRadius: "4px",
  borderLeft: "4px solid #e00",
  fontSize: "0.9rem",
});
