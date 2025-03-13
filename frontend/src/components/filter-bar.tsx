"use client";
import styled from "styled-components";
import ItemTypeFilter from "./item-type-filter";
import OrderFilter from "./order-filter";

const FilterBarStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default function FilterBar() {
  return (
    <FilterBarStyle>
      <ItemTypeFilter />
      <OrderFilter />
    </FilterBarStyle>
  );
}
