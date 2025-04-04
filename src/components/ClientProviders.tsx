"use client";

import { Global } from "@emotion/react";
import { Analytics } from "@vercel/analytics/react";
import { GlobalStyles } from "../styles/global";

export function ClientProviders({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Global styles={GlobalStyles} />
      {children}
      <Analytics />
    </>
  );
}
