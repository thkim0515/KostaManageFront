import React, { useState } from "react";
import axios from "axios";
import * as Vali from "../../../../utils/signupValidation";
import * as S from "./CohortManage.style";
import { useSelector } from "react-redux";

const CohortManage = () => {
  const localAddress = useSelector((state) => state.localAddress.value);
  const [formData, setFormData] = useState({
    batchNumber: "",
    batchName: "",
    courseTitle: "",
    courseDescription: "",
    courseDuration: "",
    startDate: "",
    endDate: "",
    instructorName: "",
    instructorEmail: "",
    maxStudents: "",
    currentStudents: "",
    status: "",
    notes: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleManage = async () => {
    // const newErrors = {
    //   batchNumber: Vali.validateName(formData.batchNumber),
    //   batchName: Vali.validateName(formData.batchName),
    //   courseTitle: Vali.validateName(formData.courseTitle),
    //   courseDescription: Vali.validateName(formData.courseDescription),
    //   courseDuration: Vali.validateName(formData.courseDuration),
    //   startDate: Vali.validateDate(formData.startDate),
    //   endDate: Vali.validateDate(formData.endDate),
    //   instructorName: Vali.validateName(formData.instructorName),
    //   instructorEmail: Vali.validateEmail(formData.instructorEmail),
    //   maxStudents: Vali.validateNumber(formData.maxStudents),
    //   currentStudents: Vali.validateNumber(formData.currentStudents),
    //   status: Vali.validateName(formData.status),
    //   notes: Vali.validateName(formData.notes),
    // };

    // setErrors(newErrors);

    // if (Object.values(newErrors).every((error) => error === "")) {
    try {
      const response = await axios.post(
        `${localAddress}cohorts/create`,
        formData
      );
      if (response.status === 200) {
        alert("기수 등록 성공");
      } else {
        alert("기수 등록 실패");
      }
    } catch (error) {
      console.error("There was an error!", error);
      alert("기수 등록 중 오류가 발생했습니다.");
    }
    // }
  };

  return (
    <S.Container>
      <S.Wrapper>
        <S.Group>
          <S.TitleWrapper>
            <h2>기수 등록을 위해 정보를 입력 해주세요</h2>
          </S.TitleWrapper>
          <S.ManageField>
            <S.Label htmlFor="batchNumber">* 기수 번호</S.Label>
            <S.Input
              type="text"
              name="batchNumber"
              value={formData.batchNumber}
              onChange={handleChange}
              placeholder="기수 번호를 입력해주세요"
            />
            {errors.batchNumber && (
              <S.ErrorMsg>{errors.batchNumber}</S.ErrorMsg>
            )}
          </S.ManageField>

          <S.ManageField>
            <S.Label htmlFor="batchName">* 기수 이름</S.Label>
            <S.Input
              type="text"
              name="batchName"
              value={formData.batchName}
              onChange={handleChange}
              placeholder="기수 이름을 입력해주세요"
            />
            {errors.batchName && <S.ErrorMsg>{errors.batchName}</S.ErrorMsg>}
          </S.ManageField>

          <S.ManageField>
            <S.Label htmlFor="courseTitle">* 강의 제목</S.Label>
            <S.Input
              type="text"
              name="courseTitle"
              value={formData.courseTitle}
              onChange={handleChange}
              placeholder="강의 제목을 입력해주세요"
            />
            {errors.courseTitle && (
              <S.ErrorMsg>{errors.courseTitle}</S.ErrorMsg>
            )}
          </S.ManageField>

          <S.ManageField>
            <S.Label htmlFor="courseDescription">* 강의 설명</S.Label>
            <S.Input
              type="text"
              name="courseDescription"
              value={formData.courseDescription}
              onChange={handleChange}
              placeholder="강의 설명을 입력해주세요"
            />
            {errors.courseDescription && (
              <S.ErrorMsg>{errors.courseDescription}</S.ErrorMsg>
            )}
          </S.ManageField>

          <S.ManageField>
            <S.Label htmlFor="courseDuration">* 강의 기간</S.Label>
            <S.Input
              type="text"
              name="courseDuration"
              value={formData.courseDuration}
              onChange={handleChange}
              placeholder="강의 기간을 입력해주세요 (예: 12주)"
            />
            {errors.courseDuration && (
              <S.ErrorMsg>{errors.courseDuration}</S.ErrorMsg>
            )}
          </S.ManageField>

          <S.ManageField>
            <S.Label htmlFor="startDate">* 강의 시작 날짜</S.Label>
            <S.Input
              type="date"
              name="startDate"
              value={formData.startDate}
              onChange={handleChange}
            />
            {errors.startDate && <S.ErrorMsg>{errors.startDate}</S.ErrorMsg>}
          </S.ManageField>

          <S.ManageField>
            <S.Label htmlFor="endDate">* 강의 종료 날짜</S.Label>
            <S.Input
              type="date"
              name="endDate"
              value={formData.endDate}
              onChange={handleChange}
            />
            {errors.endDate && <S.ErrorMsg>{errors.endDate}</S.ErrorMsg>}
          </S.ManageField>

          <S.ManageField>
            <S.Label htmlFor="instructorName">* 강사 이름</S.Label>
            <S.Input
              type="text"
              name="instructorName"
              value={formData.instructorName}
              onChange={handleChange}
              placeholder="강사 이름을 입력해주세요"
            />
            {errors.instructorName && (
              <S.ErrorMsg>{errors.instructorName}</S.ErrorMsg>
            )}
          </S.ManageField>

          <S.ManageField>
            <S.Label htmlFor="instructorEmail">* 강사 이메일</S.Label>
            <S.Input
              type="email"
              name="instructorEmail"
              value={formData.instructorEmail}
              onChange={handleChange}
              placeholder="강사 이메일을 입력해주세요"
            />
            {errors.instructorEmail && (
              <S.ErrorMsg>{errors.instructorEmail}</S.ErrorMsg>
            )}
          </S.ManageField>

          <S.ManageField>
            <S.Label htmlFor="maxStudents">* 최대 수강생 수</S.Label>
            <S.Input
              type="number"
              name="maxStudents"
              value={formData.maxStudents}
              onChange={handleChange}
              placeholder="최대 수강생 수를 입력해주세요"
            />
            {errors.maxStudents && (
              <S.ErrorMsg>{errors.maxStudents}</S.ErrorMsg>
            )}
          </S.ManageField>

          <S.ManageField>
            <S.Label htmlFor="currentStudents">* 현재 등록된 수강생 수</S.Label>
            <S.Input
              type="number"
              name="currentStudents"
              value={formData.currentStudents}
              onChange={handleChange}
              placeholder="현재 등록된 수강생 수를 입력해주세요"
            />
            {errors.currentStudents && (
              <S.ErrorMsg>{errors.currentStudents}</S.ErrorMsg>
            )}
          </S.ManageField>

          <S.ManageField>
            <S.Label htmlFor="status">* 기수 상태</S.Label>
            <S.Select
              name="status"
              value={formData.status}
              onChange={handleChange}
            >
              <option value="">상태를 선택해주세요</option>
              <option value="active">Active</option>
              <option value="completed">Completed</option>
              <option value="cancelled">Cancelled</option>
            </S.Select>
            {errors.status && <S.ErrorMsg>{errors.status}</S.ErrorMsg>}
          </S.ManageField>

          <S.ManageField>
            <S.Label htmlFor="notes">기타 메모</S.Label>
            <S.TextArea
              name="notes"
              value={formData.notes}
              onChange={handleChange}
              placeholder="기타 메모를 입력해주세요"
            />
            {errors.notes && <S.ErrorMsg>{errors.notes}</S.ErrorMsg>}
          </S.ManageField>

          <S.Button onClick={handleManage}>기수 등록</S.Button>
        </S.Group>
      </S.Wrapper>
    </S.Container>
  );
};

export default CohortManage;
