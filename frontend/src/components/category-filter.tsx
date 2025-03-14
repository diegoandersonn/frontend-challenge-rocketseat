import { FilterContext } from "@/contexts/filter-context";
import { CategoryFilterType } from "@/types/category-filter-type";
import { useContext } from "react";
import styled, { css } from "styled-components";

const CategoryFilterStyle = styled.div`
  display: flex;
  gap: 40px;
`;

const CategoryItem = styled.p<{ active?: boolean }>`
  font-family: inherit;
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  letter-spacing: 0%;
  text-align: center;
  text-transform: uppercase;
  color: var(--text-dark);
  cursor: pointer;
  ${(props) =>
    props.active &&
    css`
      border-bottom: 4px solid var(--orange-light);
      color: var(--font-primary);
    `}
`;

export default function CategoryFilter() {
  const { categoryFilter, setCategoryFilter } = useContext(FilterContext);
  return (
    <CategoryFilterStyle>
      <CategoryItem
        active={categoryFilter === CategoryFilterType.all}
        onClick={() => setCategoryFilter(CategoryFilterType.all)}
      >
        Todos Os Produtos
      </CategoryItem >
      <CategoryItem
        active={categoryFilter === CategoryFilterType.shirt}
        onClick={() => setCategoryFilter(CategoryFilterType.shirt)}
      >
        Camisetas
      </CategoryItem >
      <CategoryItem
        active={categoryFilter === CategoryFilterType.mugs}
        onClick={() => setCategoryFilter(CategoryFilterType.mugs)}
      >
        Canecas
      </CategoryItem >
    </CategoryFilterStyle>
  );
}
