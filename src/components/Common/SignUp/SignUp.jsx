import React from "react";
import * as S from "./SignUp.style";
import { useSelector } from "react-redux";

const SignUp = () => {
<<<<<<< HEAD
	return (
		<S.SignUp>
			<S.Div>
				<S.Button>
					<S.Submit>회원 가입</S.Submit>
				</S.Button>
				<S.BookAnAppointment>회원가입</S.BookAnAppointment>
				<S.Button className="div-wrapper">
					<S.TextWrapper>본인 확인</S.TextWrapper>
				</S.Button>
				<S.FirstName>
					<S.TextWrapper2>이름 *</S.TextWrapper2>
					<S.Form>
						<S.OverlapGroup>
							<S.TextWrapper3>Name</S.TextWrapper3>
						</S.OverlapGroup>
					</S.Form>
				</S.FirstName>
				<S.Phone>
					<S.TextWrapper2>휴대폰 번호 *</S.TextWrapper2>
					<S.Form>
						<S.OverlapGroup>
							<S.TextWrapper4>Phone</S.TextWrapper4>
						</S.OverlapGroup>
					</S.Form>
				</S.Phone>
				<S.Email>
					<S.TextWrapper2>이메일 *</S.TextWrapper2>
					<S.Form>
						<S.OverlapGroup>
							<S.TextWrapper4>Email</S.TextWrapper4>
						</S.OverlapGroup>
					</S.Form>
				</S.Email>
				<S.Button className="submit-wrapper">
					<S.Submit2>중복 확인</S.Submit2>
				</S.Button>
				<S.LastName>
					<S.TextWrapper2>아이디 *</S.TextWrapper2>
					<S.Form>
						<S.OverlapGroup>
							<S.TextWrapper5>ID</S.TextWrapper5>
						</S.OverlapGroup>
					</S.Form>
				</S.LastName>
				<S.Photo>
					<S.OverlapGroupWrapper>
						<S.DragAndDropOrWrapper>
							<S.DragAndDropOr>
								Drag and drop or <br />
								click here to select file
							</S.DragAndDropOr>
						</S.DragAndDropOrWrapper>
					</S.OverlapGroupWrapper>
					<S.TextWrapper6>프로필 사진 *</S.TextWrapper6>
				</S.Photo>
				<S.View>
					<S.TextWrapper2>비밀번호 *</S.TextWrapper2>
					<S.Form>
						<S.OverlapGroup>
							<S.TextWrapper4>Password</S.TextWrapper4>
						</S.OverlapGroup>
					</S.Form>
				</S.View>
				<S.LastName2>
					<S.TextWrapper2>닉네임 *</S.TextWrapper2>
					<S.Form>
						<S.OverlapGroup>
							<S.NickName>Nickname</S.NickName>
						</S.OverlapGroup>
					</S.Form>
				</S.LastName2>
				<S.View2>
					<S.TextWrapper2>비밀번호 확인 *</S.TextWrapper2>
					<S.Form>
						<S.OverlapGroup>
							<S.TextWrapper4>Password</S.TextWrapper4>
						</S.OverlapGroup>
					</S.Form>
				</S.View2>
				<S.Header alt="Header" src="header.png" />
				<S.Footer>
					<S.P>© 2022 Brand, Inc. • Privacy • Terms • Sitemap</S.P>
					<S.TextWrapper7>
						848 King Street, Mesa, AZ 85201, Boston, USA
					</S.TextWrapper7>
					<S.TextWrapper8>info@pawsitively.com</S.TextWrapper8>
					<S.Container>
						<S.Pawsitively>NULL</S.Pawsitively>
					</S.Container>
					<S.HeaderMenu>
						<S.Frame>
							<S.TextWrapper9>Services</S.TextWrapper9>
						</S.Frame>
						<S.Frame2>
							<S.TextWrapper9>About us</S.TextWrapper9>
						</S.Frame2>
						<S.LocationHoursWrapper>
							<S.TextWrapper9>Location &amp; hours</S.TextWrapper9>
						</S.LocationHoursWrapper>
						<S.Frame3>
							<S.TextWrapper9>Blog</S.TextWrapper9>
						</S.Frame3>
						<S.Frame4>
							<S.TextWrapper9>Contact</S.TextWrapper9>
						</S.Frame4>
					</S.HeaderMenu>
					<S.Group alt="Group" src="group-2.png" />
				</S.Footer>
			</S.Div>
		</S.SignUp>
	);
=======
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

    if (Object.values(newErrors).every((error) => error === "")) {
      try {
        const response = await axios.post(
          `${localAddress}users/register`,
          formData
        );
        if (response.status === 200) {
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
>>>>>>> d54d61fa (UPDATE:Merge 및 정리)
};

export default SignUp;