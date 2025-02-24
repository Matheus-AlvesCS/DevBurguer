import { useNavigate, useResolvedPath } from "react-router";

import { User, ShoppingCart } from "@phosphor-icons/react";

import {
  CartContainer,
  Container,
  HeaderLink,
  Logout,
  Navigation,
  Options,
  Profile,
  Content,
  Logo,
} from "./styles";

import { useUser } from "../../hooks/UserContext";
import LogoDevBurger from "../../assets/logo.svg";

export function Header() {
  const navigate = useNavigate();
  const { logout, userInfo } = useUser();
  const { pathname } = useResolvedPath();

  function logoutUser() {
    logout();

    navigate("/login");
  }

  return (
    <Container>
      <Content>
        <Navigation>
          <Logo src={LogoDevBurger} />
          <div>
            <HeaderLink to="/" $isActive={pathname === "/"}>
              Home
            </HeaderLink>
            <hr />
            <HeaderLink to="/cardapio" $isActive={pathname === "/cardapio"}>
              Cardápio
            </HeaderLink>
          </div>
        </Navigation>
        <Options>
          <Profile>
            <User color="#fff" size={24} />
            <div>
              <p>
                Olá, <span>{userInfo.name}</span>
              </p>
              <Logout onClick={logoutUser}>Sair</Logout>
            </div>
          </Profile>
          <CartContainer>
            <ShoppingCart color="#fff" size={24} />
            <HeaderLink to="/carrinho">Carrinho</HeaderLink>
          </CartContainer>
        </Options>
      </Content>
    </Container>
  );
}
