import styled from "styled-components";

const ItemFilterStyle = styled.div`
  display: flex;
  gap: 40px;
`;

const FilterItem = styled.p`
  font-family: inherit;
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  letter-spacing: 0%;
  text-align: center;
  text-transform: uppercase;
`;

export default function ItemTypeFilter() {
  return (
    <ItemFilterStyle>
      <FilterItem>Todos Os Produtos</FilterItem>
      <FilterItem>Camisetas</FilterItem>
      <FilterItem>Canecas</FilterItem>
    </ItemFilterStyle>
  );
}
