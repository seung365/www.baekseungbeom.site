import BlogHeader from "@/components/Blog/BlogHeader";
import BlogPostList from "@/components/Blog/BlogPostList";
import TagFilter from "@/components/Blog/TagFilter";
import { BlogPost } from "@/types/index";
import * as styles from "./styles";

interface BlogPageProps {
  posts: BlogPost[];
  tags: string[];
  selectedTag?: string;
}

export default function BlogPage({ posts, tags, selectedTag }: BlogPageProps) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <BlogHeader />
        <TagFilter tags={tags} selectedTag={selectedTag} />
        <BlogPostList posts={posts} />
      </div>
    </div>
  );
}
