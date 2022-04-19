import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import "./styles.css";
import Dashboard from "./pages/dashboard/Dashboard";
import ForgotPassword from "./pages/forgotPassword/ForgotPassword";
import { Settings } from "./pages/settings/Settings";
import { AboutUs } from "./pages/aboutUs/AboutUs";

import Profile from "./pages/profile/Profile";
import EditProfile from "./pages/editProfile/EditProfile";

import { Fragment } from "react";
import { PrivateRoute } from "./routes/PrivateRoute";
import Otpverify from "./pages/otpverify/Otpverify";
import NewPassword from "./pages/newpassword/NewPassword";

export default function App() {
  return (
    <div className="App">
      <Fragment>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="forgotPassword">
              <Route index element={<ForgotPassword />} />
              <Route path="otpverify">
                <Route index element={<Otpverify />} />
                <Route path="newpassword" element={<NewPassword />} />
              </Route>
            </Route>
            <Route path="signup" element={<Signup />} />

            <Route path="user">
              <Route
                index
                element={
                  <PrivateRoute>
                    <Dashboard />
                  </PrivateRoute>
                }
              />
              <Route path="profile">
                <Route
                  index
                  element={
                    <PrivateRoute>
                      <Profile />
                    </PrivateRoute>
                  }
                />
                <Route
                  path="editprofile"
                  element={
                    <PrivateRoute>
                      <EditProfile />
                    </PrivateRoute>
                  }
                />
              </Route>
              <Route
                path="settings"
                element={
                  <PrivateRoute>
                    <Settings />
                  </PrivateRoute>
                }
              />
            </Route>
            <Route path="aboutUs" element={<AboutUs />} />
          </Route>
        </Routes>
      </Fragment>
    </div>
  );
}
