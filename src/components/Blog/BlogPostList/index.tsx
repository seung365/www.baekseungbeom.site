// src/components/Blog/BlogPostList/index.tsx
import { formatDate } from "@/_utils/dateUtils";
import { BlogPost } from "@/types/index";
import Link from "next/link";
import * as styles from "./styles";

interface BlogPostListProps {
  posts: BlogPost[];
}

const BlogPostList = ({ posts }: BlogPostListProps) => {
  if (posts.length === 0) {
    return (
      <div className={styles.emptyState}>
        <div className={styles.emptyIcon}>📭</div>
        <h3 className={styles.emptyTitle}>아직 포스트가 없습니다</h3>
        <p className={styles.emptySubtext}>첫 번째 포스트를 작성해보세요!</p>
      </div>
    );
  }

  return (
    <div className={styles.postList}>
      {posts.map((post) => (
        <article key={post.slug} className={styles.postCard}>
          <Link href={`/blog/${post.slug}`}>
            <div className={styles.postHeader}>
              <h2 className={styles.postTitle}>{post.title}</h2>
              <div className={styles.postMeta}>
                <span className={styles.postDate}>{formatDate(post.date)}</span>
                <span className={styles.readingTime}>{post.readingTime}</span>
              </div>
            </div>
            <p className={styles.postDescription}>{post.description}</p>
            <div className={styles.tagList}>
              {post.tags.map((tag) => (
                <span key={tag} className={styles.tag}>
                  {tag}
                </span>
              ))}
            </div>
          </Link>
        </article>
      ))}
    </div>
  );
};

export default BlogPostList;
