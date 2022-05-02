import { Calendar } from "react-calendar";
import "./dataSelection.css";
import "react-calendar/dist/Calendar.css";
import moment from "moment";
import { useState } from "react";

export default function DataSelection({ value, onChange }) {
  return (
    <div>
      <h4 className="title text-center">Select date</h4>
      <Calendar
        minDate={new Date()}
        value={value}
        onChange={onChange}
        selectRange={true}
        className="calender"
        // maxDate={minDate\\}
        // formatLongDate={(locale, date) => {
        //   //    moment(date).format("DD MM YYYY");
        // }}
        //
      />
    </div>
  );
}
