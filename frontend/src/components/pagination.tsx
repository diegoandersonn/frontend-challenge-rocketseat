import styled from "styled-components";
import { ArrowLeft, ArrowRight } from "./arrows";

const PaginationStyle = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const PageStyle = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 8px;
  background-color: #E9E9F0;
  margin: 20px 0;
  font-family: inherit;
  font-weight: 600;
  font-size: 16px;
  line-height: 150%;
  letter-spacing: 0%;
  text-align: center;
  vertical-align: middle;
  text-transform: uppercase;
  color: #737380;
`;

export default function Pagination() {
  return (
    <PaginationStyle>
      <PageStyle>1</PageStyle>
      <PageStyle>2</PageStyle>
      <PageStyle>3</PageStyle>
      <PageStyle>4</PageStyle>
      <PageStyle>5</PageStyle>
      <PageStyle>
        <ArrowLeft />
      </PageStyle>
      <PageStyle>
        <ArrowRight />
      </PageStyle>
    </PaginationStyle>
  );
}
