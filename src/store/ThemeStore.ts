import { create } from "zustand";
import { ThemeState } from "../types";

const useThemeStore = create<ThemeState>((set) => ({
  isDark: true,
  setIsDark: (isDark: boolean) => set({ isDark }),
}));

export default useThemeStore;
