import React, { useState } from "react";
import axios from "axios";
import * as Vali from "../../../utils/signupValidation";
import * as S from "./SignUp.style";
import { useSelector } from "react-redux";

const SignUp = () => {
  const localAddress = useSelector((state) => state.localAddress.value);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phoneNumber: "",
    role: "",
    cohortId: 1,
    assignedCohort: null,
    approvalStatus: "Pending",
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

    console.log(formData);
    // if (Object.values(newErrors).every((error) => error === "")) {
    //   try {
    //     const response = await axios.post(
    //       `${localAddress}users/register`,
    //       formData
    //     );
    //     console.log(response.status);
    //     if (response.status === 200) {
    //       console.log("User registered:", response.data);
    //       alert("회원가입 성공");
    //     } else {
    //       alert("회원가입 실패");
    //     }
    //   } catch (error) {
    //     console.error("There was an error!", error);
    //     alert("회원가입 중 오류가 발생했습니다.");
    //   }
    // }
  };

  return (
    <S.Container>
      <S.Wrapper>
        <S.Group>
          <h2>회원가입을 위해 정보를 입력 해주세요</h2>
          <br />
          <br />

          <S.SignUpField>
            <S.Label htmlFor="name">* 이름</S.Label>
            <S.Input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="이름을 입력해주세요"
            />
            {errors.name && <S.ErrorMsg>{errors.name}</S.ErrorMsg>}
          </S.SignUpField>

          <S.SignUpField>
            <S.Label htmlFor="email">* 이메일</S.Label>
            <S.Input
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="이메일을 입력해주세요"
            />
            {errors.email && <S.ErrorMsg>{errors.email}</S.ErrorMsg>}
          </S.SignUpField>

          <S.SignUpField>
            <S.Label htmlFor="password">* 비밀번호</S.Label>
            <S.Input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="비밀번호를 입력해주세요"
            />
            {errors.password && <S.ErrorMsg>{errors.password}</S.ErrorMsg>}
          </S.SignUpField>

          <S.SignUpField>
            <S.Label htmlFor="phoneNumber">* 휴대폰 번호</S.Label>
            <S.Input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              placeholder="휴대폰 번호를 입력해주세요"
            />
            {errors.phoneNumber && (
              <S.ErrorMsg>{errors.phoneNumber}</S.ErrorMsg>
            )}
          </S.SignUpField>

          <S.SignUpField>
            <S.Label htmlFor="role">* 역할</S.Label>
            <S.Input
              type="text"
              name="role"
              value={formData.role}
              onChange={handleChange}
              placeholder="역할을 입력해주세요"
            />
            {errors.role && <S.ErrorMsg>{errors.role}</S.ErrorMsg>}
          </S.SignUpField>

          <S.SignUpField>
            <S.Label htmlFor="cohortId">코호트 ID</S.Label>
            <S.Input
              type="number"
              name="cohortId"
              value={formData.cohortId}
              onChange={handleChange}
              placeholder="Cohort ID"
            />
            {errors.cohortId && <S.ErrorMsg>{errors.cohortId}</S.ErrorMsg>}
          </S.SignUpField>

          <S.Button onClick={handleSignUp}>가입하기</S.Button>
        </S.Group>
      </S.Wrapper>
    </S.Container>
  );
};

export default SignUp;
