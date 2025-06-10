import { themeVars } from "@/styles/theme.css";
import { style } from "@vanilla-extract/css";

export const wrapper = style({
  minHeight: "100vh",
  background: "var(--color-background)",
  color: "var(--color-text)",
  padding: "20px 40px 80px",
});

export const dashboardContainer = style({
  maxWidth: "1200px",
  margin: "0 auto",
  padding: "20px",
});

export const header = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "30px",

  selectors: {
    "& h1": {
      margin: 0,
      fontSize: "28px",
    },
  },
});

export const logoutButton = style({
  backgroundColor: "#f44336",
  color: "white",
  border: "none",
  borderRadius: "8px",
  padding: "10px 20px",
  fontSize: "14px",
  fontWeight: 600,
  cursor: "pointer",
  transition: "all 0.2s ease",

  ":hover": {
    backgroundColor: "#d32f2f",
    transform: "translateY(-1px)",
  },
});

export const contentGrid = style({
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "30px",
  marginBottom: "40px",

  "@media": {
    [`(max-width: ${themeVars.breakpoint.tablet})`]: {
      gridTemplateColumns: "1fr",
    },
  },
});

export const sectionTitle = style({
  fontSize: "20px",
  marginTop: 0,
  marginBottom: "20px",
  paddingBottom: "10px",
  borderBottom: "1px solid var(--color-border)",
});

export const titleWithIcon = style({
  display: "flex",
  alignItems: "center",
  gap: "8px",
});

export const commentIcon = style({
  fontSize: "18px",
});

export const imagesSection = style({
  background: "var(--color-card-background)",
  borderRadius: "12px",
  padding: "24px",
  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
});

export const commentsSection = style({
  background: "var(--color-card-background)",
  borderRadius: "12px",
  padding: "24px",
  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
});

export const loadingMessage = style({
  textAlign: "center",
  color: "var(--color-text-secondary)",
  fontSize: "16px",
  margin: "40px 0",
});

export const emptyMessage = style({
  textAlign: "center",
  color: "var(--color-text-secondary)",
  fontSize: "16px",
  margin: "40px 0",
  fontStyle: "italic",
});

export const commentsList = style({
  display: "flex",
  flexDirection: "column",
  gap: "16px",
  maxHeight: "500px",
  overflowY: "auto",
  paddingRight: "8px",

  selectors: {
    "&::-webkit-scrollbar": {
      width: "6px",
    },
    "&::-webkit-scrollbar-track": {
      background: "var(--color-background)",
      borderRadius: "3px",
    },
    "&::-webkit-scrollbar-thumb": {
      background: "var(--color-border)",
      borderRadius: "3px",
    },
    "&::-webkit-scrollbar-thumb:hover": {
      background: "var(--color-text-secondary)",
    },
  },
});

export const commentItem = style({
  background: "var(--color-background)",
  border: "1px solid var(--color-border)",
  borderRadius: "8px",
  padding: "16px",
  transition: "all 0.2s ease",

  ":hover": {
    borderColor: "var(--color-text-secondary)",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
  },
});

export const commentHeader = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-start",
  marginBottom: "12px",
  gap: "16px",

  "@media": {
    [`(max-width: ${themeVars.breakpoint.mobile})`]: {
      flexDirection: "column",
      alignItems: "stretch",
      gap: "12px",
    },
  },
});

export const authorInfo = style({
  display: "flex",
  flexDirection: "column",
  gap: "4px",
  flex: 1,
});

export const authorName = style({
  fontWeight: 600,
  color: "var(--color-text)",
  fontSize: "15px",
});

export const commentDate = style({
  fontSize: "12px",
  color: "var(--color-text-secondary)",
});

export const deleteButton = style({
  background: "linear-gradient(135deg, #f44336, #d32f2f)",
  color: "white",
  border: "none",
  borderRadius: "6px",
  padding: "8px 12px",
  fontSize: "12px",
  fontWeight: 600,
  cursor: "pointer",
  transition: "all 0.2s ease",
  display: "flex",
  alignItems: "center",
  gap: "4px",
  flexShrink: 0,

  ":hover": {
    background: "linear-gradient(135deg, #d32f2f, #b71c1c)",
    transform: "translateY(-1px)",
    boxShadow: "0 2px 8px rgba(244, 67, 54, 0.3)",
  },

  ":active": {
    transform: "translateY(0)",
  },
});

export const deleteIcon = style({
  fontSize: "12px",
});

export const commentMessage = style({
  margin: 0,
  lineHeight: 1.6,
  color: "var(--color-text)",
  fontSize: "14px",
  whiteSpace: "pre-wrap",
  background: "rgba(255, 255, 255, 0.5)",
  padding: "12px",
  borderRadius: "6px",
  border: "1px solid rgba(0, 0, 0, 0.05)",
});
