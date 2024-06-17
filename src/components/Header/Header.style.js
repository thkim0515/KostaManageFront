import styled from "styled-components";

export const Container = styled.header`
	background-color: #fff;
	padding: 1rem 0;
	border-bottom: 1px solid #ddd;
`

export const Inner = styled.div`
	max-width: 1200px;
	margin: 0 auto;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 1rem;
`

export const Logo = styled.div`
	img {
		height: 40px;
	}
`

export const Nav = styled.nav`
	ul {
		list-style: none;
		display: flex;
		gap: 1rem;
		margin: 0;
		padding: 0;
	}

	a {
		color: #000;
		text-decoration: none;
		font-weight: bold;
	}
`

export const Actions = styled.div`
	display: flex;
	align-items: center;
	gap: 1rem;
`

export const Button = styled.button`
	background-color: #fff;
	border: 1px solid #007bff;
	color: #007bff;
	padding: 0.5rem 1rem;
	border-radius: 4px;
	cursor: pointer;

	&:hover {
		background-color: #007bff;
		color: #fff;
	}
`

export const Search = styled.div`
	input {
		padding: 0.5rem;
		border: 1px solid #ddd;
		border-radius: 4px;
	}
`
