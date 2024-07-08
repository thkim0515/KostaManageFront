import React from "react";

import * as S from "./FirstPage.style";
import ContactList from "../../components/StudentListPage/ContactList";
import StudentListPage from "../../components/StudentListPage/StudentListPage";

const FirstPage = () => {
	return (
		<>
			<S.Container>
				<S.Wrapper>
					<ContactList />
					<StudentListPage />
				</S.Wrapper>
			</S.Container>
		</>
	);
};
export default FirstPage;
