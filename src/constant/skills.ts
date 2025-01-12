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

export const SKILL_CATEGORIES = {
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
