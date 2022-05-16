import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import moment from "moment";
import "./slot.css";
import ApiService from "../../services/ApiService";
import SpinnerLoading from "../spinner/Spinner";

export default function Slot(props) {
  const [data, setData] = useState([]);

  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    // console.log(moment(props.value).format("YYYY-MM-DD"));
    ApiService.getSlotDetails()
      .then((res) => {
        console.table(res.data);
        setData(res.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [props.value]);

  const handleSubmit = (it) => {
    // console.log(it.slotTime http://10.81.3.109:8080/appointment/book/2
    // );
    it.isBooked == 1
      ? ApiService.unBookSlot(it.appointmentId)
          .then((res) => {
            // console.log(res.data);
            alert("Slot Cancelled successfull");
            ApiService.getSlotDetails()
              .then((res) => {
                // console.table(res.data);
                setData(res.data);
                setIsLoading(false);
              })
              .catch((error) => {
                console.log(error);
              });
          })
          .catch((error) => {
            console.log(error);
          })
      : ApiService.bookSlot(it.appointmentId)
          .then((res) => {
            // console.log(res.data);
            alert("Slot Booking successfull");
            ApiService.getSlotDetails()
              .then((res) => {
                // console.table(res.data);
                setData(res.data);
                setIsLoading(false);
              })
              .catch((error) => {
                console.log(error);
              });
          })
          .catch((error) => {
            console.log(error);
          });
  };
  return (
    <>
      {isLoading ? (
        <SpinnerLoading />
      ) : (
        <>
          <h4 className="title text-center">Slot</h4>
          <Container className="slot">
            {data
              ?.filter((data) =>
                data.slotDate.includes(moment(props.value).format("YYYY-MM-DD"))
              )
              .map((it, index) => (
                <div key={index} className="date">
                  {index < 1 ? (
                    <h6 className="title formateDate text-center">
                      {moment(`${it.slotDate}`).format("DD MMM YYYY  dddd")}
                    </h6>
                  ) : (
                    ""
                  )}
                  {index > 1 ? (
                    data[index - 1].slotDate == it.slotDate ? (
                      ""
                    ) : (
                      <h6 className="title formateDate text-center">
                        {moment(`${it.slotDate}`).format("DD MMM YYYY  dddd")}
                      </h6>
                    )
                  ) : (
                    ""
                  )}

                  <span
                    className={`timeStamp  btn ${
                      it.isBooked == 1 ? "filled" : "avaliable"
                    }`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleSubmit(it);
                    }}
                  >
                    {it.slotTime}
                  </span>
                </div>
              ))}
          </Container>
        </>
      )}
    </>
  );
}
