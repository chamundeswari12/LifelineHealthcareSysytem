import axios from "axios"

const BASE_URL = "http://localhost:2022";

//get

//post
const LOGIN_API_URL=`${BASE_URL}/generate-token`;
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
