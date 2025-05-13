"use client";

import { useState, useEffect } from "react";

export type UploadedImage = {
  id: string;
  url: string;
  name: string;
  createdAt: string;
};

export const useImageList = () => {
  const [images, setImages] = useState<UploadedImage[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchImages = async () => {
    try {
      setIsLoading(true);
      setError(null);

      const response = await fetch("/api/images");

      if (!response.ok) {
        throw new Error("이미지를 가져오는데 실패했습니다.");
      }

      const data = await response.json();
      setImages(data.images);
    } catch (error) {
      console.error("Failed to fetch images:", error);
      setError("이미지를 불러오는 중 오류가 발생했습니다.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

  const addImage = (newImage: UploadedImage) => {
    setImages([newImage, ...images]);
  };

  const removeImage = (imageId: string) => {
    setImages(images.filter((img) => img.id !== imageId));
  };

  return {
    images,
    isLoading,
    error,
    refreshImages: fetchImages,
    addImage,
    removeImage,
  };
};
