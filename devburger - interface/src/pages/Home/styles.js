import styled from "styled-components";

import BannerHome from "../../assets/banner-home.svg";
import Background from "../../assets/background2.svg";

export const Banner = styled.div`
  background-image: url("${BannerHome}");
  height: 480px;
  background-position: center;
  background-size: cover;
  position: relative;

  h1 {
    font-family: "Road Rage", serif;
    color: ${(props) => props.theme.darkWhite};
    font-size: 80px;
    font-weight: 400;
    position: absolute;
    right: 10%;
    top: 5%;
  }
`;

export const Container = styled.section`
  background: linear-gradient(
      rgba(255, 255, 255, 0.4),
      rgba(255, 255, 255, 0.4)
    ),
    url("${Background}");
`;
