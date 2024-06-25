import styled from "styled-components"

export const S = {
	Container: styled.header`
		background-color: #fbfcff;
		display: flex;
		justify-content: center;
		width: 100%;
	`,
	InnerContainer: styled.div`
		background-color: #fbfcff;
		height: 157px;
		position: relative;
		width: 1509px;
	`,
	Group: styled.div`
		height: 36px;
		position: absolute;
		top: 63px;
		right: 6.4%;
		width: 210px;
	`,
	OverlapGroupWrapper: styled.div`
		height: 36px;
	`,
	OverlapGroup: styled.div`
		height: 36px;
		position: relative;
		display: flex;
		align-items: center;
		width: 210px;
	`,
	RectangleWrapper: styled.div`
		position: relative;
		flex-grow: 1;
	`,
	Rectangle: styled.input`
		border: 1.5px solid #919191;
		border-radius: 8px;
		width: 100%;
		height: 100%;
	`,
	SearchWrapper: styled.div`
		position: absolute;
		top: 0;
		left: 0;
		display: flex;
		align-items: center;
	`,
	SearchIcon: styled.img`
		height: 14px;
		width: 11px;
		margin-left: 11px;
	`,
	TextWrapper: styled.div`
		color: #4285f4;
		font-family: "Gilroy-Regular-Regular", Helvetica;
		font-size: 16px;
		font-weight: 400;
		text-align: center;
		margin-left: 16px;
	`,
	Button: styled.button`
		all: unset;
		background-color: #4285f4;
		border-radius: 22px;
		height: 44px;
		position: absolute;
		top: 60px;
		width: 113px;
		text-align: center;
		cursor: pointer;
		color: #fbfcff;
		font-family: "Noto Sans-Regular", Helvetica;
		font-size: 18px;
		font-weight: 400;
		line-height: 26px;
		white-space: nowrap;
	`,
	LoginButton: styled.button`
		${{ ...S.Button }};
		left: 1048px;
	`,
	SignUpButton: styled.button`
		${{ ...S.Button }};
		left: 1165px;
	`,
	HeaderMenu: styled.nav`
		height: 44px;
		position: absolute;
		top: 46px;
		left: 446px;
	`,
	MenuList: styled.ul`
		display: flex;
		padding: 0;
		margin: 0;
		list-style: none;
	`,
	MenuItem: styled.li`
		position: relative;
		margin-right: 20px;
		width: 100px;

		a {
			color: #4285f4;
			font-family: "Noto Sans-Regular", Helvetica;
			font-size: 20px;
			font-weight: 400;
			text-align: center;
			text-decoration: none;
			display: block;
			padding: 8px 0;
			width: 100%;
		}
	`,
	Container: styled.div`
		height: 48px;
		position: absolute;
		top: 48px;
		left: 22px;
		width: 195px;
	`,
	Logo: styled.div`
		color: #4285f4;
		font-family: "Poppins-BlackItalic", Helvetica;
		font-size: 44px;
		font-style: italic;
		font-weight: 900;
		line-height: 36px;
		white-space: nowrap;
		cursor: pointer;
	`,
}
