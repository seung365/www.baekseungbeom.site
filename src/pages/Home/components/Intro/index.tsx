import useIntersectionObserver from "../../../../hooks/useIntersectionObserver"
import { S } from "./styles"

const Intro = () => {
  const { sectionRef, isVisible } = useIntersectionObserver()

  return (
    <S.Section ref={sectionRef} $isVisible={isVisible}>
      <S.NameContainer>
        <S.FirstName $isVisible={isVisible}>Baek</S.FirstName>
        <S.LastName $isVisible={isVisible}>SeungBeom</S.LastName>
      </S.NameContainer>
      <S.Role $isVisible={isVisible}>FrontEnd Developer</S.Role>
    </S.Section>
  )
}

export default Intro
