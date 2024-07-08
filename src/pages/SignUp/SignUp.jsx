import React, { useState } from "react";
import axios from "axios";
import * as Vali from "../../utils/signupValidation";
import * as S from "./SignUp.style";

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phoneNumber: "",
    role: "",
    cohortId: 1,
    assignedCohort: null,
    approvalStatus: "",
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
      name: Vali.validateName(formData.name),
      email: Vali.validateEmail(formData.email),
      password: Vali.validatePassword(formData.password),
    };

    setErrors(newErrors);

    if (Object.values(newErrors).every((error) => error === "")) {
      try {
        const response = await axios.post(
          "http://192.168.0.5:8080/users/register",
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
          <label htmlFor="name">이름</label>
          <S.Input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
          />
          {errors.name && <S.ErrorMsg>{errors.name}</S.ErrorMsg>}
        </S.SignUpField>

        <S.SignUpField>
          <label htmlFor="email">이메일</label>
          <S.Input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
          />
          {errors.email && <S.ErrorMsg>{errors.email}</S.ErrorMsg>}
        </S.SignUpField>

        <S.SignUpField>
          <label htmlFor="password">비밀번호</label>
          <S.Input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
          />
          {errors.password && <S.ErrorMsg>{errors.password}</S.ErrorMsg>}
        </S.SignUpField>

        <S.SignUpField>
          <label htmlFor="phoneNumber">휴대폰 번호</label>
          <S.Input
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            placeholder="Phone Number"
          />
          {errors.phoneNumber && <S.ErrorMsg>{errors.phoneNumber}</S.ErrorMsg>}
        </S.SignUpField>

        <S.SignUpField>
          <label htmlFor="role">역할</label>
          <S.Input
            type="text"
            name="role"
            value={formData.role}
            onChange={handleChange}
            placeholder="Role"
          />
          {errors.role && <S.ErrorMsg>{errors.role}</S.ErrorMsg>}
        </S.SignUpField>

        <S.SignUpField>
          <label htmlFor="approvalStatus">에에엘</label>
          <S.Input
            type="text"
            name="approvalStatus"
            value={formData.approvalStatus}
            onChange={handleChange}
            placeholder="approvalStatus"
          />
          {errors.approvalStatus && (
            <S.ErrorMsg>{errors.approvalStatus}</S.ErrorMsg>
          )}
        </S.SignUpField>

        <S.SignUpField>
          <label htmlFor="cohortId">코호트 ID</label>
          <S.Input
            type="number"
            name="cohortId"
            value={formData.cohortId}
            onChange={handleChange}
            placeholder="Cohort ID"
          />
          {errors.cohortId && <S.ErrorMsg>{errors.cohortId}</S.ErrorMsg>}
        </S.SignUpField>

        <S.Button onClick={handleSignUp}>Sign Up</S.Button>
      </S.warrap>
    </S.Container>
  );
};

export default SignUp;
