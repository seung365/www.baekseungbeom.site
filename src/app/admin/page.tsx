"use client";

import styled from "@emotion/styled";

const admin = () => {
  return (
    <Wrapper>
      <h1>Admin</h1>
      <p>Admin page content goes here.</p>
    </Wrapper>
  );
};

export default admin;

const Wrapper = styled.div`
  height: 100vh;
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  display: flex;
  padding-top: 60px;
`;
