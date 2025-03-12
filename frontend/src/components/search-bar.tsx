import { styled } from "styled-components";
import SearchIcon from "./search-icon";

const SearchBarStyle = styled.input`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--bg-secondary);
  width: 352px;
  border: none;
  border-radius: 8px;
  padding: 10px 16px;
  color: var(--text-dark);
  font-family: inherit;
  font-style: normal;
  font-size: 400;
  font-size: 14px;
  line-height: 22px;
  cursor: pointer;
  outline: none;
`;

const InputContainer = styled.div`
  position: relative;
  width: 352px;
  svg {
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
  }
`;

export default function SearchBar() {
  return (
    <InputContainer>
      <SearchBarStyle placeholder="Procurando por algo específico?" />
      <SearchIcon />
    </InputContainer>
  );
}
