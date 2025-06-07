import { formatDate } from "@/_utils/dateUtils";
import { BlogPost } from "@/types/index";
import styled from "@emotion/styled";
import Link from "next/link";

interface BlogPostHeaderProps {
  post: BlogPost;
}

const BlogPostHeader = ({ post }: BlogPostHeaderProps) => {
  return (
    <Header>
      <BackLink>
        <Link href="/blog">← 블로그로 돌아가기</Link>
      </BackLink>
      <Title>{post.title}</Title>
      <Meta>
        <MetaItem>{formatDate(post.date)}</MetaItem>
        <MetaItem>{post.readingTime}</MetaItem>
      </Meta>
      {post.tags.length > 0 && (
        <TagList>
          {post.tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </TagList>
      )}
    </Header>
  );
};

export default BlogPostHeader;

const Header = styled.header`
  margin-bottom: 3rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid var(--color-border);
`;

const BackLink = styled.div`
  margin-bottom: 2rem;

  a {
    color: var(--color-primary);
    text-decoration: none;
    font-weight: 500;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  margin: 0 0 1.5rem 0;
  line-height: 1.3;
  color: var(--color-text);
`;

const Meta = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
  font-size: 0.9rem;
  color: var(--color-text-secondary);
`;

const MetaItem = styled.span`
  strong {
    color: var(--color-text);
  }
`;

const TagList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const Tag = styled.span`
  background: rgba(102, 126, 234, 0.1);
  color: #667eea;
  padding: 0.5rem 1rem;
  border-radius: 16px;
  font-size: 0.9rem;
  font-weight: 500;
`;
