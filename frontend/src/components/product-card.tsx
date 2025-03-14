/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import styled from "styled-components";

const CardStyle = styled.li`
  width: 256px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  border-radius: 8px 8px 4px 4px;
  background-color: white;
  font-family: inherit;
  line-height: 150%;
  vertical-align: middle;
  img {
    width: 100%;
    height: 300px;
    border-radius: 8px 8px 0 0;
    cursor: pointer;
  }
  h3 {
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    margin-left: 12px;
    margin-top: 8px;
    color: #41414d;
  }
  h4 {
    font-weight: 600;
    font-size: 14px;
    line-height: 150%;
    margin-left: 12px;
    margin-top: 8px;
    color: #09090a;
  }
  div {
    display: flex;
    align-items: start;
    justify-content: center;
    flex-direction: column;
    margin-left: 8px;
    width: 228px;
    height: 1px;
    margin-left: 8px;
    padding: 0px;
    background: #dce2e5;
  }
`;

type Product = {
  id: string;
  name: string;
  description: string;
  image_url: string;
  price_in_cents: number;
};

type Props = {
  product: Product;
};

export default function ProductCard({ product }: Props) {
  const [mounted, setMounted] = useState<boolean>(false)
  const router = useRouter()
  useEffect(() => {
    setMounted(true)
  }, [])
  if(!mounted) return null;
  function handleProductNavigation(id: string) {
    router.push(`/product/${id}`)
  }
  return (
    <CardStyle>
      <img src={product.image_url} alt={product.name} onClick={() => handleProductNavigation(product.id)} />
      <h3>{product.name}</h3>
      <div></div>
      <h4>R$ {product.price_in_cents}</h4>
    </CardStyle>
  );
}
