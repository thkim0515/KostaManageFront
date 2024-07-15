import React, { useState, useEffect, useRef } from "react";
import * as S from "./EducationForm.style";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaCalendarAlt } from "react-icons/fa";

const EducationForm = () => {
	const [agreed, setAgreed] = useState(false);
	const [formData, setFormData] = useState({
		name: "",
		birthdate: new Date(),
		phone1: "",
		phone2: "",
		phone3: "",
		email: "",
		address: "",
		detailAddress: "",
		education: "",
		courses: [],
		codingExperience: "",
		otherCoding: "",
		jobExperience: "",
		jobDetails: "",
		insuranceStatus: "",
		infoSources: [],
		otherInfo: "",
	});

	const handleAgreeChange = () => {
		setAgreed(!agreed);
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleCourseChange = (e) => {
		const { value, checked } = e.target;
		setFormData((prevFormData) => ({
			...prevFormData,
			courses: checked
				? [...prevFormData.courses, value]
				: prevFormData.courses.filter((course) => course !== value),
		}));
	};

	const handleInfoChange = (e) => {
		const { value, checked } = e.target;
		setFormData((prevFormData) => ({
			...prevFormData,
			infoSources: checked
				? [...prevFormData.infoSources, value]
				: prevFormData.infoSources.filter((info) => info !== value),
		}));
	};

	console.log(formData);
	const CustomDatePickerInput = ({ value, onClick, placeholder }) => (
		<div
			onClick={onClick}
			style={{
				display: "flex",
				alignItems: "center",
				cursor: "pointer",
				border: "1px solid #ccc",
				padding: "7px",
				borderRadius: "4px",
			}}
		>
			<FaCalendarAlt style={{ marginRight: "8px", color: "#ccc" }} />
			<input
				type="text"
				value={value}
				readOnly
				placeholder={placeholder}
				style={{
					border: "none",
					backgroundColor: "transparent",
					outline: "none",
					width: "100%",
					color: "#555",
				}}
			/>
		</div>
	);

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(formData);
	};

	const [text, setText] = useState("");
	const textareaRef = useRef(null);

	useEffect(() => {
		const loadText = async () => {
			try {
				const response = await fetch("/Text.txt");
				if (!response.ok) {
					throw new Error("Network response was not ok " + response.statusText);
				}
				const textData = await response.text();
				setText(textData);
			} catch (error) {
				console.error(
					"There has been a problem with your fetch operation:",
					error
				);
			}
		};

		loadText();
	}, []);

	return (
		<S.Container>
			<S.Wrapper>
				<S.LeftColumn>
					<S.Image src="kosta.png" alt="KOSTA" />
				</S.LeftColumn>
				<S.RightColumn>
					<S.TitleWrapper>
						<h1>2024년 KOSTA 교육 신청서</h1>
						<p>* 개인정보 수집 및 이용 동의</p>
						<S.TextAreaWrapper>
							<S.TextArea
								ref={textareaRef}
								value={text}
								readOnly
								style={{
									border: "1px solid #666",
									padding: "8px",
									width: "80%",
									color: "#444",
								}}
							/>
						</S.TextAreaWrapper>
						<label>
							<input
								type="checkbox"
								checked={agreed}
								onChange={handleAgreeChange}
							/>
							본인은 귀하의 개인정보를 다음과 같이 수집·이용하는 것에
							동의합니다.
						</label>
					</S.TitleWrapper>
					<form onSubmit={handleSubmit}>
						<S.ManageField>
							<S.Label>1. 이름</S.Label>
							<S.NameInput
								type="text"
								placeholder="홍길동"
								name="name"
								value={formData.name}
								onChange={handleChange}
							/>
						</S.ManageField>
						<S.ManageField>
							<S.Label>2. 생년월일</S.Label>
							<DatePicker
								selected={formData.birthdate}
								onChange={(date) =>
									setFormData({ ...formData, birthdate: date })
								}
								dateFormat="yyyy/MM/dd"
								customInput={<CustomDatePickerInput />}
							/>
						</S.ManageField>
						<S.ManageField>
							<S.Label>3. 연락처</S.Label>
							<S.PhoneInputWrapper>
								<S.PhoneInput
									type="tel"
									maxLength="3"
									placeholder="010"
									name="phone1"
									value={formData.phone1}
									onChange={handleChange}
								/>
								<span>-</span>
								<S.PhoneInput
									type="tel"
									maxLength="4"
									name="phone2"
									value={formData.phone2}
									onChange={handleChange}
								/>
								<span>-</span>
								<S.PhoneInput
									type="tel"
									maxLength="4"
									name="phone3"
									value={formData.phone3}
									onChange={handleChange}
								/>
							</S.PhoneInputWrapper>
						</S.ManageField>
						<S.ManageField>
							<S.Label>4. 이메일 </S.Label>
							<S.Input
								type="email"
								placeholder="hanmail/daum/gmail은 메일발송이 불가하오니 다른 메일주소를 적어주시기 바랍니다."
								name="email"
								value={formData.email}
								onChange={handleChange}
							/>
						</S.ManageField>
						<S.ManageField>
							<S.Label>5. 거주지 주소</S.Label>
							<S.Input
								type="text"
								placeholder="주소"
								name="address"
								value={formData.address}
								onChange={handleChange}
							/>
							<S.Input
								type="text"
								placeholder="상세주소"
								name="detailAddress"
								value={formData.detailAddress}
								onChange={handleChange}
							/>
						</S.ManageField>
						<S.ManageField>
							<S.Label>6. 최종학력 </S.Label>
							<S.Input
								type="text"
								placeholder="학교명/전공/졸업구분/졸업년도"
								name="education"
								value={formData.education}
								onChange={handleChange}
							/>
						</S.ManageField>
						<S.ManageField>
							<S.Label>7. 신청하시는 과정을 선택해주세요.</S.Label>
							<S.CheckboxWrapper>
								<input
									type="checkbox"
									id="course1"
									value="[285기] JavaScript기반 Full-Stack 개발자 양성 과정 (종로교육센터)"
									onChange={handleCourseChange}
								/>
								<S.CheckboxLabel htmlFor="course1">
									[285기] JavaScript기반 Full-Stack 개발자 양성 과정
									(종로교육센터)
								</S.CheckboxLabel>
							</S.CheckboxWrapper>
							<S.CheckboxWrapper>
								<input
									type="checkbox"
									id="course2"
									value="[286기] Java기반 클라우드 개발자 양성 과정 (종로교육센터)"
									onChange={handleCourseChange}
								/>
								<S.CheckboxLabel htmlFor="course2">
									[286기] Java기반 클라우드 개발자 양성 과정 (종로교육센터)
								</S.CheckboxLabel>
							</S.CheckboxWrapper>
							<S.CheckboxWrapper>
								<input
									type="checkbox"
									id="course3"
									value="[287기] Java기반 클라우드 개발자 양성 과정 (강남교육센터)"
									onChange={handleCourseChange}
								/>
								<S.CheckboxLabel htmlFor="course3">
									[287기] Java기반 클라우드 개발자 양성 과정 (강남교육센터)
								</S.CheckboxLabel>
							</S.CheckboxWrapper>
							<S.CheckboxWrapper>
								<input
									type="checkbox"
									id="course4"
									value="[290기] IT 시스템 엔지니어 양성 과정 (강남교육센터)"
									onChange={handleCourseChange}
								/>
								<S.CheckboxLabel htmlFor="course4">
									[290기] IT 시스템 엔지니어 양성 과정 (강남교육센터)
								</S.CheckboxLabel>
							</S.CheckboxWrapper>
							<S.CheckboxWrapper>
								<input
									type="checkbox"
									id="course5"
									value="[291기] JavaScript기반 Full-Stack 개발자 양성 과정 (강남교육센터)"
									onChange={handleCourseChange}
								/>
								<S.CheckboxLabel htmlFor="course5">
									[291기] JavaScript기반 Full-Stack 개발자 양성 과정
									(강남교육센터)
								</S.CheckboxLabel>
							</S.CheckboxWrapper>
							<S.CheckboxWrapper>
								<input
									type="checkbox"
									id="course6"
									value="[292기] 클라우드 기반 AI활용 데이터 분석 전문가 양성 과정 (강남교육센터)"
									onChange={handleCourseChange}
								/>
								<S.CheckboxLabel htmlFor="course6">
									[292기] 클라우드 기반 AI활용 데이터 분석 전문가 양성 과정
									(강남교육센터)
								</S.CheckboxLabel>
							</S.CheckboxWrapper>
							<S.CheckboxWrapper>
								<input
									type="checkbox"
									id="course7"
									value="[293기] 클라우드 기반 AI활용 데이터 분석 전문가 양성 과정 (종로교육센터)"
									onChange={handleCourseChange}
								/>
								<S.CheckboxLabel htmlFor="course7">
									[293기] 클라우드 기반 AI활용 데이터 분석 전문가 양성 과정
									(종로교육센터)
								</S.CheckboxLabel>
							</S.CheckboxWrapper>
						</S.ManageField>
						<S.ManageField>
							<S.Label>
								8. 코딩경험 (있을 경우 사용했던 언어를 기타란에 기재)
							</S.Label>
							<S.RadioWrapper>
								<input
									type="radio"
									id="codingYes"
									name="codingExperience"
									value="있다"
									onChange={handleChange}
								/>
								<S.RadioLabel htmlFor="codingYes">있다</S.RadioLabel>
							</S.RadioWrapper>
							<S.RadioWrapper>
								<input
									type="radio"
									id="codingNo"
									name="codingExperience"
									value="없다"
									onChange={handleChange}
								/>
								<S.RadioLabel htmlFor="codingNo">없다</S.RadioLabel>
							</S.RadioWrapper>
							<S.InlineWrapper>
								<input
									type="checkbox"
									id="codingOtherCheckbox"
									onChange={(e) =>
										setFormData({
											...formData,
											otherCoding: e.target.checked ? formData.otherCoding : "",
										})
									}
								/>
								<S.CheckboxLabel htmlFor="codingOtherCheckbox">
									기타:
								</S.CheckboxLabel>
								<S.InlineInput
									type="text"
									id="codingOther"
									name="otherCoding"
									value={formData.otherCoding}
									onChange={handleChange}
									disabled={!formData.otherCoding}
									placeholder="직접입력"
								/>
							</S.InlineWrapper>
						</S.ManageField>
						<S.ManageField>
							<S.Label>9. 직장경력 및 직업훈련관련 경험 여부</S.Label>
							<S.RadioWrapper>
								<input
									type="radio"
									id="jobYes"
									name="jobExperience"
									value="있다"
									onChange={handleChange}
								/>
								<S.RadioLabel htmlFor="jobYes">있다</S.RadioLabel>
							</S.RadioWrapper>
							<S.RadioWrapper>
								<input
									type="radio"
									id="jobNo"
									name="jobExperience"
									value="없다"
									onChange={handleChange}
								/>
								<S.RadioLabel htmlFor="jobNo">없다</S.RadioLabel>
							</S.RadioWrapper>
							<S.SubLabel htmlFor="jobDetails">
								* 직장경력이 있을 경우 주요경력사항과 재직기관을 함께 기재해
								주시기 바랍니다.
								<S.Input
									type="text"
									name="jobDetails"
									value={formData.jobDetails}
									onChange={handleChange}
								/>
							</S.SubLabel>
						</S.ManageField>
						<S.ManageField>
							<S.Label>10. 고용보험 가입 여부</S.Label>
							<S.RadioWrapper>
								<input
									type="radio"
									id="insuranceYes"
									name="insuranceStatus"
									value="현재 고용보험에 가입이 되어 있다"
									onChange={handleChange}
								/>
								<S.RadioLabel htmlFor="insuranceYes">
									현재 고용보험에 가입이 되어 있다
								</S.RadioLabel>
							</S.RadioWrapper>
							<S.RadioWrapper>
								<input
									type="radio"
									id="insuranceNo"
									name="insuranceStatus"
									value="현재 고용보험에 가입이 되어 있지 않다"
									onChange={handleChange}
								/>
								<S.RadioLabel htmlFor="insuranceNo">
									현재 고용보험에 가입이 되어 있지 않다
								</S.RadioLabel>
							</S.RadioWrapper>
							<S.RadioWrapper>
								<input
									type="radio"
									id="selfEmployed"
									name="insuranceStatus"
									value="사업자 등록증이 있다."
									onChange={handleChange}
								/>
								<S.RadioLabel htmlFor="selfEmployed">
									사업자 등록증이 있다.
								</S.RadioLabel>
							</S.RadioWrapper>
						</S.ManageField>
						<S.ManageField>
							<S.Label>11. 본 교육과정을 알게 된 경로(중복 선택 가능)</S.Label>
							<S.CheckboxWrapper>
								<input
									type="checkbox"
									id="info1"
									value="KOSTA 홍보 메일"
									onChange={handleInfoChange}
								/>
								<S.CheckboxLabel htmlFor="info1">
									KOSTA 홍보 메일
								</S.CheckboxLabel>
							</S.CheckboxWrapper>
							<S.CheckboxWrapper>
								<input
									type="checkbox"
									id="info2"
									value="지인추천(지인, 교수, 학교)"
									onChange={handleInfoChange}
								/>
								<S.CheckboxLabel htmlFor="info2">
									지인추천(지인, 교수, 학교)
								</S.CheckboxLabel>
							</S.CheckboxWrapper>
							<S.CheckboxWrapper>
								<input
									type="checkbox"
									id="info3"
									value="SNS(Facebook, 인스타그램)"
									onChange={handleInfoChange}
								/>
								<S.CheckboxLabel htmlFor="info3">
									SNS(Facebook, 인스타그램)
								</S.CheckboxLabel>
							</S.CheckboxWrapper>
							<S.CheckboxWrapper>
								<input
									type="checkbox"
									id="info4"
									value="국내 외 포털사이트"
									onChange={handleInfoChange}
								/>
								<S.CheckboxLabel htmlFor="info4">
									국내 외 포털사이트
								</S.CheckboxLabel>
							</S.CheckboxWrapper>
							<S.CheckboxWrapper>
								<input
									type="checkbox"
									id="info5"
									value="오프라인(지하철, 대학 현수막)"
									onChange={handleInfoChange}
								/>
								<S.CheckboxLabel htmlFor="info5">
									오프라인(지하철, 대학 현수막)
								</S.CheckboxLabel>
							</S.CheckboxWrapper>
							<S.InlineWrapper>
								<input
									type="checkbox"
									id="info6"
									value={formData.otherInfo}
									onChange={(e) =>
										setFormData({
											...formData,
											otherInfo: e.target.checked ? formData.otherInfo : "",
										})
									}
								/>
								<S.CheckboxLabel htmlFor="info6">기타:</S.CheckboxLabel>
								<S.InlineInput
									type="text"
									id="otherInfo"
									name="otherInfo"
									value={formData.otherInfo}
									onChange={handleChange}
									disabled={!formData.otherInfo}
									placeholder="직접입력"
								/>
							</S.InlineWrapper>
						</S.ManageField>
						<S.Button type="submit">신청서 제출</S.Button>
					</form>
				</S.RightColumn>
			</S.Wrapper>
		</S.Container>
	);
};

export default EducationForm;
