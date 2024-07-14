import React from 'react';
import { Tab as BootstrapTab, Tabs as BootstrapTabs } from "react-bootstrap";
import StudentManage from "../../components/StudentManage/StudentManage";
import CohortManage from "../../components/CohortManage/CohortManage";
import BranchManage from "../../components/BranchManage/BranchManage";
import styled from "styled-components";

const CustomTabs = styled(BootstrapTabs)`
	background-color: white;
`;

const CustomTab = styled(BootstrapTab)`
	color: #555 !important; /* 추가된 스타일이 우선하도록 합니다 */

	&.active {
		color: blue !important; /* 활성화된 탭의 글씨 색을 지정합니다 */
	}
`;

function Settings() {
	return (
		<CustomTabs
			defaultActiveKey="student-manage"
			id="uncontrolled-tab-example"
			className="mb-3"
		>
			<CustomTab eventKey="student-manage" title="학생 등록">
				<StudentManage />
			</CustomTab>
			<CustomTab eventKey="cohort-manage" title="기수 등록">
				<CohortManage />
			</CustomTab>
			<CustomTab eventKey="branch-manage" title="지점 등록">
				<BranchManage />
			</CustomTab>
		</CustomTabs>
	);
}

export default Settings;
