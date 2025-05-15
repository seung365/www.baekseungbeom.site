"use client";

import React from "react";
import { Image } from "@/types/index";
import { S } from "./styles";

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
    <S.Card>
      <S.Thumbnail>
        <img src={url} alt={name} data-loaded="false" onLoad={(e) => (e.currentTarget.dataset.loaded = "true")} />
        <S.DeleteBtn onClick={() => onDelete(id)}>
          <S.DeleteIcon />
        </S.DeleteBtn>
      </S.Thumbnail>
      <S.Details>
        <p title={name}>{truncateText(name, 20)}</p>
        <small>{formatDate(createdAt)}</small>
      </S.Details>
    </S.Card>
  );
};

export default ImageCard;
