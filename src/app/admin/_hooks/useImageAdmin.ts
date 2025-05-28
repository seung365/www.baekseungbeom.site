"use client";

interface ImageAdminProps {
  removeImage: (imageId: string) => void;
}

export const useImageAdmin = ({ removeImage }: ImageAdminProps) => {
  const handleDelete = async (imageId: string) => {
    if (!confirm("이 이미지를 삭제하시겠습니까?")) {
      return;
    }

    try {
      const response = await fetch(`/api/images?id=${imageId}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("삭제 실패");
      }

      removeImage(imageId);
    } catch (error) {
      console.error("Delete error:", error);
      alert("이미지 삭제 중 오류가 발생했습니다.");
    }
  };

  return {
    handleDelete,
  };
};
