"use client";

import ImageComponent from "@/components/Gallery/ImageComponent";
import { useImageList } from "@/hooks/useImageList";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import * as styles from "./styles.css";

const Gallery = () => {
  const { images, imagesCount, error, isLoading } = useImageList();

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Gallery</h1>

      {error && <p className={styles.errorMessage}>{error}</p>}

      <div className={styles.imageGrid}>
        {isLoading
          ? Array(imagesCount)
              .fill(0)
              .map((_, index) => (
                <div key={`skeleton-${index}`} className={styles.imageCard}>
                  <Skeleton height={300} style={{ borderRadius: "8px" }} />
                  <div className={styles.skeletonWrapper}>
                    <Skeleton width={100} height={20} style={{ borderRadius: "4px" }} />
                  </div>
                </div>
              ))
          : images.map((image) => (
              <div key={image.id} className={styles.imageCard}>
                <ImageComponent {...image} />
              </div>
            ))}
      </div>
    </div>
  );
};

export default Gallery;
