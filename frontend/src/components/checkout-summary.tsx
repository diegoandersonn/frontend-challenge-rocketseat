import { CartContext } from "@/contexts/cart-context";
import { useContext } from "react";
import styled from "styled-components";

const CheckoutSummaryStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: white;
  height: 700px;
  min-width: 352px;
  padding: 24px 16px;
  .checkout-details {
    font-weight: 400;
    font-size: 16px;
    color: var(--font-primary);
    h1 {
      font-weight: 600;
      font-size: 20px;
      text-transform: uppercase;
    }
    ul {
      margin-top: 30px;
    }
    li {
      display: flex;
      justify-content: space-between;
      list-style: none;
      margin-top: 12px;
    }
    .divider {
      margin-top: 24´x;
      height: 1px;
      width: 100%;
      background-color: #dce2e5;
    }
    .checkout-total {
      margin-top: 8px;
      font-weight: 600;
    }
    button {
      background-color: #51b853;
      width: 100%;
      height: 44px;
      border-radius: 4px;
      border: none;
      font-weight: 500;
      font-size: 16px;
      text-align: center;
      text-transform: uppercase;
      color: var(--light-primary);
      margin-top: 40px;
    }
  }
  .checkout-links {
    font-weight: 500;
    font-size: 14px;
    line-height: 150%;
    text-transform: uppercase;
    text-decoration: underline;
    color: var(--text-dark);
    li {
      list-style: none;
    }
  }
`;

export default function CheckoutSummary() {
  const {getCartSum} = useContext(CartContext)
  return (
    <CheckoutSummaryStyle>
      <div className="checkout-details">
        <h1>Resumo do Pedido</h1>
        <ul>
          <li>
            <p>Subtotal de produtos</p>
            <p>R$ {getCartSum()}</p>
          </li>
          <li>
            <p>Entrega</p>
            <p>R$ 40,00</p>
          </li>
          <li className="divider"></li>
          <li className="checkout-total">
            <p>Total</p>
            <p>R$ {getCartSum() + 40}</p>
          </li>
        </ul>
        <button>Finalizar a compra</button>
      </div>
      <ul className="checkout-links">
        <li>Ajuda</li>
        <li>Reembolsos</li>
        <li>Entregas e Frete</li>
        <li>Trocas e Devoluções</li>
      </ul>
    </CheckoutSummaryStyle>
  );
}
