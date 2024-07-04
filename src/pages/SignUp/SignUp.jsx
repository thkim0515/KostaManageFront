import React from "react";
import * as S from "./SignUp.style";

const SignUp = () => {
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
};

export default SignUp;