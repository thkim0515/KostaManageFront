import React from "react";
import Accordion from "react-bootstrap/Accordion";
import {
	FAQWrapper,
	CustomAccordion,
	AccordionHeader,
	AccordionBody,
} from "./FAQ.style";

function FAQ() {
	return (
		<FAQWrapper>
			<CustomAccordion defaultActiveKey={["0"]} alwaysOpen>
				<Accordion.Item eventKey="0">
					<Accordion.Header>
						<AccordionHeader>
							K-디지털 트레이닝(KDT)이 무엇인가요?
						</AccordionHeader>
					</Accordion.Header>
					<Accordion.Body>
						<AccordionBody>
							KDT는 고용노동부에서 주관하는 이차 현장훈련기관이 참여하는
							'현장실습 디지털 핵심 실무인재 양성훈련'으로 디지털 신기술을
							활용한 프로젝트 기반의 실무 중심 훈련과정입니다.
						</AccordionBody>
					</Accordion.Body>
				</Accordion.Item>
				<Accordion.Item eventKey="1">
					<Accordion.Header>
						<AccordionHeader>
							국비지원받아서 수강해야만 참여가 가능한가요?
						</AccordionHeader>
					</Accordion.Header>
					<Accordion.Body>
						<AccordionBody>
							KDT는 국비지원과정으로, 국비지원이 불가한 경우에는 참여가
							불가능합니다. 국비지원이 가능한지 여부는 고용센터에 문의해주시기
							바랍니다.
						</AccordionBody>
					</Accordion.Body>
				</Accordion.Item>
				<Accordion.Item eventKey="2">
					<Accordion.Header>
						<AccordionHeader>
							비전공자이며 개발(코딩)을 전혀 모르는데도 괜찮나요?
						</AccordionHeader>
					</Accordion.Header>
					<Accordion.Body>
						<AccordionBody>
							네, 괜찮습니다. KDT는 비전공자도 참여할 수 있도록 기초부터
							심화까지 체계적으로 구성되어 있습니다. 다만, 과정에 따라
							사전지식이 요구될 수 있으니 과정별 안내사항을 참고해주시기
							바랍니다.
						</AccordionBody>
					</Accordion.Body>
				</Accordion.Item>
				<Accordion.Item eventKey="3">
					<Accordion.Header>
						<AccordionHeader>훈련생이 부담하는 비용은 없나요?</AccordionHeader>
					</Accordion.Header>
					<Accordion.Body>
						<AccordionBody>
							네, 훈련생이 부담하는 비용은 없습니다. 훈련비 전액을 국비로
							지원받으며, 훈련생은 무료로 참여할 수 있습니다.
						</AccordionBody>
					</Accordion.Body>
				</Accordion.Item>
				<Accordion.Item eventKey="4">
					<Accordion.Header>
						<AccordionHeader>
							훈련과정 중에 취업이 되면 어떻게 되나요?
						</AccordionHeader>
					</Accordion.Header>
					<Accordion.Body>
						<AccordionBody>
							훈련과정 중에 취업이 되면 훈련을 중도에 포기할 수 있습니다. 다만,
							훈련과정 중 취업이 되더라도 훈련을 끝까지 수료하는 것이
							바람직합니다.
						</AccordionBody>
					</Accordion.Body>
				</Accordion.Item>
				<Accordion.Item eventKey="5">
					<Accordion.Header>
						<AccordionHeader>
							수료 이후에도 취업 지원을 받을 수 있나요?
						</AccordionHeader>
					</Accordion.Header>
					<Accordion.Body>
						<AccordionBody>
							네, 수료 이후에도 한국소프트웨어산업협회(KOSTA)의 취업지원센터가
							있습니다. 취업지원센터에서는 이력서 및 자기소개서 작성, 면접 준비
							등 다양한 취업 지원 서비스를 제공하고 있습니다.
							한국소프트웨어기술진흥협회 031-606-9319
						</AccordionBody>
					</Accordion.Body>
				</Accordion.Item>
			</CustomAccordion>
		</FAQWrapper>
	);
}

export default FAQ;
