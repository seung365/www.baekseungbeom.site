import { formatDate } from "@/_utils/dateUtils";
import { BlogPost } from "@/types/index";
import Link from "next/link";
import * as styles from "./styles.css";

interface BlogPostHeaderProps {
  post: BlogPost;
}

const BlogPostHeader = ({ post }: BlogPostHeaderProps) => {
  return (
    <header className={styles.header}>
      <div className={styles.backLink}>
        <Link href="/blog">← 블로그로 돌아가기</Link>
      </div>
      <h1 className={styles.title}>{post.title}</h1>
      <div className={styles.meta}>
        <span className={styles.metaItem}>{formatDate(post.date)}</span>
        <span className={styles.metaItem}>{post.readingTime}</span>
      </div>
      {post.tags.length > 0 && (
        <div className={styles.tagList}>
          {post.tags.map((tag) => (
            <span key={tag} className={styles.tag}>
              {tag}
            </span>
          ))}
        </div>
      )}
    </header>
  );
};

export default BlogPostHeader;
