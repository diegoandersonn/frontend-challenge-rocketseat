"use client";
import BackButton from "@/components/back-button";
import { useProduct } from "@/hooks/useProduct";
import { useParams } from "next/navigation";
import styled from "styled-components";

const ProductStyle = styled.div`
  background-color: var(--bg-primary);
  padding: 30px 160px;
`;

export default function Product() {
  const { id } = useParams();
  const {data: product} = useProduct(id as string)
  console.log(product)
  return (
    <ProductStyle>
      <BackButton />
    </ProductStyle>
  );
}
