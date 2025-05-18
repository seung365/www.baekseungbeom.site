"use client";

import styled from "@emotion/styled";
import { useImageList } from "@/hooks/useImageList";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Gallery = () => {
  const { images, error, isLoading } = useImageList();

  return (
    <Wrapper>
      <h1>Gallery</h1>
      {error && <p>{error}</p>}
      <ImageGrid>
        {isLoading
          ? Array(6)
              .fill(0)
              .map((_, index) => (
                <ImageCard key={`skeleton-${index}`}>
                  <Skeleton height={300} style={{ borderRadius: "8px" }} />
                  <Skeleton width={100} height={20} style={{ marginTop: "8px", borderRadius: "4px" }} />
                </ImageCard>
              ))
          : images.map((image) => (
              <ImageCard key={image.id}>
                <img src={image.url} alt={image.name} />
                <p>{image.name}</p>
              </ImageCard>
            ))}
      </ImageGrid>
    </Wrapper>
  );
};

export default Gallery;

const Wrapper = styled.div`
  min-height: calc(100vh - 80px);
  background: var(--color-background);
  color: var(--color-text);
  display: flex;
  padding: 1rem 2rem;
  padding-bottom: 80px;
  flex-direction: column;
`;

const ImageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
  padding: 16px;

  img {
    width: 100%;
    height: auto;
    border-radius: 8px;
    box-shadow: 0 4px rgba(0, 0, 0, 0.1);
  }

  p {
    text-align: center;
    margin-top: 8px;
    font-size: 14px;
    color: var(--color-text-secondary);
  }
`;

const ImageCard = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;
