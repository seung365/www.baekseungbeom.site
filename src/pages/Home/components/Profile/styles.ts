import styled from "@emotion/styled"

export const S = {
  ProfileSection: styled.section<{ $isVisible: boolean }>`
    margin: 4rem 0;
    opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
    transform: translateY(${({ $isVisible }) => ($isVisible ? "0" : "20px")});
    transition: opacity 0.8s ease-out, transform 0.8s ease-out;
    display: flex;
    align-items: center;
    gap: 2rem;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
      flex-direction: column;
    }
  `,

  ProfileInfo: styled.div`
    flex: 1;
  `,

  GradientTitle: styled.h2`
    font-size: 2.5rem;
    background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
    -webkit-background-clip: text;
    color: transparent;
    margin-bottom: 2rem;
  `,

  IntroText: styled.p`
    font-size: 1.2rem;
    line-height: 1.6;
    margin: 1rem 0;
  `,

  SkillTag: styled.span`
    background: rgba(78, 205, 196, 0.2);
    color: #4ecdc4;
    padding: 0.3rem 0.8rem;
    border-radius: 15px;
    font-size: 0.9rem;
    margin-right: 0.5rem;
    margin-bottom: 0.5rem;
    display: inline-block;
  `,
}
