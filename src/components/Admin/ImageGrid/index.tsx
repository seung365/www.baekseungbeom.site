"use client";

import React from "react";
import styled from "@emotion/styled";
import ImageCard from "@/components/Admin/ImageCard";
import { Image } from "@/types/index";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

interface ImageGridProps {
  images: Image[];
  onDelete: (id: string) => void;
  onRetry: () => void;
}

const ImageGrid = ({ images, onDelete, onRetry }: ImageGridProps) => {
  if (images.length === 0) {
    return <EmptyState>업로드된 이미지가 없습니다.</EmptyState>;
  }

  return (
    <Suspense fallback={<LoadingState>이미지를 불러오는 중...</LoadingState>}>
      <ErrorBoundary
        FallbackComponent={({ error, resetErrorBoundary }) => (
          <ErrorState>
            {error.message}
            <RetryButton
              onClick={() => {
                resetErrorBoundary();
                onRetry();
              }}
            >
              다시 시도
            </RetryButton>
          </ErrorState>
        )}
      >
        <Grid>
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
        </Grid>
      </ErrorBoundary>
    </Suspense>
  );
};

export default ImageGrid;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  gap: 16px;
`;

const LoadingState = styled.div`
  padding: 40px 0;
  text-align: center;
  color: var(--color-text-secondary);
`;

const ErrorState = styled.div`
  padding: 40px 0;
  text-align: center;
  color: var(--color-error);
`;

const RetryButton = styled.button`
  margin-top: 10px;
  padding: 8px 16px;
  background-color: var(--color-primary);
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  display: block;
  margin: 10px auto 0;

  &:hover {
    opacity: 0.9;
  }
`;

const EmptyState = styled.div`
  padding: 40px 0;
  text-align: center;
  color: var(--color-text-secondary);
`;
