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
import { useNavigate } from "react-router-dom";

/* A function that returns a table. */
export default function Tables(props) {
  let sum = 0;
  const [modalShow, setModalShow] = useState(false);
  const [data, setData] = useState({});
  const navigate = useNavigate();
  const handleData = (row) => {
    if (row.status === "generate") {
      navigate("/generatebill");
    }
    setModalShow(true);
    setData(row);
  };
  const handleBook = (row) => {
    // console.log(row);
    if (row.status === "booked") {
      navigate("/bill");
    }

    // setModalShow(true);
    // setData(row);
  };
  // console.log(props.bill);
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
        <Table sx={{ minWidth: 100 }} aria-label="simple table">
          {props.bill === true ? (
            <TableHead className="thead">
              <TableRow>
                <TableCell className="tableCell">
                  <b>Sl.no</b>
                </TableCell>
                <TableCell className="tableCell">
                  <b>Medicine Name</b>
                </TableCell>
                <TableCell className="tableCell">
                  <b>Type</b>
                </TableCell>
                <TableCell className="tableCell">
                  <b>Company</b>
                </TableCell>
                <TableCell className="tableCell">
                  <b>Expiry Date</b>
                </TableCell>
                <TableCell className="tableCell">
                  <b>Qty</b>
                </TableCell>
                <TableCell className="tableCell" align="right">
                  <b>Unit Price</b>
                </TableCell>
                <TableCell className="tableCell" align="right">
                  <b>Price</b>
                </TableCell>
              </TableRow>
            </TableHead>
          ) : (
            <TableHead className="thead">
              <TableRow>
                <TableCell className="tableCell">
                  <b>ID</b>
                </TableCell>
                <TableCell className="tableCell">
                  <b>Doctor Name</b>
                </TableCell>
                <TableCell className="tableCell">
                  <b>Specialist</b>
                </TableCell>
                {/* <TableCell className="tableCell">View Profile</TableCell> */}
                <TableCell className="tableCell">
                  <b>Date</b>
                </TableCell>
                <TableCell className="tableCell">
                  <b>Fees</b>
                </TableCell>
                <TableCell className="tableCell">
                  <b>Payment Method</b>
                </TableCell>
                <TableCell className="tableCell">
                  <b>Appointment</b>
                </TableCell>
              </TableRow>
            </TableHead>
          )}

          <TableBody>
            {props.bill === true
              ? props.rows.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell className="tableCell">{row.id}</TableCell>
                    <TableCell className="tableCell">
                      {row.medicineName}
                    </TableCell>
                    <TableCell className="tableCell">{row.type}</TableCell>
                    <TableCell className="tableCell">{row.company}</TableCell>
                    <TableCell className="tableCell">
                      {row.expiryDate}
                    </TableCell>
                    <TableCell className="tableCell">{row.qty}</TableCell>
                    <TableCell className="tableCell" align="right">
                      {row.unitPrice}
                    </TableCell>
                    <TableCell className="tableCell" align="right">
                      {row.qty * row.unitPrice}
                    </TableCell>
                  </TableRow>
                ))
              : props.rows.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell className="tableCell">{row.id}</TableCell>
                    <TableCell className="tableCell">
                      <div className="cellWrapper">
                        <img src={row.img} alt="" className="image" />
                        {row.doctorName}
                      </div>
                    </TableCell>
                    <TableCell className="tableCell">
                      {row.specialist}
                    </TableCell>
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
            {props.rows?.map((t) => {
              sum = sum + t.qty * t.unitPrice;
              console.log(sum);
            })}
            {props.bill === true && (
              <>
                <TableRow>
                  <TableCell rowSpan={5} colSpan={6} />

                  <TableCell>Subtotal</TableCell>
                  <TableCell align="right">{sum}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Consulting fees</TableCell>
                  <TableCell align="right">500</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell colSpan={1} />

                  <TableCell align="right">{sum + 500}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>GST@18%</TableCell>

                  <TableCell align="right">{(sum + 500) * 0.18}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <b>Total</b>
                  </TableCell>
                  <TableCell align="right">
                    <b>{(sum + 500) * 0.18 + sum + 500}</b>
                  </TableCell>
                </TableRow>
              </>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
