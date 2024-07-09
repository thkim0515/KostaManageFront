import React, { useEffect, useState } from "react";
import axios from "axios";
import * as S from "./StudentListPage.style";
import { FaStar, FaTrashAlt, FaEdit } from "react-icons/fa";

const StudentListPage = ({ category }) => {
  const [students, setStudents] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [setCopy] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState(null);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const JWT_Token =
          "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiLthYzsiqTtirjtmozsm5AwMCIsImlhdCI6MTcyMDQ4ODA1OCwiZXhwIjoxNzIwNDkxNjU4fQ.KbYN6IXqkaHbthYlyPfiC4eZdi6GPyYGBMmML_F8ml3_517v2TLgJmwXY2vVu8O-Mpx6BpXNfOA6W-NQSFtoew";
        const { data } = await axios.get("http://localhost:8080/users/all", {
          headers: {
            Authorization: `Bearer ${JWT_Token}`, // JWT 토큰을 요청 헤더에 포함
          },
        });

        if (Array.isArray(data)) {
          setStudents(data);
          setCopy(data);
        } else {
          console.error("Data is not in an array format.");
        }
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };

    fetchStudents();
  }, [setCopy]);

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleStudentClick = (student) => {
    setSelectedStudent(student);
  };

  return (
    <S.Container>
      <S.HeaderWrap>
        <S.SearchWrapper>
          <S.Search
            placeholder="Search by name or email"
            value={searchTerm}
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
                  {/* DetailsAvatar, DetailsInfo, etc. */}
                </S.DetailsHeader>
                <S.DetailsBody>
                  <S.ContactInfo>
                    <div>
                      <p>
                        <strong>Phone number:</strong>{" "}
                        {selectedStudent.phoneNumber}
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
