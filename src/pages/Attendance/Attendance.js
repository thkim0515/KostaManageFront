import React from "react";
import * as S from "./Attendance.style";
import CalendarComponent from "../../components/Common/Calendar/CalendarComponent";
import ContentHeader from "../../components/Common/ContentHeader/ContentHeader";
const Attendance = () => {
  return (
    <>
      <ContentHeader boardName={"출결"} />
      <CalendarComponent />
    </>
  );
};

export default Attendance;
