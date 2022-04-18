import { Navigate } from "react-router-dom";
import NavBar from "../components/navbar/Navbar";

export function PrivateRoute({ children }) {
  const token = localStorage.getItem("Access_Token");

  return token == undefined || token == null ? (
    <Navigate to="/login" />
  ) : (
    <>
      <NavBar />
      {children}
    </>
  );
}
