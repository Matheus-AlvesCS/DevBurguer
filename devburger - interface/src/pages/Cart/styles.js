import styled from "styled-components";

import BannerCart from "../../assets/banner-cart.svg";
import Background from "../../assets/background2.svg";

export const Container = styled.main`
  min-height: 100dvh;
  width: 100dvw;
  background: linear-gradient(
      rgba(255, 255, 255, 0.4),
      rgba(255, 255, 255, 0.4)
    ),
    url("${Background}");
`;

export const Banner = styled.div`
  background-image: url("${BannerCart}");
  display: flex;
  align-items: center;
  justify-content: center;
  background-position: center;
  background-size: cover;
  height: 180px;

  img {
    width: 180px;
  }
`;

export const Title = styled.h1`
  color: ${(props) => props.theme.green};
  font-size: 32px;
  font-weight: 800;
  margin-top: 30px;
  padding-bottom: 8px;
  position: relative;
  text-align: center;

  &::after {
    content: "";
    position: absolute;
    bottom: 0%;
    left: calc(50% - 28px);
    background-color: ${(props) => props.theme.green};
    height: 4px;
    width: 56px;
  }
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 30%;
  gap: 20px;
  width: 100%;
  max-width: 1280px;
  padding: 40px;
  margin: 0 auto;
`;
