import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import CustomToolbar from "./CustomToolbar";
import { events } from "./events";
import "moment/locale/ko";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

moment.locale("ko");

const eventStyleGetter = (event) => {
  const backgroundColor = event.color || "blue";
  const style = {
    backgroundColor,
  };
  return {
    style,
  };
};

const CalendarComponent = () => {
  return (
    <div style={{ height: "700px" }}>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: "100%" }}
        eventPropGetter={eventStyleGetter}
        components={{
          toolbar: CustomToolbar,
        }}
      />
    </div>
  );
};

export default CalendarComponent;
