/* eslint-disable @next/next/no-img-element */
import styled from "styled-components";

const CardStyle = styled.li`
  width: 256px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: left;
  border-radius: 0px 0px 4px 4px;
  background-color: white;
  font-family: inherit;
  line-height: 150%;
  vertical-align: middle;
  img {
    width: 100%;
    height: 300px;
  }
  h3 {
    font-weight: 300;
    font-size: 16px;
    line-height: 150%;
    color: #41414d;
  }
  h4 {
    font-weight: 600;
    font-size: 14px;
    line-height: 150%;
    color: #09090a;
  }
  div {
    display: flex;
    align-items: start;
    justify-content: center;
    flex-direction: column;
    padding: 8px 0;
    width: 228px;
    height: 1px;
    margin: 8px 0;
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
  return (
    <CardStyle>
      <img src={product.image_url} alt={product.name} />
      <h3>{product.name}</h3>
      <div></div>
      <h4>R$ {product.price_in_cents}</h4>
    </CardStyle>
  );
}
