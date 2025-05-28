"use client";

import CommentForm from "@/components/Guestbook/CommentForm";
import CommentList from "@/components/Guestbook/CommentList";
import { useComments } from "@/hooks/useComments";
import { BREAKPOINTS } from "@/styles/theme";
import styled from "@emotion/styled";
import { useGuestbookForm } from "./_hooks/useGuestbookForm";

const Guestbook = () => {
  const { comments, isLoading, error, addComment } = useComments();
  const { name, setName, message, setMessage, isSubmitting, submitError, handleSubmit } = useGuestbookForm(addComment);

  return (
    <Wrapper>
      <Container>
        <Header>
          <Title>방명록</Title>
          <Subtitle>자유롭게 의견을 남겨주세요 ✨</Subtitle>
        </Header>

        <ContentLayout>
          <FormSection>
            <CommentForm
              name={name}
              setName={setName}
              message={message}
              setMessage={setMessage}
              isSubmitting={isSubmitting}
              submitError={submitError}
              onSubmit={handleSubmit}
            />
          </FormSection>

          <CommentList comments={comments} isLoading={isLoading} error={error} />
        </ContentLayout>
      </Container>
    </Wrapper>
  );
};

export default Guestbook;

const Wrapper = styled.div`
  min-height: calc(100vh - 60px);
  background: var(--color-background);
  padding: 1rem 2rem;
  padding-bottom: 80px;
`;

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  gap: 20px;
  padding: 16px;
`;

const Header = styled.header`
  text-align: center;
  margin-bottom: 2rem;
  color: white;
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  margin: 0 0 0.5rem 0;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);

  @media (max-width: ${BREAKPOINTS.mobile}) {
    font-size: 2.5rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.1rem;
  opacity: 0.9;
  margin: 0;
  font-weight: 300;
`;

const ContentLayout = styled.div`
  display: grid;
  grid-template-columns: 400px 1fr;
  gap: 2rem;
  align-items: start;

  @media (max-width: ${BREAKPOINTS.tablet}) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const FormSection = styled.div`
  top: 2rem;
`;
