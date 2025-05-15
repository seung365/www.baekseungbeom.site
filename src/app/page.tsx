"use client";

import styled from "@emotion/styled";
import { useEffect } from "react";
import ScrollToTop from "@/components/common/ScrollToTop";
import Experience from "@/components/Home/Experience";
import Intro from "@/components/Home/Intro";
import Profile from "@/components/Home/Profile";
import Projects from "@/components/Home/Projects";
import Skills from "@/components/Home/Skills";

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
  padding-bottom: 80px;
  position: relative;
  overflow: visible;
`;
export default Home;
