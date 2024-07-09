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
	flex: 4;
	overflow-y: auto;
	position: right;
`;
