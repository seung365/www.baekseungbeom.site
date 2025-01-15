import styled from "@emotion/styled";

export const S = {
  ProfileSection: styled.section<{ $isVisible: boolean }>`
    margin: 4rem auto;
    display: flex;
    opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
    transform: translateY(${({ $isVisible }) => ($isVisible ? "0" : "20px")});
    transition: opacity 0.8s ease-out, transform 0.8s ease-out;
    align-items: center;
    gap: 2rem;
    max-width: 1280px;
    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
      flex-direction: column;
    }
  `,

  ProfileInfo: styled.div`
    flex: 1;
  `,

  GradientTitle: styled.h2`
    font-size: 2.5rem;

    margin-bottom: 2rem;
  `,

  IntroText: styled.p`
    font-size: 1.2rem;
    line-height: 1.6;
    margin: 1rem 0;
  `,

  InfoTag: styled.span`
    background: rgba(78, 205, 196, 0.2);
    color: #4ecdc4;
    padding: 0.3rem 0.8rem;
    border-radius: 15px;
    font-size: 0.9rem;
    margin-right: 0.5rem;
    margin-bottom: 0.5rem;
    display: inline-block;
  `,
  QuoteWrapper: styled.span`
    display: inline-block;
    position: relative;
  `,

  Quote: styled.span<{ $isVisible: boolean }>`
    display: inline-block;
    opacity: 0;
    transform: translateY(10px);
    animation: ${(props) =>
      props.$isVisible ? "fadeInQuote 1s ease-out forwards, float 2s ease-in-out infinite" : "none"};
    animation-delay: ${(props) => (props.children === '"' ? "0.8s" : "1s")},
      ${(props) => (props.children === '"' ? "1.8s" : "2s")};

    @keyframes fadeInQuote {
      from {
        opacity: 0;
        transform: translateY(10px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @keyframes float {
      0% {
        transform: translateY(0px);
      }
      50% {
        transform: translateY(-5px);
      }
      100% {
        transform: translateY(0px);
      }
    }
  `,
};
