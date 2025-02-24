import { useResolvedPath } from "react-router";

import { Container, NavLinkContainer, NavLink, Footer } from "./styles";
import Logo from "../../assets/logo.svg";
import { SignOut } from "@phosphor-icons/react";

import { navLinks } from "./navLinks";

import { useUser } from "../../hooks/UserContext";

export function SideNavAdmin() {
  const { logout } = useUser();

  const { pathname } = useResolvedPath();

  return (
    <Container>
      <img src={Logo} />
      <NavLinkContainer>
        {navLinks.map((link) => (
          <NavLink
            key={link.id}
            to={link.path}
            $isActive={pathname === link.path}
          >
            {link.icon}
            <span>{link.label}</span>
          </NavLink>
        ))}
      </NavLinkContainer>
      <Footer>
        <NavLink to="/login" onClick={logout}>
          <SignOut />
          <span>Sair</span>
        </NavLink>
      </Footer>
    </Container>
  );
}
