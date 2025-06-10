import { getAllPosts, getAllTags } from "@/_utils/blogUtils";
import BlogPageClient from "@/components/Blog/BlogPage";

interface SearchParams {
  tag?: string;
}

export default function BlogPage({ searchParams }: { searchParams: SearchParams }) {
  const allPosts = getAllPosts();
  const allTags = getAllTags();
  const selectedTag = searchParams.tag;

  const filteredPosts = selectedTag ? allPosts.filter((post) => post.tags.includes(selectedTag)) : allPosts;

  return <BlogPageClient posts={filteredPosts} tags={allTags} selectedTag={selectedTag} />;
}
