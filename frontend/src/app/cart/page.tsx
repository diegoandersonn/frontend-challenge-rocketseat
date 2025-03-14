"use client";
import BackButton from "@/components/back-button";
import CartContainer from "@/components/cart-container";
import styled from "styled-components";

const CartStyle = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 22px;
  flex: 1;
  height: 100%;
  background-color: var(--bg-primary);
  padding: 30px 160px;
`;

export default function Cart() {
  return (
    <CartStyle>
      <BackButton />
      <CartContainer />
    </CartStyle>
  );
}
