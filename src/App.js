import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import "./styles.css";
import Dashboard from "./pages/dashboard/Dashboard";
import { ForgotPassword } from "./pages/forgotPassword/ForgotPassword";
import { Settings } from "./pages/settings/Settings";
import { AboutUs } from "./pages/aboutUs/AboutUs";
import { useEffect, useState } from "react";
import ApiService from "./Services/ApiService";
import Profile from "./pages/profile/Profile";
import EditProfile from "./pages/editProfile/EditProfile";

export default function App() {
  const [data, setData] = useState("");
  const [role, setRole] = useState("");
  useEffect(() => {
    ApiService.currentUser()
      .then((res) => {
        setData(res.data);
        setRole(res.data.authorities[0].authority);
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [role]);

  return (
    <div className="App">
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="forgotPassword" element={<ForgotPassword />} />
          <Route path="signup" element={<Signup />} />
          <Route path="user">
            <Route index element={<Dashboard {...data} />} />
            <Route path="profile">
              <Route index element={<Profile />} />
              <Route path="editprofile" element={<EditProfile {...data} />} />
            </Route>
            <Route path="settings" element={<Settings />} />
          </Route>
          <Route path="aboutUs" element={<AboutUs />} />
        </Route>
      </Routes>
    </div>
  );
}
