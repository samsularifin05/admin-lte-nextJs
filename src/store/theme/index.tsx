import { create } from "zustand";

interface ThemeModel {
  header: boolean;
  sidebar: boolean;
  footer: boolean;
  content: boolean;
}

interface ThemeState {
  themes: ThemeModel;
  setTheme: (newTheme: Partial<ThemeModel>) => void;
}

const useThemeStore = create<ThemeState>((set) => ({
  themes: {
    header: true,
    sidebar: true,
    footer: true,
    content: true
  },
  setTheme: (newTheme) =>
    set((state) => ({ themes: { ...state.themes, ...newTheme } }))
}));

export default useThemeStore;
