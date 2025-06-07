"use client";

import BlogHeader from "@/components/Blog/BlogHeader";
import BlogPostList from "@/components/Blog/BlogPostList";
import TagFilter from "@/components/Blog/TagFilter";
import { BlogPost } from "@/types/index";
import styled from "@emotion/styled";

interface BlogPageClientProps {
  posts: BlogPost[];
  tags: string[];
  selectedTag?: string;
}

export default function BlogPageClient({ posts, tags, selectedTag }: BlogPageClientProps) {
  return (
    <Wrapper>
      <Container>
        <BlogHeader />
        <TagFilter tags={tags} selectedTag={selectedTag} />
        <BlogPostList posts={posts} />
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  min-height: calc(100vh - 60px);
  background: var(--color-background);
  color: var(--color-text);
  padding: 2rem 1rem;
  padding-bottom: 80px;
`;

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 16px;
`;
