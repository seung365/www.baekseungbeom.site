import { style } from "@vanilla-extract/css";

export const footer = style({
  textAlign: "center",
  padding: "30px 0",
  background: "var(--color-surface)",
  width: "100%",
  height: "80px",
  position: "absolute",
  bottom: 0,

  selectors: {
    "& p": {
      color: "var(--color-text)",
      opacity: 0.5,
      fontSize: "12px",
      margin: 0,
    },
  },
});
