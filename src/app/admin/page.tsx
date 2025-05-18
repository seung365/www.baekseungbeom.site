"use client";

import styled from "@emotion/styled";
import { BREAKPOINTS } from "@/styles/theme";
import { useImageList } from "@/hooks/useImageList";
import { logout } from "./login/action";
import ImageUploader from "@/components/Admin/ImageUploader";
import ImageGrid from "@/components/Admin/ImageGrid";

const AdminDashboard = () => {
  const { images, isLoading, addImage, removeImage } = useImageList();

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

  return (
    <Wrapper>
      <DashboardContainer>
        <Header>
          <h1>관리자 대시보드</h1>
          <LogoutButton onClick={logout}>로그아웃</LogoutButton>
        </Header>
        <ContentGrid>
          <ImageUploader onUploadSuccess={addImage} />
          <ImagesSection>
            <SectionTitle>업로드된 이미지</SectionTitle>
            {isLoading ? (
              <LoadingMessage>이미지를 불러오는 중...</LoadingMessage>
            ) : (
              <ImageGrid images={images} onDelete={handleDelete} />
            )}
          </ImagesSection>
        </ContentGrid>
      </DashboardContainer>
    </Wrapper>
  );
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

const ImagesSection = styled.section`
  background: var(--color-card-background);
  border-radius: 8px;
  padding: 24px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

const LoadingMessage = styled.p`
  text-align: center;
  color: var(--color-text-secondary);
  font-size: 16px;
  margin-top: 20px;
`;
