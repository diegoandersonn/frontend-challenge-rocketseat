"use client";
import BackButton from "@/components/back-button";
import ProductContainer from "@/components/product-container";
import { useProduct } from "@/hooks/useProduct";
import { useParams } from "next/navigation";
import styled from "styled-components";

const ProductStyle = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 22px;
  flex: 1;
  height: 100%;
  background-color: var(--bg-primary);
  padding: 30px 160px;
`;

export default function Product() {
  const { id } = useParams();
  const { data: product, isLoading, isError } = useProduct(id as string);
  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Erro!</p>;
  return (
    <ProductStyle>
      <BackButton />
      <ProductContainer product={product} />
    </ProductStyle>
  );
}
