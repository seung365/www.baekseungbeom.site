import useIntersectionObserver from "../../../../hooks/useIntersectionObserver"
import { S } from "./styles"

const Experience = () => {
  const { sectionRef, isVisible } = useIntersectionObserver()

  return (
    <S.Section ref={sectionRef} $isVisible={isVisible}>
      <S.GradientTitle>Experience & Education</S.GradientTitle>
      <S.ExperienceGrid>
        <S.ExperienceCard>
          <h3>학력</h3>
          <p>경북대학교 컴퓨터학부 심화컴퓨터전공 재학 (4.08/4.5)</p>
          <p>성적 우수 장학금 5회</p>
          <p>2025.08 조기졸업 가능</p>
        </S.ExperienceCard>
        <S.ExperienceCard>
          <h3>대외활동</h3>
          <p>경북대학교 코딩 개발 동아리 해달 (2024.03 ~)</p>
          <p>카카오 테크 캠퍼스 FE 2기 (2024.04 ~ 2024.11)</p>
          <p>Google Developer Group KNU 4기 FE Member</p>
        </S.ExperienceCard>
      </S.ExperienceGrid>
    </S.Section>
  )
}

export default Experience
