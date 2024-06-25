import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f8f9fa;
  padding: 20px;
  text-align: center;
`;

export const Inner = styled.div`
  max-width: 1200px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Logo = styled.div`
  margin-bottom: 20px;

  img {
    height: 50px;
  }
`;

export const Info = styled.div`
  margin-bottom: 20px;

  p {
    margin: 5px 0;
    color: #333;
  }
`;

export const Nav = styled.nav`
  margin-bottom: 20px;

  ul {
    list-style: none;
    padding: 0;
    display: flex;
    gap: 15px;

    li {
      a {
        text-decoration: none;
        color: #007bff;

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
`;

export const Social = styled.div`
  display: flex;
  gap: 10px;

  a {
    font-size: 20px;
    color: #333;

    &:hover {
      color: #007bff;
    }
  }
`;

