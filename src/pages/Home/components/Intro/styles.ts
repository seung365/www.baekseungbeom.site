import { keyframes } from "@emotion/react"
import styled from "@emotion/styled"

const fadeIn = keyframes`
 0% {
   opacity: 0;
 }
 100% {
   opacity: 1;
 }
`

const fadeInUp = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`

const pulseAnimation = keyframes`
0% {
  transform: translateY(0);
  opacity: 1;
}
50% {
  transform: translateY(10px);
  opacity: 0.5;
}
100% {
  transform: translateY(0);
  opacity: 1;
}
`
export const S = {
  ScrollDownButton: styled.button<{ $isVisible: boolean }>`
    position: absolute;
    bottom: 2rem;
    left: 50%;
    transform: translateX(-50%);
    background: none;
    border: none;
    cursor: pointer;
    opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
    transition: opacity 0.3s ease;
    z-index: 2;

    &:hover {
      opacity: 0.7;
    }
  `,

  ScrollArrow: styled.span`
    color: ${({ theme }) => theme.text};
    font-size: 2rem;
    animation: ${pulseAnimation} 2s ease-in-out infinite;
  `,

  Section: styled.section`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    padding: 2rem;
    position: relative;
    overflow: hidden;
    background: ${({ theme }) => theme.background};

    &::before {
      content: "";
      position: absolute;
      inset: 0;
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
    }
  `,

  Link: styled.a`
    color: inherit;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  `,

  ContactWrapper: styled.div`
    color: ${({ theme }) => theme.text};
    display: flex;
    flex-direction: column;
    font-size: 1rem;
    align-self: flex-end;
    text-align: right;
    gap: 0.8rem;
    transform: translateY(calc(var(--scroll-position, 0) * -0.5px));
    opacity: calc(1 - (var(--scroll-position, 0) / 500));
    transition: transform 0.3s ease-out, opacity 0.3s ease-out;
    z-index: 1;
  `,

  ContactItem: styled.div<{ delay: number }>`
    opacity: 0;
    animation: ${fadeInUp} 0.5s ease forwards;
    animation-delay: ${({ delay }) => delay}s;
  `,

  ContentWrapper: styled.div`
    margin-top: 30vh;
    transform: translateY(calc(var(--scroll-position, 0) * -0.5px));
    opacity: calc(1 - (var(--scroll-position, 0) / 500));
    transition: transform 0.3s ease-out, opacity 0.3s ease-out;
  `,

  NameContainer: styled.div`
    display: flex;
    flex-direction: column;
    font-size: 8vw;
    font-weight: 900;
    text-transform: uppercase;
    z-index: 1;
    gap: 0.5rem;
  `,

  FirstName: styled.div`
    color: ${({ theme }) => theme.text};
    font-weight: 600;
    opacity: 0;
    margin-bottom: 1rem;
    line-height: 1;
    letter-spacing: -0.05em;
    animation: ${fadeIn} 0.8s ease forwards;
  `,

  LastName: styled.div`
    color: ${({ theme }) => theme.text};
    font-weight: 600;
    opacity: 0;
    line-height: 1;
    letter-spacing: -0.05em;
    animation: ${fadeIn} 0.8s ease 0.2s forwards;
  `,
}
