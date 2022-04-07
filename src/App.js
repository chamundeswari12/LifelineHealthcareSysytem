import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";

import Signup from "./pages/signup/Signup";
import "./styles.css";
import Dashboard from "./pages/dashboard/Dashboard";
import { ForgotPassword } from "./pages/forgotPassword/ForgotPassword";
import { Profile } from "./components/profile/Profile";
import { Settings } from "./pages/settings/Settings";
import { AboutUs } from "./pages/aboutUs/AboutUs";

export default function App() {
  return (
    <div className="App">
      {/* <Route path="/">
            
            <Route path="users">
              <Route index element={<List />} />
              <Route path=":userId" element={<Single />} />
              <Route path="new" element={<New />} />
            </Route>
            <Route path="products">
              <Route index element={<List />} />
              <Route path=":productId" element={<Single />} />
              <Route path="new" element={<New />} />
            </Route>
          </Route> */}
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="forgotPassword" element={<ForgotPassword />} />
          <Route path="signup" element={<Signup />} />
          <Route path="user">
            <Route index element={<Dashboard />} />
            <Route path="profile" element={<Profile />} />
            <Route path="settings" element={<Settings />} />
          </Route>
          <Route path="aboutUs" element={<AboutUs />} />
        </Route>
      </Routes>
    </div>
  );
}
