import { HeadCircuit } from "@phosphor-icons/react";
import styled from "styled-components";

export const ProductImg = styled.img`
  height: 100px;
  width: 100px;
  border-radius: 16px;
`;

export const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  button {
    background-color: ${(props) => props.theme.purple};
    border: none;
    border-radius: 5px;
    color: ${(props) => props.theme.white};
    padding: 5px 10px;
    transition: background-color 0.2s ease-in-out;

    &:hover {
      background-color: ${(props) => props.theme.secondDarkPurple};
    }
  }
`;

export const TotalPrice = styled.p`
  font-weight: 800;
`;

export const EmptyCart = styled.p`
  font-size: 20px;
  text-align: center;
  font-weight: 900;
`;

export const TrashIcon = styled.img`
  height: 30px;
  width: 30px;
  cursor: pointer;
`;
