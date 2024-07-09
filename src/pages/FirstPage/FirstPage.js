import React from "react";

import * as S from "./FirstPage.style";
import StudentListPage from "../../components/StudentListPage/StudentListPage";

const FirstPage = () => {
	return (
		<>
			<S.Container>
				<S.Wrapper>
					<StudentListPage />
				</S.Wrapper>
			</S.Container>
		</>
	);
};
export default FirstPage;