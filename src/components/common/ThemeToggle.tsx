import styled from "@emotion/styled";
import useThemeStore from "../../store/ThemeStore";
import { useTheme } from "../../hooks/useTheme";

const ThemeToggle = () => {
  const { toggleTheme } = useTheme();
  const { isDark } = useThemeStore();

  return <ToggleButton onClick={toggleTheme}>{isDark ? "Dark mode" : "Light mode"}</ToggleButton>;
};

export default ThemeToggle;

const ToggleButton = styled.button`
  position: fixed;
  top: 1rem;
  right: 1rem;
  z-index: 10;
  width: 100px;
  height: 40px;
  background: transparent;
  color: ${({ theme }) => theme.text};
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  border: none;

  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    top: 0.5rem;
    right: 0.5rem;
    width: 80px;
    height: 32px;
    font-size: 0.8rem;
  }
`;
