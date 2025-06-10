import useIntersectionObserver from "@/hooks/useIntersectionObserver";
import * as styles from "./styles.css";

const Profile = () => {
  const { sectionRef, isVisible } = useIntersectionObserver();

  return (
    <section ref={sectionRef} className={styles.profileSection({ isVisible })}>
      <div className={styles.profileInfo}>
        <h2 className={styles.gradientTitle}>
          Frontend Developer{" "}
          <span className={styles.quoteWrapper}>
            <span className={styles.quote({ isVisible, position: "first" })}>"</span> 백승범{" "}
            <span className={styles.quote({ isVisible, position: "second" })}>"</span>
          </span>{" "}
          입니다.
        </h2>

        <p className={styles.introText}>끊임없이 개발하고, 자신을 개발하는 열정맨입니다🔥</p>

        <p className={styles.introText}>제가 개발한 서비스를 통해 많은 사람들의 삶이 한층 나아졌으면 합니다.</p>

        <div className={styles.tagsContainer}>
          <span className={styles.infoTag}>분위기 메이커</span>
          <span className={styles.infoTag}>ESTJ</span>
          <span className={styles.infoTag}>친화적</span>
          <span className={styles.infoTag}>열정적</span>
          <span className={styles.infoTag}>긍정파</span>
          <span className={styles.infoTag}>능동적</span>
        </div>
      </div>
    </section>
  );
};

export default Profile;
