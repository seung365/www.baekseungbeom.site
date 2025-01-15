import styled from "@emotion/styled";

export const S = {
  Section: styled.section<{ $isVisible: boolean }>`
    opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
    transform: translateY(${({ $isVisible }) => ($isVisible ? "0" : "20px")});
    transition: all 1s cubic-bezier(0.4, 0, 0.2, 1);
    padding: 2rem 0;
    max-width: 1280px;
    margin: 0 auto;
  `,

  GradientTitle: styled.h2`
    font-size: 2.5rem;
    font-weight: 700;
    text-align: center;
    margin-bottom: 3rem;
    letter-spacing: 0.1em;
    text-shadow: 2px 2px 0px rgba(0, 0, 0, 0.1);
  `,

  SkillsContainer: styled.div`
    display: flex;
    flex-direction: column;
    gap: 3rem;
  `,

  CategorySection: styled.div<{ $isVisible: boolean; $delay: number }>`
    opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
    transform: translateY(${({ $isVisible }) => ($isVisible ? "0" : "20px")});
    transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
    transition-delay: ${({ $delay }) => $delay}s;
  `,

  CategoryTitle: styled.h3`
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 1.5rem;
    padding-bottom: 0.5rem;
    border-bottom: 2px solid rgba(78, 205, 196, 0.3);
  `,

  SkillsGrid: styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    justify-content: flex-start;
  `,

  SkillItem: styled.div<{ $isVisible: boolean; $delay: number }>`
    opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
    transform: scale(${({ $isVisible }) => ($isVisible ? 1 : 0.8)});
    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
    transition-delay: ${({ $delay }) => $delay}s;
  `,

  IconWrapper: styled.div`
    position: relative;
    width: 70px;
    height: 70px;
    cursor: pointer;

    &:hover {
      .back {
        opacity: 1;
        transform: rotateY(0deg);
      }
    }
  `,

  CardFront: styled.div<{ $color: string }>`
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.03);
    border-radius: 12px;
    color: ${({ $color, theme }) => ($color === "#ffffff" ? theme.background : $color)};
  `,

  CardBack: styled.div<{ $levelColor: string }>`
    position: absolute;
    font-size: 0.75rem;
    font-weight: 600;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: black;
    border-radius: 12px;
    border-left: 3px solid ${({ $levelColor }) => $levelColor};
    padding: 0.5rem;
    opacity: 0;
    transform: rotateY(90deg);
    transition: all 0.4s ease;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
  `,

  SkillName: styled.span`
    font-wieght: 700;
    color: #fff;
    font-size: 0.75rem;
    text-align: center;
    margin-bottom: 0.25rem;
    word-break: keep-all;
  `,

  SkillLevel: styled.span<{ $levelColor: string }>`
    color: ${({ $levelColor }) => $levelColor};
    font-weight: 600;
    font-size: 0.75rem;
  `,
};
