import { CategoryFilterType } from "@/types/category-filter-type";
import {
  FilterContextType,
  FilterProviderType,
} from "@/types/filter-context-type";
import { OrderFilterType } from "@/types/order-filter-type";
import { createContext, useState } from "react";

export const FilterContext = createContext<FilterContextType>(
  {} as FilterContextType
);

export const FilterProvider = ({ children }: FilterProviderType) => {
  const [categoryFilter, setCategoryFilter] = useState<CategoryFilterType>(
    CategoryFilterType.all
  );
  const [orderFilter, setOrderFilter] = useState<OrderFilterType | null>(null);
  const [page, setPage] = useState<number>(0);
  const perPage = 12;

  return (
    <FilterContext
      value={{
        categoryFilter,
        setCategoryFilter,
        page,
        setPage,
        perPage,
        orderFilter,
        setOrderFilter,
      }}
    >
      {children}
    </FilterContext>
  );
};
