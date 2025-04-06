"use client";

import { ThemeProvider } from "@emotion/react";
import { darkTheme, lightTheme } from "../../../styles/theme";
import { GlobalStyles } from "../../../styles/global";
import Header from "../Header";
import Footer from "../Footer";
import { Analytics } from "@vercel/analytics/next";
import { Global } from "@emotion/react";
import useThemeStore from "../../../store/ThemeStore";

type ClientProviderProps = {
  children: React.ReactNode;
};

const ClientProvider = ({ children }: ClientProviderProps) => {
  const { isDark } = useThemeStore();

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <Global styles={GlobalStyles} />
      <Header />
      {children}
      <Analytics />
      <Footer />
    </ThemeProvider>
  );
};

export default ClientProvider;
