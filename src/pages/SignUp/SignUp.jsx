import React, { useState } from "react";
import axios from "axios";
import * as Vali from "../../utils/signupValidation";

const SignUp = () => {
  const [formData, setFormData] = useState({
    userId: "",
    userPassword: "",
    userNickname: "",
    // userEmail: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSignUp = async () => {
    const newErrors = {
      userId: Vali.validateUsername(formData.userId),
      userPassword: Vali.validatePassword(formData.userPassword),
      userNickname: Vali.validateNickname(formData.userNickname),
      // userEmail: Vali.validateEmail(formData.userEmail),
    };

    setErrors(newErrors);

    if (Object.values(newErrors).every((error) => error === "")) {
      try {
        const response = await axios.post(
          "http://localhost:8080/users/register",
          formData
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
    }
  };

  return (
    <div>
      <div>
        <input
          type="text"
          name="userId"
          value={formData.userId}
          onChange={handleChange}
          placeholder="User ID"
        />
        {errors.userId && <p>{errors.userId}</p>}
      </div>
      <div>
        <input
          type="password"
          name="userPassword"
          value={formData.userPassword}
          onChange={handleChange}
          placeholder="Password"
        />
        {errors.userPassword && <p>{errors.userPassword}</p>}
      </div>
      <div>
        <input
          type="text"
          name="userNickname"
          value={formData.userNickname}
          onChange={handleChange}
          placeholder="Nickname"
        />
        {errors.userNickname && <p>{errors.userNickname}</p>}
      </div>
      {/* <div>
        <input
          type="text"
          name="userEmail"
          value={formData.userEmail}
          onChange={handleChange}
          placeholder="Email"
        />
        {errors.userEmail && <p>{errors.userEmail}</p>}
      </div> */}
      <button onClick={handleSignUp}>Sign Up</button>
    </div>
  );
};

export default SignUp;
