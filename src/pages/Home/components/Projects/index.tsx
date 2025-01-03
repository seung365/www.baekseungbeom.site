import useIntersectionObserver from "../../../../hooks/useIntersectionObserver"
import { S } from "./styles"

const Projects = () => {
  const { sectionRef, isVisible } = useIntersectionObserver()

  return (
    <S.Section ref={sectionRef} $isVisible={isVisible}>
      <S.GradientTitle>Projects</S.GradientTitle>
      <S.ProjectCard>
        <h3>LG webOS 내 스탠바이 앱</h3>
        <p>작업 기간: 2024.09 ~ 2024.12</p>
        <p>인력 구성: 4명 (프론트엔드 2, 백엔드 2)</p>
        <div>
          <h4>주요 업무:</h4>
          <ul>
            <li>기획서 기반 개발 문서 제작 및 기능 설계, 디자인 참여</li>
            <li>스탠바이 앱 제작 및 오픈소스 등록</li>
            <li>테크 리더 및 프론트엔드 리더로 git organization 관리</li>
          </ul>
        </div>
      </S.ProjectCard>

      <S.ProjectCard>
        <h3>1.618 (미술 중개 웹사이트)</h3>
        <p>작업 기간: 2024.08 ~ 2024.11</p>
        <p>인력 구성: 7명 (프론트엔드 2, 백엔드 5)</p>
        <div>
          <h4>주요 업무:</h4>
          <ul>
            <li>아이디어부터 기획 및 디자인 과정 모두 참여</li>
            <li>프론트엔드 테크 리더로 멘토님과 일정 조율</li>
            <li>프론트엔드 개발 (기여도 50%)</li>
          </ul>
        </div>
      </S.ProjectCard>
    </S.Section>
  )
}

export default Projects
