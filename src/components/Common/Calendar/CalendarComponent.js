import React, { useState, useEffect } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import axios from "axios";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "./calendar.css"; // 추가된 CSS 파일 import

import AttendanceStats from "../../Attendance/AttendanceStats";
import CustomToolbar from "./CustomToolbar";
import {
  toKoreanStatus,
  toEnglishStatus,
  getStatusColors,
} from "../../../utils/statusUtils";
import StatusModal from "./StatusModal";

const localizer = momentLocalizer(moment);

// 이벤트 스타일을 설정하는 함수
const eventStyleGetter = (event) => {
  const { backgroundColor, color } = getStatusColors(event.title);

  const style = {
    backgroundColor,
    color,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: "100%",
  };

  return {
    style,
  };
};

// 주말의 배경색을 설정하는 함수
const dayPropGetter = (date) => {
  const day = date.getDay();
  const style = {
    backgroundColor: day === 0 || day === 6 ? "#f0f0f0" : "white",
  };
  return {
    style,
  };
};

const CalendarComponent = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [events, setEvents] = useState([]);
  const [attendanceStats, setAttendanceStats] = useState({
    total: 0,
    present: 0,
    absentsFromLateEarly: 0,
  });
  const [currentMonth, setCurrentMonth] = useState(moment().startOf("month"));

  // 초기 로드 시 출석 데이터를 가져오는 useEffect
  useEffect(() => {
    axios
      .get("http://localhost:8080/api/attendance")
      .then((response) => {
        const eventsFromDB = response.data.map((attendance) => ({
          id: attendance.attendanceId,
          title: toKoreanStatus(attendance.status),
          start: new Date(attendance.date),
          end: new Date(attendance.date),
          allDay: true,
        }));
        setEvents(eventsFromDB);
        calculateAttendanceStats(eventsFromDB, currentMonth);
      })
      .catch((error) => {
        console.error(
          "There was an error fetching the attendance data!",
          error
        );
      });
  }, []);

  // currentMonth와 events 변경 시 출석 통계를 다시 계산하는 useEffect
  useEffect(() => {
    calculateAttendanceStats(events, currentMonth);
  }, [currentMonth, events]);

  // 날짜를 선택했을 때 호출되는 함수
  const handleSelect = (slotInfo) => {
    const day = slotInfo.start.getDay();
    if (day === 0 || day === 6) {
      return;
    }
    setSelectedDate(slotInfo.start);
    setModalIsOpen(true);
  };

  // 상태 변경 시 호출되는 함수
  const handleStatusChange = (newStatus) => {
    setModalIsOpen(false);
    const existingEvent = events.find(
      (event) => event.start.toDateString() === selectedDate.toDateString()
    );

    const newEvent = {
      id: existingEvent ? existingEvent.id : undefined,
      title: toKoreanStatus(newStatus),
      start: selectedDate,
      end: selectedDate,
      allDay: true,
    };

    const attendanceData = {
      date: selectedDate,
      status: toEnglishStatus(newStatus),
      user: { userId: 1 },
      cohort: { cohortId: 1 },
    };

    // 기존 이벤트가 있는 경우 업데이트, 없는 경우 새로 생성
    if (existingEvent) {
      axios
        .put(
          `http://localhost:8080/api/attendance/${existingEvent.id}`,
          attendanceData
        )
        .then((response) => {
          const updatedEvents = events.map((event) =>
            event.start.toDateString() === selectedDate.toDateString()
              ? newEvent
              : event
          );
          setEvents(updatedEvents);
          updateAttendanceStats(newStatus, updatedEvents);
        })
        .catch((error) => {
          console.error("There was an error updating the status!", error);
        });
    } else {
      axios
        .post("http://localhost:8080/api/attendance", attendanceData)
        .then((response) => {
          newEvent.id = response.data.attendanceId;
          const updatedEvents = [...events, newEvent];
          setEvents(updatedEvents);
          updateAttendanceStats(newStatus, updatedEvents);
        })
        .catch((error) => {
          console.error("There was an error saving the status!", error);
        });
    }
  };

  // 출석 통계를 계산하는 함수
  const calculateAttendanceStats = (data, month) => {
    const filteredData = data.filter((attendance) =>
      moment(attendance.start).isSame(month, "month")
    );

    const totalDays = filteredData.length;
    const presentDays = filteredData.filter(
      (attendance) =>
        attendance.title === "출석" ||
        attendance.title === "지각" ||
        attendance.title === "조퇴"
    ).length;
    const lateEarlyDays = filteredData.filter(
      (attendance) => attendance.title === "지각" || attendance.title === "조퇴"
    ).length;

    const absentsFromLateEarly = Math.floor(lateEarlyDays / 3);
    const adjustedPresentDays = presentDays - absentsFromLateEarly;
    setAttendanceStats({
      total: totalDays,
      present: adjustedPresentDays,
      absentsFromLateEarly,
    });
  };

  // 출석 통계를 업데이트하는 함수
  const updateAttendanceStats = (status, data) => {
    calculateAttendanceStats(data, currentMonth);
  };

  // 달력 이동 시 호출되는 함수
  const onNavigate = (date) => {
    setCurrentMonth(moment(date).startOf("month"));
  };

  const buttonStyles = {
    width: "150px",
    height: "150px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "20px",
    color: "white",
    margin: "10px",
    cursor: "pointer",
    borderRadius: "10px",
  };

  return (
    <div>
      <AttendanceStats
        totalDays={attendanceStats.total}
        presentDays={attendanceStats.present}
        absentsFromLateEarly={attendanceStats.absentsFromLateEarly}
      />
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
        selectable
        onSelectSlot={handleSelect}
        eventPropGetter={eventStyleGetter}
        dayPropGetter={dayPropGetter}
        onNavigate={onNavigate}
        components={{
          toolbar: CustomToolbar,
        }}
      />
      <StatusModal
        modalIsOpen={modalIsOpen}
        handleClose={() => setModalIsOpen(false)}
        handleStatusChange={handleStatusChange}
        buttonStyles={buttonStyles}
      />
    </div>
  );
};

export default CalendarComponent;
