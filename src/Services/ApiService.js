import axios from "axios"

const BASE_URL = "http://localhost:2022";

//get
const ALL_USER_API=`${BASE_URL}/user/getAllUsers`;
//post
const LOGIN_API_URL=`${BASE_URL}/auth/generate-token`;
const REGISTER_API_URL=`${BASE_URL}/user/`;

//put

//delete



export default new class ApiService {

 login(data){
    return  axios.post(LOGIN_API_URL,data);
}

register(data){
    return  axios.post(REGISTER_API_URL,data);
}

}

// export function login1  (data){
//     return axios.post(LOGIN_API_URL,data);
// }
