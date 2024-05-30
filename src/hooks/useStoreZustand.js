import { create } from "zustand";

const useStoreZustand = create((set) => ({
  indexItemNavbar: -1, // nếu set 0 , tức = giá trị mặc định thì zustand ko render
  prevIndexItemNavbar:-1,
  selectedItemNavbar: (index) => {
    set((state) => ({ prevIndexItemNavbar: Number(state.indexItemNavbar) }));
    set({ indexItemNavbar: Number(index) });
  },
}));

export default useStoreZustand;