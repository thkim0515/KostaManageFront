import React, { useState } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import * as S from "./StudentManagePage.style";
import { FaCalendarAlt } from "react-icons/fa";
import { useSelector } from "react-redux";

const StudentManagePage = () => {
  const localAddress = useSelector((state) => state.localAddress.value);

  const [generationData, setGenerationData] = useState({
    branchName: "",
    branchLocation: "",
    cohortNumber: "",
    generation: "",
    startDate: null,
    endDate: null,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (name, value) => {
    setGenerationData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleStudentManage = async () => {
    const newErrors = {
      branchName: "",
      branchLocation: "",
      cohortNumber: "",
      generation: "",
      startDate: "",
      endDate: "",
    };

    setErrors(newErrors);

    if (Object.values(newErrors).every((error) => error === "")) {
      try {
        const response = await axios.post(
          `${localAddress}cohorts/register`,
          generationData
        );
        console.log(response.status);
        if (response.status === 200) {
          console.log("Generation registered:", response.data);
          alert("기수 등록 성공");
        } else {
          alert("기수 등록 실패");
        }
      } catch (error) {
        console.error("There was an error!", error);
        alert("기수 등록 중 오류가 발생했습니다.");
      }
    }
  };
  const CustomDatePickerInput = ({ value, onClick, placeholder }) => (
    <div
      onClick={onClick}
      style={{
        display: "flex",
        alignItems: "center",
        cursor: "pointer",
        border: "1px solid #ccc",
        padding: "8px",
        borderRadius: "4px",
      }}
    >
      {" "}
      <FaCalendarAlt style={{ marginRight: "8px", color: "#ccc" }} />{" "}
      <input
        type="text"
        value={value}
        readOnly
        placeholder={placeholder}
        style={{
          border: "none",
          backgroundColor: "transparent",
          outline: "none",
          width: "100%",
        }}
      />{" "}
    </div>
  );

  const handleStartDateChange = (date) => {
    setGenerationData((prev) => ({
      ...prev,
      startDate: date,
    }));
  };

  const handleEndDateChange = (date) => {
    setGenerationData((prev) => ({
      ...prev,
      endDate: date,
    }));
  };

  return (
    <S.Container>
      <S.Wrapper>
        <S.Group>
          <S.TitleWrapper>
            학생 등록을 위해 <br />
            정보를 입력 해주세요
          </S.TitleWrapper>
          <S.Row>
            <S.GenerationField>
              <S.Label htmlFor="branchName">* 해당 지점</S.Label>
              <S.Select
                name="branchName"
                value={generationData.branchName}
                onChange={(e) => handleChange("branchName", e.target.value)}
              >
                <S.Option value="">지점 선택</S.Option>
                <S.Option value="branch1">Branch 1</S.Option>
                <S.Option value="branch2">Branch 2</S.Option>
                <S.Option value="branch3">Branch 3</S.Option>
              </S.Select>
              {errors.branchName && (
                <S.ErrorMsg>{errors.branchName}</S.ErrorMsg>
              )}
            </S.GenerationField>

            <S.GenerationField>
              <S.Label htmlFor="branchLocation">* 지점 위치</S.Label>
              <S.Select
                name="branchLocation"
                value={generationData.branchLocation}
                onChange={(e) => handleChange("branchLocation", e.target.value)}
              >
                <S.Option value="">지점 위치 선택</S.Option>
                <S.Option value="location1">Location 1</S.Option>
                <S.Option value="location2">Location 2</S.Option>
                <S.Option value="location3">Location 3</S.Option>
              </S.Select>
              {errors.branchLocation && (
                <S.ErrorMsg>{errors.branchLocation}</S.ErrorMsg>
              )}
            </S.GenerationField>

            <S.GenerationField>
              <S.Label htmlFor="cohortNumber">* 해당 기수</S.Label>
              <S.Select
                name="cohortNumber"
                value={generationData.cohortNumber}
                onChange={(e) => handleChange("cohortNumber", e.target.value)}
              >
                <S.Option value="">기수 선택</S.Option>
                <S.Option value="cohort1">Cohort 1</S.Option>
                <S.Option value="cohort2">Cohort 2</S.Option>
                <S.Option value="cohort3">Cohort 3</S.Option>
              </S.Select>
              {errors.cohortNumber && (
                <S.ErrorMsg>{errors.cohortNumber}</S.ErrorMsg>
              )}
            </S.GenerationField>
          </S.Row>

          <S.SecRow>
            <S.FullWidthBox>
              <S.GenerationField>
                <S.Label htmlFor="generation">* 해당 강의</S.Label>
                <S.Select
                  name="generation"
                  value={generationData.generation}
                  onChange={(e) => handleChange("generation", e.target.value)}
                >
                  <S.Option value="">반 선택</S.Option>
                  <S.Option value="class1">Class 1</S.Option>
                  <S.Option value="class2">Class 2</S.Option>
                  <S.Option value="class3">Class 3</S.Option>
                </S.Select>
                {errors.generation && (
                  <S.ErrorMsg>{errors.generation}</S.ErrorMsg>
                )}
              </S.GenerationField>
            </S.FullWidthBox>
          </S.SecRow>
          <S.DateBox>
            <S.Label htmlFor="startDate">* 시작 날짜 *</S.Label>
            <DatePicker
              selected={generationData.startDate}
              onChange={handleStartDateChange}
              dateFormat="yyyy/MM/dd"
              customInput={<CustomDatePickerInput />}
              placeholderText="YYYY / MM / DD"
            />
            {errors.startDate && <S.ErrorMsg>{errors.startDate}</S.ErrorMsg>}
          </S.DateBox>

          <S.DateBox>
            <S.Label htmlFor="endDate">* 종료 날짜 *</S.Label>
            <DatePicker
              selected={generationData.endDate}
              onChange={handleEndDateChange}
              dateFormat="yyyy/MM/dd"
              customInput={<CustomDatePickerInput />}
              placeholderText="YYYY / MM / DD"
            />
            {errors.endDate && <S.ErrorMsg>{errors.endDate}</S.ErrorMsg>}
          </S.DateBox>

          <S.Button onClick={handleStudentManage}>기수 등록</S.Button>
        </S.Group>
      </S.Wrapper>
    </S.Container>
  );
};

export default StudentManagePage;
