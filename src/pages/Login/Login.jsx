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
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
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
