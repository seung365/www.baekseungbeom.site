import styled from "@emotion/styled";

export const S = {
  UpButton: styled.button`
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background: var(--color-surface);
    color: var(--color-text);
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.3s ease;
    z-index: 10;

    &:hover {
      transform: scale(1.1);
      box-shadow: 0 0 10px rgba(var(--color-primary-rgb), 0.25);
    }
  `,
};
