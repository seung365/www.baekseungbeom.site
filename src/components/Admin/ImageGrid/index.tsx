"use client";

import React from "react";
import ImageCard from "@/components/Admin/ImageCard";
import { Image } from "@/types/index";
import { S } from "./styles";
interface ImageGridProps {
  images: Image[];
  onDelete: (id: string) => void;
}

const ImageGrid = ({ images, onDelete }: ImageGridProps) => {
  if (images.length === 0) {
    return <S.EmptyState>업로드된 이미지가 없습니다.</S.EmptyState>;
  }

  return (
    <S.Grid>
      {images.map((image) => (
        <ImageCard
          key={image.id}
          id={image.id}
          url={image.url}
          name={image.name}
          createdAt={image.createdAt}
          onDelete={onDelete}
        />
      ))}
    </S.Grid>
  );
};

export default ImageGrid;
