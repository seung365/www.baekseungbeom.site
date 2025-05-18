import styled from "@emotion/styled";

export const S = {
  UploaderForm: styled.form`
    background: var(--color-card-background);
    border-radius: 8px;
    padding: 24px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  `,

  SectionTitle: styled.h2`
    font-size: 20px;
    margin-top: 0;
    margin-bottom: 20px;
    padding-bottom: 10px;
    border-bottom: 1px solid var(--color-border);
  `,

  FileInput: styled.input`
    width: 100%;
    padding: 12px;
    margin-bottom: 20px;
    border: 2px dashed #ddd;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
      border-color: #aaa;
    }
  `,

  PreviewContainer: styled.div`
    margin-bottom: 20px;
  `,

  PreviewTitle: styled.h3`
    font-size: 16px;
    margin-bottom: 10px;
  `,

  ImagePreview: styled.div`
    max-width: 100%;
    margin-bottom: 10px;
    border-radius: 4px;
    overflow: hidden;

    img {
      width: 100%;
      max-height: 300px;
      object-fit: contain;
    }
  `,

  PreviewInfo: styled.div`
    font-size: 14px;
    color: var(--color-text-secondary);

    p {
      margin: 5px 0;
    }
  `,

  CustomInput: styled.input`
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
  `,

  ButtonGroup: styled.div`
    display: flex;
    gap: 10px;
    margin-bottom: 20px;
  `,

  PrimaryButton: styled.button`
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
  `,

  SecondaryButton: styled.button`
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
  `,

  StatusMessage: styled.div<{ success?: boolean }>`
    padding: 12px;
    border-radius: 4px;
    background-color: ${({ success }) => (success ? "#e6f7e6" : "#ffecec")};
    color: ${({ success }) => (success ? "#2e7d32" : "#c62828")};
    font-size: 14px;
  `,
};
