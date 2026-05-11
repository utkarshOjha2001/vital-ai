import {create} from 'zustand';

const useStore = create<BearState>((set) => ({
    bears: 0,
    increaseBears: () => set((state) => ({ bears: state.bears + 1 })),
    removeAllBears: () => set({ bears: 0 }),
    updateBears: (newBears) => set({ bears: newBears }),
  }))