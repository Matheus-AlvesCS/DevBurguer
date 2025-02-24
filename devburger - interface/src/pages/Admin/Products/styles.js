import styled from "styled-components";

export const Container = styled.div``;

export const ProductImage = styled.img`
  height: 80px;
  border-radius: 10px;
  padding: 10px;
  background-color: ${(props) => props.theme.darkWhite};
`;

export const EditButton = styled.button`
  cursor: pointer;
  border: none;
  border-radius: 8px;
  background-color: ${(props) => props.theme.darkWhite};
  height: 32px;
  width: 32px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.2s ease-in-out;

  svg {
    height: 18px;
    width: 18px;
  }

  &:hover {
    background-color: ${(props) => props.theme.purple};

    svg {
      fill: ${(props) => props.theme.white};
    }
  }
`;
