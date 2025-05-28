import { getAvatarForName } from "@/_utils/avatarUtils";
import { formatDate } from "@/_utils/dateUtils";
import { Comment } from "@/hooks/useComments";
import { S } from "./styles";

interface CommentListProps {
  comments: Comment[];
  isLoading: boolean;
  error: string | null;
}

const CommentList = ({ comments, isLoading, error }: CommentListProps) => {
  return (
    <S.CommentsSection>
      <S.SectionHeader>
        <S.SectionTitle>
          <S.CommentIcon>📝</S.CommentIcon>
          방명록 ({comments.length})
        </S.SectionTitle>
      </S.SectionHeader>

      {error && <S.ErrorMessage>{error}</S.ErrorMessage>}

      <S.CommentsContainer>
        {isLoading ? (
          <S.LoadingState>
            <S.Spinner large />
            <S.LoadingText>댓글을 불러오는 중...</S.LoadingText>
          </S.LoadingState>
        ) : comments.length === 0 ? (
          <S.EmptyState>
            <S.EmptyIcon>🌟</S.EmptyIcon>
            <S.EmptyTitle>첫 번째 메시지를 남겨주세요!</S.EmptyTitle>
            <S.EmptySubtext>여러분의 소중한 의견을 기다리고 있어요</S.EmptySubtext>
          </S.EmptyState>
        ) : (
          <S.CommentListWrapper>
            {comments.map((comment, index) => {
              const avatar = getAvatarForName(comment.name);

              return (
                <S.CommentItem key={comment.id} delay={index * 0.1}>
                  <S.CommentContent>
                    <S.CommentHeader>
                      <S.AuthorInfo>
                        <S.Avatar gradient={avatar.gradient}>{avatar.emoji}</S.Avatar>
                        <S.AuthorDetails>
                          <S.CommentAuthor>{comment.name}</S.CommentAuthor>
                          <S.CommentDate>{formatDate(comment.createdAt)}</S.CommentDate>
                        </S.AuthorDetails>
                      </S.AuthorInfo>
                    </S.CommentHeader>
                    <S.CommentMessage>{comment.message}</S.CommentMessage>
                  </S.CommentContent>
                </S.CommentItem>
              );
            })}
          </S.CommentListWrapper>
        )}
      </S.CommentsContainer>
    </S.CommentsSection>
  );
};

export default CommentList;
