/**아이디 : 영어와 숫자로만 구성 (6~14자리)*/
export function validateUserId(userid) {
  const useridRegex = /^[a-zA-Z0-9]{6,14}$/;
  if (!useridRegex.test(userid)) {
    return "아이디는 6자리에서 14자리까지 가능합니다.";
  }
  return "";
}

/**패스워드 : 특문1 대문자1 필수 소문자와 숫자로 구성 (8~16자리)*/
export function validatePassword(password) {
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,16}$/;
  if (!passwordRegex.test(password)) {
    return "패스워드는 특수문자, 대문자, 소문자, 숫자를 포함하여 8자리에서 16자리여야 합니다.";
  }
  return "";
}

/**닉네임 : 한글,영어,숫자로 구성 (2~10자리)*/
export function validateNickname(nickname) {
  const nicknameRegex = /^[가-힣a-zA-Z0-9]{2,10}$/;
  if (!nicknameRegex.test(nickname)) {
    return "닉네임은 한글, 영어, 숫자로 구성되며 2자리에서 10자리까지 가능합니다.";
  }
  return "";
}

/**이메일 : 이메일 형식에 맞게 구성*/
export function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return "올바른 이메일 형식이 아닙니다.";
  }
  return "";
}
