import projects from "../../../../constant/projectData";
import ProjectItems from "./ProjectItems";
import { S } from "./styles";

const ProjectGrid = () => {
  return (
    <S.GridContainer>
      {projects.map((project, index) => (
        <ProjectItems
          key={index}
          title={project.title}
          purpose={project.purpose}
          techStack={project.tech}
          project={project}
          index={index}
          description={project.description}
        />
      ))}
    </S.GridContainer>
  );
};

export default ProjectGrid;
