import "./table.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Models from "../model/Models";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { TablePagination } from "@mui/material";
import ApiService from "../../services/ApiService";
import SpinnerLoading from "../spinner/Spinner";

/* A function that returns a table. */
export default function Tables({ type, bill, userData }) {
  let sum = 0;
  const [page, setPage] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [totalItems, setTotalItems] = useState(0);
  const [rows, setRows] = useState([]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const [modalShow, setModalShow] = useState(false);
  const [view, setView] = useState();
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
    if (["upcomingAppointment", "appointment"].includes(type)) {
      setModalShow(true);
      setData(row);
      setView("patientdata");
    }
    if (row.status === "booked") {
      navigate("/bill");
    }

    // setModalShow(true);
    // setData(row);
  };

  useEffect(() => {
    // console.log(type, bill, userData);
    if ([undefined, null].includes(type)) {
      setRows(userData);
      setIsLoading(false);
    }
    if (["upcomingAppointment"].includes(type)) {
      ApiService.getUpcomingAppointment()
        .then((res) => {
          console.log(res.data);

          // alert(`Login Successful `);
          // setAppointments(res.data);
          setRows(res.data);
        })
        .catch((error) => {
          console.log(error);
        });

      // console.log(userData);
      setIsLoading(false);
    }

    if (["appointment"].includes(type)) {
      ApiService.getCurrentAppointment()
        .then((res) => {
          console.log(res.data);

          // alert(`Login Successful `);
          // setAppointments(res.data);
          setRows(res.data);
        })
        .catch((error) => {
          console.log(error);
        });

      // console.log(userData);
      setIsLoading(false);
    }
    console.log(rows);
    if (type == "doctor") {
      ApiService.getAllDoctors(page, rowsPerPage)
        .then((res) => {
          console.table(res.data);

          setTotalItems(res.data.totalItems);

          setRows(res.data.User);

          setIsLoading(false);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    if (type == "user") {
      ApiService.getAllUser(page, rowsPerPage)
        .then((res) => {
          console.table(res.data);

          setTotalItems(res.data.totalItems);

          setRows(res.data.User);

          setIsLoading(false);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    if (type == "nurse") {
      ApiService.getAllUser(page, rowsPerPage)
        .then((res) => {
          console.table(res.data);

          setTotalItems(res.data.totalItems);

          setRows(res.data.User);

          setIsLoading(false);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [page, rowsPerPage]);

  return (
    <>
      <Models
        data={data}
        show={modalShow}
        view={view}
        onHide={() => {
          setModalShow(false);
          setData({});
        }}
      />
      {isLoading ? (
        <SpinnerLoading />
      ) : (
        <>
          <TableContainer component={Paper} className="table">
            <Table sx={{ minWidth: 50 }} aria-label="simple table">
              {bill === true ? (
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
              ) : type === "doctor" ? (
                <TableHead className="thead">
                  <TableRow>
                    <TableCell className="tableCell">
                      <b>Sl.no</b>
                    </TableCell>
                    <TableCell className="tableCell">
                      <b>Doctor id</b>
                    </TableCell>
                    <TableCell className="tableCell">
                      <b>First Name</b>
                    </TableCell>
                    <TableCell className="tableCell">
                      <b>Last name</b>
                    </TableCell>
                    <TableCell className="tableCell">
                      <b>Specialist</b>
                    </TableCell>
                    <TableCell className="tableCell">
                      <b>Email</b>
                    </TableCell>
                    <TableCell className="tableCell">
                      <b>Phone number</b>
                    </TableCell>
                  </TableRow>
                </TableHead>
              ) : type === "nurse" ? (
                <TableHead className="thead">
                  <TableRow>
                    <TableCell className="tableCell">
                      <b>Sl.no</b>
                    </TableCell>
                    <TableCell className="tableCell">
                      <b>Nurse id</b>
                    </TableCell>
                    <TableCell className="tableCell">
                      <b>First Name</b>
                    </TableCell>
                    <TableCell className="tableCell">
                      <b>Last name</b>
                    </TableCell>
                    <TableCell className="tableCell">
                      <b>Department</b>
                    </TableCell>
                    <TableCell className="tableCell">
                      <b>Email</b>
                    </TableCell>
                    <TableCell className="tableCell">
                      <b>Phone number</b>
                    </TableCell>
                  </TableRow>
                </TableHead>
              ) : type === "user" ? (
                <TableHead className="thead">
                  <TableRow>
                    <TableCell className="tableCell">
                      <b>Sl.no</b>
                    </TableCell>
                    <TableCell className="tableCell">
                      <b>User id</b>
                    </TableCell>
                    <TableCell className="tableCell">
                      <b>First Name</b>
                    </TableCell>
                    <TableCell className="tableCell">
                      <b>Last name</b>
                    </TableCell>
                    <TableCell className="tableCell">
                      <b>Dob</b>
                    </TableCell>
                    <TableCell className="tableCell">
                      <b>Email</b>
                    </TableCell>
                    <TableCell className="tableCell">
                      <b>Phone number</b>
                    </TableCell>
                  </TableRow>
                </TableHead>
              ) : ["upcomingAppointment", "appointment"].includes(type) ? (
                <TableHead className="thead">
                  <TableRow>
                    <TableCell className="tableCell">
                      <b>Sl.no</b>
                    </TableCell>
                    {["upcomingAppointment"].includes(type) ? (
                      <TableCell className="tableCell">
                        <b>Slot Date</b>
                      </TableCell>
                    ) : (
                      ""
                    )}
                    <TableCell className="tableCell">
                      <b>Slot Time</b>
                    </TableCell>
                    <TableCell className="tableCell">
                      <b>Patient Name</b>
                    </TableCell>
                    <TableCell className="tableCell">
                      <b>Email</b>
                    </TableCell>
                    <TableCell className="tableCell">
                      <b>Phone number</b>
                    </TableCell>
                    <TableCell className="tableCell">
                      <b>Profile</b>
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
                {bill === true
                  ? rows.map((row) => (
                      <TableRow key={row.id}>
                        <TableCell className="tableCell">{row.id}</TableCell>
                        <TableCell className="tableCell">
                          {row.medicineName}
                        </TableCell>
                        <TableCell className="tableCell">{row.type}</TableCell>
                        <TableCell className="tableCell">
                          {row.company}
                        </TableCell>
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
                  : type === "doctor"
                  ? rows
                      // .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                      .map((row, index) => (
                        <TableRow key={index}>
                          <TableCell className="tableCell">{`${
                            index + 1
                          }`}</TableCell>
                          <TableCell className="tableCell">
                            <div className="cellWrapper">
                              <img
                                src="https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
                                alt=""
                                className="image"
                              />
                              {row.userId}
                            </div>
                          </TableCell>
                          <TableCell className="tableCell">
                            {row.firstName}
                          </TableCell>
                          {/* <TableCell
                  className="tableCell view"
                  onClick={() => handleData(row)}
                >
                  View Profile
                </TableCell> */}
                          <TableCell className="tableCell">
                            {row.lastName}
                          </TableCell>
                          <TableCell className="tableCell">
                            {[undefined, null].includes(row.doctorDetail)
                              ? ""
                              : row.doctorDetail.specialization}
                          </TableCell>
                          <TableCell className="tableCell">
                            <span>{row.email}</span>
                          </TableCell>
                          <TableCell className="tableCell">
                            <span>{row.phoneNo}</span>
                          </TableCell>
                        </TableRow>
                      ))
                  : type === "nurse"
                  ? rows.map((row, index) => (
                      <TableRow key={index}>
                        <TableCell className="tableCell">{`${
                          index + 1
                        }`}</TableCell>
                        <TableCell className="tableCell">
                          <div className="cellWrapper">
                            <img
                              src="https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
                              alt=""
                              className="image"
                            />
                            {row.userId}
                          </div>
                        </TableCell>
                        <TableCell className="tableCell">
                          {row.firstName}
                        </TableCell>
                        {/* <TableCell
                  className="tableCell view"
                  onClick={() => handleData(row)}
                >
                  View Profile
                </TableCell> */}
                        <TableCell className="tableCell">
                          {row.lastName}
                        </TableCell>
                        <TableCell className="tableCell">
                          {row.nurseDetail?.depart ?? ""}
                          {/* {[undefined, null].includes(row.nurseDetail)
                            ? ""
                            : row.nurseDetail.depart} */}
                        </TableCell>
                        <TableCell className="tableCell">
                          <span>{row.email}</span>
                        </TableCell>
                        <TableCell className="tableCell">
                          <span>{row.phoneNo}</span>
                        </TableCell>
                      </TableRow>
                    ))
                  : type === "user"
                  ? rows.map((row, index) => (
                      <TableRow key={index}>
                        <TableCell className="tableCell">{`${
                          index + 1
                        }`}</TableCell>
                        <TableCell className="tableCell">
                          <div className="cellWrapper">
                            <img
                              src="https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
                              alt=""
                              className="image"
                            />
                            {row.userId}
                          </div>
                        </TableCell>
                        <TableCell className="tableCell">
                          {row.slotTime}
                        </TableCell>
                        <TableCell className="tableCell">
                          {row.lastName}
                        </TableCell>
                        <TableCell className="tableCell">
                          {/* {row.doctorDetail.specialization} */}
                        </TableCell>
                        <TableCell className="tableCell">
                          <span>{row.email}</span>
                        </TableCell>
                        <TableCell className="tableCell">
                          <span>{row.phoneNo}</span>
                        </TableCell>
                      </TableRow>
                    ))
                  : ["upcomingAppointment", "appointment"].includes(type)
                  ? rows.map((row, index) => (
                      <TableRow key={index}>
                        <TableCell className="tableCell">{`${
                          index + 1
                        }`}</TableCell>
                        {["upcomingAppointment"].includes(type) ? (
                          <>
                            <TableCell className="tableCell">
                              {row.doctorAvailableDate}
                            </TableCell>
                            <TableCell className="tableCell">
                              {row.slotTime}
                            </TableCell>
                          </>
                        ) : (
                          <TableCell className="tableCell">
                            {row.slotTime}
                          </TableCell>
                        )}

                        <TableCell className="tableCell">
                          {row.registrationEntity.firstName}{" "}
                          {row.registrationEntity.lastName}
                        </TableCell>
                        <TableCell className="tableCell">
                          {row.registrationEntity.username}
                        </TableCell>
                        <TableCell className="tableCell">
                          <span>{row.registrationEntity.phoneNo}</span>
                        </TableCell>
                        <TableCell className="tableCell">
                          <span
                            className={`Offline view`}
                            onClick={() => handleBook(row)}
                          >
                            View
                          </span>
                        </TableCell>
                      </TableRow>
                    ))
                  : rows.map((row, index) => (
                      <TableRow key={index}>
                        <TableCell className="tableCell">{row.id}</TableCell>
                        <TableCell className="tableCell">
                          <div className="cellWrapper">
                            <img
                              src="https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
                              alt=""
                              className="image"
                            />
                            {row.doctorName}
                          </div>
                        </TableCell>
                        <TableCell className="tableCell">
                          {row.specialist}
                        </TableCell>
                        <TableCell className="tableCell">{row.date}</TableCell>
                        <TableCell className="tableCell">
                          {row.amount}
                        </TableCell>
                        <TableCell className="tableCell">
                          <span className={`${row.method} view`}>
                            {row.method}
                          </span>
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

                {bill === true &&
                  rows?.map((t) => {
                    sum = sum + t.qty * t.unitPrice;
                    console.log(sum);
                  }) && (
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

                        <TableCell align="right">
                          {(sum + 500) * 0.18}
                        </TableCell>
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
          <TablePagination
            component="div"
            count={totalItems}
            rowsPerPageOptions={[5, 10, 25]}
            // , { label: "All", value: -1 }
            // colSpan={3}
            page={page}
            onPageChange={handleChangePage}
            rowsPerPage={rowsPerPage}
            onRowsPerPageChange={handleChangeRowsPerPage}
            color="primary"
            variant="outlined"
          />
        </>
      )}
    </>
  );
}
