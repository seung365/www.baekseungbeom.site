"use client";

import { Image } from "@/types/index";
import * as styles from "./styles.css";

const ImageComponent = (image: Image) => {
  return (
    <div className={styles.imageCard}>
      <div className={styles.imageWrapper}>
        <img className={styles.styledImage} src={image.url} alt={image.name} />
      </div>
      <p className={styles.imageTitle}>{image.name}</p>
    </div>
  );
};

export default ImageComponent;
