import styled from "styled-components";

export const Container = styled.footer`
  background-color: ${(props) => props.theme.darkPurple};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;

  p {
    color: ${(props) => props.theme.white};
    font-size: 14px;
  }
`;
