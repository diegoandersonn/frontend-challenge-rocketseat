import { ReactNode } from "react";
import { CategoryFilterType } from "./category-filter-type";

export type FilterContextType = {
  categoryFilter: CategoryFilterType;
  setCategoryFilter: (categoryFilter: CategoryFilterType) => void;
  page: number;
  setPage: (page: number) => void;
  perPage: number;
};
export type FilterProviderType = {
  children: ReactNode;
};