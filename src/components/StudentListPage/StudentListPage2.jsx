import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import * as S from "./StudentListPage.style";
import { student } from "./../db/Dummy.json";
import { useSelector } from "react-redux";

const StudentListPage2 = () => {
  const [student, setStudent] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [cohorts, setCohorts] = useState([]);
  const [expandedCohortIds, setExpandedCohortIds] = React.useState({});
  const [fetchCohortDetails] = useState([]);
  const localAddress = useSelector((state) => state.localAddress.value);

  const imgUrl =
    "https://kostamanagebucket.s3.ap-northeast-2.amazonaws.com/kostamanageImage/";
  const { id } = useParams();
  useEffect(() => {
    const fetchCohorts = async () => {
      try {
        const JWT_Token =
          "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiLthYzsiqTtirjtmozsm5AwMCIsImlhdCI6MTcyMDU3NDU5NSwiZXhwIjoxNzIwNjEwNTk1fQ.ZOxkZW_Peos1ERtoKolZAAADURQOsfmFJJKhgtiK4K8DS5p9fQgXkEFnkiwVgQ1Q4mVPdeO4Qb--xUCSuHv4gQ";
        const { data } = await axios.get(`${localAddress}cohorts/all`, {
          headers: {
            Authorization: `Bearer ${JWT_Token}`,
          },
        });
        console.log(data);
        if (Array.isArray(data)) {
          setCohorts(data);
        } else {
          console.error("Cohort is not in an array format.");
        }
      } catch (error) {
        console.error("Error fetching cohort data", error);
      }
    };

    const fetchStudent = async (studentId) => {
      try {
        const { data } = await axios.get(`${localAddress}users/get/1`);
        console.log(data);
        const studentData = {
          userId: data.id,
          name: data.name,
          email: data.email,
          password: data.password,
          phoneNumber: data.phoneNumber,
          role: data.role,
          cohortId: data.cohortId,
          assignedCohort: data.assignedCohort,
          approvalStatus: data.approvalStatus,
          profileImg: data.profileImg,
          address: data.address,
          notes: data.notes,
        };
        setStudent(studentData);
      } catch (error) {
        console.error("Error fetching student data", error);
      }
    };
  });
  //
  //		const fetchData = async () => {
  //			await fetchCohorts();
  //			await fetchStudent(id);
  //		};
  //
  //		fetchData();
  //	}, [id]); // id만을 의존성으로 설정

  useEffect(() => {
    // 더미 데이터를 바로 import하여 사용
    const Dummy = require("../db/Dummy.json");
    console.log(Dummy.student);
    console.log(Dummy.cohort);
    setStudent(Dummy.student);
    setCohorts(Dummy.cohort);
  }, []);

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleStudentClick = (student) => {
    setSelectedStudent(student);
  };

  const handleCohortClick = async (cohort) => {
    try {
      setExpandedCohortIds((prevState) => ({
        ...prevState,
        [cohort.id]: !prevState[cohort.id],
      }));

      const cohortDetails = await fetchCohortDetails(cohort.id);
      if (cohortDetails) {
        console.log("Clicked Cohort ID:", cohort.id);
        console.log("Cohort Details:", cohortDetails);
        // Update the state or display the cohort details as needed
      } else {
        console.log("Failed to fetch cohort details");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <S.Container>
      <S.Sidebar>
        {cohorts.map((cohort) => (
          <div key={cohort.cohortNumber}>
            <div
              onClick={() => handleCohortClick(cohort)}
              style={{ cursor: "pointer" }}
            >
              <span style={{ marginRight: "10px" }}>
                [{cohort.cohortNumber}기]
              </span>
              <span>[{cohort.branchLocation}]</span>
              <span>{cohort.branchName}</span>
            </div>
            {expandedCohortIds[cohort.id] && (
              <div>
                <h3>교육 기수</h3>
                {student
                  .filter((student) => student.cohortId === cohort.id)
                  .map((student) => (
                    <div key={student.userId}>
                      <p>{student.name}</p>
                      <p>{student.phoneNumber}</p>
                      <p>{student.email}</p>
                      <p>{student.address}</p>
                      <p>{student.notes}</p>
                    </div>
                  ))}
              </div>
            )}
          </div>
        ))}
      </S.Sidebar>
      <S.MainContent>
        <S.HeaderWrap>
          <S.SearchWrapper>
            <S.Search
              placeholder="이름, 이메일 검색"
              value={searchTerm}
              onChange={handleInputChange}
            />
          </S.SearchWrapper>
        </S.HeaderWrap>
        <S.Content>
          <S.StudentList>
            {student
              .filter(
                (student) =>
                  student.name
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase()) ||
                  student.email.toLowerCase().includes(searchTerm.toLowerCase())
              )
              .map((student) => (
                <S.StudentItem
                  key={student.id}
                  onClick={() => handleStudentClick(student)}
                >
                  <img src={`${imgUrl}${student.profileImg}`} alt="Profile" />
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
                      src={`https://i.pravatar.cc/150?img=${selectedStudent.userId}`}
                      alt={selectedStudent.name}
                    />
                    <div>
                      <S.ContactTitle>{selectedStudent.name}</S.ContactTitle>
                      <S.ContactSubtitle>
                        {selectedStudent.role}
                      </S.ContactSubtitle>
                    </div>
                  </S.DetailsHeader>
                  <S.DetailsBody>
                    <S.ContactInfo>
                      <S.ContactInfoItem>
                        <S.ContactLabel>Phone number:</S.ContactLabel>
                        <S.ContactValue>
                          {selectedStudent.phoneNumber}
                        </S.ContactValue>
                      </S.ContactInfoItem>
                      <S.ContactInfoItem>
                        <S.ContactLabel>Email address:</S.ContactLabel>
                        <S.ContactValue>{selectedStudent.email}</S.ContactValue>
                      </S.ContactInfoItem>
                      <S.ContactInfoItem>
                        <S.ContactLabel>Address:</S.ContactLabel>
                        <S.ContactValue>
                          {selectedStudent.address}
                        </S.ContactValue>
                      </S.ContactInfoItem>
                      <S.ContactInfoItem>
                        <S.ContactLabel>Company:</S.ContactLabel>
                        <S.ContactValue>
                          {selectedStudent.assignedCohort}
                        </S.ContactValue>
                      </S.ContactInfoItem>
                      <S.ContactInfoItem>
                        <S.ContactLabel>Notes:</S.ContactLabel>
                        <S.ContactValue>{selectedStudent.notes}</S.ContactValue>
                      </S.ContactInfoItem>
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
        </S.Content>
      </S.MainContent>
    </S.Container>
  );
};

export default StudentListPage2;
