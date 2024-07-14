import React from "react";
import * as S from "./MainPage.style";

const MainPage = () => {
	const count = useSelector((state) => state.counter.count);
	const value = useSelector((state) => state.init.value);
	const user = useSelector((state) => state.user.user);
	const generationValue = useSelector((state) => state.generation.value);
	const dispatch = useDispatch();

	return (
		<S.Container>
			<p>
				{value} - {generationValue} - {user}
			</p>
			<div>
				<h1>{count}</h1>
				<Button variant="outline-primary" onClick={() => dispatch(increase())}>
					증가
				</Button>{" "}
				<Button variant="outline-primary" onClick={() => dispatch(decrease())}>
					감소
				</Button>{" "}
			</div>
		</S.Container>
	);
};

export default MainPage;
