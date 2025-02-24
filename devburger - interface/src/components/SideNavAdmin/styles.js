import { Link } from "react-router";
import styled from "styled-components";

export const Container = styled.div`
  background-color: ${(props) => props.theme.black};
  display: flex;
  flex-direction: column;

  img {
    width: 60%;
    margin: 40px auto;
  }
`;

export const NavLinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 10px;
`;

export const NavLink = styled(Link)`
  color: ${(props) => props.theme.white};
  background-color: ${(props) =>
    props.$isActive ? (props) => props.theme.purple : "none"};
  text-decoration: none;
  font-size: 22px;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 20px;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: ${(props) => props.theme.purple};
  }
`;

export const Footer = styled.footer`
  margin: auto 0 30px 0;
  width: 100%;
`;
