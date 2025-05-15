"use client";

import React, { useState, useRef } from "react";
import styled from "@emotion/styled";
import { Image } from "@/types/index";

interface ImageUploaderProps {
  onUploadSuccess: (image: Image) => void;
}

const ImageUploader = ({ onUploadSuccess }: ImageUploaderProps) => {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadStatus, setUploadStatus] = useState<string | null>(null);
  const [isImageName, setIsImageName] = useState<string>("");
  const fileInputRef = useRef<HTMLInputElement>(null);

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
      onUploadSuccess(data.image);

      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
      setSelectedImage(null);
      setPreviewUrl(null);
      setIsImageName("");
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
    setIsImageName("");
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleUpload();
  };

  return (
    <UploaderForm onSubmit={handleSubmit}>
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
    </UploaderForm>
  );
};

export default ImageUploader;

const UploaderForm = styled.form`
  background: var(--color-card-background);
  border-radius: 8px;
  padding: 24px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

const SectionTitle = styled.h2`
  font-size: 20px;
  margin-top: 0;
  margin-bottom: 20px;
  padding-bottom: 10px;
  border-bottom: 1px solid var(--color-border);
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
