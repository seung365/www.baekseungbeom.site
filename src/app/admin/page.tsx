"use client";

import { useState, useRef, useEffect } from "react";
import styled from "@emotion/styled";

type UploadedImage = {
  id: string;
  url: string;
  name: string;
  createdAt: string;
};

const AdminDashboard = () => {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadStatus, setUploadStatus] = useState<string | null>(null);
  const [images, setImages] = useState<UploadedImage[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch("/api/images");
        if (response.ok) {
          const data = await response.json();
          setImages(data.images);
        }
      } catch (error) {
        console.error("Failed to fetch images:", error);
      }
    };

    fetchImages();
  }, []);

  // 파일 선택 핸들러
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;

    if (file) {
      setSelectedImage(file);

      // 미리보기 URL 생성
      const fileUrl = URL.createObjectURL(file);
      setPreviewUrl(fileUrl);
      setUploadStatus(null);
    }
  };

  // 파일 업로드 핸들러
  const handleUpload = async () => {
    if (!selectedImage) {
      setUploadStatus("업로드할 이미지를 선택해주세요.");
      return;
    }

    try {
      setIsUploading(true);

      // FormData 생성
      const formData = new FormData();
      formData.append("file", selectedImage);

      // 서버에 업로드 요청
      const response = await fetch("/api/images", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("업로드 실패");
      }

      const data = await response.json();
      setUploadStatus("이미지가 성공적으로 업로드되었습니다.");

      // 이미지 목록 업데이트
      const updatedImages = [data.image, ...images];
      setImages(updatedImages);

      // 입력 필드 초기화
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

  // 선택 취소 핸들러
  const handleClear = () => {
    setSelectedImage(null);
    setPreviewUrl(null);
    setUploadStatus(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <Wrapper>
      <DashboardContainer>
        <Header>
          <h1>관리자 대시보드</h1>
          <LogoutButton>로그아웃</LogoutButton>
        </Header>

        <ContentGrid>
          <UploadSection>
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

            <ButtonGroup>
              <PrimaryButton onClick={handleUpload} disabled={!selectedImage || isUploading}>
                {isUploading ? "업로드 중..." : "업로드"}
              </PrimaryButton>

              {selectedImage && <SecondaryButton onClick={handleClear}>취소</SecondaryButton>}
            </ButtonGroup>

            {uploadStatus && <StatusMessage success={uploadStatus.includes("성공")}>{uploadStatus}</StatusMessage>}
          </UploadSection>

          <ImagesSection>
            <SectionTitle>업로드된 이미지</SectionTitle>

            {images.length === 0 ? (
              <EmptyState>업로드된 이미지가 없습니다.</EmptyState>
            ) : (
              <ImageGrid>
                {images.map((image) => (
                  <ImageCard key={image.id}>
                    <ImageThumbnail>
                      <img src={image.url} alt={image.name} />
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

// 스타일 컴포넌트
const Wrapper = styled.div`
  min-height: 100vh;
  background: ${({ theme }) => theme.background || "#f5f7fa"};
  color: ${({ theme }) => theme.text || "#333"};
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

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const SectionTitle = styled.h2`
  font-size: 20px;
  margin-top: 0;
  margin-bottom: 20px;
  padding-bottom: 10px;
  border-bottom: 1px solid ${({ theme }) => theme.borderColor || "#eaeaea"};
`;

const UploadSection = styled.section`
  background: ${({ theme }) => theme.cardBackground || "#fff"};
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
  color: ${({ theme }) => theme.textSecondary || "#666"};

  p {
    margin: 5px 0;
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
  background: ${({ theme }) => theme.cardBackground || "#fff"};
  border-radius: 8px;
  padding: 24px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

const EmptyState = styled.div`
  padding: 40px 0;
  text-align: center;
  color: ${({ theme }) => theme.textSecondary || "#666"};
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

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ImageDetails = styled.div`
  padding: 8px;
  background-color: ${({ theme }) => theme.cardBackground || "#fff"};

  p {
    margin: 0 0 4px 0;
    font-size: 14px;
    font-weight: 500;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  small {
    color: ${({ theme }) => theme.textSecondary || "#666"};
    font-size: 12px;
  }
`;
