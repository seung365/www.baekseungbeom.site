"use client";

import styled from "@emotion/styled";
import { useImageList } from "@/hooks/useImageList";

const gallery = () => {
  const { images, isLoading, error } = useImageList();

  return (
    <Wrapper>
      <h1>Gallery</h1>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <ImageGrid>
        {images.map((image) => (
          <div key={image.id}>
            <img src={image.url} alt={image.name} />
            <p>{image.name}</p>
          </div>
        ))}
      </ImageGrid>
    </Wrapper>
  );
};

export default gallery;

const Wrapper = styled.div`
  height: 100vh;
  background: var(--color-background);
  color: var(--color-text);
  display: flex;
  padding: 60px 30px;
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
    box-shadow: var(--shadow);
  }

  p {
    text-align: center;
    margin-top: 8px;
    font-size: 14px;
    color: var(--color-text-secondary);
  }
`;
