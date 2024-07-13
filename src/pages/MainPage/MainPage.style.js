import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  & > div {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    margin: 30px 20px;
    gap: 20px;
  }
`;
