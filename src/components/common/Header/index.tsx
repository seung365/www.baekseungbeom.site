"use client";

import styled from "@emotion/styled";

const Header = () => {
  return (
    <Wrapper>
      <nav>
        <ul>
          <li>
            <div>About</div>
            <div>Gallery</div>
          </li>
        </ul>
      </nav>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 60px;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`;
