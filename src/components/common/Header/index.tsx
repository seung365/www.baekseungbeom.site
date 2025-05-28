"use client";

import ThemeToggle from "../ThemeToggle";
import { S } from "./styles";

const navList = [
  { name: "About", path: "/" },
  { name: "Gallery", path: "/gallery" },
  { name: "Guestbook", path: "/guestbook" },
];

const Header = () => {
  return (
    <S.Wrapper>
      <S.Logo>
        <a href="/">Hi,there</a>
      </S.Logo>
      <S.ContentWrapper>
        <S.NavList>
          {navList.map((item) => (
            <S.NavItem key={item.name}>
              <S.StyledLink href={item.path}>{item.name}</S.StyledLink>
            </S.NavItem>
          ))}
        </S.NavList>
        <ThemeToggle />
      </S.ContentWrapper>
    </S.Wrapper>
  );
};

export default Header;
