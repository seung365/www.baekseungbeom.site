import { DiGit, DiJava, DiJavascript1, DiLinux, DiMysql, DiPython, DiReact, DiWindows } from "react-icons/di"
import {
  SiAmazon,
  SiC,
  SiChakraui,
  SiCplusplus,
  SiCss3,
  SiFigma,
  SiGithub,
  SiGithubactions,
  SiHtml5,
  SiMacos,
  SiNotion,
  SiReactquery,
  SiSlack,
  SiTypescript,
  SiVercel,
} from "react-icons/si"
import useIntersectionObserver from "../../../../hooks/useIntersectionObserver"

import { S } from "./styles"

const SKILL_CATEGORIES = {
  programming: {
    title: "Programming Languages",
    skills: [
      { name: "JavaScript (ES6)", level: "상", icon: DiJavascript1, color: "#F7DF1E" },
      { name: "TypeScript", level: "상", icon: SiTypescript, color: "#3178C6" },
      { name: "HTML5", level: "상", icon: SiHtml5, color: "#E34F26" },
      { name: "CSS3", level: "상", icon: SiCss3, color: "#1572B6" },
      { name: "C", level: "중", icon: SiC, color: "#A8B9CC" },
      { name: "C++", level: "중", icon: SiCplusplus, color: "#00599C" },
      { name: "Python", level: "중", icon: DiPython, color: "#3776AB" },
      { name: "Java", level: "중", icon: DiJava, color: "#007396" },
    ],
  },
  frameworks: {
    title: "Framework / Library",
    skills: [
      { name: "React", level: "상", icon: DiReact, color: "#61DAFB" },
      { name: "Emotion", level: "중", emoji: "👩‍🎤", color: "#D36AC2" },
      { name: "Chakra UI", level: "중", icon: SiChakraui, color: "#319795" },
      { name: "TanStack Query", level: "중", icon: SiReactquery, color: "#FF4154" },
    ],
  },
  tooling: {
    title: "Tooling / DevOps",
    skills: [
      { name: "GitHub", level: "상", icon: SiGithub, color: "#ffffff" },
      { name: "Git", level: "상", icon: DiGit, color: "#F05032" },
      { name: "Figma", level: "중", icon: SiFigma, color: "#F24E1E" },
      { name: "Vercel", level: "중", icon: SiVercel, color: "#ffffff" },
      { name: "Git Action", level: "중", icon: SiGithubactions, color: "#2088FF" },
      { name: "MySQL", level: "하", icon: DiMysql, color: "#4479A1" },
    ],
  },
  environment: {
    title: "Environment",
    skills: [
      { name: "AWS", level: "중", icon: SiAmazon, color: "#FF9900" },
      { name: "Linux", level: "중", icon: DiLinux, color: "#FCC624" },
      { name: "Windows", level: "상", icon: DiWindows, color: "#0078D6" },
      { name: "MacOS", level: "상", icon: SiMacos, color: "#ffffff" },
    ],
  },
  etc: {
    title: "ETC",
    skills: [
      { name: "Notion", level: "중", icon: SiNotion, color: "#ffffff" },
      { name: "Slack", level: "중", icon: SiSlack, color: "#4A154B" },
    ],
  },
}

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
