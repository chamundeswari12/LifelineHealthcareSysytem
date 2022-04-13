import axios from "axios";

const BASE_URL = "http://localhost:2022";

//Header

//get
const ALL_USER_API = `${BASE_URL}/user/getAllUsers`;
const CURRENT_USER_API = `${BASE_URL}/auth/current-user`;
//post
const LOGIN_API_URL = `${BASE_URL}/auth/login`;
const REGISTER_API_URL = `${BASE_URL}/user/signUp`;

//put
const CHANGE_PASSWORD = `${BASE_URL}/user/changePassword`;
const EDIT_PROFILE = `${BASE_URL}/user/profileInfoUpdate`;
//delete

export default new (class ApiService {
  login(data) {
    return axios.post(LOGIN_API_URL, data);
  }

  register(data) {
    return axios.post(REGISTER_API_URL, data);
  }

  currentUser() {
    //Header
    const token = localStorage.getItem("Acess_Token");
    const config = {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
        Authorization: `Bearer ${token}`,
      },
    };
    return axios.get(CURRENT_USER_API, config);
  }

  changePassword(data) {
    const token = localStorage.getItem("Acess_Token");
    const config = {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
        Authorization: `Bearer ${token}`,
      },
    };
    return axios.put(CHANGE_PASSWORD, config, data);
  }
  editProfile(data) {
    const token = localStorage.getItem("Acess_Token");
    const config = {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
        Authorization: `Bearer ${token}`,
      },
    };
    return axios.put(EDIT_PROFILE, config, data);
  }
})();
