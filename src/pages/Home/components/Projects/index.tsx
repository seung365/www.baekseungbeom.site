import useIntersectionObserver from "../../../../hooks/useIntersectionObserver"
import { S } from "./styles"

const Projects = () => {
  const { sectionRef, isVisible } = useIntersectionObserver()

  return (
    <S.Section ref={sectionRef} $isVisible={isVisible}>
      <S.GradientTitle>Projects</S.GradientTitle>
      <S.ProjectCard>
        <S.ProjectHeader>
          <h3>LG webOS 내 스탠바이 앱</h3>
          <S.ProjectLinks>
            <a href="https://github.com/KNU-LG" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </S.ProjectLinks>
        </S.ProjectHeader>

        <S.ProjectInfo>
          <S.InfoItem>
            <S.Label>작업 기간</S.Label>
            <p>2024.09 ~ 2024.12</p>
          </S.InfoItem>
          <S.InfoItem>
            <S.Label>인력 구성</S.Label>
            <p>4명 (프론트엔드 2, 백엔드 2)</p>
          </S.InfoItem>
          <S.InfoItem>
            <S.Label>프로젝트 목적</S.Label>
            <p>산학 프로젝트로 LG webOS 내 스탠바이 앱을 제작해 오픈소스화를 목적으로한 프로젝트</p>
          </S.InfoItem>
        </S.ProjectInfo>

        <S.ContentSection>
          <S.SectionTitle>주요 업무</S.SectionTitle>
          <ul>
            <li>기획서 기반 개발 문서 제작 및 기능 설계, 디자인 참여</li>
            <li>스탠바이 앱 제작 및 오픈소스 등록(예정)</li>
            <li>테크 리더 및 프론트엔드 리더로 git organization 관리</li>
            <li>프론트엔드 구현 (기여도 80%이상)</li>
          </ul>
        </S.ContentSection>

        <S.ContentSection>
          <S.SectionTitle>사용 기술</S.SectionTitle>
          <S.TechList>
            <li>
              React · TypeScript · Emotion · TanStack Query · React Hook Form · React-Use-Gesture · ESLint · Prettier ·
              webOS
            </li>
          </S.TechList>
        </S.ContentSection>

        <S.ContentSection>
          <S.SectionTitle>주요 구현 기능</S.SectionTitle>
          <ul>
            <li>회원가입 및 로그인 폼</li>
            <li>위젯 설정 페이지</li>
            <li>설정 페이지</li>
            <li>위젯 다크모드</li>
            <li>시계위젯, 음악위젯, 날씨위젯</li>
          </ul>
        </S.ContentSection>

        <S.ContentSection>
          <S.SectionTitle>Trouble Shooting</S.SectionTitle>
          <S.TroubleItem>
            <h5>🚨 webOS 내 빌드 파일 배포시 생기는 문제</h5>
            <p>
              webOS의 경우 앱이 설치된 경로 내에서 리소스를 참조해야 하기에 빌드 후 리소스 경로를 상대경로로 수정하여야
              했습니다. package.json에 homepage: "."를 추가해 앱이 리소스를 로드할 때 상대경로로 접근하게 해주었습니다.
            </p>
          </S.TroubleItem>
          <S.TroubleItem>
            <h5>🚨 위젯 위치 관리 문제</h5>
            <p>
              위젯 위치를 저장하기 위해 최종 수정 위치에서 저장버튼으로 local storage에 담고 렌더링시 해당 위치로 렌더링
              해주는 방식을 사용하였습니다.
            </p>
          </S.TroubleItem>
        </S.ContentSection>
      </S.ProjectCard>
      <S.ProjectCard>
        <S.ProjectHeader>
          <h3>1.618 (미술 중개 웹사이트)</h3>
          <S.ProjectLinks>
            <a href="https://github.com/kakao-tech-campus-2nd-step3/Team9_FE" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </S.ProjectLinks>
        </S.ProjectHeader>

        <S.ProjectInfo>
          <S.InfoItem>
            <S.Label>작업 기간</S.Label>
            <p>2024.08 ~ 2024.11</p>
          </S.InfoItem>
          <S.InfoItem>
            <S.Label>인력 구성</S.Label>
            <p>7명 (프론트엔드 2, 백엔드 5)</p>
          </S.InfoItem>
          <S.InfoItem>
            <S.Label>프로젝트 목적</S.Label>
            <p>신진 작가, 미대생 발굴 및 전시 작품 중개 웹사이트</p>
          </S.InfoItem>
        </S.ProjectInfo>

        <S.ContentSection>
          <S.SectionTitle>주요 업무</S.SectionTitle>
          <ul>
            <li>아이디어부터 기획 및 디자인 과정 모두 참여</li>
            <li>프론트엔드 테크 리더로 멘토님과 일정 조율</li>
            <li>프론트엔드 개발 (기여도 50%)</li>
          </ul>
        </S.ContentSection>

        <S.ContentSection>
          <S.SectionTitle>사용 기술</S.SectionTitle>
          <S.TechList>
            <li>
              React · TypeScript · Emotion · TanStack Query · React Hook Form · Chakra UI · Zustand · Pnpm · Vite ·
              ESLint · Prettier · Amazon S3 · GitHub Actions
            </li>
          </S.TechList>
        </S.ContentSection>

        <S.ContentSection>
          <S.SectionTitle>주요 구현 기능</S.SectionTitle>
          <ul>
            <li>검색 모달 및 결과페이지</li>
            <li>마이페이지</li>
            <li>작품 및 작가 상세페이지</li>
            <li>작품 및 작가 찜 및 팔로우</li>
          </ul>
        </S.ContentSection>

        <S.ContentSection>
          <S.SectionTitle>Trouble Shooting</S.SectionTitle>
          <S.TroubleItem>
            <h5>🚨 검색 구현시 이미지 렌더링 문제</h5>
            <p>
              검색 API를 호출 시 고화질 이미지를 받아 렌더링 하는 과정에서 사진 끊김 이슈가 생겨
              useSuspenseInfiniteQuery를 사용해 데이터 캐싱 기능을 사용하였고, suspense를 통해 로더 UI를 렌더링하여
              해결했습니다.
            </p>
          </S.TroubleItem>
        </S.ContentSection>
      </S.ProjectCard>
      <S.ProjectCard>
        <S.ProjectHeader>
          <h3>알파메일 (메일 앱 생성 웹사이트)</h3>
          <S.ProjectLinks>
            <a href="https://github.com/Beside-Potenday" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </S.ProjectLinks>
        </S.ProjectHeader>

        <S.ProjectInfo>
          <S.InfoItem>
            <S.Label>작업 기간</S.Label>
            <p>2024.07 ~ 2024.08 (추후 리팩토링 및 기능 추가 예정)</p>
          </S.InfoItem>
          <S.InfoItem>
            <S.Label>인력 구성</S.Label>
            <p>6명 (PM 1, 디자이너 1, 프론트엔드 2, 백엔드 2)</p>
          </S.InfoItem>
          <S.InfoItem>
            <S.Label>프로젝트 목적</S.Label>
            <p>
              대학생 및 직장인에게 편리한 툴을 제공하고자 하는 아이디어에서 시작해 CLOVA X를 도입해 자동으로 메일을
              생성하고 관리할 수 있는 웹사이트입니다.
            </p>
          </S.InfoItem>
        </S.ProjectInfo>

        <S.ContentSection>
          <S.SectionTitle>주요 업무</S.SectionTitle>
          <ul>
            <li>아이디어부터 기획 참여</li>
            <li>프론트엔드 리더로 개발 진행 (PM과 백엔드와의 협의를 대표로 진행, 기여도 80%)</li>
          </ul>
        </S.ContentSection>

        <S.ContentSection>
          <S.SectionTitle>사용 기술</S.SectionTitle>
          <S.TechList>
            <li>React · TypeScript · Emotion · TanStack Query · React Hook Form · ESLint · Prettier · MacOS</li>
          </S.TechList>
        </S.ContentSection>

        <S.ContentSection>
          <S.SectionTitle>주요 구현 기능</S.SectionTitle>
          <ul>
            <li>메일 생성 페이지</li>
            <li>메일 입력 폼 모달</li>
            <li>홈 페이지</li>
            <li>마이 페이지</li>
          </ul>
        </S.ContentSection>

        <S.ContentSection>
          <S.SectionTitle>Trouble Shooting</S.SectionTitle>
          <S.TroubleItem>
            <h5>🚨 마이페이지 메일 내용 렌더링 문제</h5>
            <p>
              API 호출 시 header에 들어가는 Job에 따라 response가 다르게 되는데 그렇기에 하나의 배열을 사용하여 데이터를
              받게 구현하였습니다. 배열의 내용이 달라지게 되는데 이때 map을 통해 배열을 UI에 렌더링 하기에 리렌더링시
              어떤 부분이 바뀐지 명확하게 key를 설정하지 못한 문제임을 파악했습니다. 그래서 Job의 요소를 추가해{" "}
              <code>${"`${isJob}-${email.createDate}-${index}`"}</code> 다음과 같이 키를 더 복잡하게 해주어 리렌더링시
              발생하는 문제를 해결할 수 있었습니다.
            </p>
          </S.TroubleItem>
        </S.ContentSection>
      </S.ProjectCard>
    </S.Section>
  )
}

export default Projects
