"use client";

import { Image } from "@/types/index";
import React, { useRef, useState } from "react";
import * as styles from "./styles.css";

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
    <form className={styles.uploaderForm} onSubmit={handleSubmit}>
      <h2 className={styles.sectionTitle}>이미지 업로드</h2>

      <input type="file" ref={fileInputRef} onChange={handleFileChange} accept="image/*" className={styles.fileInput} />

      {previewUrl && (
        <div className={styles.previewContainer}>
          <h3 className={styles.previewTitle}>미리보기</h3>
          <div className={styles.imagePreview}>
            <img src={previewUrl} alt="Preview" />
          </div>
          <div className={styles.previewInfo}>
            <p>파일명: {selectedImage?.name}</p>
            <p>크기: {Math.round((selectedImage?.size || 0) / 1024)} KB</p>
          </div>
        </div>
      )}

      <input
        className={styles.customInput}
        placeholder="이미지 이름을 입력하세요"
        type="text"
        onChange={(event) => {
          setIsImageName(event.target.value);
        }}
        value={isImageName}
        required
      />

      <div className={styles.buttonGroup}>
        <button type="submit" disabled={isUploading} className={styles.primaryButton}>
          {isUploading ? "업로드 중..." : "업로드"}
        </button>

        {selectedImage && (
          <button type="button" onClick={handleClear} className={styles.secondaryButton}>
            취소
          </button>
        )}
      </div>

      {uploadStatus && (
        <div
          className={styles.statusMessage({
            success: uploadStatus.includes("성공"),
          })}
        >
          {uploadStatus}
        </div>
      )}
    </form>
  );
};

export default ImageUploader;
