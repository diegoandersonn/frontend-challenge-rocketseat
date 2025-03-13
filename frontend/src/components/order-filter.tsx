import styled from "styled-components";
import ArrowDown from "./arrow-down";

const OrderFilterStyle = styled.div`
  display: flex;
  gap: 8px;
  color: var(--text-dark);
  font-family: inherit;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  letter-spacing: 0%;
  text-align: center;
`;

export default function OrderFilter() {
  return (
    <OrderFilterStyle>
      <p>Organizar Por</p>
      <ArrowDown />
    </OrderFilterStyle>
  );
}
