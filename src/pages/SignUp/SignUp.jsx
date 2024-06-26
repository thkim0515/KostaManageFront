//import React, { useState } from "react";
//import axios from "axios";
//import * as Vali from "../../utils/signUpValidation";
//import { DaumPostcodeEmbed } from "react-daum-postcode";
//
//const SignUp = () => {
//  const [formData, setFormData] = useState({
//    userNickname: "",
//    userId: "",
//    userPassword: "",
//    userName: "",
//    userPhone: "",
//    userEmail: "",
//    userAdress: "",
//    userAdressDetail: "",
//    userPasswordCheck: ""
//  });
//
//  const [showPostCode, setShowPostCode] = useState(false);
//  const [errors, setErrors] = useState({});
//  const [idcheckMsg, setIdCheckMsg] = useState("");
//
//  const handleChange = (e) => {
//    const { name, value } = e.target;
//    setFormData((prev) => ({
//      ...prev,
//      [name]: value,
//    }));
//  };
//
//  const handleComplete = (data) => {
//    let fullAddress = data.address;
//    let extraAddress = '';
//
//    if (data.addressType === 'R') {
//      if (data.bname !== '') {
//        extraAddress += data.bname;
//      }
//      if (data.buildingName !== '') {
//        extraAddress += extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
//      }
//      fullAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
//    }
//    setFormData({ ...formData, userAdress: fullAddress });
//    setShowPostCode(false);
//  };
//
//  const handleClickSearch = () => {
//    setShowPostCode(true);
//  };
//
//  const handleAddressChange = (e) => {
//    const { id, value } = e.target;
//    setFormData((prev) => ({
//      ...prev,
//      [id]: value,
//    }));
//  };
//
//  const handleSignUp = async () => {
//    const newErrors = {
//      userNickname: Vali.validateNickname(formData.userNickname),
//      userId: Vali.validateUserId(formData.userId),
//      userPassword: Vali.validatePassword(formData.userPassword),
//      userName: Vali.validateName(formData.userName),
//      userPhone: Vali.valdatePhone(formData.userPhone),
//      userEmail: Vali.validateEmail(formData.userEmail),
//      userPasswordCheck: Vali.validatePassword(formData.userPasswordCheck)
//    };
//
//    setErrors(newErrors);
//
//    if (Object.values(newErrors).every((error) => error === "")) {
//      try {
//        const response = await axios.post(
//          "http://localhost:8080/users/register",
//          formData
//        );
//        console.log(response.status);
//        if (response.status === 200) {
//          console.log("User registered:", response.data);
//          alert("회원가입 성공");
//        } else {
//          alert("회원가입 실패");
//        }
//      } catch (error) {
//        console.error("There was an error!", error);
//        alert("회원가입 중 오류가 발생했습니다.");
//      }
//    }
//  };
//
//  const duobleCheck = async (e) => {
//    const onecheck = /^[a-zA-Z0-9]{6,14}$/;
//    // 변수 값 체크 조건
//    if (!onecheck.test(e.target.value)) {
//      setIdCheckMsg(errors.userId && <p>{errors.userId}</p>);
//      return;
//    }
//
//    try {
//      // async/await와 axios get 요청 처리
//      const res = await axios.get(`http://localhost:8080/users/register/${e.target.value}`);
//      if (res.status === 200) {
//        setIdCheckMsg("사용 가능한 아이디 입니다");
//      }
//    } catch (error) {
//      if (error.response && error.response.status === 500) {
//        setIdCheckMsg("이미 등록된 아이디 입니다");
//      } else {
//        console.error("There was an error!", error);
//      }
//    }
//  };
//
//  return (
//    <div>
//      <div>닉네임</div>
//      <div>
//        <input
//          type="text"
//          name="userNickname"
//          value={formData.userNickname}
//          onChange={handleChange}
//          placeholder="Nickname"
//        />
//        {errors.userNickname && <p>{errors.userNickname}</p>}
//      </div>
//      <div>아이디</div>
//      <div>
//        <input
//          type="text"
//          name="userId"
//          value={formData.userId}
//          onChange={handleChange}
//          placeholder="User ID"
//        />
//        {errors.userId && <p>{errors.userId}</p>}
//      </div>
//      <button onClick={duobleCheck}>중복 확인</button>
//      {idcheckMsg && <p>{idcheckMsg}</p>}
//      <div>비밀번호</div>
//      <div>
//        <input
//          type="password"
//          name="userPassword"
//          value={formData.userPassword}
//          onChange={handleChange}
//          placeholder="Password"
//        />
//        {errors.userPassword && <p>{errors.userPassword}</p>}
//      </div>
//      <div>비밀번호 확인</div>
//      <div>
//        <input
//          type="password"
//          name="userPasswordCheck"
//          value={formData.userPasswordCheck}
//          onChange={handleChange}
//          placeholder="Password"
//        />
//        {formData.userPassword !== formData.userPasswordCheck && <p>비밀번호가 일치하지 않습니다.</p>}
//      </div>
//      <div>이름</div>
//      <div>
//        <input
//          type="text"
//          name="userName"
//          value={formData.userName}
//          onChange={handleChange}
//          placeholder="Name"
//        />
//        {errors.userName && <p>{errors.userName}</p>}
//      </div>
//      <div>휴대폰 번호</div>
//      <div>
//        <input
//          type="phone"
//          name="userPhone"
//          value={formData.userPhone}
//          onChange={handleChange}
//          placeholder="Phone"
//        />
//        {errors.userPhone && <p>{errors.userPhone}</p>}
//      </div>
//      <button onClick={""}>본인 확인 </button>
//      <div>이메일 </div>
//      <div>
//        <input
//          type="text"
//          name="userEmail"
//          value={formData.userEmail}
//          onChange={handleChange}
//          placeholder="Email"
//        />
//      </div>
//      {errors.userEmail && <p>{errors.userEmail}</p>}
//      <div>주소</div>
//      <div>
//        <input
//          type="text"
//          id="userAdress"
//          value={formData.userAdress}
//          onChange={handleAddressChange}
//          placeholder="주소"
//        />
//        <input type="button" onClick={handleClickSearch} value={"주소검색"} />
//        <input
//          type="text"
//          id="userAdressDetail"
//          value={formData.userAdressDetail}
//          onChange={handleAddressChange}
//          placeholder="상세주소"
//        />
//      </div>
//      <button onClick={handleSignUp} disabled={!Object.values(formData).every(value => value)}>Sign Up</button>
//    
//    {showPostCode && <DaumPostcodeEmbed onComplete={handleComplete} />}
//    </div>
//  );
//};
//
//export default SignUp;
