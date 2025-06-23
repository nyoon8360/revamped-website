import { create } from 'zustand';

const useBackgroundStore = create((set) => ({
    background: "none",
    setBackground: (newBackground) => set({ background: newBackground }),
    clearBackground: () => set({ background: "none" })
}));

export { useBackgroundStore };