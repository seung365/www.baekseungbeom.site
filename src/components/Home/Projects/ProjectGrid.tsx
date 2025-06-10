import projects from "@/constant/projectData";
import ProjectItems from "./ProjectItems";
import * as styles from "./styles.css";

const ProjectGrid = () => {
  return (
    <div className={styles.gridContainer}>
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
    </div>
  );
};

export default ProjectGrid;
