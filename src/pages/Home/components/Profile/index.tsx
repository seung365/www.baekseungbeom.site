import useIntersectionObserver from "../../../../hooks/useIntersectionObserver"
import { S } from "./styles"

const Profile = () => {
  const { sectionRef, isVisible } = useIntersectionObserver()

  return (
    <S.ProfileSection ref={sectionRef} $isVisible={isVisible}>
      <S.ProfileInfo>
        <S.GradientTitle>Frontend Developer 백승범입니다.</S.GradientTitle>
        <S.IntroText>
          끊임없이 개발하고, 자신을 개발하는 열정맨입니다🔥 제가 개발한 서비스를 통해 많은 사람들의 삶이 한층 나아졌으면
          합니다.
        </S.IntroText>
        <div>
          <S.SkillTag>React</S.SkillTag>
          <S.SkillTag>TypeScript</S.SkillTag>
          <S.SkillTag>webOS</S.SkillTag>
        </div>
      </S.ProfileInfo>
    </S.ProfileSection>
  )
}

export default Profile
