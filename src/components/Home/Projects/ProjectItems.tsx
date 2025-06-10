"use client";

import useIntersectionObserver from "@/hooks/useIntersectionObserver";
import { useState } from "react";
import Modal from "./Modal";
import * as styles from "./styles.css";

interface ProjectItemsProps {
  title: string;
  purpose: string;
  techStack: string;
  project: {
    title: string;
    period: string;
    githubUrl: string;
    team: string;
    purpose: string;
    mainTasks: string[];
    tech: string;
  };
  index: number;
  description: string;
}

const ProjectItems = ({ title, description, project, index }: ProjectItemsProps) => {
  const { sectionRef, isVisible } = useIntersectionObserver();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  // 제목을 괄호 기준으로 분리
  const [mainTitle, subTitle] = title.split(/(\(.*?\))/);

  const handleClick = () => {
    setIsModalOpen(true);
  };

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsModalOpen(false);
      setIsClosing(false);
    }, 300);
  };

  return (
    <>
      <div
        ref={sectionRef}
        onClick={handleClick}
        className={styles.projectItem({
          isVisible,
          index: Math.min(index, 9) as 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9,
        })}
      >
        <h3 className={styles.projectTitle}>
          {mainTitle}
          {subTitle && <div>{subTitle}</div>}
        </h3>
        <p className={styles.projectDescription}>{description}</p>
      </div>

      {isModalOpen && (
        <Modal isModalOpen={isModalOpen} handleClose={handleClose} isClosing={isClosing} project={project} />
      )}
    </>
  );
};

export default ProjectItems;
