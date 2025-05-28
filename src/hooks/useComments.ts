"use client";

import { useEffect, useState } from "react";

export type Comment = {
  id: string;
  name: string;
  message: string;
  createdAt: string;
  updatedAt: string;
};

export const useComments = () => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchComments = async () => {
    try {
      setIsLoading(true);
      setError(null);

      const response = await fetch("/api/comments");

      if (!response.ok) {
        throw new Error("댓글을 가져오는데 실패했습니다.");
      }

      const data = await response.json();
      setComments(data.comments);
    } catch (error) {
      console.error("Failed to fetch comments:", error);
      setError("댓글을 불러오는 중 오류가 발생했습니다.");
    } finally {
      setIsLoading(false);
    }
  };

  const addComment = async (name: string, message: string) => {
    try {
      const response = await fetch("/api/comments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, message }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || "댓글 작성에 실패했습니다.");
      }

      const data = await response.json();
      setComments((prev) => [data.comment, ...prev]);
      return { success: true };
    } catch (error) {
      console.error("Failed to add comment:", error);
      return {
        success: false,
        error: error instanceof Error ? error.message : "댓글 작성 중 오류가 발생했습니다.",
      };
    }
  };

  const deleteComment = async (id: string) => {
    try {
      const response = await fetch(`/api/comments?id=${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || "댓글 삭제에 실패했습니다.");
      }

      setComments((prev) => prev.filter((comment) => comment.id !== id));
      return { success: true };
    } catch (error) {
      console.error("Failed to delete comment:", error);
      return {
        success: false,
        error: error instanceof Error ? error.message : "댓글 삭제 중 오류가 발생했습니다.",
      };
    }
  };

  useEffect(() => {
    fetchComments();
  }, []);

  return {
    comments,
    isLoading,
    error,
    fetchComments,
    addComment,
    deleteComment,
  };
};
