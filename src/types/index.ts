export type ThemeState = {
  isDark: boolean;
  setIsDark: (isDark: boolean) => void;
};

export type Image = {
  id: string;
  url: string;
  name: string;
  createdAt: string;
};
