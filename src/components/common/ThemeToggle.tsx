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
  background: transparent;
  color: ${({ theme }) => theme.text};
  transition: all 0.3s ease;
  border: none;
  font: inherit;

  &:hover {
    transform: scale(1.1);
  }
`;
