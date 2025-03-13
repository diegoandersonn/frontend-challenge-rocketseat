"use client";
import FilterBar from "@/components/filter-bar";
import Pagination from "@/components/pagination";
import ProductsList from "@/components/products-list";
import styled from "styled-components";

const HomeStyle = styled.div`
  background-color: var(--bg-primary);
  padding: 30px 160px;
`;

export default function Home() {
  return (
    <HomeStyle>
      <FilterBar />
      <Pagination />
      <ProductsList />
    </HomeStyle>
  );
}
