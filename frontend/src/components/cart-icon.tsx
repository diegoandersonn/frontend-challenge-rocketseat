import styled from "styled-components";
import { ShoppingBagGrey } from "./shopping-bag";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import { CartContext } from "@/contexts/cart-context";

const CartIconStyle = styled.div`
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

export default function CartIcon() {
  const router = useRouter();
  const { amount } = useContext(CartContext);
  function handleCartNavigation() {
    router.push("/cart");
  }
  return (
    <CartIconStyle onClick={handleCartNavigation}>
      <ShoppingBagGrey />
      {amount > 0 && <CartCount>{amount}</CartCount>}
    </CartIconStyle>
  );
}
