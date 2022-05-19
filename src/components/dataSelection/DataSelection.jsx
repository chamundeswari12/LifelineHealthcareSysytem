// import { Calendar } from "react-calendar";
import { Calendar } from "@natscale/react-calendar";
import "./dataSelection.css";
// import "react-calendar/dist/Calendar.css";
import "@natscale/react-calendar/dist/main.css";

import moment from "moment";
import { useState } from "react";

export default function DataSelection({ value, onChange, isHighlight }) {
  // console.log(new Date("2022-05-16"));

  return (
    <div className="calender">
      {/* <h4 className="title text-center">Select date</h4> */}
      <Calendar
        // minDate={new Date(2022, 4, 12)}
        // value={[
        //   new Date(2022, 4, 12),
        //   // new Date(2022, 4, 13),
        //   // new Date(2022, 4, 15),
        // ]}
        // value={[new Date(2022, 4, 12), new Date(2022, 4, 13)]}
        onChange={onChange}
        isHighlight={isHighlight}

        // maxDate={new Date(2022, 4, 13)}
      />
    </div>
  );
}
