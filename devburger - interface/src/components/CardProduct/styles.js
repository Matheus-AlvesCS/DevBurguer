import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  align-items: center;
  background-color: ${(props) => props.theme.white};
  border-radius: 28px;
  position: relative;
  box-shadow: 0px 4px 50px 0px #00000026;

  div {
    width: 100%;
    height: 60px;
    display: flex;
    flex-direction: column;
    margin-top: 35px;

    p {
      color: ${(props) => props.theme.orange};
      font-size: 18px;
      font-weight: 700;
    }

    strong {
      color: ${(props) => props.theme.black};
      font-size: 18px;
      font-weight: 700;
    }
  }
`;

export const CardImage = styled.img`
  height: 100px;
  position: absolute;
  top: -50px;
`;
