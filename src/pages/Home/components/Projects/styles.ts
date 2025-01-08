import styled from "@emotion/styled"

export const S = {
  Section: styled.section<{ $isVisible: boolean }>`
    opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
    transform: translateY(${({ $isVisible }) => ($isVisible ? "0" : "20px")});
    transition: opacity 0.8s ease-out, transform 0.8s ease-out;
    margin-bottom: 4rem;
    max-width: 1000px;
    margin: 0 auto;
    padding: 0 2rem;
  `,

  ContentSection: styled.div`
    margin-bottom: 2rem;

    &:last-child {
      margin-bottom: 0;
    }

    ul {
      list-style: none;
      padding: 0;
      margin: 0;

      li {
        color: ${({ theme }) => theme.text};
        opacity: 0.7;
        font-size: 1.1rem;
        margin-bottom: 0.75rem;
        padding-left: 1.5rem;
        position: relative;
        line-height: 1.6;

        &::before {
          content: "•";
          color: ${({ theme }) => theme.primary};
          position: absolute;
          left: 0;
          font-size: 1.5rem;
          line-height: 1;
        }

        &:last-child {
          margin-bottom: 0;
        }
      }
    }
  `,

  GradientTitle: styled.h2`
    font-size: 3rem;
    font-weight: 800;
    text-align: center;
    margin-bottom: 4rem;
    color: ${({ theme }) => theme.text};
    letter-spacing: -0.02em;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
  `,

  ProjectCard: styled.div`
    background: ${({ theme }) => `${theme.surface}10`};
    backdrop-filter: blur(10px);
    border-radius: 20px;
    padding: 3rem;
    margin-bottom: 3rem;
    border: 1px solid ${({ theme }) => `${theme.surface}20`};
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    overflow: hidden;

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(
        45deg,
        ${({ theme }) => `${theme.secondary}22`},
        ${({ theme }) => `${theme.primary}22`}
      );
      opacity: 0;
      transition: opacity 0.4s ease;
    }

    &:hover {
      transform: translateY(-10px);
      border-color: ${({ theme }) => `${theme.surface}40`};
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);

      &::before {
        opacity: 1;
      }
    }
  `,

  ProjectHeader: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;

    h3 {
      font-size: 2rem;
      font-weight: 700;
      background: linear-gradient(45deg, ${({ theme }) => theme.secondary}, ${({ theme }) => theme.primary});
      -webkit-background-clip: text;
      color: transparent;
    }
  `,

  ProjectLinks: styled.div`
    a {
      color: ${({ theme }) => theme.text};
      opacity: 0.7;
      text-decoration: none;
      padding: 0.5rem 1rem;
      border: 1px solid ${({ theme }) => `${theme.surface}20`};
      border-radius: 8px;
      transition: all 0.3s ease;

      &:hover {
        color: ${({ theme }) => theme.primary};
        border-color: ${({ theme }) => theme.primary};
        background: ${({ theme }) => `${theme.primary}10`};
      }
    }
  `,

  ProjectInfo: styled.div`
    margin-bottom: 2rem;
  `,

  InfoItem: styled.div`
    margin-bottom: 1rem;

    &:last-child {
      margin-bottom: 0;
    }

    p {
      color: ${({ theme }) => theme.text};
      opacity: 0.8;
      font-size: 1.1rem;
      line-height: 1.6;
    }
  `,

  Label: styled.span`
    display: inline-block;
    background: ${({ theme }) => `${theme.primary}10`};
    color: ${({ theme }) => theme.primary};
    padding: 0.25rem 0.75rem;
    border-radius: 4px;
    font-size: 0.9rem;
    margin-bottom: 0.5rem;
  `,

  SectionTitle: styled.h4`
    font-size: 1.2rem;
    font-weight: 600;
    color: ${({ theme }) => theme.primary};
    margin-bottom: 1rem;
    padding-bottom: 0.5rem;
    border-bottom: 2px solid ${({ theme }) => `${theme.primary}30`};
  `,

  TechList: styled.ul`
    list-style: none;
    padding: 0;
    margin: 0 0 1.5rem;

    li {
      color: ${({ theme }) => theme.text};
      opacity: 0.7;
      font-size: 1.1rem;
      margin-bottom: 0.5rem;
      line-height: 1.6;
    }
  `,

  TroubleItem: styled.div`
    margin-bottom: 1.5rem;

    h5 {
      font-size: 1.1rem;
      font-weight: 600;
      color: ${({ theme }) => theme.secondary};
      margin-bottom: 0.5rem;
    }

    p {
      color: ${({ theme }) => theme.text};
      opacity: 0.7;
      font-size: 1rem;
      line-height: 1.6;

      code {
        background: ${({ theme }) => `${theme.surface}20`};
        padding: 0.2em 0.4em;
        border-radius: 4px;
        font-family: "Fira Code", monospace;
        font-size: 0.9em;
      }
    }

    &:last-child {
      margin-bottom: 0;
    }
  `,
}
