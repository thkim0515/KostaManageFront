import styled from "styled-components";

<<<<<<< HEAD
export const Container = styled.header`
	background-color: #fbfcff;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 20px 0;
	width: 100%;
	border-bottom: 3px solid #ececec;
`;

export const Wrapper = styled.div`
	display: flex;
	width: 100%;
	/*justify-content: center;*/
`;

export const InnerLeft = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	width: 80%;
	margin-left: 20px;
`;

export const Logo = styled.div`
	display: flex;
	align-items: center;
	height: 50px;
	cursor: pointer;
	justify-content: flex-start;
`;

export const TextWrapper = styled.div`
	font-size: 37px;
	font-weight: bold;
	display: flex;
	color: #4285f4;
`;

export const Group = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-end;
`;

export const InnerRight = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-end;
	width: 80%;
	margin-right: 20px;
`;

export const StyledButton = styled.button`
	all: unset;
	background-color: #4285f4;
	border-radius: 22px;
	height: 36px;
	width: 128px;
	text-align: center;
	cursor: pointer;
	color: #fbfcff;
	font-family: "Noto Sans-Regular", Helvetica;
	font-size: 14px;
	font-weight: 400;
	line-height: 22px;
	margin-left: 10px;

	&:hover {
		background-color: #2a6bb4;
	}
`;

export const Overlap = styled.div`
	position: relative;
	display: flex;
	align-items: center;
`;

export const OverlapGroup = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	width: 200px;
	height: 36px;
`;

export const Rectangle = styled.input`
	border: 1.5px solid #919191;
	border-radius: 8px;
	width: 100%;
	height: 100%;
	padding: 0 10px;
`;

export const SearchWrapper = styled.div`
	position: absolute;
	right: 10px;
	display: flex;
	align-items: center;
	height: 100%;
`;

export const SearchIcon = styled.img`
	height: 16px;
	width: 16px;
	justify-content: space-between;
=======
export const Container = styled.div`
  width: 100%;
  height: 8vh;
  display: flex;
  justify-content: space-between;
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
>>>>>>> 63d11e362 (ADD:CRA, 라우팅, 리덕스 완성 오브젝트)
`;
