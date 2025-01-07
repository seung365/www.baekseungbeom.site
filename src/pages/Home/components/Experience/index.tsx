import useIntersectionObserver from "../../../../hooks/useIntersectionObserver"
import { S } from "./styles"

type Item = {
  name: string
  role: string
  period: string
  details?: string[]
  status?: string
}

type Card = {
  title: string
  items: Item[]
}

const cards: Card[] = [
  {
    title: "Education",
    items: [
      {
        name: "경북대학교 컴퓨터학부",
        role: "심화컴퓨터전공 재학 (4.09/4.5)",
        period: "2020.03 ~ ",
        details: ["성적 우수 장학금 5회", "130/150학점 이수", "2025.08 조기졸업 가능"],
      },
      {
        name: "육군",
        role: "병장 만기 제대",
        period: "2021.04 ~ 2022.10",
      },
      { name: "대건고등학교", role: "졸업", period: "2017.03 ~ 2020.02" },
    ],
  },
  {
    title: "Awards",
    items: [
      {
        name: "Hackers Ground",
        role: "우수상 (마이크로소프트 사장상)",
        period: "2023",
      },
      {
        name: "제10회 대한민국 SW융합 해커톤 대회",
        role: "본선 진출",
        period: "2023",
      },
      {
        name: "KNU 코드페어",
        role: "장려상",
        period: "2020",
      },
    ],
  },
  {
    title: "Activities",
    items: [
      {
        name: "Google Developer Group KNU",
        role: "4기 FE Member",
        period: "2024.09 ~",
      },
      {
        name: "카카오 테크 캠퍼스",
        role: "2기 FE",
        period: "2024.04.08 ~ 2024.11.20",
        status: "수료",
      },
      {
        name: "해달 아이디어톤 & 해커톤",
        role: "TF",
        period: "2024.11.07, 11.23",
      },
      {
        name: "해달",
        role: "경북대학교 코딩 개발 동아리",
        period: "2024.03 ~",
      },
      {
        name: "부스트코스",
        role: "DATA SCIENCE PROJECTS 코칭스터디",
        period: "2024.01 ~ 2024.02",
        status: "수료",
      },
    ],
  },
]

const Experience = () => {
  const { sectionRef, isVisible } = useIntersectionObserver()

  return (
    <S.Section ref={sectionRef} $isVisible={isVisible}>
      <S.ExperienceGrid>
        {cards.map((card, index) => (
          <S.CardContainer key={index} $index={index}>
            <S.ExperienceCard>
              <S.CardTitle>{card.title}</S.CardTitle>
              {card.items.map((item, itemIndex) => (
                <S.ItemContainer key={itemIndex}>
                  <S.ItemHeader>
                    <S.ItemName>{item.name}</S.ItemName>
                    <S.ItemPeriod>{item.period}</S.ItemPeriod>
                  </S.ItemHeader>
                  <S.ItemRole>{item.role}</S.ItemRole>
                  {item.details && (
                    <S.DetailsList>
                      {item.details.map((detail, detailIndex) => (
                        <li key={detailIndex}>{detail}</li>
                      ))}
                    </S.DetailsList>
                  )}
                  {item.status && <S.ItemStatus>{item.status}</S.ItemStatus>}
                </S.ItemContainer>
              ))}
            </S.ExperienceCard>
          </S.CardContainer>
        ))}
      </S.ExperienceGrid>
    </S.Section>
  )
}

export default Experience
