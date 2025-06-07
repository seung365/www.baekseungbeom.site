"use client";

import BlogPostContent from "@/components/Blog/BlogPostContent";
import BlogPostHeader from "@/components/Blog/BlogPostHeader";
import BlogPostNav from "@/components/Blog/BlogPostNav";
import { BlogPost } from "@/types/index";
import styled from "@emotion/styled";

interface BlogPostPageClientProps {
  post: BlogPost;
  prevPost: BlogPost | null;
  nextPost: BlogPost | null;
}

export default function BlogPostPageClient({ post, prevPost, nextPost }: BlogPostPageClientProps) {
  return (
    <Wrapper>
      <Container>
        <BlogPostHeader post={post} />
        <BlogPostContent content={post.content} />
        <BlogPostNav prevPost={prevPost} nextPost={nextPost} />
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
  max-width: 800px;
  margin: 0 auto;
  padding: 16px;
`;
