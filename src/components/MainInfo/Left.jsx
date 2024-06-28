import React from "react";
import * as S from "./MainInfoL.style";

const MainInfoL = ({ withDummyData = false }) => (
	<S.EContainer>
		<S.Overlap>
			<S.OverlapGroup>
				<S.TextWrapper>
					{withDummyData
						? "가상 아파트 투자 사이트 , 투자를 하는 사람들과의 대화 , "
						: "실제 데이터를 연도 별로 모아두어 편리한 처리가 가능한 곳"}
				</S.TextWrapper>
			</S.OverlapGroup>
			<S.Gogo>
				{withDummyData ? (
					<>
						실거래 gogo
						<br />
						사이트란?
					</>
				) : null}
			</S.Gogo>
		</S.Overlap>
	</S.EContainer>
);

export default MainInfoL;
