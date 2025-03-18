import styled from "styled-components";
import CartProducts from "./cart-products";
import { useContext } from "react";
import { CartContext } from "@/contexts/cart-context";

const CartInfoStyle = styled.div`
  height: 700px;
  h1 {
    font-weight: 500;
    font-size: 24px;
    text-transform: uppercase;
  }
  .cart-subtitle {
    display: flex;
    gap: 4px;
    font-family: Saira;
    line-height: 150%;
    letter-spacing: 0%;
    vertical-align: middle;
    h2 {
      font-weight: 300;
      font-size: 16px;
    }
    .cart-total {
      font-weight: 600;
      font-size: 16px;
    }
  }
`;
export default function CartInfo() {
  const { amount, getCartSum } = useContext(CartContext);
  return (
    <CartInfoStyle>
      <h1>Seu Carrinho</h1>
      <div className="cart-subtitle">
        <h2>Total ({amount} produtos)</h2>
        <h2 className="cart-total">R${getCartSum()}</h2>
      </div>
      <CartProducts />
    </CartInfoStyle>
  );
}
