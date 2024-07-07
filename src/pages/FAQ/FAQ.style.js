import styled from "styled-components";
import Accordion from "react-bootstrap/Accordion";

// 전체 FAQ Wrapper
export const FAQWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 100%;
	padding: 20px;
	background-color: #f9f9f9;
`;

// 기본적인 Accordion 스타일
export const CustomAccordion = styled(Accordion)`
	width: 100%;
	max-width: 100%;
	border: 1px solid #dee2e6;
	border-radius: 10px;
	background-color: white;
	margin-bottom: 10px;

	.accordion-item {
	}

	.accordion-button:not(.collapsed) {
		color: #ffffff;
		background-color: #007bff;
		box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.125);
	}

	.accordion-header {
		background-color: #ffffff;
	}

	.accordion-body {
		background-color: #ffffff;
	}
`;

// 각 Accordion 헤더의 스타일
export const AccordionHeader = styled.div`
	font-size: 24px;
	font-weight: bold;
	padding: 10px;
`;

// 각 Accordion 내용의 스타일
export const AccordionBody = styled.div`
	padding: 22px;
	line-height: 1.5;
	font-size: 18px;
	font-weight: bold;
	background-color: #f8f9fa;
`;

