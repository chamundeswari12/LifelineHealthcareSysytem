import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Tables from "../../components/table/Tables";

function AllNurseList() {
  return (
    <div className="admin">
      <Button className="btnClose" as={Link} to="/user">
        <b>{"<"}</b>
      </Button>
      <hr />
      <h1>Nurse List</h1>
      <Tables type="nurse" />
    </div>
  );
}

export default AllNurseList;
