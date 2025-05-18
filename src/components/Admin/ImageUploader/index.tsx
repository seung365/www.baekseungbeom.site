"use client";

import React, { useState, useRef } from "react";
import { Image } from "@/types/index";
import { S } from "./styles";

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
    <S.UploaderForm onSubmit={handleSubmit}>
      <S.SectionTitle>이미지 업로드</S.SectionTitle>

      <S.FileInput type="file" ref={fileInputRef} onChange={handleFileChange} accept="image/*" />

      {previewUrl && (
        <S.PreviewContainer>
          <S.PreviewTitle>미리보기</S.PreviewTitle>
          <S.ImagePreview>
            <img src={previewUrl} alt="Preview" />
          </S.ImagePreview>
          <S.PreviewInfo>
            <p>파일명: {selectedImage?.name}</p>
            <p>크기: {Math.round((selectedImage?.size || 0) / 1024)} KB</p>
          </S.PreviewInfo>
        </S.PreviewContainer>
      )}
      <S.CustomInput
        placeholder="이미지 이름을 입력하세요"
        type="text"
        onChange={(event) => {
          setIsImageName(event.target.value);
        }}
        value={isImageName}
        required
      />
      <S.ButtonGroup>
        <S.PrimaryButton type="submit" disabled={isUploading}>
          {isUploading ? "업로드 중..." : "업로드"}
        </S.PrimaryButton>

        {selectedImage && (
          <S.SecondaryButton type="button" onClick={handleClear}>
            취소
          </S.SecondaryButton>
        )}
      </S.ButtonGroup>

      {uploadStatus && <S.StatusMessage success={uploadStatus.includes("성공")}>{uploadStatus}</S.StatusMessage>}
    </S.UploaderForm>
  );
};

export default ImageUploader;
