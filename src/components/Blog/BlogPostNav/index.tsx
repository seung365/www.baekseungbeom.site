import { BlogPost } from "@/types/index";
import Link from "next/link";
import * as styles from "./styles.css";

interface BlogPostNavProps {
  prevPost: BlogPost | null;
  nextPost: BlogPost | null;
}

const BlogPostNav = ({ prevPost, nextPost }: BlogPostNavProps) => {
  if (!prevPost && !nextPost) {
    return null;
  }

  return (
    <nav className={styles.navWrapper}>
      <h3 className={styles.navTitle}>다른 포스트 보기</h3>
      <div className={styles.navContainer}>
        {prevPost ? (
          <div className={styles.navCardPrev}>
            <Link href={`/blog/${prevPost.slug}`}>
              <div className={styles.navLabel}>이전 포스트</div>
              <h4 className={styles.navPostTitle}>{prevPost.title}</h4>
              <div className={styles.navArrowPrev}>← 이전</div>
            </Link>
          </div>
        ) : (
          <div className={styles.navCardPlaceholder} />
        )}

        {nextPost ? (
          <div className={styles.navCardNext}>
            <Link href={`/blog/${nextPost.slug}`}>
              <div className={styles.navLabel}>다음 포스트</div>
              <h4 className={styles.navPostTitle}>{nextPost.title}</h4>
              <div className={styles.navArrow}>다음 →</div>
            </Link>
          </div>
        ) : (
          <div className={styles.navCardPlaceholder} />
        )}
      </div>
    </nav>
  );
};

export default BlogPostNav;
