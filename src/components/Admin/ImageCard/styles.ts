import styled from "@emotion/styled";

export const S = {
  Card: styled.div`
    border-radius: 6px;
    overflow: hidden;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s;

    &:hover {
      transform: translateY(-4px);
    }
  `,

  Thumbnail: styled.div`
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
  `,
  DeleteBtn: styled.button`
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
  `,

  DeleteIcon: styled.span`
    &:before {
      content: "×";
      font-size: 18px;
    }
  `,

  Details: styled.div`
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
  `,
};
