import React from "react";
import * as S from "./ContentHeader.style";

const ContentHeader = ({ boardName, BoardType }) => {
	
	return (
		<S.Container>
			<S.Wrapper>
				<S.Image>
					<img src="/board.png" alt="게시판 이미지" />
					<S.TextOverlay>{boardName} </S.TextOverlay>
				
				</S.Image>
			</S.Wrapper>
		</S.Container>
	);
};

export default ContentHeader;
