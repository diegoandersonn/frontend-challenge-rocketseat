import styled from "styled-components";
import CheckoutSummary from "./checkout-summary";
import CartInfo from "./cart-info";

const CartContainerStyle = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 32px;
  width: 100%;
  font-family: inherit;
  line-height: 150%;
  letter-spacing: 0%;
  vertical-align: middle;
`;

export default function CartContainer() {
  return (
    <CartContainerStyle>
      <CartInfo />
      <CheckoutSummary />
    </CartContainerStyle>
  );
}
