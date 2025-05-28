"use client";

import { formatDate } from "@/_utils/dateUtils";
import ImageGrid from "@/components/Admin/ImageGrid";
import ImageUploader from "@/components/Admin/ImageUploader";
import { useComments } from "@/hooks/useComments";
import { useImageList } from "@/hooks/useImageList";
import { BREAKPOINTS } from "@/styles/theme";
import styled from "@emotion/styled";
import { useCommentAdmin } from "./_hooks/useCommentAdmin";
import { useImageAdmin } from "./_hooks/useImageAdmin";
import { logout } from "./login/action";

const AdminDashboard = () => {
  const { images, isLoading: imagesLoading, addImage, removeImage } = useImageList();
  const { comments, isLoading: commentsLoading, deleteComment } = useComments();
  const { handleDelete: handleImageDelete } = useImageAdmin({ removeImage });
  const { handleDelete: handleCommentDelete } = useCommentAdmin({ deleteComment });

  return (
    <Wrapper>
      <DashboardContainer>
        <Header>
          <h1>관리자 대시보드</h1>
          <LogoutButton onClick={logout}>로그아웃</LogoutButton>
        </Header>

        <ContentGrid>
          <ImageUploader onUploadSuccess={addImage} />
          <ImagesSection>
            <SectionTitle>업로드된 이미지</SectionTitle>
            {imagesLoading ? (
              <LoadingMessage>이미지를 불러오는 중...</LoadingMessage>
            ) : (
              <ImageGrid images={images} onDelete={handleImageDelete} />
            )}
          </ImagesSection>
        </ContentGrid>

        <CommentsSection>
          <SectionTitle>
            <TitleWithIcon>
              <CommentIcon>💬</CommentIcon>
              방명록 댓글 관리 ({comments.length})
            </TitleWithIcon>
          </SectionTitle>

          {commentsLoading ? (
            <LoadingMessage>댓글을 불러오는 중...</LoadingMessage>
          ) : comments.length === 0 ? (
            <EmptyMessage>댓글이 없습니다.</EmptyMessage>
          ) : (
            <CommentsList>
              {comments.map((comment) => (
                <CommentItem key={comment.id}>
                  <CommentHeader>
                    <AuthorInfo>
                      <AuthorName>{comment.name}</AuthorName>
                      <CommentDate>{formatDate(comment.createdAt)}</CommentDate>
                    </AuthorInfo>
                    <DeleteButton onClick={() => handleCommentDelete(comment.id)}>
                      <DeleteIcon>🗑️</DeleteIcon>
                      삭제
                    </DeleteButton>
                  </CommentHeader>
                  <CommentMessage>{comment.message}</CommentMessage>
                </CommentItem>
              ))}
            </CommentsList>
          )}
        </CommentsSection>
      </DashboardContainer>
    </Wrapper>
  );
};

export default AdminDashboard;

const Wrapper = styled.div`
  min-height: 100vh;
  background: var(--color-background);
  color: var(--color-text);
  padding: 20px 40px;
  padding-bottom: 80px;
`;

const DashboardContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;

  h1 {
    margin: 0;
    font-size: 28px;
  }
`;

const LogoutButton = styled.button`
  background-color: #f44336;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 10px 20px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: #d32f2f;
    transform: translateY(-1px);
  }
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  margin-bottom: 40px;

  @media (max-width: ${BREAKPOINTS.tablet}) {
    grid-template-columns: 1fr;
  }
`;

const SectionTitle = styled.h2`
  font-size: 20px;
  margin-top: 0;
  margin-bottom: 20px;
  padding-bottom: 10px;
  border-bottom: 1px solid var(--color-border);
`;

const TitleWithIcon = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const CommentIcon = styled.span`
  font-size: 18px;
`;

const ImagesSection = styled.section`
  background: var(--color-card-background);
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

const CommentsSection = styled.section`
  background: var(--color-card-background);
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

const LoadingMessage = styled.p`
  text-align: center;
  color: var(--color-text-secondary);
  font-size: 16px;
  margin: 40px 0;
`;

const EmptyMessage = styled.p`
  text-align: center;
  color: var(--color-text-secondary);
  font-size: 16px;
  margin: 40px 0;
  font-style: italic;
`;

const CommentsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-height: 500px;
  overflow-y: auto;
  padding-right: 8px;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: var(--color-background);
    border-radius: 3px;
  }

  &::-webkit-scrollbar-thumb {
    background: var(--color-border);
    border-radius: 3px;

    &:hover {
      background: var(--color-text-secondary);
    }
  }
`;

const CommentItem = styled.div`
  background: var(--color-background);
  border: 1px solid var(--color-border);
  border-radius: 8px;
  padding: 16px;
  transition: all 0.2s ease;

  &:hover {
    border-color: var(--color-text-secondary);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }
`;

const CommentHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 12px;
  gap: 16px;

  @media (max-width: ${BREAKPOINTS.mobile}) {
    flex-direction: column;
    align-items: stretch;
    gap: 12px;
  }
`;

const AuthorInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  flex: 1;
`;

const AuthorName = styled.span`
  font-weight: 600;
  color: var(--color-text);
  font-size: 15px;
`;

const CommentDate = styled.span`
  font-size: 12px;
  color: var(--color-text-secondary);
`;

const DeleteButton = styled.button`
  background: linear-gradient(135deg, #f44336, #d32f2f);
  color: white;
  border: none;
  border-radius: 6px;
  padding: 8px 12px;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  gap: 4px;
  flex-shrink: 0;

  &:hover {
    background: linear-gradient(135deg, #d32f2f, #b71c1c);
    transform: translateY(-1px);
    box-shadow: 0 2px 8px rgba(244, 67, 54, 0.3);
  }

  &:active {
    transform: translateY(0);
  }
`;

const DeleteIcon = styled.span`
  font-size: 12px;
`;

const CommentMessage = styled.p`
  margin: 0;
  line-height: 1.6;
  color: var(--color-text);
  font-size: 14px;
  white-space: pre-wrap;
  background: rgba(255, 255, 255, 0.5);
  padding: 12px;
  border-radius: 6px;
  border: 1px solid rgba(0, 0, 0, 0.05);
`;
