/* eslint-disable @typescript-eslint/no-explicit-any */
import { useProducts } from "@/hooks/useProducts";
import ProductCard from "./product-card";
import styled from "styled-components";

const ProductsListStyle = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 32px;
  list-style: none;
`;

export default function ProductsList() {
  const { data, isLoading, error } = useProducts();
  if (isLoading) return <p>carregando</p>;
  if (error) return <p>error</p>;
  return (
    <ProductsListStyle>
      {data &&
        data.map((product: any, index: any) => (
          <ProductCard product={product} key={index} />
        ))}
      <li>oiiii</li>
    </ProductsListStyle>
  );
}
