import experience from "@/constant/experience";
import useIntersectionObserver from "@/hooks/useIntersectionObserver";
import * as styles from "./styles.css";

const Experience = () => {
  const { sectionRef, isVisible } = useIntersectionObserver({ threshold: 0.01 });

  return (
    <section ref={sectionRef} className={styles.section({ isVisible })}>
      <div className={styles.experienceGrid}>
        {experience.map((card, index) => (
          <div key={index} className={styles.cardContainer({ index: index as 0 | 1 | 2 })}>
            <div className={styles.experienceCard}>
              <h3 className={styles.cardTitle}>{card.title}</h3>
              {card.items.map((item, itemIndex) => (
                <div key={itemIndex} className={styles.itemContainer}>
                  <div className={styles.itemHeader}>
                    <h4 className={styles.itemName}>{item.name}</h4>
                    <span className={styles.itemPeriod}>{item.period}</span>
                  </div>
                  <p className={styles.itemRole}>{item.role}</p>
                  {item.details && (
                    <ul className={styles.detailsList}>
                      {item.details.map((detail, detailIndex) => (
                        <li key={detailIndex}>{detail}</li>
                      ))}
                    </ul>
                  )}
                  {item.status && <span className={styles.itemStatus}>{item.status}</span>}
                </div>
              ))}
              {card.title === "Education" && (
                <>
                  <h3 className={styles.cardTitle}>Work Experience</h3>
                  <div className={styles.itemContainer}>
                    <div className={styles.itemHeader}>
                      <h4 className={styles.itemName}>(주) 셈웨어 ICT 인턴십 프로그램</h4>
                      <span className={styles.itemPeriod}>2025.03 ~ </span>
                    </div>
                    <p className={styles.itemRole}>React, TypeScript, MATHCORE API, GitLab</p>
                  </div>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
