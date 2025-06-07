import { formatDate } from "@/_utils/dateUtils";
import { BlogPost } from "@/types/index";
import styled from "@emotion/styled";
import Link from "next/link";

interface BlogPostListProps {
  posts: BlogPost[];
}

const BlogPostList = ({ posts }: BlogPostListProps) => {
  if (posts.length === 0) {
    return (
      <EmptyState>
        <EmptyIcon>📭</EmptyIcon>
        <EmptyTitle>아직 포스트가 없습니다</EmptyTitle>
        <EmptySubtext>첫 번째 포스트를 작성해보세요!</EmptySubtext>
      </EmptyState>
    );
  }

  return (
    <PostList>
      {posts.map((post) => (
        <PostCard key={post.slug}>
          <Link href={`/blog/${post.slug}`}>
            <PostHeader>
              <PostTitle>{post.title}</PostTitle>
              <PostMeta>
                <PostDate>{formatDate(post.date)}</PostDate>
                <ReadingTime>{post.readingTime}</ReadingTime>
              </PostMeta>
            </PostHeader>
            <PostDescription>{post.description}</PostDescription>
            <TagList>
              {post.tags.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </TagList>
          </Link>
        </PostCard>
      ))}
    </PostList>
  );
};

export default BlogPostList;

const PostList = styled.div`
  display: grid;
  gap: 2rem;
`;

const PostCard = styled.article`
  background: var(--color-card-background);
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  border: 1px solid var(--color-border);

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
    border-color: var(--color-primary);
  }

  a {
    text-decoration: none;
    color: inherit;
    display: block;
  }
`;

const PostHeader = styled.div`
  margin-bottom: 1rem;
`;

const PostTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0 0 0.5rem 0;
  color: var(--color-text);
  line-height: 1.4;
`;

const PostMeta = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 0.9rem;
  color: var(--color-text-secondary);
`;

const PostDate = styled.span``;

const ReadingTime = styled.span`
  &::before {
    content: "•";
    margin-right: 0.5rem;
  }
`;

const PostDescription = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: var(--color-text-secondary);
  margin: 0 0 1.5rem 0;
`;

const TagList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const Tag = styled.span`
  background: rgba(102, 126, 234, 0.1);
  color: #667eea;
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  font-size: 0.8rem;
  font-weight: 500;
`;

const EmptyState = styled.div`
  text-align: center;
  padding: 4rem 2rem;
  color: var(--color-text-secondary);
`;

const EmptyIcon = styled.div`
  font-size: 4rem;
  margin-bottom: 1rem;
`;

const EmptyTitle = styled.h3`
  font-size: 1.5rem;
  color: var(--color-text);
  margin: 0 0 0.5rem 0;
  font-weight: 600;
`;

const EmptySubtext = styled.p`
  font-size: 1rem;
  margin: 0;
  opacity: 0.8;
`;
