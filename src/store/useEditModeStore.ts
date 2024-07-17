import { create } from "zustand";

interface EditState {
  isEdit: boolean;
  setEdit: () => void;
  unSetEdit: () => void;
}

const useModalStore = create<EditState>((set) => ({
  isEdit: false,
  setEdit: () => set({ isEdit: true }),
  unSetEdit: () => set({ isEdit: false }),
}));

export default useModalStore;