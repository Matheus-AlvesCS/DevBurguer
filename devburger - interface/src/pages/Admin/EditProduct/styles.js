import styled from "styled-components";
import Select from "react-select";

import { Button } from "../../../components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100dvh;
`;

export const Form = styled.form`
  background-color: ${(props) => props.theme.black};
  box-shadow: 0px 0px 11px 0px #00000080;
  border-radius: 20px;
  padding: 32px;
  max-width: 380px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 100%;
`;

export const Label = styled.label`
  color: ${(props) => props.theme.white};
  font-size: 18px;
  font-weight: 400;
`;

export const Input = styled.input`
  background-color: ${(props) => props.theme.white};
  border: none;
  border-radius: 5px;
  padding: 10px 12px;
`;

export const LabelUpload = styled.label`
  cursor: pointer;
  border: 1px dashed ${(props) => props.theme.white};
  border-radius: 5px;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  color: ${(props) => props.theme.white};
  margin: 15px 0;

  > svg {
    width: 20px;
    height: 20px;
    fill: ${(props) => props.theme.white};
    margin-right: 4px;
  }

  input {
    display: none;
  }
`;

export const SelectCategory = styled(Select)``;

export const SubmitButton = styled(Button)`
  margin-top: 30px;
`;

export const ErrorMessage = styled.p`
  color: ${(props) => props.theme.darkRed};
  font-size: 14px;
  line-height: 80%;
  font-weight: 600;
`;

export const ContainerCheckbox = styled.div`
  display: flex;
  gap: 10px;

  input {
    cursor: pointer;
  }
`;
