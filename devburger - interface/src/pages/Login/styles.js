import styled from "styled-components";
import { Link as RouterLink } from "react-router";

import BackgroundLogin1 from "../../assets/background1.svg";
import BackgroundLogin2 from "../../assets/background2.svg";

import { Button } from "../../components/Button";

export const FormButton = styled(Button)`
  margin-top: 50px;
`;

export const Container = styled.div`
  display: flex;
  height: 100dvh;
  width: 100dvw;
`;

export const LeftContainer = styled.div`
  background-image: url("${BackgroundLogin1}");
  background-size: cover;
  background-position: center;
  height: 100%;
  width: 100%;
  max-width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    max-width: 80%;
  }
`;

export const RightContainer = styled.div`
  background-image: url("${BackgroundLogin2}");
  background-size: cover;
  background-color: #1e1e1e;
  height: 100%;
  width: 100%;
  max-width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  p {
    color: ${(props) => props.theme.white};
    font-size: 18px;
    font-weight: 700;

    a {
      text-decoration: underline;
    }
  }
`;

export const Title = styled.h2`
  font-family: "Road Rage", serif;
  color: ${(props) => props.theme.white};
  font-weight: 400;
  font-size: 40px;
  text-align: center;

  span {
    color: ${(props) => props.theme.purple};
    font-family: "Road Rage", serif;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  margin: 30px 0 20px 0;
  width: 100%;
  max-width: 400px;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 100%;

  input {
    padding: 16px;
    border-radius: 5px;
    font-weight: 600;
    border: none;
  }

  label {
    color: ${(props) => props.theme.white};
    font-weight: 600;
    font-size: 18px;
  }

  p {
    color: ${(props) => props.theme.darkRed};
    font-size: 14px;
    font-weight: 400;
    height: 10px;
  }
`;

export const Link = styled(RouterLink)`
  color: ${(props) => props.theme.white};
  text-decoration: none;
`;
