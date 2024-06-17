import styled from "styled-components";

export const Container = styled.footer`
  background-color: #005b99;
  color: #fff;
  padding: 2rem 0;
  text-align: center;
`;

export const Inner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

export const Logo = styled.div`
  img {
    height: 50px;
  }
`;

export const Info = styled.div`
  p {
    margin: 0.5rem 0;
  }
`;

export const Nav = styled.nav`
  ul {
    list-style: none;
    padding: 0;
    display: flex;
    gap: 1rem;
    margin: 1rem 0;
  }

  a {
    color: #fff;
    text-decoration: none;
  }
`;

export const Social = styled.div`
  a {
    color: #fff;
    margin: 0 0.5rem;
    font-size: 1.5rem;

    &:hover {
      color: #ddd;
    }
  }
`;
