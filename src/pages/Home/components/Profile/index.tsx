import useIntersectionObserver from "../../../../hooks/useIntersectionObserver"
import { S } from "./styles"

const Profile = () => {
  const { sectionRef, isVisible } = useIntersectionObserver()

  return (
    <S.ProfileSection ref={sectionRef} $isVisible={isVisible}>
      <S.ProfileInfo>
        <S.GradientTitle>Frontend Developer 백승범입니다.</S.GradientTitle>
        <S.IntroText>끊임없이 개발하고, 자신을 개발하는 열정맨입니다🔥</S.IntroText>
        <S.IntroText>제가 개발한 서비스를 통해 많은 사람들의 삶이 한층 나아졌으면 합니다.</S.IntroText>
        <div>
          <S.InfoTag>분위기 메이커</S.InfoTag>
          <S.InfoTag>ESTJ</S.InfoTag>
          <S.InfoTag>친화적</S.InfoTag>
          <S.InfoTag>열정적</S.InfoTag>
          <S.InfoTag>긍정파</S.InfoTag>
          <S.InfoTag>능동적</S.InfoTag>
        </div>
      </S.ProfileInfo>
    </S.ProfileSection>
  )
}

export default Profile
