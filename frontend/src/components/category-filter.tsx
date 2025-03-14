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
  color: #737380;
  cursor: pointer;
  ${(props) =>
    props.active &&
    css`
      border-bottom: 4px solid #ffa585;
      color: #41414d;
    `}
`;

export default function CategoryFilter() {
  const { categoryFilter, setCategoryFilter } = useContext(FilterContext);
  function checkCategoryItem(categoryFilter: CategoryFilterType): boolean {
    if(categoryFilter === CategoryFilterType.all) return true;
    if(categoryFilter === CategoryFilterType.shirt) return true;
    if(categoryFilter === CategoryFilterType.mugs) return true;
    return false
  }
  return (
    <CategoryFilterStyle>
      <CategoryItem
        active={checkCategoryItem(categoryFilter)}
        onClick={() => setCategoryFilter(CategoryFilterType.all)}
      >
        Todos Os Produtos
      </CategoryItem >
      <CategoryItem
        active={checkCategoryItem(categoryFilter)}
        onClick={() => setCategoryFilter(CategoryFilterType.shirt)}
      >
        Camisetas
      </CategoryItem >
      <CategoryItem
        active={checkCategoryItem(categoryFilter)}
        onClick={() => setCategoryFilter(CategoryFilterType.mugs)}
      >
        Canecas
      </CategoryItem >
    </CategoryFilterStyle>
  );
}
