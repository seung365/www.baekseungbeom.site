// ProjectItems.tsx
import { useState } from "react";
import useIntersectionObserver from "../../../../hooks/useIntersectionObserver";
import ProjectDetail from "./ProjectDetail";
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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const { sectionRef, isVisible } = useIntersectionObserver();

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
    }, 300); // 애니메이션 시간과 동일하게 설정
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
        <S.ModalOverlay onClick={handleClose} className={isClosing ? "closing" : ""}>
          <S.ModalContent onClick={(e) => e.stopPropagation()} className={isClosing ? "closing" : ""}>
            <S.CloseButton onClick={handleClose}>&times;</S.CloseButton>
            <ProjectDetail project={project} index={0} />
          </S.ModalContent>
        </S.ModalOverlay>
      )}
    </>
  );
};

export default ProjectItems;
