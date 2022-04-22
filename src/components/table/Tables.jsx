// import "./table.scss";
import "./table.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Models from "../model/Models";
import { useState } from "react";

export default function Tables() {
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
  const [modalShow, setModalShow] = useState(false);
  const [data, setData] = useState({});
  const handleData = (row) => {
    setModalShow(true);
    setData(row);
  };

  return (
    <>
      <Models
        data={data}
        show={modalShow}
        onHide={() => {
          setModalShow(false);
          setData({});
        }}
      />
      <TableContainer component={Paper} className="table">
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className="tableCell">ID</TableCell>
              <TableCell className="tableCell">Doctor Name</TableCell>
              <TableCell className="tableCell">Specialist</TableCell>
              <TableCell className="tableCell">View Profile</TableCell>
              <TableCell className="tableCell">Date</TableCell>
              <TableCell className="tableCell">Fees</TableCell>
              <TableCell className="tableCell">Payment Method</TableCell>
              <TableCell className="tableCell">Appointment</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell className="tableCell">{row.id}</TableCell>
                <TableCell className="tableCell">
                  <div className="cellWrapper">
                    <img src={row.img} alt="" className="image" />
                    {row.doctorName}
                  </div>
                </TableCell>
                <TableCell className="tableCell">{row.specialist}</TableCell>
                <TableCell
                  className="tableCell view"
                  onClick={() => handleData(row)}
                >
                  View Profile
                </TableCell>
                <TableCell className="tableCell">{row.date}</TableCell>
                <TableCell className="tableCell">{row.amount}</TableCell>
                <TableCell className="tableCell">
                  <span className={`${row.method}`}>{row.method}</span>
                </TableCell>
                <TableCell className="tableCell">
                  <span className={`status ${row.status}`}>{row.status}</span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
