"use client";

import { useState } from "react";

export const useGuestbookForm = (
  addComment: (name: string, message: string) => Promise<{ success: boolean; error?: string }>,
) => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim() || !message.trim()) {
      setSubmitError("이름과 메시지를 모두 입력해주세요.");
      return;
    }

    setIsSubmitting(true);
    setSubmitError(null);

    const result = await addComment(name.trim(), message.trim());

    if (result.success) {
      setName("");
      setMessage("");
      setSubmitError(null);
    } else {
      setSubmitError(result.error || "댓글 작성 중 오류가 발생했습니다.");
    }

    setIsSubmitting(false);
  };

  const resetForm = () => {
    setName("");
    setMessage("");
    setSubmitError(null);
  };

  return {
    name,
    setName,
    message,
    setMessage,
    isSubmitting,
    submitError,
    handleSubmit,
    resetForm,
  };
};
