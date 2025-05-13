"use client";

import { useState, useRef } from "react";
import styled from "@emotion/styled";
import { BREAKPOINTS } from "@/styles/theme";
import { useImageList } from "@/hooks/useImageList";
import { logout } from "./login/action";

const AdminDashboard = () => {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadStatus, setUploadStatus] = useState<string | null>(null);
  const [isImageName, setIsImageName] = useState<string>("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const { images, isLoading, error, refreshImages, addImage, removeImage } = useImageList();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;

    if (file) {
      setSelectedImage(file);

      const fileUrl = URL.createObjectURL(file);
      setPreviewUrl(fileUrl);
      setUploadStatus(null);
    }
  };

  const handleUpload = async () => {
    if (!selectedImage) {
      setUploadStatus("업로드할 이미지를 선택해주세요.");
      return;
    }

    try {
      setIsUploading(true);

      const formData = new FormData();
      formData.append("file", selectedImage);
      formData.append("name", isImageName);

      const response = await fetch("/api/images", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("업로드 실패");
      }

      const data = await response.json();
      setUploadStatus("이미지가 성공적으로 업로드되었습니다.");
      addImage(data.image);

      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
      setSelectedImage(null);
      setPreviewUrl(null);
    } catch (error) {
      console.error("Upload error:", error);
      setUploadStatus("업로드 중 오류가 발생했습니다.");
    } finally {
      setIsUploading(false);
    }
  };

  const handleClear = () => {
    setSelectedImage(null);
    setPreviewUrl(null);
    setUploadStatus(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleDelete = async (imageId: string) => {
    if (!confirm("이 이미지를 삭제하시겠습니까?")) return;

    try {
      const response = await fetch(`/api/images?id=${imageId}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("삭제 실패");
      }

      removeImage(imageId);
    } catch (error) {
      console.error("Delete error:", error);
      alert("이미지 삭제 중 오류가 발생했습니다.");
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleUpload();
  };

  return (
    <Wrapper>
      <DashboardContainer>
        <Header>
          <h1>관리자 대시보드</h1>
          <LogoutButton onClick={logout}>로그아웃</LogoutButton>
        </Header>

        <ContentGrid>
          <UploadSection onSubmit={handleSubmit}>
            <SectionTitle>이미지 업로드</SectionTitle>

            <FileInput type="file" ref={fileInputRef} onChange={handleFileChange} accept="image/*" />

            {previewUrl && (
              <PreviewContainer>
                <PreviewTitle>미리보기</PreviewTitle>
                <ImagePreview>
                  <img src={previewUrl} alt="Preview" />
                </ImagePreview>
                <PreviewInfo>
                  <p>파일명: {selectedImage?.name}</p>
                  <p>크기: {Math.round((selectedImage?.size || 0) / 1024)} KB</p>
                </PreviewInfo>
              </PreviewContainer>
            )}
            <CustomInput
              placeholder="이미지 이름을 입력하세요"
              type="text"
              onChange={(event) => {
                setIsImageName(event.target.value);
              }}
              value={isImageName}
              required
            />
            <ButtonGroup>
              <PrimaryButton type="submit" disabled={isUploading}>
                {isUploading ? "업로드 중..." : "업로드"}
              </PrimaryButton>

              {selectedImage && (
                <SecondaryButton type="button" onClick={handleClear}>
                  취소
                </SecondaryButton>
              )}
            </ButtonGroup>

            {uploadStatus && <StatusMessage success={uploadStatus.includes("성공")}>{uploadStatus}</StatusMessage>}
          </UploadSection>

          <ImagesSection>
            <SectionTitle>업로드된 이미지</SectionTitle>

            {isLoading ? (
              <LoadingState>이미지를 불러오는 중...</LoadingState>
            ) : error ? (
              <ErrorState>
                {error}
                <RetryButton onClick={refreshImages}>다시 시도</RetryButton>
              </ErrorState>
            ) : images.length === 0 ? (
              <EmptyState>업로드된 이미지가 없습니다.</EmptyState>
            ) : (
              <ImageGrid>
                {images.map((image) => (
                  <ImageCard key={image.id}>
                    <ImageThumbnail>
                      <img
                        src={image.url}
                        alt={image.name}
                        data-loaded="false"
                        onLoad={(e) => (e.currentTarget.dataset.loaded = "true")}
                      />
                      <DeleteButton onClick={() => handleDelete(image.id)}>
                        <DeleteIcon />
                      </DeleteButton>
                    </ImageThumbnail>
                    <ImageDetails>
                      <p title={image.name}>{truncateText(image.name, 20)}</p>
                      <small>{formatDate(image.createdAt)}</small>
                    </ImageDetails>
                  </ImageCard>
                ))}
              </ImageGrid>
            )}
          </ImagesSection>
        </ContentGrid>
      </DashboardContainer>
    </Wrapper>
  );
};

// 유틸리티 함수
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

export default AdminDashboard;

const Wrapper = styled.div`
  min-height: 100vh;
  background: var(--color-background);
  color: var(--color-text);
  padding: 80px 20px 40px;
`;

const DashboardContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;

  h1 {
    margin: 0;
    font-size: 28px;
  }
`;

const LogoutButton = styled.button`
  background-color: #f44336;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #d32f2f;
  }
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;

  @media (max-width: ${BREAKPOINTS.tablet}) {
    grid-template-columns: 1fr;
  }
`;

const SectionTitle = styled.h2`
  font-size: 20px;
  margin-top: 0;
  margin-bottom: 20px;
  padding-bottom: 10px;
  border-bottom: 1px solid var(--color-border);
`;

const UploadSection = styled.form`
  background: var(--color-card-background);
  border-radius: 8px;
  padding: 24px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

const FileInput = styled.input`
  width: 100%;
  padding: 12px;
  margin-bottom: 20px;
  border: 2px dashed #ddd;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    border-color: #aaa;
  }
`;

const PreviewContainer = styled.div`
  margin-bottom: 20px;
`;

const PreviewTitle = styled.h3`
  font-size: 16px;
  margin-bottom: 10px;
`;

const ImagePreview = styled.div`
  max-width: 100%;
  margin-bottom: 10px;
  border-radius: 4px;
  overflow: hidden;

  img {
    width: 100%;
    max-height: 300px;
    object-fit: contain;
  }
`;

const PreviewInfo = styled.div`
  font-size: 14px;
  color: var(--color-text-secondary);

  p {
    margin: 5px 0;
  }
`;

const CustomInput = styled.input`
  width: 100%;
  padding: 12px;
  margin-bottom: 20px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;

  &:focus {
    border-color: #0070f3;
    outline: none;
    box-shadow: 0 0 0 2px rgba(0, 112, 243, 0.2);
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`;

const PrimaryButton = styled.button`
  background-color: #0070f3;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover:not(:disabled) {
    background-color: #0051a8;
  }

  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }
`;

const SecondaryButton = styled.button`
  background-color: #f5f5f5;
  color: #333;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #e0e0e0;
  }
`;

const StatusMessage = styled.div<{ success?: boolean }>`
  padding: 12px;
  border-radius: 4px;
  background-color: ${({ success }) => (success ? "#e6f7e6" : "#ffecec")};
  color: ${({ success }) => (success ? "#2e7d32" : "#c62828")};
  font-size: 14px;
`;

const ImagesSection = styled.section`
  background: var(--color-card-background);
  border-radius: 8px;
  padding: 24px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
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

const ImageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  gap: 16px;
`;

const ImageCard = styled.div`
  border-radius: 6px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-4px);
  }
`;

const ImageThumbnail = styled.div`
  height: 120px;
  background-color: #f5f5f5;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0;
    transition: opacity 0.3s ease;

    &[data-loaded="true"] {
      opacity: 1;
    }
  }

  &:hover button {
    display: flex;
  }
`;

const DeleteButton = styled.button`
  position: absolute;
  top: 5px;
  right: 5px;
  background: rgba(0, 0, 0, 0.6);
  color: white;
  border: none;
  border-radius: 4px;
  width: 24px;
  height: 24px;
  display: none;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    background: rgba(255, 0, 0, 0.8);
  }
`;

const DeleteIcon = styled.span`
  &:before {
    content: "×";
    font-size: 18px;
  }
`;

const ImageDetails = styled.div`
  padding: 8px;
  background-color: var(--color-card-background);

  p {
    margin: 0 0 4px 0;
    font-size: 14px;
    font-weight: 500;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  small {
    color: var(--color-text-secondary);
    font-size: 12px;
  }
`;
