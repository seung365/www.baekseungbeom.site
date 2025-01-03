import useIntersectionObserver from "../../../../hooks/useIntersectionObserver"
import { S } from "./styles"

const Contact = () => {
  const { sectionRef, isVisible } = useIntersectionObserver()

  return (
    <S.Section ref={sectionRef} $isVisible={isVisible}>
      <S.GradientTitle>Contact</S.GradientTitle>
      <S.Card>
        <p>✉️ bdh3659@naver.com</p>
        <p>📱 +82 10-5583-6009</p>
        <p>
          <S.Link href="https://github.com" target="_blank" rel="noopener noreferrer">
            🦁 Github
          </S.Link>
        </p>
        <p>
          <S.Link href="https://velog.io" target="_blank" rel="noopener noreferrer">
            📗 Velog
          </S.Link>
        </p>
      </S.Card>
    </S.Section>
  )
}

export default Contact
