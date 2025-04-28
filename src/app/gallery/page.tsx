"use client";

import styled from "@emotion/styled";

const gallery = () => {
  return (
    <Wrapper>
      <h1>Gallery</h1>
      <p>This is the gallery page.</p>
    </Wrapper>
  );
};

export default gallery;

const Wrapper = styled.div`
  height: 100vh;
  background: var(--color-background);
  color: var(--color-text);
  display: flex;
  padding-top: 60px;
`;
