import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import moment from "moment";
import "./slot.css";

export default function Slot(props) {
  //   console.table(props.value);
  let date = [];
  //   props.value.map((it) => date.push(moment(it).format("DD MMM YYYY")));
  console.log(date);

  function getDatesInRange(startDate, endDate) {
    const date = new Date(startDate.getTime());
    const dates = [];
    while (date <= endDate) {
      dates.push(moment(new Date(date)).format("DD MMM YYYY"));
      date.setDate(date.getDate() + 1);
    }
    return dates;
  }
  date = getDatesInRange(props.value[0], props.value[1]);

  let data = [
    "10:00",
    "10:15",
    "10:30",
    "11:00",
    "11:15",
    "11:30",
    "12:00",
    "1:00",
    "1:15",
  ];

  return (
    <>
      <h4 className="title text-center">Slot</h4>
      <Container className="slot">
        {date.map((date, index) => (
          <div key={index} className="date">
            <h6>{date}</h6>
            {data.map((time, index) => (
              <span
                className={`btn b${index}`}
                key={index}
                onClick={() => {
                  console.log(time);
                  alert(time);
                }}
              >
                {time}
              </span>
            ))}
          </div>
        ))}
      </Container>
    </>
  );
}
