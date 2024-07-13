import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #ffffff;
  display: flex;
  font-size: 2rem;
`;

export const Wrapper = styled.div`
  display: flex;
  position: left;
  margin-right: 20px;
`;

export const Content = styled.div`
  width: 100%;
  flex: 4;
  overflow-y: auto;
  position: right;

  // margin-left: ${(props) => (props.isOpen ? "0px" : "60px")};

  @media (max-width: 768px) {
    margin-left: 0;
  }
`;
