import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	height: 100vh;
	box-sizing: border-box;
`;

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
`;

export const Section = styled.div`
  flex: 1;
  padding: 10px;
  box-sizing: border-box;
  border-right: 1px solid #ddd;

  &:last-child {
    border-right: none;
  }
`;
