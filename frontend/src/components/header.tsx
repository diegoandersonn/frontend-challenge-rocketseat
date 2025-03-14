"use client";
import styled from "styled-components";
import SearchBar from "./search-bar";
import { Saira_Stencil_One } from "next/font/google";
import CartIcon from "./cart-icon";
import { useRouter } from "next/navigation";

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
  cursor: pointer;
`;

const Aside = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
`;

export default function Header() {
  const router = useRouter();
  function handleNavigation() {
    router.push("/")
  }
  return (
    <HeaderStyle>
      <Logo className={sairaStencil.className} onClick={handleNavigation}>
        capputeno
      </Logo>
      <Aside>
        <SearchBar />
        <CartIcon/>
      </Aside>
    </HeaderStyle>
  );
}
