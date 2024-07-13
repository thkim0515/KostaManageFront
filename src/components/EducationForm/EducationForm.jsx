import React, { useState } from "react";
import * as S from "./EducationForm.style";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaCalendarAlt } from "react-icons/fa";

const EducationForm = () => {
	const [agreed, setAgreed] = useState(false);

	const handleAgreeChange = () => {
		setAgreed(!agreed);
	};

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

	const textareaRef = React.useRef();

	const text = `한국소프트웨어기술진흥협회가 취급하는 모든 개인정보는 관련법령에 근거하거나 정보주체의 동의에 의하여 수집·보유 및 처리되고 있습니다. 한국소프트웨어기술진흥협회는 개인정보보호법 제30조에 따라 이용자의 개인정보 보호 및 권익을 보호하고 개인정보와 관련한 이용자의 고충을 원활하게 처리할 수 있도록 다음과 같이 개인정보 처리방침을 두고 있습니다. 한국소프트웨어기술진흥협회는 개인정보처리방침을 개정하는 경우 웹사이트를 통하여 공지할 예정입니다.

제1조 개인정보의 처리 목적
한국소프트웨어기술진흥협회는 개인정보를 다음의 목적을 위해 처리합니다. 처리한 개인정보는 다음의 목적 이외의 용도로는 사용되지 않으며 이용 목적이 변경될 시에는 사전 동의를 구할 예정입니다.
① 직업훈련업무
- 개인 식별, 훈련생관리, 훈련생 비용지원, 출결관리 등을 목적으로 개인정보를 처리합니다.
② 고객게시판 이용
- 개인 식별, 불만처리 등 민원처리 등을 목적으로 개인정보를 처리합니다.
③ 서비스 개선목적 활용
- 접속빈도 파악 또는 회원의 서비스 이용에 대한 통계 등을 목적으로 개인정보를 처리합니다.
④ 마케팅 및 광고에의 활용
- 신규 서비스(제품) 개발 및 맞춤 서비스 제공, 이벤트 및 광고성 정보 제공 및 참여기회 제공, 인구통계학적 특성에 따른 서비스 제공 및 광고 게재, 서비스의 유효성 확인, 접속빈도 파악 또는 회원의 서비스 이용에 대한 통계 등을 목적으로 개인정보를 처리합니다.

제2조 개인정보 처리항목 및 보유기간
한국소프트웨어기술진흥협회는 회원가입, 각종 서비스 제공을 위해 처리하는 개인정보의 항목 및 수집 방법은 다음과 같습니다.
① 처리항목
- 이름, 생년월일, 이메일, 휴대폰번호, 일반 전화번호, 주소, 최종학력, 자격사항 등
② 근거
- 국가인적자원개발컨소시엄 운영규칙 제 1조
- 근로자 직업능력 개발 법 제 52조, 제52조의 2
- 근로자 직업능력 개발법 시행령 제 20조
- 개인정보 보호법 시행령 제 17조, 제18조, 제19조
③ 처리목적
- 홈페이지 서비스 이용 및 직업능력개발정보 제공, 회원관리, 고지사항 전달, 교육 강좌 신청결과의 안내, 원활한 의사소통 경로의 확보 등의 목적으로 이용
④ 보유기간
- 영구(교육 훈련에 관한 회원정보 보유)

제3조 개인정보의 제3자 제공에 관한 사항
한국소프트웨어기술진흥협회는 원칙적으로 이용자의 개인정보를 제1조 (개인정보의 처리 목적)에서 명시한 범위 내에서 처리하며, 이용자의 사전 동의 없이는 본래의 범위를 초과하여 처리하거나 제3자에게 제공하지 않습니다. 단, 다음의 경우에는 개인정보를 처리할 수 있습니다.
① 정보주체로부터 별도의 동의를 받은 경우
② 법률에 특별한 규정이 있거나 법령상 의무를 준수하기 위하여 불가피한 경우
③ 정보주체 또는 그 법정대리인이 의사표시를 할 수 없는 상태에 있거나 주소불명 등으로 사전 동의를 받을 수 없는 경우로서 명백히 정보 주체 또는 제3자의 급박한 생명, 신체, 재산의 이익을 위하여 필요하다고 인정되는 경우
④ 통계작성 및 학술연구 등의 목적을 위하여 필요한 경우로써 특정 개인을 알아볼 수 없는 형태로 개인정보를 제공하는 경우
⑤ 개인정보를 목적 외의 용도로 이용하거나 이를 제3자에게 제공하지 아니하면 다른 법률에서 정하는 소관 업무를 수행할 수 없는 경우로서 보호위원회의 심의·의결을 거친 경우
⑥ 조약, 그 밖의 국제협정의 이행을 위하여 외국정부 또는 국제기구에 제공하기 위하여 필요한 경우
⑦ 범죄의 수사와 공소의 제기 및 유지를 위하여 필요한 경우
⑧ 법원의 재판업무 수행을 위하여 필요한 경우
⑨ 형(刑) 및 감호, 보호처분의 집행을 위하여 필요한 경우

제4조 개인정보처리 위탁
① 한국소프트웨어기술진흥협회는 위탁계약 체결시 개인정보 보호법 제25조에 따라 위탁업무 수행목적 외 개인정보 처리금지, 기술적․관리적 보호조치, 재 위탁 제한, 수탁자에 대한 관리․감독, 손해배상 등 책임에 관한 사항을 계약서 등 문서에 명시하고, 수탁자가 개인정보를 안전하게 처리하는지를 감독하고 있습니다.
② 위탁업무의 내용이나 수탁자가 변경될 경우에는 지체 없이 본 개인정보 처리방침을 통하여 공개하도록 하겠습니다.

제5조 정보주체의 권리/의무 및 행사방법
① 정보주체는 한국소프트웨어기술진흥협회에 대해 언제든지 다음 각 호의 개인정보 보호 관련 권리를 행사할 수 있습니다.
- 개인정보 열람요구
- 개인정보 정정, 삭제 요구
- 개인정보 처리정지 요구
② 제1항에 따른 권리 행사는 한국소프트웨어기술진흥협회에 대해 개인정보 보호법 시행규칙 별지 제8호 서식에 따라 서면, 전자우편, 모사전송(FAX) 등을 통하여 하실 수 있으며 한국소프트웨어기술진흥협회는 이에 대해 지체 없이 조치하겠습니다.
③ 정보주체가 개인정보의 오류 등에 대한 정정 또는 삭제를 요구한 경우에는 한국소프트웨어기술진흥협회는 정정 또는 삭제를 완료할 때까지 당해 개인정보를 이용하거나 제공하지 않습니다.
④ 제1항에 따른 권리 행사는 정보주체의 법정대리인이나 위임을 받은 자 등 대리인을 통하여 하실 수 있습니다. 이 경우 개인정보 보호법 시행규칙 별지 제11호 서식에 따른 위임장을 제출하셔야 합니다.

제6조 개인정보의 파기
한국소프트웨어기술진흥협회는 원칙적으로 개인정보 처리목적이 달성된 경우에는 지체 없이 해당 개인정보를 파기합니다. 다만, 다른 법률에 따라 보존하여야 하는 경우에는 그러하지 않습니다. 파기의 절차, 기한 및 방법은 다음과 같습니다.
① 파기절차 및 기한
- 이용자가 입력한 정보는 보유기간이 경과했거나 처리목적이 달성된 후 내부 방침 및 관련 법령에 따라 파기합니다.
② 파기방법
- 전자적 파일 형태인 경우 : 복원이 불가능한 방법으로 영구삭제
- 전자적 파일의 형태 외의 기록물, 인쇄물, 서면, 그 밖의 기록매체인 경우 : 파쇄 또는 소각
한국소프트웨어기술진흥협회는 전자적 파일 형태로 기록/저장된 개인정보는 기록을 재생 할 수 없도록 파기하며, 종이 문서에 기록/저장된 개인정보는 분쇄기로 분쇄하거나 소각하여 파기합니다.

제7조 개인정보의 안전성 확보 조치
한국소프트웨어기술진흥협회는 개인정보보호법 제29조에 따라 다음과 같이 안전성 확보에 필요한 기술적/관리적 및 물리적 조치를 하고 있습니다.
① 내부관리계획의 수립 및 시행 협회는 ‘개인정보의 안전성 확보조치 기준’에 의거하여 내부관리계획을 수립 및 시행합니다.
② 개인정보취급자 지정의 최소화 및 교육 개인정보취급자의 지정을 최소화하고 정기적인 교육을 시행하고 있습니다.
③ 개인정보에 대한 접근 제한 개인정보를 처리하는 데이터베이스시스템에 대한 접근권한의 부여, 변경, 말소를 통하여 개인정보에 대한 접근을 통제하고, 침입차단시스템과 침입방지시스템을 이용하여 외부로부터의 무단 접근을 통제하고 있습니다.
④ 접속기록의 보관 및 위변조 방지 개인정보처리시스템에 접속한 기록(웹 로그, 요약정보 등)을 최소 6개월 이상 보관, 관리하고 있습니다.
⑤ 개인정보의 암호화 이용자의 개인정보는 암호화 되어 저장 및 관리되고 있습니다. 또한 중요한 데이터는 저장 및 전송 시 암호화하여 사용하는 등의 별도 보안기능을 사용하고 있습니다.
⑥ 해킹 등에 대비한 기술적 대책 협회는 해킹이나 컴퓨터 바이러스 등에 의한 개인정보 유출 및 훼손을 막기 위하여 보안프로그램을 설치하고 주기적인 갱신·점검을 하며 외부로부터 접근이 통제된 구역에 시스템을 설치하고 기술적, 물리적으로 감시 및 차단하고 있습니다.
⑦ 비인가자에 대한 출입 통제 개인정보를 보관하고 있는 개인정보시스템의 물리적 보관 장소를 별도로 두고 이에 대해 출입통제 절차를 수립, 운영하고 있습니다.

제8조 개인정보 보호책임자
한국소프트웨어기술진흥협회는 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와 관련한 정보주체의 불만처리 및 피해구제 등을 위하여 아래와 같이 개인정보 보호책임자를 지정하고 있습니다.
① 개인정보 보호책임자
- 성명 : 엄민지
- 직책 : 선임연구원
- 연락처 : 031-606-9304
② 개인정보 보호 담당자
- 성명 : 주도환
- 직책 : 선임연구원
- 연락처 : 031-606-9306
정보주체께서는 한국소프트웨어기술진흥협회의 서비스(또는 사업)을 이용하시면서 발생한 모든 개인정보 보호 관련 문의, 불만처리, 피해구제 등에 관한 사항을 개인정보 보호책임자 및 담당부서로 문의하실 수 있습니다. 한국소프트웨어기술진흥협회는 정보주체의 문의에 대해 지체없이 답변 및 처리해드릴 것입니다.

제9조 개인정보 열람청구
한국소프트웨어기술진흥협회는 개인정보 보호법 제35조에 따른 개인정보의 열람 청구를 아래의 부서에 할 수 있습니다. 한국소프트웨어기술진흥협회는 정보주체의 개인정보 열람청구가 신속하게 처리되도록 노력하겠습니다.
① 개인정보 보호 담당부서
- 부서명 : 사업지원관리팀
- 성명 : 주도환
- 직책 : 선임연구원
- 연락처 : 031-606-9306

제10조 권익침해 구제방법
정보주체는 아래의 기관에 대해 개인정보 침해에 대한 피해구제, 상담 등을 문의하실 수 있습니다.
아래의 기관은 한국소프트웨어기술진흥협회와는 별개의 기관으로서, 한국소프트웨어기술진흥협회의 자체적인 개인정보 불만처리, 피해구제 결과에 만족하지 못하시거나 보다 자세한 도움이 필요하시면 문의하여 주시기 바랍니다.
① 개인정보 침해신고센터 (한국인터넷진흥원 운영)
- 소관업무 : 개인정보 침해사실 신고, 상담 신청
- 홈페이지 : privacy.kisa.or.kr
- 전화 : (국번없이) 118
② 개인정보 분쟁조정위원회 (한국인터넷진흥원 운영)
- 소관업무 : 개인정보 분쟁조정신청, 집단분쟁조정 (민사적 해결)
- 홈페이지 : privacy.kisa.or.kr
- 전화 : (국번없이) 118
③ 대검찰청 사이버범죄수사단 : 02-3480-3573 (www.spo.go.kr)
④ 경찰청 사이버테러대응센터 : 1566-0112 (www.netan.go.kr)
제11조 개인정보 처리방침 변경
이 개인정보 처리방침은 시행일부터 적용되며, 법령 및 방침에 따른 변경내용의 추가, 삭제 및 정정이 있는 경우에는 가능한 변경사항의 시행 7일 전부터 공지사항을 통하여 고지할 것입니다."
`;
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
								style={{
									border: "1px solid #666",
									padding: "10px",
									width: "80%",
									color: "#444",
									margin: "20px auto",
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
					<form>
						<S.ManageField>
							<S.Label>1. 이름</S.Label>
							<S.NameInput type="text" placeholder="홍길동" />
						</S.ManageField>
						<S.ManageField>
							<S.Label>2. 생년월일</S.Label>
							<DatePicker
								selected={new Date()}
								onChange={(date) => console.log(date)}
								dateFormat="yyyy/MM/dd"
								customInput={<CustomDatePickerInput />}
							/>
						</S.ManageField>
						<S.ManageField>
							<S.Label>3. 연락처</S.Label>
							<S.PhoneInputWrapper>
								<S.PhoneInput type="tel" maxLength="3" placeholder="010" />
								<span>-</span>
								<S.PhoneInput type="tel" maxLength="4" />
								<span>-</span>
								<S.PhoneInput type="tel" maxLength="4" />
							</S.PhoneInputWrapper>
						</S.ManageField>
						<S.ManageField>
							<S.Label>4. 이메일 </S.Label>
							<S.Input
								type="email"
								placeholder="hanmail/daum/gmail은 메일발송이 불가하오니 다른 메일주소를 적어주시기 바랍니다."
							/>
						</S.ManageField>
						<S.ManageField>
							<S.Label>5. 거주지 주소</S.Label>
							<S.Input type="text" placeholder="주소" />
							<S.Input type="text" placeholder="상세주소" />
						</S.ManageField>
						<S.ManageField>
							<S.Label>6. 최종학력 </S.Label>
							<S.Input
								type="text"
								placeholder="학교명/전공/졸업구분/졸업년도"
							/>
						</S.ManageField>
						<S.ManageField>
							<S.Label>7. 신청하시는 과정을 선택해주세요.</S.Label>
							<S.CheckboxWrapper>
								<input type="checkbox" id="course1" />
								<S.CheckboxLabel htmlFor="course1">
									[285기] JavaScript기반 Full-Stack 개발자 양성 과정
									(종로교육센터)
								</S.CheckboxLabel>
							</S.CheckboxWrapper>
							<S.CheckboxWrapper>
								<input type="checkbox" id="course2" />
								<S.CheckboxLabel htmlFor="course2">
									[286기] Java기반 클라우드 개발자 양성 과정 (종로교육센터)
								</S.CheckboxLabel>
							</S.CheckboxWrapper>
							<S.CheckboxWrapper>
								<input type="checkbox" id="course3" />
								<S.CheckboxLabel htmlFor="course3">
									[287기] Java기반 클라우드 개발자 양성 과정 (강남교육센터)
								</S.CheckboxLabel>
							</S.CheckboxWrapper>
							<S.CheckboxWrapper>
								<input type="checkbox" id="course4" />
								<S.CheckboxLabel htmlFor="course4">
									[290기] IT 시스템 엔지니어 양성 과정 (강남교육센터)
								</S.CheckboxLabel>
							</S.CheckboxWrapper>
							<S.CheckboxWrapper>
								<input type="checkbox" id="course5" />
								<S.CheckboxLabel htmlFor="course5">
									[291기] JavaScript기반 Full-Stack 개발자 양성 과정
									(강남교육센터)
								</S.CheckboxLabel>
							</S.CheckboxWrapper>
							<S.CheckboxWrapper>
								<input type="checkbox" id="course6" />
								<S.CheckboxLabel htmlFor="course6">
									[292기] 클라우드 기반 AI활용 데이터 분석 전문가 양성 과정
									(강남교육센터)
								</S.CheckboxLabel>
							</S.CheckboxWrapper>
							<S.CheckboxWrapper>
								<input type="checkbox" id="course7" />
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
								<input type="radio" id="codingYes" name="codingExperience" />
								<S.RadioLabel htmlFor="codingYes">있다</S.RadioLabel>
							</S.RadioWrapper>
							<S.RadioWrapper>
								<input type="radio" id="codingNo" name="codingExperience" />
								<S.RadioLabel htmlFor="codingNo">없다</S.RadioLabel>
							</S.RadioWrapper>
							<S.Input type="text" placeholder="기타: 직업경험 여부" />
						</S.ManageField>
						<S.ManageField>
							<S.Label>9. 직장경력 및 직업관련 경험 여부</S.Label>
							<S.RadioWrapper>
								<input type="radio" id="jobYes" name="jobExperience" />
								<S.RadioLabel htmlFor="jobYes">있다</S.RadioLabel>
							</S.RadioWrapper>
							<S.RadioWrapper>
								<input type="radio" id="jobNo" name="jobExperience" />
								<S.RadioLabel htmlFor="jobNo">없다</S.RadioLabel>
							</S.RadioWrapper>
							<S.Input
								type="text"
								placeholder="* 직장경력이 있을 경우 주요경력사항과 재직기관을 함께 기재해 주시기 바랍니다."
							/>
						</S.ManageField>
						<S.ManageField>
							<S.Label>10. 교육정보 기입 여부</S.Label>
							<S.CheckboxWrapper>
								<input type="checkbox" id="info1" />
								<S.CheckboxLabel htmlFor="info1">
									KOSTA 홈페이지
								</S.CheckboxLabel>
							</S.CheckboxWrapper>
							<S.CheckboxWrapper>
								<input type="checkbox" id="info2" />
								<S.CheckboxLabel htmlFor="info2">
									지인추천(친구, 가족, 학교)
								</S.CheckboxLabel>
							</S.CheckboxWrapper>
							<S.CheckboxWrapper>
								<input type="checkbox" id="info3" />
								<S.CheckboxLabel htmlFor="info3">
									SNS(Facebook, 인스타그램)
								</S.CheckboxLabel>
							</S.CheckboxWrapper>
							<S.CheckboxWrapper>
								<input type="checkbox" id="info4" />
								<S.CheckboxLabel htmlFor="info4">
									포털사이트(네이버, 다음)
								</S.CheckboxLabel>
							</S.CheckboxWrapper>
							<S.CheckboxWrapper>
								<input type="checkbox" id="info5" />
								<S.CheckboxLabel htmlFor="info5">
									오프라인(학원방문, 대학 특강)
								</S.CheckboxLabel>
							</S.CheckboxWrapper>
						</S.ManageField>
						<S.Button type="submit">신청서 제출</S.Button>
					</form>
				</S.RightColumn>
			</S.Wrapper>
		</S.Container>
	);
};

export default EducationForm;
