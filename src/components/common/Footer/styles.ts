import styled from "@emotion/styled"

export const S = {
  Footer: styled.footer`
    text-align: center;
    padding: 2rem 0;
    border-top: 1px solid ${({ theme }) => `${theme.text}10`};
    background: ${({ theme }) => theme.surface};

    p {
      color: ${({ theme }) => theme.text};
      opacity: 0.5;
      font-size: 0.9rem;
    }
  `,
}
