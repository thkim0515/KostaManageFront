import React, { useState, useEffect } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import axios from "axios";
import AttendanceStats from "../../Attendance/AttendanceStats";
import CustomToolbar from "./CustomToolbar";
import { toKoreanStatus, toEnglishStatus } from "../../../utils/statusUtils";
import StatusModal from "./StatusModal"; // 새로운 Modal 컴포넌트를 import

const localizer = momentLocalizer(moment);

const eventStyleGetter = (event) => {
  let backgroundColor;
  let display = "flex";
  let justifyContent = "center";
  let alignItems = "center";
  let height = "100%";
  let width = "100%";
  let color = "#000"; // 날짜 숫자 색상을 위한 변수 추가
  switch (event.title) {
    case "출석":
      backgroundColor = "#a6c8ff";
      color = "#fff"; // 날짜 숫자 색상을 흰색으로 설정
      break;
    case "결석":
      backgroundColor = "#bfbfbf";
      break;
    case "지각":
      backgroundColor = "#ffd966";
      break;
    case "조퇴":
      backgroundColor = "#a4df9e";
      break;
    default:
      backgroundColor = "#a6c8ff";
  }

  const style = {
    backgroundColor,
    display,
    justifyContent,
    alignItems,
    height,
    width,
    color, // 날짜 숫자 색상 스타일 추가
  };
  return {
    style,
  };
};

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

  useEffect(() => {
    calculateAttendanceStats(events, currentMonth);
  }, [currentMonth, events]);

  const handleSelect = (slotInfo) => {
    const day = slotInfo.start.getDay();
    if (day === 0 || day === 6) {
      return;
    }
    setSelectedDate(slotInfo.start);
    setModalIsOpen(true);
  };

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

  const updateAttendanceStats = (status, data) => {
    calculateAttendanceStats(data, currentMonth);
  };

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
