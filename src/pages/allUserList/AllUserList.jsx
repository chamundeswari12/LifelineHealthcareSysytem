import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Tables from "../../components/table/Tables";

function AllUserList() {
  return (
    <div className="admin">
      <Button className="btnClose" as={Link} to="/user">
        <b>{"<"}</b>
      </Button>
      <h1>Patient List</h1>
      <hr />
      <Tables type="user" />
    </div>
  );
}

export default AllUserList;
