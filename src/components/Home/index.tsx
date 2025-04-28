"use client";

import styled from "@emotion/styled";
import { useEffect } from "react";
import ScrollToTop from "../common/ScrollToTop";
import Experience from "./components/Experience";
import Intro from "./components/Intro";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

const Home = () => {
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, 100);
  }, []);

  return (
    <>
      <ScrollToTop />
      <Intro />
      <MainLayout>
        <Profile />
        <Skills />
        <Experience />
        <Projects />
      </MainLayout>
    </>
  );
};

const MainLayout = styled.div`
  background: var(--color-background);
  color: var(--color-text);
  min-height: 100vh;
  padding: 2rem;
  position: relative;
  overflow: visible;
`;
export default Home;
