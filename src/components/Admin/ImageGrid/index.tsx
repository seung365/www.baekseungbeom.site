"use client";

import ImageCard from "@/components/Admin/ImageCard";
import { Image } from "@/types/index";
import * as styles from "./styles.css";

interface ImageGridProps {
  images: Image[];
  onDelete: (id: string) => void;
}

const ImageGrid = ({ images, onDelete }: ImageGridProps) => {
  if (images.length === 0) {
    return <div className={styles.emptyState}>업로드된 이미지가 없습니다.</div>;
  }

  return (
    <div className={styles.grid}>
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
    </div>
  );
};

export default ImageGrid;
