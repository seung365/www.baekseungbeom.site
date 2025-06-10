"use client";

import { Image } from "@/types/index";
import * as styles from "./styles.css";

interface ImageProps extends Image {
  onDelete: (id: string) => void;
}

const truncateText = (text: string, maxLength: number) => {
  return text.length > maxLength ? text.substring(0, maxLength) + "..." : text;
};

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

const ImageCard = ({ id, url, name, createdAt, onDelete }: ImageProps) => {
  return (
    <div className={styles.card}>
      <div className={styles.thumbnail}>
        <img src={url} alt={name} data-loaded="false" onLoad={(e) => (e.currentTarget.dataset.loaded = "true")} />
        <button
          className={styles.deleteBtn}
          onClick={() => onDelete(id)}
          type="button"
          aria-label={`${name} 이미지 삭제`}
        >
          <span className={styles.deleteIcon} />
        </button>
      </div>
      <div className={styles.details}>
        <p title={name}>{truncateText(name, 20)}</p>
        <small>{formatDate(createdAt)}</small>
      </div>
    </div>
  );
};

export default ImageCard;
