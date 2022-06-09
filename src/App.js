import { Route, Routes } from "react-router-dom";
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
import Bill from "./pages/bill/Bill";
import GenerateBill from "./pages/generateBill/GenerateBill";
import BillDownlaod from "./pages/billDownload/BillDownlaod";
import { DoctorSignup } from "./pages/doctorSignup/DoctorSignup";
import { NurseSignup } from "./pages/nurseSignup/NurseSignup";
import AllDoctorList from "./pages/allDoctorList/AllDoctorList";
import AllNurseList from "./pages/allNurseList/AllNurseList";
import AllUserList from "./pages/allUserList/AllUserList";
import UpcomingAppointment from "./pages/upcomingAppointment/UpcomingAppointment";
import CurrentAppointment from "./pages/currentAppointment/CurrentAppointment";
import AddAppointment from "./pages/addAppointment/AddAppointment";

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
              <Route
                path="allDoctorList"
                element={
                  <PrivateRoute>
                    <AllDoctorList />
                  </PrivateRoute>
                }
              />
              <Route
                path="allNurseList"
                element={
                  <PrivateRoute>
                    <AllNurseList />
                  </PrivateRoute>
                }
              />
              <Route
                path="currentAppointment"
                element={
                  <PrivateRoute>
                    <CurrentAppointment />
                  </PrivateRoute>
                }
              />
              <Route
                path="upcomingAppointment"
                element={
                  <PrivateRoute>
                    <UpcomingAppointment />
                  </PrivateRoute>
                }
              />
              <Route
                path="addAppointment"
                element={
                  <PrivateRoute>
                    <AddAppointment />
                  </PrivateRoute>
                }
              />
              <Route
                path="allUserList"
                element={
                  <PrivateRoute>
                    <AllUserList />
                  </PrivateRoute>
                }
              />
              <Route
                path="doctorSignup"
                element={
                  <PrivateRoute>
                    <DoctorSignup />
                  </PrivateRoute>
                }
              />
              <Route
                path="nurseSignup"
                element={
                  <PrivateRoute>
                    <NurseSignup />
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
            <Route
              path="bill"
              element={
                <PrivateRoute>
                  <Bill />
                </PrivateRoute>
              }
            />
            <Route
              path="generatebill"
              element={
                <PrivateRoute>
                  <GenerateBill />
                </PrivateRoute>
              }
            />
            <Route
              path="billdownload"
              element={
                <PrivateRoute>
                  <BillDownlaod />
                </PrivateRoute>
              }
            />

            <Route path="aboutUs" element={<AboutUs />} />
          </Route>
        </Routes>
      </Fragment>
    </div>
  );
}
