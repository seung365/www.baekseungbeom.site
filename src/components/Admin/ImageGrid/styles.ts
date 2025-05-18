import styled from "@emotion/styled";

export const S = {
  Grid: styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
    gap: 16px;
  `,

  EmptyState: styled.div`
    padding: 40px 0;
    text-align: center;
    color: var(--color-text-secondary);
  `,
};
