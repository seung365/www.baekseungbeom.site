import SKILL_CATEGORIES from "@/constant/skills";
import useIntersectionObserver from "@/hooks/useIntersectionObserver";
import * as styles from "./styles.css";

const Skills = () => {
  const { sectionRef, isVisible } = useIntersectionObserver();

  // delay 값을 안전한 타입으로 변환하는 함수
  const getDelayVariant = (delay: number) => {
    const roundedDelay = Math.round(delay * 100) / 100;
    const validDelays = [0, 0.05, 0.1, 0.15, 0.2, 0.25, 0.3, 0.35, 0.4, 0.45, 0.5];
    const closest = validDelays.reduce((prev, curr) =>
      Math.abs(curr - roundedDelay) < Math.abs(prev - roundedDelay) ? curr : prev,
    );
    return closest as 0 | 0.05 | 0.1 | 0.15 | 0.2 | 0.25 | 0.3 | 0.35 | 0.4 | 0.45 | 0.5;
  };

  const getCategoryDelayVariant = (delay: number) => {
    const roundedDelay = Math.round(delay * 10) / 10;
    const validDelays = [0, 0.1, 0.2, 0.3, 0.4, 0.5];
    const closest = validDelays.reduce((prev, curr) =>
      Math.abs(curr - roundedDelay) < Math.abs(prev - roundedDelay) ? curr : prev,
    );
    return closest as 0 | 0.1 | 0.2 | 0.3 | 0.4 | 0.5;
  };

  return (
    <section ref={sectionRef} className={styles.section({ isVisible })}>
      <h2 className={styles.gradientTitle}>Skills</h2>
      <div className={styles.skillsContainer}>
        {Object.entries(SKILL_CATEGORIES).map(([key, category], categoryIndex) => (
          <div
            key={key}
            className={styles.categorySection({
              isVisible,
              delay: getCategoryDelayVariant(categoryIndex * 0.1),
            })}
          >
            <h3 className={styles.categoryTitle}>{category.title}</h3>
            <div className={styles.skillsGrid}>
              {category.skills.map((skill, index) => {
                const skillColor = skill.color === "#ffffff" ? "var(--color-background)" : skill.color;

                return (
                  <div
                    key={index}
                    className={styles.skillItem({
                      isVisible,
                      delay: getDelayVariant(categoryIndex * 0.1 + index * 0.05),
                    })}
                  >
                    <div className={styles.iconWrapper}>
                      <div className={styles.cardFront} style={{ color: skillColor }}>
                        {skill.icon ? (
                          <skill.icon size={40} />
                        ) : (
                          <span style={{ fontSize: "40px" }}>{skill.emoji}</span>
                        )}
                      </div>
                      <div className={`${styles.cardBack} back`} style={{ borderLeft: `3px solid ${skill.color}` }}>
                        <span className={styles.skillName}>{skill.name}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
