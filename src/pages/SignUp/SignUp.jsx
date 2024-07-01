import React, { useState } from "react";
import axios from "axios";
import * as Vali from "../../utils/signupValidation";
import * as S from "./SignUp.style";

const SignUp = () => {
  const [formData, setFormData] = useState({
    userId: "",
    userPassword: "",
    userName: "",
    userNickname: "",
    userEmail: "",
    userPhone: "",
    userProfileImg: "defaultimg.jpg",
    userAdmin: "0"
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
      userId: Vali.validateUserId(formData.userId),
      userPassword: Vali.validatePassword(formData.userPassword),
      userName: Vali.validateName(formData.userName),
      userNickname: Vali.validateNickname(formData.userNickname),
      userEmail: Vali.validateEmail(formData.userEmail),
      userPhone: Vali.valdatePhone(formData.userPhone),
    };

    setErrors(newErrors);

    if (Object.values(newErrors).every((error) => error === "")) {
      try {
        const response = await axios.post(
          "http://192.168.0.36:8080/users/register",
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
    <S.Container>
      <S.warrap>
        <S.SignUpField>
          <label htmlFor="id">아이디</label>
          <S.Input
            type="text"
            name="userId"
            value={formData.userId}
            onChange={handleChange}
            placeholder="User ID"
          />
          {errors.userId && <S.ErrorMsg>{errors.userId}</S.ErrorMsg>}
        </S.SignUpField>

        <S.SignUpField>
          <label htmlFor="password">비밀번호</label>
          <S.Input
            type="password"
            name="userPassword"
            value={formData.userPassword}
            onChange={handleChange}
            placeholder="Password"
          />
          {errors.userPassword && <S.ErrorMsg>{errors.userPassword}</S.ErrorMsg>}
        </S.SignUpField>

        <S.SignUpField>
          <label htmlFor="name">이름</label>
          <S.Input
            type="text"
            name="userName"
            value={formData.userName}
            onChange={handleChange}
            placeholder="Name"
          />
          {errors.userName && <S.ErrorMsg>{errors.userName}</S.ErrorMsg>}
        </S.SignUpField>

        <S.SignUpField>
          <label htmlFor="nickname">닉네임</label>
          <S.Input
            type="text"
            name="userNickname"
            value={formData.userNickname}
            onChange={handleChange}
            placeholder="Nickname"
          />
          {errors.userNickname && <S.ErrorMsg>{errors.userNickname}</S.ErrorMsg>}
        </S.SignUpField>

        <S.SignUpField>
          <label htmlFor="email">이메일</label>
          <S.Input
            type="text"
            name="userEmail"
            value={formData.userEmail}
            onChange={handleChange}
            placeholder="Email"
          />
          {errors.userEmail && <S.ErrorMsg>{errors.userEmail}</S.ErrorMsg>}
        </S.SignUpField>

        <S.SignUpField>
          <label htmlFor="phone">휴대폰 번호</label>
          <S.Input
            type="tel"
            name="userPhone"
            value={formData.userPhone}
            onChange={handleChange}
            placeholder="Phone"
          />
          {errors.userPhone && <S.ErrorMsg>{errors.userPhone}</S.ErrorMsg>}
        </S.SignUpField>

        <S.Button onClick={handleSignUp}>Sign Up</S.Button>
      </S.warrap>
    </S.Container>
  );
};

export default SignUp;
