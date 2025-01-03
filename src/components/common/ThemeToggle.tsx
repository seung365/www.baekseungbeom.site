import styled from "@emotion/styled"

type ThemeToggleProps = {
  isDark: boolean
  setIsDark: (isDark: boolean) => void
}

const ThemeToggle = ({ isDark, setIsDark }: ThemeToggleProps) => (
  <ToggleButton onClick={() => setIsDark(!isDark)}>{isDark ? "🌙" : "☀️"}</ToggleButton>
)

export default ThemeToggle

const ToggleButton = styled.button`
  position: fixed;
  top: 1rem;
  right: 1rem;
  z-index: 10;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: ${({ theme }) => theme.surface};
  color: ${({ theme }) => theme.text};
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 0 10px ${({ theme }) => theme.primary}40;
  }
`
