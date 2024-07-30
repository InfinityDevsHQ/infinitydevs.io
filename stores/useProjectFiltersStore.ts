import { create } from "zustand";

type FilterStore = {
  currentFilters: string[];
  addFilter: (filter: string) => void;
  removeFilter: (filter: string) => void;
};

const useProjectFilters = create<FilterStore>((set) => ({
  currentFilters: [],
  addFilter: (filter: string) =>
    set((state) => ({
      currentFilters: [...state.currentFilters, filter],
    })),
  removeFilter: (filter: string) =>
    set((state) => ({
      currentFilters: state.currentFilters.filter(
        (currentFilter) => currentFilter !== filter
      ),
    })),
}));

export default useProjectFilters;
