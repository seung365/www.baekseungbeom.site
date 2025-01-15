import projectsData from "../../../../constant/projectData";
import useIntersectionObserver from "../../../../hooks/useIntersectionObserver";
import ProjectItem from "./ProjectItem";
import { S } from "./styles";

const Projects = () => {
  const { sectionRef, isVisible: isTitleVisible } = useIntersectionObserver({ threshold: 0.1 });

  return (
    <S.Section>
      <S.Title
        ref={sectionRef}
        style={{
          opacity: isTitleVisible ? 1 : 0,
          transform: `translateY(${isTitleVisible ? "0" : "20px"})`,
          transition: "opacity 0.5s ease-out, transform 0.5s ease-out",
        }}
      >
        Projects
      </S.Title>
      <S.Timeline>
        {projectsData.map((project, index) => (
          <ProjectItem key={project.title} project={project} index={index} />
        ))}
      </S.Timeline>
    </S.Section>
  );
};

export default Projects;
