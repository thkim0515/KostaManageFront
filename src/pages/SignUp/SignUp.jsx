import React, { useState } from "react";
import axios from "axios";
import * as Vali from "../../utils/signupValidation";
import DaumPostcodeEmbed from "react-daum-postcode";

const SignUp = () => {
  const [formData, setFormData] = useState({
    userNickname: "",
    userId: "",
    userPassword: "",
    userName: "",
    userPhone: "",
    userEmail: "",
    userAdress: "",
    userAdressDetail: "",
    userPasswordCheck: ""
  });

  const [errors, setErrors] = useState({});
  const [idcheckMsg, setIdcheckMsg] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSignUp = async () => {
    const newErrors = {
      userNickname: Vali.validateNickname(formData.userNickname),
      userId: Vali.validateUserId(formData.userId),
      userPassword: Vali.validatePassword(formData.userPassword),
      userName: Vali.validateName(formData.userName),
      userPhone: Vali.valdatePhone(formData.userPhone),
      userEmail: Vali.validateEmail(formData.userEmail),
      userPasswordCheck: Vali.validatePassword(formData.userPasswordCheck)
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

  const duobleCheck = (e) => {
    const onecheck = /^[a-zA-Z0-9]{6,14}$/;
    if (!onecheck.test(e.target.value)) {
      setIdcheckMsg(errors.userId && <p>{errors.userId}</p>)
    }

    // const res = axios.get(`http://localhost:8080/users/register${id}`)
    // if(res.status===200){
    //   setIdcheckMsg("사용 가능한 아이디 입니다")
    // } else if (res.status === 500){
    //   setIdcheckMsg("이미 사용한 내용이 있는 아이디 입니다")
    // }
  }

  return (
    <div>
      <div>닉네임</div>
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
      <div>아이디</div>
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
      <button onClick={duobleCheck}>중복 확인</button>
      <div>비밀번호</div>
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
      <div>비밀번호 확인</div>
      <div>
        <input
          type="password"
          name="userPasswordCheck"
          value={formData.userpasswordCheck}
          onChange={handleChange}
          placeholder="Password"
        />
        {formData.userPassword !== formData.userPasswordCheck && <p>비밀번호가 일치하기 않습니다.</p>}
      </div>
      <div>이름</div>
      <div>
        <input
          type="text"
          name="userName"
          value={formData.userName}
          onChange={handleChange}
          placeholder="Name"
        />
        {errors.userName && <p>{errors.userName}</p>}
      </div>
      <div>휴대폰 번호</div>
      <div>
        <input
          type="phone"
          name="userPhone"
          value={formData.userPhone}
          onChange={handleChange}
          placeholder="Phone"
        />
        {errors.userPhone && <p>{errors.userPhone}</p>}
      </div>
      <button onClick={""}>본인 확인 </button>
      <div>이메일 </div>
      <div>
        <input
          type="text"
          name="userEmail"
          value={formData.userEmail}
          onChange={handleChange}
          placeholder="Email"
        />
      </div>
      {errors.userEmail && <p>{errors.userEmail}</p>}
      <div>주소</div>
      <div>
        <input
          type="text"
          id="sample5_address"
          placeholder="주소"
        />
        <input type="button" onClick={""} value={"주소검색"} />
        <input
          type="text"
          id="sample3_detailAddress"
          placeholder="상세주소"
        />
      </div>
      <button onClick={handleSignUp} disabled={!(formData)}>Sign Up</button>
    </div>
  );
};

export default SignUp;
