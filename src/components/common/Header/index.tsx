"use client";

import Link from "next/link";
import { useState } from "react";
import ThemeToggle from "../ThemeToggle";
import * as styles from "./styles.css";

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
      <header className={styles.wrapper}>
        <div className={styles.logo}>
          <a href="/" onClick={closeMenu}>
            Hi,there
          </a>
        </div>

        <div className={styles.desktopNav}>
          <ul className={styles.navList}>
            {navList.map((item) => (
              <li key={item.name} className={styles.navItem}>
                <Link href={item.path} className={styles.styledLink}>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
          <ThemeToggle />
        </div>

        <div className={styles.mobileNav}>
          <ThemeToggle />
          <button className={styles.hamburgerButton()} onClick={toggleMenu} type="button" aria-label="메뉴 토글">
            <div
              className={styles.hamburgerLine({
                position: "first",
                isOpen: isMenuOpen,
              })}
            />
            <div
              className={styles.hamburgerLine({
                position: "second",
                isOpen: isMenuOpen,
              })}
            />
            <div
              className={styles.hamburgerLine({
                position: "third",
                isOpen: isMenuOpen,
              })}
            />
          </button>
        </div>
      </header>

      <nav className={styles.mobileMenu({ isOpen: isMenuOpen })}>
        <ul className={styles.mobileNavList}>
          {navList.map((item) => (
            <li key={item.name} className={styles.mobileNavItem}>
              <Link href={item.path} className={styles.mobileStyledLink} onClick={closeMenu}>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {isMenuOpen && <div className={styles.overlay} onClick={closeMenu} />}
    </>
  );
};

export default Header;
