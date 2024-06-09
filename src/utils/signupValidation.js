/**아이디 : 영어와 숫자로만 구성 (6~14자리)*/
export function validateUsername(username) {
  const usernameRegex = /^[a-zA-Z0-9]{6,14}$/;
  return usernameRegex.test(username);
}

/**패스워드 : 특문1 대문자1 필수 소문자와 숫자로 구성 (8~16자리) */
export function validatePassword(password) {
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,16}$/;
  return passwordRegex.test(password);
}

/**닉네임 : 한글,영어,숫자로 구성 (2~10자리)*/
export function validateNickname(nickname) {
  const nicknameRegex = /^[가-힣a-zA-Z0-9]{2,10}$/;
  return nicknameRegex.test(nickname);
}

/**이메일 : 이메일 형식에 맞게 구성 */
export function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
