"use client";

import { formatDate } from "@/_utils/dateUtils";
import ImageGrid from "@/components/Admin/ImageGrid";
import ImageUploader from "@/components/Admin/ImageUploader";
import { useComments } from "@/hooks/useComments";
import { useImageList } from "@/hooks/useImageList";
import { useCommentAdmin } from "./_hooks/useCommentAdmin";
import { useImageAdmin } from "./_hooks/useImageAdmin";
import { logout } from "./login/action";
import * as styles from "./styles.css";

const AdminDashboard = () => {
  const { images, isLoading: imagesLoading, addImage, removeImage } = useImageList();
  const { comments, isLoading: commentsLoading, deleteComment } = useComments();
  const { handleDelete: handleImageDelete } = useImageAdmin({ removeImage });
  const { handleDelete: handleCommentDelete } = useCommentAdmin({ deleteComment });

  return (
    <div className={styles.wrapper}>
      <div className={styles.dashboardContainer}>
        <header className={styles.header}>
          <h1>관리자 대시보드</h1>
          <button className={styles.logoutButton} onClick={logout}>
            로그아웃
          </button>
        </header>

        <div className={styles.contentGrid}>
          <ImageUploader onUploadSuccess={addImage} />
          <section className={styles.imagesSection}>
            <h2 className={styles.sectionTitle}>업로드된 이미지</h2>
            {imagesLoading ? (
              <p className={styles.loadingMessage}>이미지를 불러오는 중...</p>
            ) : (
              <ImageGrid images={images} onDelete={handleImageDelete} />
            )}
          </section>
        </div>

        <section className={styles.commentsSection}>
          <h2 className={styles.sectionTitle}>
            <div className={styles.titleWithIcon}>
              <span className={styles.commentIcon}>💬</span>
              방명록 댓글 관리 ({comments.length})
            </div>
          </h2>

          {commentsLoading ? (
            <p className={styles.loadingMessage}>댓글을 불러오는 중...</p>
          ) : comments.length === 0 ? (
            <p className={styles.emptyMessage}>댓글이 없습니다.</p>
          ) : (
            <div className={styles.commentsList}>
              {comments.map((comment) => (
                <div key={comment.id} className={styles.commentItem}>
                  <div className={styles.commentHeader}>
                    <div className={styles.authorInfo}>
                      <span className={styles.authorName}>{comment.name}</span>
                      <span className={styles.commentDate}>{formatDate(comment.createdAt)}</span>
                    </div>
                    <button
                      className={styles.deleteButton}
                      onClick={() => handleCommentDelete(comment.id)}
                      type="button"
                      aria-label={`${comment.name}의 댓글 삭제`}
                    >
                      <span className={styles.deleteIcon}>🗑️</span>
                      삭제
                    </button>
                  </div>
                  <p className={styles.commentMessage}>{comment.message}</p>
                </div>
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default AdminDashboard;
