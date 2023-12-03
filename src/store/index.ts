import { create } from "zustand";

interface store {
    sidebar: boolean;
    toggleSidebar: () => void;
}

export const useStore = create<store>((set) => ({
    // sidebar
    sidebar: false,
    toggleSidebar: () => set((state) => ({ sidebar: !state.sidebar })),
}))