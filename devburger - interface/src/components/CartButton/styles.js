import styled from "styled-components";

export const ContainerButton = styled.button`
  background-color: ${(props) => props.theme.purple};
  border: none;
  border-radius: 8px;
  padding: 8px 0;
  width: 100%;

  &:hover {
    background-color: ${(props) => props.theme.secondDarkPurple};
  }
`;
