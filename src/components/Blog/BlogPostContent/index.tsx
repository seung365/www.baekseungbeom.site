import { MDXRemote } from "next-mdx-remote/rsc";
import { S } from "./styles";

interface BlogPostContentProps {
  content: string;
}

// MDX 커스텀 컴포넌트
const components = {
  h1: (props: any) => <S.H1 {...props} />,
  h2: (props: any) => <S.H2 {...props} />,
  h3: (props: any) => <S.H3 {...props} />,
  p: (props: any) => <S.Paragraph {...props} />,
  code: (props: any) => <S.InlineCode {...props} />,
  pre: (props: any) => <S.CodeBlock {...props} />,
  blockquote: (props: any) => <S.Blockquote {...props} />,
  ul: (props: any) => <S.UL {...props} />,
  ol: (props: any) => <S.OL {...props} />,
  li: (props: any) => <S.LI {...props} />,
  a: (props: any) => <S.Link {...props} />,
  img: (props: any) => <S.Image {...props} />,
};

const BlogPostContent = ({ content }: BlogPostContentProps) => {
  return (
    <S.ContentWrapper>
      <MDXRemote source={content} components={components} />
    </S.ContentWrapper>
  );
};

export default BlogPostContent;
