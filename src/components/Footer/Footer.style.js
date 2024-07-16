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
  max-width: 1200px;
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

export const Info = styled.div`
	margin-right: auto;
	font-family: "DungGeunMo", sans-serif;
	p {
		margin: 5px 0;
		color: #007bff;
	}
`;

export const Nav = styled.nav`
	margin-left: auto;
	font-family: "DungGeunMo", sans-serif;

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
