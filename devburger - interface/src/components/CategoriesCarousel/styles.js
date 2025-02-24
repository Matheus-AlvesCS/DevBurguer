import { Link } from "react-router";
import styled from "styled-components";

export const Container = styled.div`
  .carousel-items {
    padding: 0 20px;
  }
`;

export const Title = styled.h2`
  color: ${(props) => props.theme.purple};
  font-size: 32px;
  font-weight: 800;
  padding: 10px 0;
  margin-bottom: 40px;
  position: relative;
  text-align: center;
  text-transform: uppercase;

  &::after {
    content: "";
    position: absolute;
    bottom: 0%;
    left: calc(50% - 28px);
    background-color: ${(props) => props.theme.purple};
    height: 4px;
    width: 56px;
  }
`;

export const ContainerItems = styled.div`
  background-image: url("${(props) => props.$imageUrl}");
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: flex-end;
  padding: 40px 15px;
  width: 100%;
  height: 230px;
  border-radius: 10px;
`;

export const CategoryButton = styled(Link)`
  background-color: #00000080;
  color: ${(props) => props.theme.white};
  font-size: 22px;
  font-weight: 700;
  padding: 2px 18px;
  border-radius: 50px;
  text-decoration: none;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: ${(props) => props.theme.purple};
  }
`;
