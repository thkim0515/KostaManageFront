import React from 'react';
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import StudentManage from '../../components/StudentManage/StudentManage';
import CohortManage from "../../components/CohortManage/CohortManage";
import BranchManage from "../../components/BranchManage/BranchManage";

function Settings() {
    return (
        <Tabs
            defaultActiveKey="student-manage"
            id="uncontrolled-tab-example"
            className="mb-3"
        >
            <Tab eventKey="student-manage" title="학생 등록">
                <StudentManage />
            </Tab>
            <Tab eventKey="cohort-manage" title="기수 등록">
                <CohortManage />
            </Tab>
            <Tab eventKey="branch-manage" title="지점 등록">
                <BranchManage />
            </Tab>
        </Tabs>
    );
}

export default Settings;
