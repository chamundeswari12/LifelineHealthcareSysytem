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

export default function Tables(props) {
  const [modalShow, setModalShow] = useState(false);
  const [data, setData] = useState({});
  const handleData = (row) => {
    setModalShow(true);
    setData(row);
  };
  const handleBook = (row) => {
    // setModalShow(true);
    // setData(row);
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
              {/* <TableCell className="tableCell">View Profile</TableCell> */}
              <TableCell className="tableCell">Date</TableCell>
              <TableCell className="tableCell">Fees</TableCell>
              <TableCell className="tableCell">Payment Method</TableCell>
              <TableCell className="tableCell">Appointment</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell className="tableCell">{row.id}</TableCell>
                <TableCell className="tableCell">
                  <div className="cellWrapper">
                    <img src={row.img} alt="" className="image" />
                    {row.doctorName}
                  </div>
                </TableCell>
                <TableCell className="tableCell">{row.specialist}</TableCell>
                {/* <TableCell
                  className="tableCell view"
                  onClick={() => handleData(row)}
                >
                  View Profile
                </TableCell> */}
                <TableCell className="tableCell">{row.date}</TableCell>
                <TableCell className="tableCell">{row.amount}</TableCell>
                <TableCell className="tableCell">
                  <span className={`${row.method} view`}>{row.method}</span>
                </TableCell>
                <TableCell className="tableCell">
                  {row.status === "booked" ? (
                    <>
                      <span
                        className={`status ${row.status} view`}
                        onClick={() => handleBook(row)}
                      >
                        {row.status}
                      </span>
                    </>
                  ) : (
                    <>
                      <span
                        className={`status ${row.status} view`}
                        onClick={() => handleData(row)}
                      >
                        {row.status}
                      </span>
                    </>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
