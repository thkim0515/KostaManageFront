import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import * as S from "./StudentDetailPage.style";

const StudentDetailPage = () => {
  const { id } = useParams();
  const [student, setStudent] = useState(null);

  useEffect(() => {
    const fetchStudent = async () => {
      const { data } = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
      // 여기서 예시 데이터 형식에 맞춰 변환
      const studentData = {
        id: data.id,
        name: data.title,
        phone: "N/A", // 실제로 필요한 데이터를 설정
        address: "N/A",
        company: "N/A",
        department: "N/A",
        email: `${data.title.toLowerCase().replace(/ /g, '.')}@example.com`,
        notes: data.body,
      };
      setStudent(studentData);
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
          src={`https://i.pravatar.cc/150?img=${student.id}`}
          alt={student.name}
        />
        <h2>{student.name}</h2>
        <p><strong>Phone:</strong> {student.phone}</p>
        <p><strong>Address:</strong> {student.address}</p>
        <p><strong>Company:</strong> {student.company}</p>
        <p><strong>Department:</strong> {student.department}</p>
        <p><strong>Email:</strong> {student.email}</p>
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
