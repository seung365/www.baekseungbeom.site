import styled from "@emotion/styled";
import Link from "next/link";

export const S = {
  Wrapper: styled.header`
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 10;
    height: 60px;
    width: 100%;
    background: var(--color-background);
    color: var(--color-text);
    font-size: 0.9rem;
    font-weight: 400;
    padding: 0.8rem 1rem;
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
  `,

  ContentWrapper: styled.div`
    margin-left: auto;
    display: flex;
    flex-direction: row;
    gap: 20px;
  `,
};
