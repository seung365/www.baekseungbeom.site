import styled from "@emotion/styled"

export const S = {
  Section: styled.section<{ $isVisible: boolean }>`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    position: relative;
    overflow: hidden;
    background: ${({ theme }) => theme.background};

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(rgba(78, 205, 196, 0.03) 1px, transparent 1px),
        linear-gradient(90deg, rgba(78, 205, 196, 0.03) 1px, transparent 1px);
      background-size: 50px 50px;
      animation: gridMove 15s linear infinite;
    }

    &::after {
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      width: 150vmax;
      height: 150vmax;
      background: radial-gradient(
        circle at center,
        transparent 15%,
        rgba(78, 205, 196, 0.03) 25%,
        rgba(255, 107, 107, 0.03) 35%,
        transparent 45%
      );
      transform-origin: center;
      animation: rotateGradient 20s linear infinite;
      z-index: 0;
    }

    @keyframes gridMove {
      0% {
        transform: translateY(0);
      }
      100% {
        transform: translateY(50px);
      }
    }

    @keyframes rotateGradient {
      0% {
        transform: translate(-50%, -50%) rotate(0deg);
      }
      100% {
        transform: translate(-50%, -50%) rotate(360deg);
      }
    }
  `,

  NameContainer: styled.div`
    display: flex;
    gap: 1rem;
    margin-bottom: 3rem;
    font-size: 8vw;
    font-weight: 900;
    text-transform: uppercase;
    z-index: 1;
  `,

  FirstName: styled.div<{ $isVisible: boolean }>`
    font-family: "Montserrat", sans-serif;
    background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
    -webkit-background-clip: text;
    color: transparent;
    opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
    transform: ${({ $isVisible }) => ($isVisible ? "translateX(0) rotate(0deg)" : "translateX(-100%) rotate(-20deg)")};
    transition: all 1.2s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  `,

  LastName: styled.div<{ $isVisible: boolean }>`
    font-family: "Montserrat", sans-serif;
    background: linear-gradient(45deg, #4ecdc4, #ff6b6b);
    -webkit-background-clip: text;
    color: transparent;
    opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
    transform: ${({ $isVisible }) => ($isVisible ? "translateX(0) rotate(0deg)" : "translateX(100%) rotate(20deg)")};
    transition: all 1.2s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  `,

  Role: styled.div<{ $isVisible: boolean }>`
    font-family: "Space Grotesk", sans-serif;
    font-size: 4vw;
    font-weight: 700;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    background: linear-gradient(to right, #4ecdc4, #ff6b6b);
    -webkit-background-clip: text;
    color: transparent;
    opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
    transform: ${({ $isVisible }) => ($isVisible ? "translateY(0) scale(1)" : "translateY(50px) scale(0.8)")};
    transition: all 1s cubic-bezier(0.34, 1.56, 0.64, 1) 0.8s;
    position: relative;
    z-index: 1;

    &:before {
      content: "";
      position: absolute;
      width: ${({ $isVisible }) => ($isVisible ? "100%" : "0")};
      height: 2px;
      bottom: -10px;
      left: 0;
      background: linear-gradient(to right, #4ecdc4, #ff6b6b);
      transition: width 1.5s ease-out 1.2s;
    }
  `,
}
