import React, { useEffect, useState } from "react";
import axios from "axios";
import * as S from "./StudentListPage.style";
import { FaStar, FaTrashAlt, FaEdit } from "react-icons/fa";

const StudentListPage = ({ category }) => {
	const [students, setStudents] = useState([]);
	const [searchTerm, setSearchTerm] = useState("");
	const [copy, setCopy] = useState([]);
	const [selectedStudent, setSelectedStudent] = useState(null);

	useEffect(() => {
		const fetchStudents = async () => {
			try {
				const { data: posts } = await axios.get(
					"https://jsonplaceholder.typicode.com/posts"
				);
				const {
					data: { results: users },
				} = await axios.get("https://randomuser.me/api/?results=10&nat=jp,cn");

				const studentArray = posts.map((post, index) => {
					const user = users[index] || {}; // 사용자 데이터가 부족할 경우 기본값 사용

					return {
						id: post.id,
						name: post.title,
						email: `${post.title.toLowerCase().replace(/ /g, ".")}@example.com`,
						phone: user.phone || "N/A",
						address: `${user.location?.street?.name || "N/A"}, ${
							user.location?.city || "N/A"
						}`,
						company: "N/A",
						department: "N/A",
						notes: post.body,
						avatar:
							user.picture?.large || `https://i.pravatar.cc/150?img=${post.id}`, // 기본 아바타 설정
					};
				});

				setStudents(studentArray);
				setCopy(studentArray);
			} catch (error) {
				console.error("Error fetching data", error);
			}
		};

		fetchStudents();
	}, []);

	const handleInputChange = (e) => {
		setSearchTerm(e.target.value);
	};

	useEffect(() => {
		setStudents(
			copy.filter(
				(e) =>
					(e.name && e.name.toLowerCase().includes(searchTerm.toLowerCase())) ||
					(e.phone && e.phone.includes(searchTerm)) ||
					(e.email && e.email.toLowerCase().includes(searchTerm.toLowerCase()))
			)
		);
	}, [searchTerm, copy]);

	useEffect(() => {
		if (category) {
			setStudents(copy.filter((e) => e.category === category));
		} else {
			setStudents(copy);
		}
	}, [category, copy]);

	const handleStudentClick = (student) => {
		setSelectedStudent(student);
	};

	return (
		<S.Container>
			<S.HeaderWrap>
				<S.SearchWrapper>
					<S.Search
						placeholder="이름,연락처 검색"
						onChange={handleInputChange}
					/>
					<S.ContactDetailsHeader>
						<S.ContactDetailsText>학생 상세정보</S.ContactDetailsText>
						<S.IconWrapper>
							<FaStar />
							<FaTrashAlt />
						</S.IconWrapper>
					</S.ContactDetailsHeader>
				</S.SearchWrapper>
			</S.HeaderWrap>
			<S.MainContent>
				<S.StudentList>
					{students.map((student) => (
						<S.StudentItem
							key={student.id}
							onClick={() => handleStudentClick(student)}
						>
							<S.StudentAvatar src={student.avatar} alt={student.name} />
							<S.StudentInfo>
								<S.StudentName>{student.name}</S.StudentName>
								<S.StudentEmail>{student.email}</S.StudentEmail>
							</S.StudentInfo>
						</S.StudentItem>
					))}
				</S.StudentList>
				{selectedStudent && (
					<S.DetailPanel>
						<S.Details>
							<S.ContactDetails>
								<S.DetailsHeader>
									<S.DetailsAvatar
										src={selectedStudent.avatar}
										alt={selectedStudent.name}
									/>
									<S.DetailsInfo>
										<h2>{selectedStudent.name}</h2>
										<p>{selectedStudent.department}</p>
										<p>{selectedStudent.company}</p>
									</S.DetailsInfo>
								</S.DetailsHeader>
								<S.DetailsBody>
									<S.ContactInfo>
										<div>
											<p>
												<strong>Phone number:</strong> {selectedStudent.phone}
											</p>
											<p>
												<strong>Email address:</strong> {selectedStudent.email}
											</p>
										</div>
										<div>
											<p>
												<strong>Address:</strong> {selectedStudent.address}
											</p>
											<p>
												<strong>Notes:</strong> {selectedStudent.notes}
											</p>
										</div>
									</S.ContactInfo>
								</S.DetailsBody>
								<S.DetailsButtons>
									<S.EditButton>
										<FaEdit /> Edit
									</S.EditButton>
									<S.DeleteButton>
										<FaTrashAlt /> Delete
									</S.DeleteButton>
								</S.DetailsButtons>
							</S.ContactDetails>
						</S.Details>
					</S.DetailPanel>
				)}
			</S.MainContent>
		</S.Container>
	);
};

export default StudentListPage;
