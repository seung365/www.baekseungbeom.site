"use client";

import { ThemeProvider } from "@emotion/react";
import { useState } from "react";
import { darkTheme, lightTheme } from "../styles/theme";
import { Global } from "@emotion/react";
import { GlobalStyles } from "../styles/global";
import { Analytics } from "@vercel/analytics/react";
import Home from "../components/Home/index";

export default function Page() {
  const [isDark, setIsDark] = useState(true);
  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <Global styles={GlobalStyles} />
      <Home isDark={isDark} setIsDark={setIsDark} />
      <Analytics />
    </ThemeProvider>
  );
}
