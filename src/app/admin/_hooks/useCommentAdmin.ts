"use client";

interface CommentAdminProps {
  deleteComment: (id: string) => Promise<{ success: boolean; error?: string }>;
}

export const useCommentAdmin = ({ deleteComment }: CommentAdminProps) => {
  const handleDelete = async (id: string) => {
    if (!confirm("정말로 이 댓글을 삭제하시겠습니까?")) {
      return;
    }

    const result = await deleteComment(id);
    if (!result.success) {
      alert(result.error || "댓글 삭제 중 오류가 발생했습니다.");
    }
  };

  return {
    handleDelete,
  };
};
