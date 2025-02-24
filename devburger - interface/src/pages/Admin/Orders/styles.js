import styled from "styled-components";
import Select from "react-select";

export const ProductImg = styled.img`
  height: 80px;
  padding: 12px;
  border-radius: 16px;
`;

export const StatusSelect = styled(Select)`
  width: 240px;
`;

export const Filter = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;
  gap: 30px;
`;

export const FilterOption = styled.button`
  cursor: pointer;
  background: none;
  border: none;
  color: ${(props) =>
    props.$isActive ? props.theme.purple : props.theme.darkGray};
  font-size: 18px;
  line-height: 20px;
  padding-bottom: 5px;
  border-bottom: ${(props) =>
    props.$isActive ? `2px solid ${props.theme.purple}` : "none"};
`;
