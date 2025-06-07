import { BREAKPOINTS } from "@/styles/theme";
import { BlogPost } from "@/types/index";
import styled from "@emotion/styled";
import Link from "next/link";

interface BlogPostNavProps {
  prevPost: BlogPost | null;
  nextPost: BlogPost | null;
}

const BlogPostNav = ({ prevPost, nextPost }: BlogPostNavProps) => {
  if (!prevPost && !nextPost) {
    return null;
  }

  return (
    <NavWrapper>
      <NavTitle>다른 포스트 보기</NavTitle>
      <NavContainer>
        {prevPost ? (
          <NavCard>
            <Link href={`/blog/${prevPost.slug}`}>
              <NavLabel>이전 포스트</NavLabel>
              <NavPostTitle>{prevPost.title}</NavPostTitle>
              <NavArrow>← 이전</NavArrow>
            </Link>
          </NavCard>
        ) : (
          <NavCardPlaceholder />
        )}

        {nextPost ? (
          <NavCard isNext>
            <Link href={`/blog/${nextPost.slug}`}>
              <NavLabel>다음 포스트</NavLabel>
              <NavPostTitle>{nextPost.title}</NavPostTitle>
              <NavArrow>다음 →</NavArrow>
            </Link>
          </NavCard>
        ) : (
          <NavCardPlaceholder />
        )}
      </NavContainer>
    </NavWrapper>
  );
};

export default BlogPostNav;

const NavWrapper = styled.nav`
  margin-top: 4rem;
  padding-top: 2rem;
  border-top: 1px solid var(--color-border);
`;

const NavTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: var(--color-text);
  text-align: center;
`;

const NavContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;

  @media (max-width: ${BREAKPOINTS.mobile}) {
    grid-template-columns: 1fr;
  }
`;

const NavCard = styled.div<{ isNext?: boolean }>`
  background: var(--color-card-background);
  border: 1px solid var(--color-border);
  border-radius: 12px;
  padding: 1.5rem;
  transition: all 0.3s ease;
  text-align: ${(props) => (props.isNext ? "right" : "left")};

  &:hover {
    border-color: var(--color-primary);
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

  a {
    text-decoration: none;
    color: inherit;
    display: block;
  }
`;

const NavCardPlaceholder = styled.div`
  min-height: 100px;
`;

const NavLabel = styled.div`
  font-size: 0.8rem;
  color: var(--color-text-secondary);
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: 0.5px;
`;

const NavPostTitle = styled.h4`
  font-size: 1rem;
  font-weight: 600;
  margin: 0 0 1rem 0;
  line-height: 1.4;
  color: var(--color-text);
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const NavArrow = styled.div`
  font-size: 0.9rem;
  color: var(--color-primary);
  font-weight: 600;
`;
