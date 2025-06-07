import styled from "@emotion/styled";

const BlogHeader = () => {
  return (
    <Header>
      <Title>📝 Blog</Title>
      <Subtitle>개발하며 배운 것들을 기록합니다</Subtitle>
    </Header>
  );
};

export default BlogHeader;

const Header = styled.header`
  text-align: center;
  margin-bottom: 3rem;
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  margin: 0 0 1rem 0;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: var(--color-text-secondary);
  margin: 0;
  font-weight: 300;
`;
