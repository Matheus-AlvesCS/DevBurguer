import styled from "styled-components";
import { Link } from "react-router";

import BannerMenu from "../../assets/banner-menu.svg";
import Background from "../../assets/background2.svg";

export const Container = styled.div`
  width: 100%;
  min-height: 100dvh;
  background-color: ${(props) => props.theme.secondWhite};
  background: linear-gradient(
      rgba(255, 255, 255, 0.4),
      rgba(255, 255, 255, 0.4)
    ),
    url("${Background}");
`;

export const Banner = styled.div`
  background-image: url("${BannerMenu}");
  height: 480px;
  background-position: center;
  background-size: cover;
  background-color: ${(props) => props.theme.mainBlack};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.white};
  position: relative;

  h1 {
    font-family: "Road Rage", serif;
    font-size: 80px;
    font-weight: 400;
    line-height: 65px;
    text-align: center;
    text-transform: uppercase;
    position: absolute;
    right: 20%;
    top: 30%;

    p {
      font-size: 18px;
      line-height: 13px;
    }
  }
`;

export const CategoryMenu = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;
  margin-top: 30px;
`;

export const CategoryButton = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  background: none;
  color: ${(props) =>
    props.$isActiveCategory
      ? (props) => props.theme.purple
      : (props) => props.theme.lightGray};
  font-size: 24px;
  font-weight: 500;
  line-height: 20px;
  padding-bottom: 5px;
  border-bottom: ${(props) =>
    props.$isActiveCategory && `2px solid ${(props) => props.theme.purple}`};
`;

export const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 50px;
  gap: 50px;
  justify-content: center;
  max-width: 1280px;
  margin: 50px auto 0;
`;
