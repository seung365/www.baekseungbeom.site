import styled from "@emotion/styled";

interface TimelineProjectProps {
  $isVisible: boolean;
  $index: number;
}

export const S = {
  Section: styled.section`
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 2rem;
  `,

  Title: styled.h2`
    font-size: 3rem;
    font-weight: 800;
    text-align: center;
    margin-bottom: 4rem;
    text-shadow: 2px 2px 0px rgba(0, 0, 0, 0.1);

    color: ${({ theme }) => theme.text};
    letter-spacing: -0.02em;
  `,

  Timeline: styled.div`
    position: relative;
    padding-left: 2rem;
    display: Grid;
    &::before {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
      width: 2px;
      background: ${({ theme }) => `${theme.primary}30`};
    }
  `,

  TimelineProject: styled.div<TimelineProjectProps>`
    position: relative;
    margin-bottom: 4rem;
    opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
    transform: translateY(${({ $isVisible }) => ($isVisible ? "0" : "10px")});
    transition: opacity 0.3s ease-out, transform 0.3s ease-out;
    transition-delay: ${({ $index }) => $index * 0.1}s;

    &:last-child {
      margin-bottom: 0;
    }
  `,

  TimelineDot: styled.div`
    position: absolute;
    left: -2.4rem;
    top: 0;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background: ${({ theme }) => theme.primary};
    border: 2px solid ${({ theme }) => `${theme.surface}80`};
  `,

  ProjectContent: styled.div`
    background: ${({ theme }) => `${theme.surface}10`};
    backdrop-filter: blur(10px);
    border-radius: 12px;
    padding: 2rem;
    border: 1px solid ${({ theme }) => `${theme.surface}20`};
    transition: all 0.3s ease;
    color: ${({ theme }) => theme.text};
  `,

  ProjectHeader: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 1.5rem;

    h3 {
      font-size: 1.8rem;
      font-weight: 700;
      margin-bottom: 0.5rem;
    }
  `,

  ProjectDate: styled.span`
    font-size: 0.9rem;
    color: ${({ theme }) => theme.text};
    opacity: 0.7;
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

  InfoGrid: styled.div`
    display: grid;
    gap: 1rem;
    margin-bottom: 2rem;
  `,

  InfoItem: styled.div`
    p {
      color: ${({ theme }) => theme.text};
      opacity: 0.8;
      font-size: 1rem;
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

  ContentSection: styled.div`
    margin-bottom: 1.5rem;

    &:last-child {
      margin-bottom: 0;
    }
  `,

  SectionTitle: styled.h4`
    font-size: 1.1rem;
    font-weight: 600;
    color: ${({ theme }) => theme.primary};
    margin-bottom: 1rem;
  `,

  List: styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      color: ${({ theme }) => theme.text};
      opacity: 0.9;
      font-size: 1rem;
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
  `,

  TechStack: styled.p`
    color: ${({ theme }) => theme.text};
    opacity: 0.8;
    font-size: 1rem;
    line-height: 1.6;
  `,

  ProjectDetail: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    border-radius: 1rem;
    background: ${({ theme }) => theme.background || "#ffffff"};
    color: ${({ theme }) => theme.text || "#000000"};
  `,

  ProjectTitle: styled.h3`
    font-size: 1.5rem;
    font-weight: 800;
    margin-bottom: 1rem;
    white-space: pre-line;
    word-break: keep-all;
    overflow-wrap: break-word;
    line-height: 1.4;
    text-align: center;
  `,

  ProjectDescriptionDetail: styled.p`
    font-size: 1rem;
    margin-bottom: 1rem;
  `,

  ProjectTechStackDetail: styled.p`
    font-size: 0.9rem;
    color: ${({ theme }) => theme.primary || "#0066cc"};
  `,

  GridContainer: styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    margin-bottom: 4rem;
    @media (max-width: 1024px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
    }
  `,

  ProjectItem: styled.div<{ isVisible: boolean; $index: number }>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    border-radius: 1rem;
    box-shadow: 0 0 1rem rgba(0, 0, 0, 0.1);
    background: ${({ theme }) => theme.background || "#ffffff"};
    color: ${({ theme }) => theme.text || "#000000"};
    cursor: pointer;
    opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
    transform: translateY(${({ isVisible }) => (isVisible ? "0" : "30px")});
    transition: opacity 0.5s ease-out, transform 0.5s ease-out;
    transition-delay: ${({ $index }) => `${$index * 0.2}s`};

    &:hover {
      box-shadow: 0 0 1rem rgba(0, 0, 0, 0.2);
    }
  `,

  ProjectTitleDetail: styled.h3`
    font-size: 1.5rem;
    font-weight: 800;
    margin-bottom: 1rem;
  `,

  ProjectDescription: styled.p`
    font-size: 1rem;
    margin-bottom: 1rem;
  `,

  ProjectTechStack: styled.p`
    font-size: 0.9rem;
    color: ${({ theme }) => theme.primary || "#0066cc"};
  `,

  ModalOverlay: styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
    animation: fadeIn 0.3s ease forwards;
    &.closing {
      animation: fadeOut 0.3s ease forwards;
    }

    @keyframes fadeIn {
      from {
        background-color: rgba(0, 0, 0, 0);
      }
      to {
        background-color: rgba(0, 0, 0, 0.5);
      }
    }

    @keyframes fadeOut {
      from {
        background-color: rgba(0, 0, 0, 0.5);
      }
      to {
        background-color: rgba(0, 0, 0, 0);
      }
    }
  `,

  ModalContent: styled.div`
    background: ${({ theme }) => theme.background || "#ffffff"};
    padding: 2rem;
    border-radius: 8px;
    max-width: 90%;
    max-height: 90vh;
    overflow-y: auto;
    position: relative;
    box-shadow: 0 0 24px rgba(0, 0, 0, 0.2);
    animation: slideIn 0.3s ease forwards;
    transform-origin: center;

    &.closing {
      animation: slideOut 0.3s ease forwards;
    }

    @keyframes slideIn {
      from {
        opacity: 0;
        transform: scale(0.95) translateY(10px);
      }
      to {
        opacity: 1;
        transform: scale(1) translateY(0);
      }
    }

    @keyframes slideOut {
      from {
        opacity: 1;
        transform: scale(1) translateY(0);
      }
      to {
        opacity: 0;
        transform: scale(0.95) translateY(10px);
      }
    }
  `,

  CloseButton: styled.button`
    position: absolute;
    top: 0.2rem;
    right: 0.2rem;
    color: ${({ theme }) => theme.text || "#000000"};
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
    padding: 0.5rem;
    line-height: 1;
    opacity: 0.7;

    &:hover {
      opacity: 1;
    }
  `,
};
