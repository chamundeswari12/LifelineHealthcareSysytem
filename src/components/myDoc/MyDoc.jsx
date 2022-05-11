import React from "react";
import "./myDoc.css";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
// import { Container, Row } from "react-bootstrap";
import Tables from "../table/Tables";
// import Pdf from "react-to-pdf";
// import Box from "@mui/material/Box";
// import Paper from "@mui/material/Paper";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";

export default function MyDoc() {
  const styles = StyleSheet.create({
    page: {
      flexDirection: "row",
      backgroundColor: "#E4E4E4",
    },
    section: {
      margin: 10,
      padding: 10,
      flexGrow: 1,
    },
  });
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
  return (
    <Document className="billDownload page">
      <Page size="A4">
        <div className="section1">
          <div className="section1-1">
            <LocalHospitalIcon />
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
      </Page>
    </Document>
  );
}
