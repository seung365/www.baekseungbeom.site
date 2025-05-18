import styled from "@emotion/styled";

export const S = {
  ImageCard: styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 8px;
    overflow: hidden;
    transition: transform 0.3s ease;

    &:hover {
      transform: translateY(-5px);
    }
  `,

  ImageWrapper: styled.div`
    position: relative;
    aspect-ratio: 1 / 1;
    background: var(--color-card-background);
    border-radius: 8px;
    overflow: hidden;
  `,

  StyledImage: styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 8px;
    box-shadow: var(--shadow);
    transition: opacity 0.3s ease;
  `,

  ImageTitle: styled.p`
    text-align: center;
    margin-top: 8px;
    font-size: 14px;
    color: var(--color-text-secondary);
  `,
};
