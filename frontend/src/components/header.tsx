"use client";
import styled from "styled-components";
import SearchBar from "./search-bar";
import { Saira_Stencil_One } from "next/font/google";
import CartContainer from "./cart-container";

const sairaStencil = Saira_Stencil_One({
  weight: ["400"],
  subsets: ["latin"],
});

const HeaderStyle = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 160px;
`;

const Logo = styled.div`
  color: #5d5d6d;
  font-size: 40px;
  font-weight: 400;
`;

const Aside = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 24px;
`

export default function Header() {
  return (
    <HeaderStyle>
      <Logo className={sairaStencil.className}>capputeno</Logo>
      <Aside>
        <SearchBar />
        <CartContainer />
      </Aside>
    </HeaderStyle>
  );
}
