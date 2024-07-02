import React from "react";
import { Link } from "react-router-dom";
import * as s from "./StudentListPage.style"; // 스타일 파일

const students = [
	{ id: 1, name: "Georgianna Ramero", department: "Sales" },
	{ id: 2, name: "Cami Mascha", department: "Engineering" },
	// Add more student data here
];

const StudentListPage = () => (
	<s.Sidebar>
		<s.NewContactButton>New Contact</s.NewContactButton>
		<s.SearchInput type="text" placeholder="Search Contacts" />
		<s.StudentList>
			{students.map((student) => (
				<s.StudentItem key={student.id}>
					<Link to={`/students/${student.id}`}>
						<s.StudentAvatar
							src={`https://i.pravatar.cc/150?img=${student.id}`}
							alt={student.name}
						/>
						<s.StudentInfo>
							<s.StudentName>{student.name}</s.StudentName>
							<s.StudentDepartment>{student.department}</s.StudentDepartment>
						</s.StudentInfo>
					</Link>
				</s.StudentItem>
			))}
		</s.StudentList>
	</s.Sidebar>
);

export default StudentListPage;
