import React from "react";
import moment from "moment";

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
    return (
      <span>
        <b>{date.format("MMMM")}</b>
        <span> {date.format("YYYY")}</span>
      </span>
    );
  };

  return (
    <div className="custom-toolbar">
      <button onClick={goToBack}>이전달</button>
      <button onClick={goToCurrent}>이번달</button>
      <button onClick={goToNext}>다음달</button>
      <div className="label">{label()}</div>
    </div>
  );
};

export default CustomToolbar;
