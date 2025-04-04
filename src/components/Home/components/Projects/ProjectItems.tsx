// ProjectItems.tsx
import { useState } from "react";
import useIntersectionObserver from "../../../../hooks/useIntersectionObserver";
import Modal from "./Modal";
import { S } from "./styles";

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
      <S.ProjectItem ref={sectionRef} onClick={handleClick} isVisible={isVisible} $index={index}>
        <S.ProjectTitle>
          {mainTitle}
          {subTitle && <div>{subTitle}</div>}
        </S.ProjectTitle>
        <S.ProjectDescription>{description}</S.ProjectDescription>
      </S.ProjectItem>

      {isModalOpen && (
        <Modal isModalOpen={isModalOpen} handleClose={handleClose} isClosing={isClosing} project={project} />
      )}
    </>
  );
};

export default ProjectItems;
