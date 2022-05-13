import React, { useEffect, useState } from "react";
import "./billDownload.css";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
// import { Container, Row } from "react-bootstrap";
import Tables from "../../components/table/Tables";
import ReactToPdf from "react-to-pdf";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";
import { Button, Container } from "react-bootstrap";
import ApiService from "../../services/ApiService";
import SpinnerLoading from "../../components/spinner/Spinner";

export default function BillDownlaod() {
  // let sum = 0;
  const ref = React.createRef();
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState();
  const options = {
    orientation: "portrait",
    unit: "in",
    format: [10, 8],
  };
  // const options = { orientation: "portrait" };
  const rows = [
    {
      id: 1,
      medicineName: "test medicine1",
      type: "Liquid",
      company: "Cipla",
      expiryDate: "10-01-2022",
      qty: "01",
      unitPrice: 785,
    },
    {
      id: 2,
      medicineName: "test medicine2",
      type: "Capsules",
      company: "Cipla",
      expiryDate: "10-01-2022",
      qty: "02",
      unitPrice: 785,
    },
  ];
  useEffect(() => {
    ApiService.billData()
      .then((res) => {
        setData(res.data);
        console.table(res.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <>
      {isLoading ? (
        <SpinnerLoading />
      ) : (
        <>
          {/* <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          "& > :not(style)": {
            m: 1,
            width: 128,
            height: 128,
          },
        }}
      > */}
          <ReactToPdf options={options} scale={0.65} x={0.1} y={0.1}>
            {({ toPdf, targetRef }) => (
              <Container
                // size="A4"
                // elevation={3}
                ref={targetRef}
                className="billDownload page"
              >
                <div className="section1">
                  <div className="section1-1">
                    {/* <LocalHospitalIcon /> */}
                    <h4 className="title">LHS</h4>
                  </div>
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
                    <h4 className="title">Doctor Details:</h4>
                    <h5 className="title">Name: Doctor</h5>
                    <p>Specialist Cardiologists</p>
                  </div>
                </div>
                <h4 className="subTitle">Assigned Medicines</h4>
                <Tables rows={rows} bill={true} />

                {/* {rows.map((t) => {
              sum = sum + t.qty * t.unitPrice;
              console.log(sum);
            })} */}
                {/* <div className="amount">
              <div>
                <p className="amountTitle">amount</p>
                <p className="amountTitle">Consulting fees</p>
                <p className="amountTitle">Bill amount </p>
                <p className="amountTitle">GST@18%</p>
                <p className="amountTitle">Total amount</p>
              </div>
              <div>
                <p className="amountValue">{sum}</p>
                <p className="amountValue">500</p>
                <p className="amountValue">{sum + 500}</p>
                <p className="amountValue">{(sum + 500) * 0.18}</p>
                <p className="amountValue">{sum + (sum + 500) * 0.18}</p>
              </div>
            </div> */}
                {/* <p className="amount">
              Bill amount={sum}
              <br className="line" />
              Consulting fees=500
              <br className="line" />
              {sum + 500}
              <br className="line" />
              GST@18%={(sum + 500) * 0.18}
              <br className="line" />
              Total amount={sum + (sum + 500) * 0.18}
              <br className="line" />
            </p> */}

                <Button onClick={toPdf} className="downlaod">
                  Download pdf
                </Button>
              </Container>
            )}
          </ReactToPdf>

          {/* <Pdf
        targetRef={ref}
        filename="Bill.pdf"
        options={options}
        // x={0.5}
        // y={0.5}
        scale={0.8}
      >
        {({ toPdf }) => <button onClick={toPdf}>Download pdf</button>}
      </Pdf> */}
          {/* </Box> */}
        </>
      )}
    </>
  );
}
