import styled from "@emotion/styled";
import { useEffect } from "react";
import ScrollToTop from "../../components/common/ScrollToTop";
import ThemeToggle from "../../components/common/ThemeToggle";
import useThemeStore from "../../store/ThemeStore";
import Experience from "./components/Experience";
import Intro from "./components/Intro";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

const Home = () => {
  const themeStore = useThemeStore();

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
      <ThemeToggle {...themeStore} />
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
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  min-height: 100vh;
  padding: 2rem;
  position: relative;
  overflow: visible;
`;
export default Home;
