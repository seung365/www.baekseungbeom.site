import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    background: string;
    text: string;
    primary: string;
    secondary: string;
    surface: string;
    cardBackground: string;
    borderColor: string;
    textSecondary: string;
    buttonPrimary: string;
    buttonPrimaryHover: string;
    buttonSecondary: string;
    buttonSecondaryHover: string;
    success: string;
    error: string;
    successBackground: string;
    errorBackground: string;
    breakpoints: {
      mobile: string;
      tablet: string;
    };
    transitions?: {
      default: string;
    };
  }
}
