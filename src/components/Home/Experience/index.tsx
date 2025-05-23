import experience from "@/constant/experience";
import useIntersectionObserver from "@/hooks/useIntersectionObserver";
import { S } from "./styles";

const Experience = () => {
  const { sectionRef, isVisible } = useIntersectionObserver({ threshold: 0.01 });

  return (
    <S.Section ref={sectionRef} $isVisible={isVisible}>
      <S.ExperienceGrid>
        {experience.map((card, index) => (
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
              {card.title === "Education" && (
                <>
                  <S.CardTitle>Work Experience</S.CardTitle>
                  <S.ItemContainer>
                    <S.ItemHeader>
                      <S.ItemName>(주) 셈웨어 ICT 인턴십 프로그램</S.ItemName>
                      <S.ItemPeriod>2025.03 ~ </S.ItemPeriod>
                    </S.ItemHeader>
                    <S.ItemRole>React, TypeScript, MATHCORE API, GitLab</S.ItemRole>
                  </S.ItemContainer>
                </>
              )}
            </S.ExperienceCard>
          </S.CardContainer>
        ))}
      </S.ExperienceGrid>
    </S.Section>
  );
};

export default Experience;
