import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import NavBar from "./components/navbar/Navbar";
import Signup from "./pages/signup/Signup";
import "./styles.css";
import Dashboard from "./pages/dashboard/Dashboard";
import { useEffect, useState } from "react";
// import { getCurrentUser } from "../util/APIUtils";
// import { ACCESS_TOKEN } from "../constants";

export default function App() {
  // currentUser: null,
  // isAuthenticated: false,
  // isLoading: true
  // let data = JSON.parse(localStorage.getItem("Acess_Token")) ? true : false;

  // const { isLoggedIn, setIsLoggedIn } = useState(true);
  // let isLoggedIn = true;
  // console.log(isLoggedIn);
  // const userAuthentication = (data) => {
  //   if (data == 1) {
  //     console.log("Logout called");
  //     localStorage.removeItem("Acess_Token");
  //     isLoggedIn = false;
  //   } else {
  //     console.log("Login called");
  //     isLoggedIn = true;
  //   }
  // };

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="user">
            <Route index element={<Dashboard />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}
