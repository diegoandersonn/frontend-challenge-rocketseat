import styled from "styled-components";
import ShoppingBag from "./shopping-bag";

const CartContainerStyle = styled.div`
  position: relative;
  cursor: pointer;
`;

const CartCount = styled.span`
  width: 17px;
  height: 17px;
  border-radius: 100%;
  padding: 0px 5px;
  background-color: var(--delete-color);
  font-family: inherit;
  font-weight: 500;
  font-size: 10px;
  line-height: 26px;
  color: white;
  margin-left: -10px;
`;

export default function CartContainer() {
  return (
    <CartContainerStyle>
      <ShoppingBag />
      <CartCount>2</CartCount>
    </CartContainerStyle>
  );
}
