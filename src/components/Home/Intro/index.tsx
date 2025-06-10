"use client";

import useIntersectionObserver from "@/hooks/useIntersectionObserver";
import { useScroll } from "@/hooks/useScroll";
import { useRef } from "react";
import * as styles from "./styles.css";

const Intro = () => {
  const { sectionRef, isVisible } = useIntersectionObserver();
  const contentRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const { handleScrollDown } = useScroll(sectionRef, contentRef, contactRef);

  return (
    <section ref={sectionRef} className={styles.section}>
      <div ref={contentRef} className={styles.contentWrapper}>
        <div className={styles.nameContainer}>
          <div className={styles.firstName}>Baek</div>
          <div className={styles.lastName}>SeungBeom</div>
        </div>
      </div>

      <div ref={contactRef} className={styles.contactWrapper}>
        <div className={styles.contactItem({ delay: 0.6 })}>
          <a href="https://velog.io/@seung365" target="_blank" rel="noopener noreferrer" className={styles.link}>
            Velog
          </a>
        </div>
        <div className={styles.contactItem({ delay: 0.8 })}>
          <a href="https://github.com/seung365" target="_blank" rel="noopener noreferrer" className={styles.link}>
            Github
          </a>
        </div>
        <div className={styles.contactItem({ delay: 1.0 })}>+82 10-5583-6009</div>
        <div className={styles.contactItem({ delay: 1.2 })}>bdh3659@naver.com</div>
      </div>

      <button
        onClick={handleScrollDown}
        className={styles.scrollDownButton({ isVisible })}
        type="button"
        aria-label="아래로 스크롤"
      >
        <span className={styles.scrollArrow}>↓</span>
      </button>
    </section>
  );
};

export default Intro;
