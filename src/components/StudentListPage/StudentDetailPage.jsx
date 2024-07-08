import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import * as S from "./StudentDetailPage.style";

const StudentDetailPage = () => {
  const { id } = useParams();
  const [student, setStudent] = useState(null);

  useEffect(() => {
    const fetchStudent = async () => {
      try {
        const { data } = await axios.get(`http://192.168.0.5:8080/users/${id}`);
        console.log(data);

        const studentData = {
          userId: data.id,
          name: data.name,
          email: data.email,
          password: data.password,
          phoneNumber: data.phoneNumber,
          role: data.role,
          cohortId: data.cohortId,
          assignedCohort: data.assignedCohort, // 이 부분은 실제 데이터에 따라 설정
          approvalStatus: data.approvalStatus,
          profileImg: data.profileImg,
        };

        setStudent(studentData);
      } catch (error) {
        console.error("Error fetching student data", error);
      }
    };
    fetchStudent();
  }, [id]);

  if (!student) {
    return <p>Loading...</p>;
  }

  return (
    <S.Details>
      <S.ContactDetails>
        <S.DetailsAvatar
          src={`https://i.pravatar.cc/150?img=${student.userId}`}
          alt={student.name}
        />
        <h2>{student.name}</h2>
        <p><strong>Phone:</strong> {student.phoneNumber}</p>
        <p><strong>Email:</strong> {student.email}</p>
        <p><strong>Address:</strong> {student.address}</p>
        <p><strong>Company:</strong> {student.company}</p>
        <p><strong>Department:</strong> {student.department}</p>
        <p><strong>Notes:</strong> {student.notes}</p>
        <S.DetailsButtons>
          <S.EditButton>Edit</S.EditButton>
          <S.DeleteButton>Delete</S.DeleteButton>
        </S.DetailsButtons>
      </S.ContactDetails>
    </S.Details>
  );
};

export default StudentDetailPage;
