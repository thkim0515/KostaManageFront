import React from "react";
import { useParams } from "react-router-dom";
import * as s from "./StudentDetailPage.style"; // 스타일 파일

const students = [
	{
		id: 1,
		name: "Georgianna Ramero",
		phone: "456-485-5623",
		address: "19214 110th Rd, Saint Albans, NY, 1141",
		company: "Muller Inc",
		department: "Sales",
		email: "qq379v4r9gg@ciambab.com",
		notes: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
	},
	{
		id: 2,
		name: "Cami Mascha",
		phone: "123-456-7890",
		address: "123 Main St, Anytown, USA",
		company: "Tech Corp",
		department: "Engineering",
		email: "cami@techcorp.com",
		notes: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
	},
	// Add more student data here
];

const StudentDetailPage = () => {
	const { id } = useParams();
	const student = students.find((student) => student.id === Number(id));

	if (!student) {
		return <p>Student not found</p>;
	}

	return (
		<s.Details>
			<s.ContactDetails>
				<s.DetailsAvatar
					src={`https://i.pravatar.cc/150?img=${student.id}`}
					alt={student.name}
				/>
				<h2>{student.name}</h2>
				<p>
					<strong>Phone:</strong> {student.phone}
				</p>
				<p>
					<strong>Address:</strong> {student.address}
				</p>
				<p>
					<strong>Company:</strong> {student.company}
				</p>
				<p>
					<strong>Department:</strong> {student.department}
				</p>
				<p>
					<strong>Email:</strong> {student.email}
				</p>
				<p>
					<strong>Notes:</strong> {student.notes}
				</p>
				<s.DetailsButtons>
					<s.EditButton>Edit</s.EditButton>
					<s.DeleteButton>Delete</s.DeleteButton>
				</s.DetailsButtons>
			</s.ContactDetails>
		</s.Details>
	);
};

export default StudentDetailPage;
