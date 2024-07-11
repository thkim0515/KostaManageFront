import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/actions/userLoginSession";
import { handleLogin } from "../../utils/login";
import * as S from "./Login.style";

const Login = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const user = useSelector((state) => state.user.user);
	const dispatch = useDispatch();

	const handleLoginClick = () => {
		handleLogin(username, password, dispatch);
	};

	const handleLogout = () => {
		dispatch(logout());
	};

	return (
		<S.Container>
			{!user ? (
				<S.Group>
					<h2>로그인</h2>
					<br />
					<br />
					<S.LoginField>
						<S.Input
							type="text"
							placeholder="아이디"
							value={username}
							onChange={(e) => setUsername(e.target.value)}
						/>
					</S.LoginField>
					<S.LoginField>
						<S.Input
							type="password"
							placeholder="패스워드"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
					</S.LoginField>
					<S.StyledButton variant="outline-primary" onClick={handleLoginClick}>
						Login
					</S.StyledButton>
				</S.Group>
			) : (
				<>
					<S.Paragraph>로그인 아이디 : {user}</S.Paragraph>
					<S.StyledButton variant="outline-primary" onClick={handleLogout}>
						Logout
					</S.StyledButton>
				</>
			)}
		</S.Container>
	);
};

export default Login;