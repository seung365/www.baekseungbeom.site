"use client";

import { Image } from "@/types/index";
import { S } from "./styles";

const ImageComponent = (image: Image) => {
  return (
    <S.ImageCard>
      <S.ImageWrapper>
        <S.StyledImage src={image.url} alt={image.name} />
      </S.ImageWrapper>
      <S.ImageTitle>{image.name}</S.ImageTitle>
    </S.ImageCard>
  );
};

export default ImageComponent;
