import styled from "styled-components";
import { Link } from "react-router";

export const Container = styled.div`
  background-color: ${(props) => props.theme.mainBlack};
  padding: 10px 56px;
  width: 100%;
`;

export const Logo = styled.img`
  width: 70px;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1280px;
  width: 100%;
  margin: 0 auto;
`;

export const Navigation = styled.nav`
  display: flex;
  align-items: center;
  gap: 50px;

  div {
    display: flex;
    gap: 25px;

    hr {
      border: 1px solid ${(props) => props.theme.darkGray};
    }
  }
`;

export const HeaderLink = styled(Link)`
  color: ${(props) =>
    props.$isActive
      ? (props) => props.theme.purple
      : (props) => props.theme.white};
  text-decoration: none;
  border-bottom: ${(props) =>
    props.$isActive && `1px solid ${props.theme.purple}`};
  font-size: 14px;
  transition: color 0.2s ease-in-out;

  &:hover {
    color: ${(props) => props.theme.purple};
  }
`;

export const Options = styled.div`
  display: flex;
  gap: 50px;
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  color: ${(props) => props.theme.white};
  font-size: 14px;

  span {
    color: ${(props) => props.theme.purple};
    font-weight: 700;
  }
`;

export const Logout = styled.button`
  border: none;
  background: none;
  color: #9e1c00;
  font-weight: 700;
  font-size: 14px;

  &:hover {
    opacity: 0.8;
  }
`;

export const CartContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
