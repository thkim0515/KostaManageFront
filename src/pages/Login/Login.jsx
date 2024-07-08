import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/actions/userLoginSession";
import { handleLogin } from "../../utils/login";
import { Button } from "react-bootstrap";

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
    <div>
      {!user ? (
        <>
          <input
            type="text"
<<<<<<< HEAD
            placeholder="아이디"
=======
            placeholder="Username"
>>>>>>> 63d11e362 (ADD:CRA, 라우팅, 리덕스 완성 오브젝트)
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
<<<<<<< HEAD
            placeholder="패스워드"
=======
            placeholder="Password"
>>>>>>> 63d11e362 (ADD:CRA, 라우팅, 리덕스 완성 오브젝트)
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button variant="outline-primary" onClick={handleLoginClick}>
            Login
          </Button>
        </>
      ) : (
        <>
          <p>로그인 아이디 : {user}</p>
          <Button variant="outline-primary" onClick={handleLogout}>
            Logout
          </Button>
        </>
      )}
    </div>
  );
};

export default Login;
