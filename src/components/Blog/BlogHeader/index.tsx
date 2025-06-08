// src/components/Blog/BlogHeader/index.tsx
import * as styles from "./styles";

const BlogHeader = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>📝 Blog</h1>
      <p className={styles.subtitle}>개발하며 배운 것들을 기록합니다</p>
    </header>
  );
};

export default BlogHeader;
