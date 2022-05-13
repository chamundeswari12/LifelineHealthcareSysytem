import { Calendar } from "react-calendar";
import "./dataSelection.css";
import "react-calendar/dist/Calendar.css";
import moment from "moment";
import { useState } from "react";

export default function DataSelection({ value, onChange }) {
  // console.log(new Date("2022-05-16"));

  return (
    <div className="calender">
      {/* <h4 className="title text-center">Select date</h4> */}
      <Calendar
        minDate={new Date()}
        value={value}
        onChange={onChange}
        // showDoubleView={true}
        // selectRange={true}
        // className="calender"

        maxDate={new Date()}
        // maxDate={new Date("2022-05-16")}
        // formatLongDate={(locale, date) => {
        //   //    moment(date).format("DD MM YYYY");
        // }}
        //
      />
    </div>
  );
}
