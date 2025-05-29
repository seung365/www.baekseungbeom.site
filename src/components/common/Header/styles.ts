import { BREAKPOINTS } from "@/styles/theme";
import styled from "@emotion/styled";
import Link from "next/link";

export const S = {
  Wrapper: styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 1000;
    height: 60px;
    width: 100%;
    background: var(--color-background);
    color: var(--color-text);
    font-size: 0.9rem;
    font-weight: 400;
    padding: 0.8rem 1rem;
    border-bottom: 1px solid var(--color-border);
    position: relative;
  `,

  Logo: styled.div`
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--color-primary);
    cursor: pointer;
    transition: all 0.3s ease;
    z-index: 1001;

    a {
      text-decoration: none;
      color: inherit;
    }

    &:hover {
      transform: scale(1.1);
    }
  `,

  DesktopNav: styled.div`
    display: flex;
    align-items: center;
    gap: 20px;

    @media (max-width: ${BREAKPOINTS.mobile}) {
      display: none;
    }
  `,

  MobileNav: styled.div`
    display: none;
    align-items: center;
    gap: 15px;
    z-index: 1001;

    @media (max-width: ${BREAKPOINTS.mobile}) {
      display: flex;
    }
  `,

  NavList: styled.ul`
    display: flex;
    gap: 20px;
    align-items: center;
    list-style: none;
    margin: 0;
    padding: 0;
  `,

  NavItem: styled.li`
    margin: 0;
    padding: 0;
    transition: all 0.3s ease;

    &:hover {
      transform: scale(1.1);
    }
  `,

  StyledLink: styled(Link)`
    text-decoration: none;
    color: inherit;
    display: block;
    padding: 0.5rem 0;
    border: none;
    transition: color 0.3s ease;

    &:hover {
      color: var(--color-primary);
    }
  `,

  HamburgerButton: styled.button<{ isOpen: boolean }>`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 24px;
    height: 18px;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    z-index: 1001;

    &:focus {
      outline: none;
    }
  `,

  HamburgerLine: styled.div<{ isOpen: boolean }>`
    width: 100%;
    height: 2px;
    background: var(--color-text);
    border-radius: 1px;
    transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    transform-origin: center;

    &:first-of-type {
      transform: ${({ isOpen }) => (isOpen ? "translateY(8px) rotate(45deg)" : "translateY(0) rotate(0)")};
    }

    &:nth-of-type(2) {
      opacity: ${({ isOpen }) => (isOpen ? 0 : 1)};
      transform: ${({ isOpen }) => (isOpen ? "scale(0.2)" : "scale(1)")};
    }

    &:nth-of-type(3) {
      transform: ${({ isOpen }) => (isOpen ? "translateY(-8px) rotate(-45deg)" : "translateY(0) rotate(0)")};
    }
  `,

  MobileMenu: styled.nav<{ isOpen: boolean }>`
    position: fixed;
    top: 60px;
    right: 0;
    width: 280px;
    height: calc(100vh - 60px);
    background: var(--color-background);
    border-left: 1px solid var(--color-border);
    transform: translateX(${(props) => (props.isOpen ? "0" : "100%")});
    transition: transform 0.3s ease-in-out;
    z-index: 999;
    padding: 2rem 0;
    box-shadow: ${(props) => (props.isOpen ? "-2px 0 10px rgba(0, 0, 0, 0.1)" : "none")};

    @media (min-width: calc(${BREAKPOINTS.mobile} + 1px)) {
      display: none;
    }
  `,

  MobileNavList: styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
  `,

  MobileNavItem: styled.li`
    margin: 0;
    padding: 0;
  `,

  MobileStyledLink: styled(Link)`
    display: block;
    padding: 1rem 2rem;
    text-decoration: none;
    color: var(--color-text);
    font-size: 1.1rem;
    font-weight: 500;
    transition: all 0.3s ease;
    border-bottom: 1px solid var(--color-border);

    &:hover {
      background: var(--color-card-background);
      color: var(--color-primary);
      transform: translateX(10px);
    }

    &:last-child {
      border-bottom: none;
    }
  `,

  Overlay: styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);
    z-index: 998;
    backdrop-filter: blur(2px);

    @media (min-width: calc(${BREAKPOINTS.mobile} + 1px)) {
      display: none;
    }
  `,
};
