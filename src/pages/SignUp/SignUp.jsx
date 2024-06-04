import React, { useState } from "react";
import axios from "axios";

const SignUp = () => {
  const [userId, setUserId] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userNickname, setUserNickname] = useState("");

  const handleSignUp = async () => {
    const userData = {
      userId,
      userPassword,
      userNickname,
    };

    try {
      const response = await axios.post(
        "http://localhost:8080/users/register",
        userData
      );
      console.log(response.status);
      if (response.status === 200) {
        console.log("User registered:", response.data);
        alert("회원가입 성공");
      } else {
        alert("회원가입 실패");
      }
    } catch (error) {
      console.error("There was an error!", error);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
        placeholder="User ID"
      />
      <input
        type="password"
        value={userPassword}
        onChange={(e) => setUserPassword(e.target.value)}
        placeholder="Password"
      />
      <input
        type="text"
        value={userNickname}
        onChange={(e) => setUserNickname(e.target.value)}
        placeholder="Nickname"
      />
      <button onClick={handleSignUp}>Sign Up</button>
    </div>
  );
};

export default SignUp;
