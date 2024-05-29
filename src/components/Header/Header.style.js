import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 8vh;
  display: flex;
  justify-content: space-between;
  background-color: orange;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: 1rem;
  padding: 0 20px;

  ul {
    display: flex;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  li {
    margin: 0 10px;
  }
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
`;
