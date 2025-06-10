import { getAvatarForName } from "@/_utils/avatarUtils";
import { formatDate } from "@/_utils/dateUtils";
import { Comment } from "@/hooks/useComments";
import * as styles from "./styles.css";

interface CommentListProps {
  comments: Comment[];
  isLoading: boolean;
  error: string | null;
}

const CommentList = ({ comments, isLoading, error }: CommentListProps) => {
  return (
    <section className={styles.commentsSection}>
      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>
          <span className={styles.commentIcon}>📝</span>
          방명록 ({comments.length})
        </h2>
      </div>

      {error && <div className={styles.errorMessage}>{error}</div>}

      <div className={styles.commentsContainer}>
        {isLoading ? (
          <div className={styles.loadingState}>
            <div className={styles.spinner({ large: true })} />
            <p className={styles.loadingText}>댓글을 불러오는 중...</p>
          </div>
        ) : comments.length === 0 ? (
          <div className={styles.emptyState}>
            <div className={styles.emptyIcon}>🌟</div>
            <h3 className={styles.emptyTitle}>첫 번째 메시지를 남겨주세요!</h3>
            <p className={styles.emptySubtext}>여러분의 소중한 의견을 기다리고 있어요</p>
          </div>
        ) : (
          <div className={styles.commentListWrapper}>
            {comments.map((comment, index) => {
              const avatar = getAvatarForName(comment.name);

              return (
                <div
                  key={comment.id}
                  className={styles.commentItem({
                    delay: Math.min(index, 9) as 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9,
                  })}
                >
                  <div className={styles.commentContent}>
                    <div className={styles.commentHeader}>
                      <div className={styles.authorInfo}>
                        <div
                          className={styles.avatar({
                            gradient: avatar.gradient as any,
                          })}
                        >
                          {avatar.emoji}
                        </div>
                        <div className={styles.authorDetails}>
                          <span className={styles.commentAuthor}>{comment.name}</span>
                          <span className={styles.commentDate}>{formatDate(comment.createdAt)}</span>
                        </div>
                      </div>
                    </div>
                    <p className={styles.commentMessage}>{comment.message}</p>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default CommentList;
