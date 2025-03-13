import { FilterType } from "@/types/filter-type";
import { createContext, ReactNode, useState } from "react";

// type FilterContextType = {
//   filter: {
//     type: FilterType;
//   };
//   setFilter: React.Dispatch<React.SetStateAction<>;
// };

type FilterProviderType = {
  children: ReactNode;
};

export const FilterContext = createContext({
  filter: {
    type: FilterType.all,
  },
  setFilter: () => {},
});

export const FilterProvider = ({ children }: FilterProviderType) => {
  const [filter, setFilter] = useState();
  return (
    <FilterContext value={{ Filter, setFilter }}>
      {children}
    </FilterContext>
  );
};
