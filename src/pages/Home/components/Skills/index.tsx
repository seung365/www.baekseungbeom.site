import useIntersectionObserver from "../../../../hooks/useIntersectionObserver"
import { S } from "./styles"

const Skills = () => {
  const { sectionRef, isVisible } = useIntersectionObserver()

  return (
    <S.Section ref={sectionRef} $isVisible={isVisible}>
      <S.GradientTitle>Skills</S.GradientTitle>
      <S.SkillsGrid>
        <S.SkillCard>
          <h3>Frontend</h3>
          <p>JavaScript(ES6), TypeScript</p>
          <p>React, Redux, Emotion</p>
          <p>HTML5, CSS3</p>
        </S.SkillCard>
        <S.SkillCard>
          <h3>Backend & Tools</h3>
          <p>MySQL</p>
          <p>Git, GitHub Actions</p>
          <p>AWS, Linux, webOS</p>
        </S.SkillCard>
      </S.SkillsGrid>
    </S.Section>
  )
}

export default Skills
