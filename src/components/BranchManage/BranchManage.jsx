import React, { useState } from "react";
import axios from "axios";
import * as Vali from "../../utils/signupValidation";
import * as S from "./BranchManage.style";

const BranchManage = () => {
	const [formData, setFormData] = useState({
		branchName: "",
		branchLocation: "",
		branchPhoneNumber: "",
		branchEmail: "",
		branchHours: "",
		managerName: "",
		managerPhoneNumber: "",
		managerEmail: "",
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

	const handleManage = async () => {
		const newErrors = {
			branchName: Vali.validateName(formData.branchName),
			branchLocation: Vali.validateName(formData.branchLocation),
			branchPhoneNumber: Vali.validatePhone(formData.branchPhone),
			branchEmail: Vali.validateEmail(formData.branchEmail),
			managerName: Vali.validateName(formData.managerName),
			managerPhoneNumber: Vali.validatePhone(formData.managerPhoneNumber),
			managerEmail: Vali.validateEmail(formData.managerEmail),
			email: Vali.validateEmail(formData.email),
			password: Vali.validatePassword(formData.password),
		};

		setErrors(newErrors);

		if (Object.values(newErrors).every((error) => error === "")) {
			try {
				const response = await axios.post(
					"http://192.168.19.66:8080/users/register",
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
			<S.Wrapper>
				<S.Group>
                <S.TitleWrapper>
					<h2>지점등록을 위해 정보를 입력 해주세요</h2>
                    </S.TitleWrapper>
					<S.ManageField>
						<S.Label htmlFor="branchName">* 학원 지점 이름</S.Label>
						<S.Input
							type="text"
							name="branchName"
							value={formData.branchName}
							onChange={handleChange}
							placeholder="학원 지점 이름을 입력해주세요"
						/>
						{errors.branchName && <S.ErrorMsg>{errors.branchName}</S.ErrorMsg>}
					</S.ManageField>

					<S.ManageField>
						<S.Label htmlFor="branchLocation">* 학원 지점 위치/주소</S.Label>
						<S.Input
							type="text"
							name="branchLocation"
							value={formData.branchLocation}
							onChange={handleChange}
							placeholder="학원 지점 위치/주소를 입력해주세요"
						/>
						{errors.branchLocation && (
							<S.ErrorMsg>{errors.branchLocation}</S.ErrorMsg>
						)}
					</S.ManageField>

					<S.ManageField>
						<S.Label htmlFor="branchPhoneNumber">* 학원 지점 전화번호</S.Label>
						<S.Input
							type="tel"
							name="branchPhoneNumber"
							value={formData.branchPhoneNumber}
							onChange={handleChange}
							placeholder="학원 지점 전화번호를 입력해주세요"
						/>
						{errors.branchPhoneNumber && (
							<S.ErrorMsg>{errors.branchPhoneNumber}</S.ErrorMsg>
						)}
					</S.ManageField>

					<S.ManageField>
						<S.Label htmlFor="branchEmail">* 학원 지점 이메일 주소</S.Label>
						<S.Input
							type="email"
							name="branchEmail"
							value={formData.branchEmail}
							onChange={handleChange}
							placeholder="학원 지점 이메일 주소를 입력해주세요"
						/>
						{errors.branchEmail && (
							<S.ErrorMsg>{errors.branchEmail}</S.ErrorMsg>
						)}
					</S.ManageField>

					<S.ManageField>
						<S.Label htmlFor="branchHours">* 학원 지점 운영시간</S.Label>
						<S.Input
							type="text"
							name="branchHours"
							value={formData.branchHours}
							onChange={handleChange}
							placeholder="학원 지점 운영시간을 입력해주세요"
						/>
						{errors.branchHours && (
							<S.ErrorMsg>{errors.branchHours}</S.ErrorMsg>
						)}
					</S.ManageField>

					<S.ManageField>
						<S.Label htmlFor="managerName">* 학원 지점 담당자 이름</S.Label>
						<S.Input
							type="text"
							name="managerName"
							value={formData.managerName}
							onChange={handleChange}
							placeholder="학원 지점 담당자 이름을 입력해주세요"
						/>
						{errors.managerName && (
							<S.ErrorMsg>{errors.managerName}</S.ErrorMsg>
						)}
					</S.ManageField>

					<S.ManageField>
						<S.Label htmlFor="managerPhoneNumber">
							* 학원 지점 담당자 전화번호
						</S.Label>
						<S.Input
							type="tel"
							name="managerPhoneNumber"
							value={formData.managerPhoneNumber}
							onChange={handleChange}
							placeholder="학원 지점 담당자 전화번호를 입력해주세요"
						/>
						{errors.managerPhoneNumber && (
							<S.ErrorMsg>{errors.managerPhoneNumber}</S.ErrorMsg>
						)}
					</S.ManageField>

					<S.ManageField>
						<S.Label htmlFor="managerEmail">* 학원 지점 담당자 이메일</S.Label>
						<S.Input
							type="email"
							name="managerEmail"
							value={formData.managerEmail}
							onChange={handleChange}
							placeholder="학원 지점 담당자 이메일을 입력해주세요"
						/>
						{errors.managerEmail && (
							<S.ErrorMsg>{errors.managerEmail}</S.ErrorMsg>
						)}
					</S.ManageField>

					{/* 나머지 회원가입 정보 필드들 */}

					<S.Button onClick={handleManage}>가입하기</S.Button>
				</S.Group>
			</S.Wrapper>
		</S.Container>
	);
};
export default BranchManage;
