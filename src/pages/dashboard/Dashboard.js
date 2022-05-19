import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Admin from "../../components/admin/Admin";
import Doctor from "../../components/docter/Doctor";
import Nurse from "../../components/nurse/Nurse";

import SpinnerLoading from "../../components/spinner/Spinner";
import User from "../../components/user/User";
import ApiService from "../../services/ApiService";

export default function Dashboard() {
  const [isLoading, setIsLoading] = useState(true);
  const token = sessionStorage.getItem("Access_Token");
  const [role, setRole] = useState("");
  useEffect(() => {
    ApiService.currentUser()
      .then((res) => {
        console.log(res.data);
        setRole(res.data.authorities[0].authority);
        sessionStorage.setItem("user", JSON.stringify(res.data));
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <div className="dashboard container">
        {isLoading ? (
          <SpinnerLoading />
        ) : token == undefined || token == null ? (
          <h3>
            Please login <Link to="/login">Login</Link>
          </h3>
        ) : role === "USER" ? (
          <User />
        ) : role === "ADMIN" ? (
          <Admin />
        ) : role === "NURSE" ? (
          <Nurse />
        ) : role === "DOCTOR" ? (
          <Doctor />
        ) : (
          ""
        )}
      </div>
    </>
  );
}
