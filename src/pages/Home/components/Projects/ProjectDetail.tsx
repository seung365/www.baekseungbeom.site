import { S } from "./styles";

interface ProjectDeatilProps {
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

const ProjectDetail = ({ project }: ProjectDeatilProps) => {
  return (
    <S.ProjectContent>
      <S.ProjectHeader>
        <div>
          <S.ProjectTitleDetail>{project.title}</S.ProjectTitleDetail>
          <S.ProjectDate>{project.period}</S.ProjectDate>
        </div>
        {project.githubUrl && (
          <S.ProjectLinks>
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </S.ProjectLinks>
        )}
      </S.ProjectHeader>

      <S.InfoGrid>
        <S.InfoItem>
          <S.Label>인력 구성</S.Label>
          <p>{project.team}</p>
        </S.InfoItem>
        <S.InfoItem>
          <S.Label>프로젝트 목적</S.Label>
          <p>{project.purpose}</p>
        </S.InfoItem>
      </S.InfoGrid>

      <S.ContentSection>
        <S.SectionTitle>주요 업무</S.SectionTitle>
        <S.List>
          {project.mainTasks.map((task, taskIndex) => (
            <li key={taskIndex}>{task}</li>
          ))}
        </S.List>
      </S.ContentSection>

      <S.ContentSection>
        <S.SectionTitle>사용 기술</S.SectionTitle>
        <S.TechStack>{project.tech}</S.TechStack>
      </S.ContentSection>
    </S.ProjectContent>
  );
};

export default ProjectDetail;
