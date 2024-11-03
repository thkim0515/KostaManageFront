import React from "react";
import moment from "moment";
import styled from "styled-components";

const ToolbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: #f8f9fa;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const ToolbarButton = styled.button`
  background-color: #4285f4;
  color: white;
  border: none;
  padding: 8px 12px;
  font-size: 14px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #007bff;
  }
`;

const LabelContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-grow: 1;
  font-size: 3rem;
  padding-left: 180px; 
  font-weight: bold;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 8px;
`;

const CustomToolbar = (toolbar) => {
  const goToBack = () => {
    toolbar.onNavigate("PREV");
  };

  const goToNext = () => {
    toolbar.onNavigate("NEXT");
  };

  const goToCurrent = () => {
    toolbar.onNavigate("TODAY");
  };

  const label = () => {
    const date = moment(toolbar.date);
    return <span>{date.format("YYYY년 MM월")}</span>;
  };

  return (
    <ToolbarContainer>
      <LabelContainer>{label()}</LabelContainer>
      <ButtonContainer>
        <ToolbarButton onClick={goToBack}>이전달</ToolbarButton>
        <ToolbarButton onClick={goToCurrent}>이번달</ToolbarButton>
        <ToolbarButton onClick={goToNext}>다음달</ToolbarButton>
      </ButtonContainer>
    </ToolbarContainer>
  );
};

export default CustomToolbar;
