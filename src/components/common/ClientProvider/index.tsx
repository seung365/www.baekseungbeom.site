"use client";

import "@/styles/global.css";
import Header from "../Header";
import Footer from "../Footer";
import { Analytics } from "@vercel/analytics/next";
import useShowScrollbar from "@/hooks/useShowScrollbar";

type ClientProviderProps = {
  children: React.ReactNode;
};

const ClientProvider = ({ children }: ClientProviderProps) => {
  useShowScrollbar();
  return (
    <>
      <Header />
      {children}
      <Analytics />
      <Footer />
    </>
  );
};

export default ClientProvider;
