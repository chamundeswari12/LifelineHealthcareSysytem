import React from "react";
import "./billDownload.css";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import { Container, Row } from "react-bootstrap";
import Tables from "../../components/table/Tables";

export default function BillDownlaod() {
  const rows = [
    {
      id: 1,
      doctorName: "Doc 01",
      img: "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg",
      specialist: "Cardiologists",
      date: "1 March",
      amount: 785,
      method: "Online",
      status: "book",
    },
    {
      id: 2,
      doctorName: "Doc 02",
      img: "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg",
      specialist: "Cardiologists",
      date: "1 March",
      amount: 1000,
      method: "Online",
      status: "book",
    },
    {
      id: 3,
      doctorName: "Doc 03",
      img: "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg",
      specialist: "Cardiologists",
      date: "1 March",
      amount: 900,
      method: "Offline",
      status: "book",
    },
    {
      id: 4,
      doctorName: "Doc 04",
      img: "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg",
      specialist: "Cardiologists",
      date: "1 March",
      amount: 800,
      method: "Online",
      status: "booked",
    },
    {
      id: 5,
      doctorName: "Doc 05",
      img: "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg",
      specialist: "Cardiologists",
      date: "1 March",
      amount: 850,
      method: "Online",
      status: "book",
    },
  ];
  return (
    <Container className="billDownload">
      <div className="section1">
        <LocalHospitalIcon />
        <div className="section1-2">
          <h4 className="title">Appointment</h4>
          <h5 className="title">Billing date:06-05-22</h5>
        </div>
      </div>
      <hr />
      <div className="section2">
        <div className="section2-1">
          <h4 className="title">Patient Details:</h4>
          <h5 className="title">Name:test</h5>
          <p>
            Age:24
            <br /> Blood Group: B+
            <br />
            Email: test@gmail.com
            <br />
            Phone no: 9999999999
          </p>
        </div>
        <div className="section2-2">
          <h4 className="title">Appointment</h4>
          <h5 className="title">Billing date:06-05-22</h5>
        </div>
      </div>
      <h4 className="subTitle">Assigned Medicines</h4>
      <Tables rows={rows} />
    </Container>
  );
}
