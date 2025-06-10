"use client";

import ScrollToTop from "@/components/common/ScrollToTop";
import Experience from "@/components/Home/Experience";
import Intro from "@/components/Home/Intro";
import Profile from "@/components/Home/Profile";
import Projects from "@/components/Home/Projects";
import Skills from "@/components/Home/Skills";
import MainLayout from "@/components/Layouts/MainLayout";
import { useEffect } from "react";

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

export default Home;
