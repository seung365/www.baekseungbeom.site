import { useRef } from "react"
import useIntersectionObserver from "../../../../hooks/useIntersectionObserver"
import { useScroll } from "../../../../hooks/useScroll"
import { S } from "./styles"

const Intro = () => {
  const { sectionRef, isVisible } = useIntersectionObserver()
  const contentRef = useRef<HTMLDivElement>(null)
  const contactRef = useRef<HTMLDivElement>(null)

  const { handleScrollDown } = useScroll(sectionRef, contentRef, contactRef)

  return (
    <S.Section ref={sectionRef}>
      <S.ContentWrapper ref={contentRef}>
        <S.NameContainer>
          <S.FirstName>Baek</S.FirstName>
          <S.LastName>SeungBeom</S.LastName>
        </S.NameContainer>
      </S.ContentWrapper>
      <S.ContactWrapper ref={contactRef}>
        <S.ContactItem delay={0.6}>
          <S.Link href="https://velog.io/@seung365" target="_blank" rel="noopener noreferrer">
            Velog
          </S.Link>
        </S.ContactItem>
        <S.ContactItem delay={0.8}>
          <S.Link href="https://github.com/seung365" target="_blank" rel="noopener noreferrer">
            Github
          </S.Link>
        </S.ContactItem>
        <S.ContactItem delay={1.0}>+82 10-5583-6009</S.ContactItem>
        <S.ContactItem delay={1.2}>bdh3659@naver.com</S.ContactItem>
      </S.ContactWrapper>
      <S.ScrollDownButton onClick={handleScrollDown} $isVisible={isVisible}>
        <S.ScrollArrow>↓</S.ScrollArrow>
      </S.ScrollDownButton>
    </S.Section>
  )
}

export default Intro
