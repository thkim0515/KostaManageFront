import React from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./ContentHeader.style";

const ContentHeader = ({ boardName, BoardType }) => {
	const navigate = useNavigate();

	const handleCreateClick = () => {
	};

	return (
		<S.Container>
			<S.Wrapper>
				<S.Image>
					<img src="/board.png" alt="게시판 이미지" />
					<S.TextOverlay>{boardName} 게시판</S.TextOverlay>
				<S.CreateButton onClick={handleCreateClick}>작성하기</S.CreateButton>
				</S.Image>
			</S.Wrapper>
		</S.Container>
	);
};

export default ContentHeader;
