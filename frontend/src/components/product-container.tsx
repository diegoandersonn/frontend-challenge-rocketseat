/* eslint-disable @next/next/no-img-element */
"use client";
import { ProductType } from "@/types/product-type";
import styled from "styled-components";
import { ShoppingBagWhite } from "./shopping-bag";
import { useContext } from "react";
import { CartContext } from "@/contexts/cart-context";
import { useRouter } from "next/navigation";

const ProductContainerStyle = styled.div`
  display: flex;
  justify-content: center;
  gap: 32px;
  font-family: inherit;
  line-height: 150%;
  letter-spacing: 0%;
  vertical-align: middle;
  img {
    width: 640px;
    height: 580px;
    border-radius: 4px;
  }
  .product-main {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  h1 {
    font-weight: 300;
    font-size: 32px;
    color: var(--font-primary);
    margin-top: 12px;
  }
  h2 {
    font-weight: 600;
    font-size: 20px;
    color: var(--price-color);
    margin-top: 4px;
  }
  h3 {
    font-weight: 500;
    font-size: 16px;
    text-transform: uppercase;
    color: var(--text-dark);
    margin-top: 58px;
  }
  h4 {
    font-weight: 400;
    font-size: 16px;
    color: var(--font-primary);
  }
  .shipping-info {
    font-weight: 400;
    font-size: 12px;
    color: var(--font-primary);
    margin-top: 24px;
  }
  .product-description {
    font-weight: 400;
    font-size: 14px;
    color: var(--font-primary);
  }
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    border: none;
    border-radius: 4px;
    width: 448px;
    height: 44px;
    border-radius: 4px;
    background-color: #115d8c;
    font-weight: 500;
    font-size: 16px;
    text-align: center;
    text-transform: uppercase;
    color: var(--light-primary);
  }
`;

type Props = {
  product: ProductType;
};

export default function ProductContainer({ product }: Props) {
  const { addToCart } = useContext(CartContext);
  const router = useRouter();
  function handleClick(product: ProductType) {
    addToCart(product);
    router.push("/");
  }
  return (
    <ProductContainerStyle>
      <img src={product.image_url} alt={product.name} />
      <div className="product-main">
        <div>
          <h4>
            {product.category === "mugs"
              ? "Caneca"
              : product.category === "t-shirts"
              ? "Camisa"
              : ""}
          </h4>
          <h1>{product.name}</h1>
          <h2>R$ {product.price_in_cents}</h2>
          <p className="shipping-info">
            Frete de R$40,00 para todo o Brasil. Grátis para compras acima de
            R$900,00.
          </p>
          <h3>Descrição</h3>
          <p className="product-description">{product.description}</p>
        </div>
        <button onClick={() => handleClick(product)}>
          <ShoppingBagWhite />
          <p>Adicionar ao Carrinho</p>
        </button>
      </div>
    </ProductContainerStyle>
  );
}
