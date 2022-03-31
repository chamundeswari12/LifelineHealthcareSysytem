import { Button } from "bootstrap";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Dashboard () {
    const [user,setUser]= useState(localStorage.getItem('user'));
  
    console.log(user);
    useEffect (()=>{
      window.addEventListener("click",()=>{
        setUser((data)=> data = localStorage.getItem('user'));
       })
     },[]);

    return(
        <div className="dashboard container">
            { (user==undefined || user == null) && 
            <h3>Please login <Link to="/login" >Login</Link> </h3>}
           { (user!=undefined || user != null) && <h3>welcome {user}</h3>}
           
        </div>
    )
}