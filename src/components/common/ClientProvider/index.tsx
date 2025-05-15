"use client";

import "@/styles/global.css";
import Header from "../Header";
import Footer from "../Footer";
import { Analytics } from "@vercel/analytics/next";
import useShowScrollbar from "@/hooks/useShowScrollbar";
import styled from "@emotion/styled";

type ClientProviderProps = {
  children: React.ReactNode;
};

const ClientProvider = ({ children }: ClientProviderProps) => {
  useShowScrollbar();
  return (
    <Wrapper>
      <Header />
      {children}
      <Analytics />
      <Footer />
    </Wrapper>
  );
};

export default ClientProvider;

const Wrapper = styled.div`
  position: relative;
  height: 100%;
`;
