import axios from "axios"

const BASE_URL = "http://localhost:8080/api";

//get

//post
const LOGIN_API_URL=`${BASE_URL}/login`;
const REGISTER_API_URL=`${BASE_URL}/user`;

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
