import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Tables from "../../components/table/Tables";

function CurrentAppointment() {
  return (
    <div className="admin">
      <Button className="btnClose" as={Link} to="/user">
        <b>{"<"}</b>
      </Button>
      <h1>Current Appointment</h1>
      <hr />
      <Tables type="appointment" />
    </div>
  );
}

export default CurrentAppointment;
