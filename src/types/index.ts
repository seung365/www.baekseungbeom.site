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

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  author: string;
  readingTime: string;
  content: string;
}

export interface BlogMetadata {
  title: string;
  description: string;
  date: string;
  tags: string[];
  author: string;
}
