import styled from "styled-components";

const CartInfoStyle = styled.div`
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
  return (
    <CartInfoStyle>
      <h1>Seu Carrinho</h1>
      <div className="cart-subtitle">
        <h2>Total (3 produtos)</h2>
        <h2 className="cart-total">R$161,00</h2>
      </div>
    </CartInfoStyle>
  );
}
