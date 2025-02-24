import styled from "styled-components";

export const Container = styled.div`
  .carousel-items {
    padding: 0 20px;
  }

  overflow-x: hidden;
  padding-bottom: 40px;

  .react-multi-carousel-list {
    overflow: visible;
    margin-top: 80px;
  }
`;

export const Title = styled.h2`
  color: ${(props) => props.theme.green};
  font-size: 32px;
  font-weight: 800;
  padding: 10px 0;
  margin-bottom: 40px;
  margin-top: 50px;
  position: relative;
  text-align: center;
  text-transform: uppercase;

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
