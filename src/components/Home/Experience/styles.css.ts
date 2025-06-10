import { themeVars } from "@/styles/theme.css";
import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

export const section = recipe({
  base: {
    transition: "opacity 0.8s ease-out, transform 0.8s ease-out",
    marginBottom: "4rem",
    minHeight: "300vh",
    overflow: "visible",
    position: "relative",

    "@media": {
      [`screen and (max-width: ${themeVars.breakpoint.mobile})`]: {
        minHeight: "auto",
      },
    },
  },

  variants: {
    isVisible: {
      true: {
        opacity: 1,
        transform: "translateY(0)",
      },
      false: {
        opacity: 0,
        transform: "translateY(20px)",
      },
    },
  },

  defaultVariants: {
    isVisible: false,
  },
});

export const experienceGrid = style({
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: "1.5rem",
  marginTop: "2rem",
  position: "relative",

  "@media": {
    [`screen and (max-width: ${themeVars.breakpoint.mobile})`]: {
      gridTemplateColumns: "1fr",
    },
  },
});

export const experienceCard = style({
  position: "sticky",
  top: "1px",
  height: "fit-content",
  borderRadius: "0 0 15px 15px",
  padding: "1.5rem",
  transition: "all 0.3s ease",
  boxShadow: "0 1px 3px rgba(0, 0, 0, 0.08)",

  ":hover": {
    transform: "translateY(-5px)",
    background: "rgba(255, 255, 255, 0.1)",
    boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
  },

  "@media": {
    [`screen and (max-width: ${themeVars.breakpoint.mobile})`]: {
      position: "relative",
      borderRadius: "15px",
    },
  },
});

export const cardContainer = recipe({
  base: {
    position: "relative",

    "::after": {
      display: "block",
      height: "25vh",
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      content: '""',
    },

    "@media": {
      [`screen and (max-width: ${themeVars.breakpoint.mobile})`]: {
        height: "auto !important",
        marginTop: "2rem !important",

        selectors: {
          "&:first-of-type": {
            marginTop: "0 !important",
          },
        },
      },
    },
  },

  variants: {
    index: {
      0: {
        height: "370vh",
        marginTop: "0vh",
      },
      1: {
        height: "270vh",
        marginTop: "100vh",
      },
      2: {
        height: "170vh",
        marginTop: "200vh",
      },
    },
  },
});

export const cardTitle = style({
  fontSize: "2rem",
  fontWeight: "bold",
  marginBottom: "3rem",
  textTransform: "uppercase",
  color: "var(--color-text)",
  position: "relative",
  textShadow: "2px 2px 0px rgba(0, 0, 0, 0.1)",

  "::after": {
    position: "absolute",
    bottom: "-0.5rem",
    left: 0,
    width: "2rem",
    height: "3px",
    background: "linear-gradient(45deg, #ff6b6b, #4ecdc4)",
    content: '""',
  },
});

export const itemContainer = style({
  marginBottom: "1.5rem",
  paddingBottom: "1.5rem",
  borderBottom: "1px solid rgba(255, 255, 255, 0.1)",

  selectors: {
    "&:last-child": {
      borderBottom: "none",
      marginBottom: 0,
      paddingBottom: 0,
    },
  },
});

export const itemHeader = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "0.5rem",
});

export const itemName = style({
  fontSize: "1.1rem",
  fontWeight: 600,
  color: "var(--color-text)",
  margin: 0,
});

export const itemPeriod = style({
  fontSize: "0.9rem",
  color: "#888",
});

export const itemRole = style({
  fontSize: "1rem",
  color: "var(--color-text)",
  opacity: 0.8,
  marginBottom: "0.5rem",
  margin: "0 0 0.5rem 0",
});

export const detailsList = style({
  listStyleType: "disc",
  marginLeft: "1.2rem",
  marginTop: "0.5rem",

  selectors: {
    "& li": {
      fontSize: "0.9rem",
      color: "var(--color-text)",
      opacity: 0.7,
      marginBottom: "0.3rem",
    },
  },
});

export const itemStatus = style({
  display: "inline-block",
  padding: "0.2rem 0.5rem",
  background: "linear-gradient(45deg, #ff6b6b, #4ecdc4)",
  borderRadius: "4px",
  fontSize: "0.8rem",
  color: "white",
  marginTop: "0.5rem",
});
