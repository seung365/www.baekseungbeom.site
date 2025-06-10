import BlogPostContent from "@/components/Blog/BlogPostContent";
import BlogPostHeader from "@/components/Blog/BlogPostHeader";
import BlogPostNav from "@/components/Blog/BlogPostNav";
import { BlogPost } from "@/types/index";
import * as styles from "./styles.css";

interface BlogPostPageProps {
  post: BlogPost;
  prevPost: BlogPost | null;
  nextPost: BlogPost | null;
}

export default function BlogPostPage({ post, prevPost, nextPost }: BlogPostPageProps) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <BlogPostHeader post={post} />
        <BlogPostContent content={post.content} />
        <BlogPostNav prevPost={prevPost} nextPost={nextPost} />
      </div>
    </div>
  );
}
