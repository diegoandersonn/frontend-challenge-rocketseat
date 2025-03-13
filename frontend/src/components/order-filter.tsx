import styled, { css } from "styled-components";
import { ArrowDown } from "./arrows";
import { useContext, useState } from "react";
import { FilterContext } from "@/contexts/filter-context";
import { OrderFilterType } from "@/types/order-filter-type";

const OrderFilterStyle = styled.div<{ active?: boolean }>`
  display: flex;
  gap: 8px;
  position: relative;
  color: var(--text-dark);
  font-family: inherit;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  letter-spacing: 0%;
  text-align: center;
  cursor: pointer;
  div {
    position: absolute;
    width: max-content;
    right: 0px;
    top: 100%;
    background-color: white;
    border-radius: 4px;
    padding: 12px 16px;
    visibility: hidden;
    ul {
      list-style: none;
      text-align: left;
    }
    li {
      cursor: pointer;
    }
    ${(props) =>
      props.active &&
      css`
        visibility: visible;
      `}
  }
`;

export default function OrderFilter() {
  const [isActive, toggleActive] = useState<boolean>(false);
  const { setOrderFilter } = useContext(FilterContext);
  return (
    <OrderFilterStyle active={isActive}>
      <p onClick={() => toggleActive((prev) => !prev)}>Organizar Por</p>
      <ArrowDown />
      <div>
        <ul>
          <li
            onClick={() => {
              setOrderFilter(OrderFilterType.news);
              toggleActive((prev) => !prev);
            }}
          >
            Novidades
          </li>
          <li
            onClick={() => {
              setOrderFilter(OrderFilterType.priceAsc);
              toggleActive((prev) => !prev);
            }}
          >
            Preço: Maior-Menor
          </li>
          <li
            onClick={() => {
              setOrderFilter(OrderFilterType.priceDesc);
              toggleActive((prev) => !prev);
            }}
          >
            Preço: Menor-Maior
          </li>
          <li
            onClick={() => {
              setOrderFilter(OrderFilterType.sales);
              toggleActive((prev) => !prev);
            }}
          >
            Mais Vendidos
          </li>
        </ul>
      </div>
    </OrderFilterStyle>
  );
}
