import React, { useEffect, useState } from "react";
import axios from "axios";
import * as S from "./StudentListPage.style";
import { FaStar, FaTrashAlt } from "react-icons/fa";

const StudentListPage = ({ category }) => {
  const [students, setStudents] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [copy, setCopy] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState(null);

  useEffect(() => {
    const fetchStudents = async () => {
      const { data } = await axios.get("https://jsonplaceholder.typicode.com/posts");
      const studentArray = data.map(student => ({
        ...student, 
        name: student.title,
        email: `${student.title.toLowerCase().replace(/ /g, '.')}@example.com`,
        phone: "N/A", // 실제로 필요한 데이터를 설정
        address: "N/A",
        company: "N/A",
        department: "N/A",
        notes: student.body,
      }));
      setStudents(studentArray);
      setCopy(studentArray);
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
            <S.ContactDetailsText>Contact Details</S.ContactDetailsText>
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
            <S.StudentItem key={student.id} onClick={() => handleStudentClick(student)}>
              <S.StudentAvatar src={`https://i.pravatar.cc/150?img=${student.id}`} alt={student.name} />
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
                <S.DetailsAvatar
                  src={`https://i.pravatar.cc/150?img=${selectedStudent.id}`}
                  alt={selectedStudent.name}
                />
                <h2>{selectedStudent.name}</h2>
                <p><strong>Phone:</strong> {selectedStudent.phone}</p>
                <p><strong>Address:</strong> {selectedStudent.address}</p>
                <p><strong>Company:</strong> {selectedStudent.company}</p>
                <p><strong>Department:</strong> {selectedStudent.department}</p>
                <p><strong>Email:</strong> {selectedStudent.email}</p>
                <p><strong>Notes:</strong> {selectedStudent.notes}</p>
                <S.DetailsButtons>
                  <S.EditButton>Edit</S.EditButton>
                  <S.DeleteButton>Delete</S.DeleteButton>
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
