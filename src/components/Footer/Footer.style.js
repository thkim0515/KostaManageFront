import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: #fbfcff;
	padding: 20px;
	text-align: center;
	border-top: 2px solid #ececec;
`;

export const Inner = styled.div`
	max-width: 1600px;
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
`;

export const Logo = styled.div`
	color: #007bff;
	margin-bottom: 20px;
	font-size: 30px;
	font-style: italic;
	font-family: "DungGeunMo", sans-serif;
	font-weight: 700;
`;

export const Wrapper = styled.div`
width: 1400px;
	display: flex;
	justify-content: space-between;
	transform: translateY(-10px);
`;

export const Info = styled.div`
	margin-right: auto;
	p {
		margin: 5px 0;
		color: #007bff;
	}
`;
export const NavContainer = styled.div`
	position: flex;
	width: 100%; /* 내부 요소가 가로폭 전체를 채움 */
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-end; /* 우측 정렬을 위한 설정 */
	gap: 20px;
	margin-top: -45px;
	margin-bottom: 30px;
`;

export const Nav = styled.nav`
	margin-left: auto;

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
		font-size: 10px;
		color: #007bff;

		&:hover {
			color: #007bff;
		}
	}
`;