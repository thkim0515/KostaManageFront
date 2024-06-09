import React, { useState } from "react";
import axios from "axios";
import * as Vali from "../../utils/signupValidation";

const SignUp = () => {
  const [userId, setUserId] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userNickname, setUserNickname] = useState("");
  // const [userEmail, setUserEmail] = useState("");

  const [fieldValidity, setFieldValidity] = useState({
    userId: 0,
    userPassword: 0,
    userNickname: 0,
    // userEmail: 0,
  });
  const [errors, setErrors] = useState({});

  const handleSubmit = async (event) => {
    event.preventDefault();
    const newErrors = {};

    if (!Vali.validateUsername(userId)) {
      newErrors.userId = "아이디는 6자리에서 14자리까지 가능합니다.";
    }

    if (!Vali.validatePassword(userPassword)) {
      newErrors.userPassword =
        "패스워드는 특수문자, 대문자, 소문자, 숫자를 포함하여 8자리에서 16자리여야 합니다.";
    }

    // if (!Vali.validateEmail(userEmail)) {
    //   newErrors.userEmail = "올바른 이메일 형식이 아닙니다.";
    // }

    if (!Vali.validateNickname(userNickname)) {
      newErrors.userNickname =
        "닉네임은 한글, 영어, 숫자로 구성되며 2자리에서 10자리까지 가능합니다.";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      handleSignUp();
    }
  };

  const handleSignUp = async () => {
    const userData = {
      userId,
      userPassword,
      userNickname,
      // userEmail,
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
      alert("회원가입 중 오류가 발생했습니다.");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            placeholder="User ID"
          />
          {errors.userId && <p>{errors.userId}</p>}
        </div>
        <div>
          <input
            type="password"
            value={userPassword}
            onChange={(e) => setUserPassword(e.target.value)}
            placeholder="Password"
          />
          {errors.userPassword && <p>{errors.userPassword}</p>}
        </div>
        {/* <div>
          <input
            type="text"
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
            placeholder="Email"
          />
          {errors.userEmail && <p>{errors.userEmail}</p>}
        </div> */}
        <div>
          <input
            type="text"
            value={userNickname}
            onChange={(e) => setUserNickname(e.target.value)}
            placeholder="Nickname"
          />
          {errors.userNickname && <p>{errors.userNickname}</p>}
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
