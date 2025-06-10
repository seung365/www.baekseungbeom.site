"use client";

import useIntersectionObserver from "@/hooks/useIntersectionObserver";
import ProjectGrid from "./ProjectGrid";
import * as styles from "./styles.css";

const Projects = () => {
  const { sectionRef, isVisible: isTitleVisible } = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section className={styles.section}>
      <h2
        ref={sectionRef}
        className={styles.title}
        style={{
          opacity: isTitleVisible ? 1 : 0,
          transform: `translateY(${isTitleVisible ? "0" : "20px"})`,
          transition: "opacity 0.5s ease-out, transform 0.5s ease-out",
        }}
      >
        Projects
      </h2>
      <ProjectGrid />
    </section>
  );
};

export default Projects;
