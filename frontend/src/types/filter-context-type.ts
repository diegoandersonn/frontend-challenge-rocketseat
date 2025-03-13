import { ReactNode } from "react";
import { CategoryFilterType } from "./category-filter-type";
import { OrderFilterType } from "./order-filter-type";

export type FilterContextType = {
  categoryFilter: CategoryFilterType;
  setCategoryFilter: (categoryFilter: CategoryFilterType) => void;
  page: number;
  setPage: (page: number) => void;
  perPage: number;
  orderFilter: OrderFilterType | null;
  setOrderFilter: (orderFilter: OrderFilterType) => void;
};
export type FilterProviderType = {
  children: ReactNode;
};