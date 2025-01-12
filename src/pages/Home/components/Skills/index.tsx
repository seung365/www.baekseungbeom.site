import { SKILL_CATEGORIES } from "../../../../constant/skills"
import useIntersectionObserver from "../../../../hooks/useIntersectionObserver"
import { S } from "./styles"

const Skills = () => {
  const { sectionRef, isVisible } = useIntersectionObserver()

  const getLevelColor = (level: string) => {
    switch (level) {
      case "상":
        return "#4ecdc4"
      case "중":
        return "#ffd93d"
      case "하":
        return "#ff6b6b"
      default:
        return "#6c757d"
    }
  }

  return (
    <S.Section ref={sectionRef} $isVisible={isVisible}>
      <S.GradientTitle>Skills</S.GradientTitle>
      <S.SkillsContainer>
        {Object.entries(SKILL_CATEGORIES).map(([key, category], categoryIndex) => (
          <S.CategorySection key={key} $isVisible={isVisible} $delay={categoryIndex * 0.1}>
            <S.CategoryTitle>{category.title}</S.CategoryTitle>
            <S.SkillsGrid>
              {category.skills.map((skill, index) => (
                <S.SkillItem key={index} $isVisible={isVisible} $delay={categoryIndex * 0.1 + index * 0.05}>
                  <S.IconWrapper>
                    <S.CardFront $color={skill.color}>
                      {skill.icon ? <skill.icon size={40} /> : <span style={{ fontSize: "40px" }}>{skill.emoji}</span>}
                    </S.CardFront>
                    <S.CardBack className="back" $levelColor={getLevelColor(skill.level)}>
                      <S.SkillName>{skill.name}</S.SkillName>
                      <S.SkillLevel $levelColor={getLevelColor(skill.level)}>{skill.level}</S.SkillLevel>
                    </S.CardBack>
                  </S.IconWrapper>
                </S.SkillItem>
              ))}
            </S.SkillsGrid>
          </S.CategorySection>
        ))}
      </S.SkillsContainer>
    </S.Section>
  )
}

export default Skills
