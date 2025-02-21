import { calculateWindowSize } from "@/components/utils/function";
import { create } from "zustand";

interface LoadingModel {
  content: boolean;
  button: boolean;
  tabel: boolean;
}

interface ModelModal {
  isModalShow: boolean;
  isEdit: boolean;
  data: any;
}

interface ScreenSizeState {
  screenSize: string;
  setScreenSize: (width: string) => void;
}

interface SidebarState {
  menuSidebarCollapsed: boolean;
  toggleSidebar: () => void;
}

export const useLoadingStore = create<{
  loading: LoadingModel;
  setLoading: (newLoading: Partial<LoadingModel>) => void;
}>((set) => ({
  loading: {
    button: false,
    content: false,
    tabel: false
  },
  setLoading: (newLoading) =>
    set((state) => ({ loading: { ...state.loading, ...newLoading } }))
}));

export const useModalStore = create<{
  modal: ModelModal;
  setModal: (newModal: Partial<ModelModal>) => void;
}>((set) => ({
  modal: {
    isModalShow: false,
    isEdit: false,
    data: []
  },
  setModal: (newModal) =>
    set((state) => ({ modal: { ...state.modal, ...newModal } }))
}));

export const useScreenSizeStore = create<ScreenSizeState>((set) => ({
  screenSize: calculateWindowSize(
    typeof window !== "undefined" ? window.innerWidth : 0
  ),
  setScreenSize: (width) => set({ screenSize: width })
}));

export const useSidebarStore = create<SidebarState>((set) => ({
  menuSidebarCollapsed: false,
  toggleSidebar: () =>
    set((state) => ({ menuSidebarCollapsed: !state.menuSidebarCollapsed }))
}));
