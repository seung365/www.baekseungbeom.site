"use client";

import { useState } from "react";
import ThemeToggle from "../ThemeToggle";
import { S } from "./styles";

const navList = [
  { name: "About", path: "/" },
  { name: "Gallery", path: "/gallery" },
  { name: "Blog", path: "/blog" },
  { name: "Guestbook", path: "/guestbook" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <S.Wrapper>
        <S.Logo>
          <a href="/" onClick={closeMenu}>
            Hi,there
          </a>
        </S.Logo>

        <S.DesktopNav>
          <S.NavList>
            {navList.map((item) => (
              <S.NavItem key={item.name}>
                <S.StyledLink href={item.path}>{item.name}</S.StyledLink>
              </S.NavItem>
            ))}
          </S.NavList>
          <ThemeToggle />
        </S.DesktopNav>

        <S.MobileNav>
          <ThemeToggle />
          <S.HamburgerButton onClick={toggleMenu} isOpen={isMenuOpen}>
            <S.HamburgerLine isOpen={isMenuOpen} />
            <S.HamburgerLine isOpen={isMenuOpen} />
            <S.HamburgerLine isOpen={isMenuOpen} />
          </S.HamburgerButton>
        </S.MobileNav>
      </S.Wrapper>

      <S.MobileMenu isOpen={isMenuOpen}>
        <S.MobileNavList>
          {navList.map((item) => (
            <S.MobileNavItem key={item.name}>
              <S.MobileStyledLink href={item.path} onClick={closeMenu}>
                {item.name}
              </S.MobileStyledLink>
            </S.MobileNavItem>
          ))}
        </S.MobileNavList>
      </S.MobileMenu>

      {isMenuOpen && <S.Overlay onClick={closeMenu} />}
    </>
  );
};

export default Header;
