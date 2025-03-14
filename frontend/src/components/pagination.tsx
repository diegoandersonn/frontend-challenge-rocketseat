import styled, { css } from "styled-components";
import { ArrowLeft, ArrowRight } from "./arrows";
import { useContext } from "react";
import { FilterContext } from "@/contexts/filter-context";

const PaginationStyle = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 2px;
`;

const PageStyle = styled.div<{ active?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 8px;
  background-color: #e9e9f0;
  margin: 20px 0;
  font-family: inherit;
  font-weight: 600;
  font-size: 16px;
  line-height: 150%;
  letter-spacing: 0%;
  text-align: center;
  vertical-align: middle;
  text-transform: uppercase;
  color: var(--text-dark);
  cursor: pointer;
  ${(props) =>
    props.active &&
    css`
      border: 1px solid var(--orange-light);
      color: var(--orange-light);
      background-color: var(--light-primary);
    `}
`;

export default function Pagination() {
  const { page, setPage } = useContext(FilterContext);
  const totalPages = Array.from({ length: 5 }, (_, i) => i);
  return (
    <PaginationStyle>
      {totalPages.map((value) => (
        <PageStyle
          key={value}
          active={value === page}
          onClick={() => setPage(value)}
        >
          {value + 1}
        </PageStyle>
      ))}
      <PageStyle
        onClick={() => {
          if (page !== 0) {
            setPage(page - 1);
          }
        }}
      >
        <ArrowLeft />
      </PageStyle>
      <PageStyle
        onClick={() => {
          if (page !== 4) {
            setPage(page + 1);
          }
        }}
      >
        <ArrowRight />
      </PageStyle>
    </PaginationStyle>
  );
}
