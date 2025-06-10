import * as styles from "./styles.css";

interface ProjectDetailProps {
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
}

const ProjectDetail = ({ project }: ProjectDetailProps) => {
  return (
    <div className={styles.projectContent}>
      <div className={styles.projectHeader}>
        <div>
          <h1 className={styles.projectTitleDetail}>{project.title}</h1>
          <p className={styles.projectDate}>{project.period}</p>
        </div>
        {project.githubUrl && (
          <div className={styles.projectLinks}>
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </div>
        )}
      </div>

      <div className={styles.infoGrid}>
        <div className={styles.infoItem}>
          <span className={styles.label}>인력 구성</span>
          <p>{project.team}</p>
        </div>
        <div className={styles.infoItem}>
          <span className={styles.label}>프로젝트 목적</span>
          <p>{project.purpose}</p>
        </div>
      </div>

      <div className={styles.contentSection}>
        <h2 className={styles.sectionTitle}>주요 업무</h2>
        <ul className={styles.list}>
          {project.mainTasks.map((task, taskIndex) => (
            <li key={taskIndex}>{task}</li>
          ))}
        </ul>
      </div>

      <div className={styles.techSection}>
        <span className={styles.label}>기술 스택</span>
        <p>{project.tech}</p>
      </div>
    </div>
  );
};

export default ProjectDetail;
