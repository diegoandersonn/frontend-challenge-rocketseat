/* eslint-disable @typescript-eslint/no-explicit-any */
import { useProducts } from "@/hooks/useProducts";
import ProductCard from "./product-card";
import styled from "styled-components";
import { useContext } from "react";
import { FilterContext } from "@/contexts/filter-context";

const ProductsListStyle = styled.ul`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(auto-fit, minmax(256px, 1fr));
  gap: 32px;
  list-style: none;
`;

export default function ProductsList() {
  const { page, perPage, categoryFilter, orderFilter } =
    useContext(FilterContext);
  const { data, isLoading, error } = useProducts(
    page,
    perPage,
    categoryFilter,
    orderFilter
  );
  if (isLoading) return <p>carregando</p>;
  if (error) return <p>error</p>;
  return (
    <ProductsListStyle>
      {data &&
        data.map((product: any, index: any) => (
          <ProductCard product={product} key={index} />
        ))}
    </ProductsListStyle>
  );
}
