import styled from "@emotion/styled"

export const S = {
  Section: styled.section<{ $isVisible: boolean }>`
    opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
    transform: translateY(${({ $isVisible }) => ($isVisible ? "0" : "20px")});
    transition: opacity 0.8s ease-out, transform 0.8s ease-out;
    margin-bottom: 4rem;
  `,

  GradientTitle: styled.h2`
    font-size: 2.5rem;
    background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
    -webkit-background-clip: text;
    color: transparent;
    margin-bottom: 2rem;
  `,

  Card: styled.div`
    background: rgba(255, 255, 255, 0.05);
    border-radius: 15px;
    padding: 1.5rem;
    transition: all 0.3s ease;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);

    &:hover {
      transform: translateY(-5px);
      background: rgba(255, 255, 255, 0.1);
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    }
  `,

  Link: styled.a`
    color: inherit;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  `,
}
