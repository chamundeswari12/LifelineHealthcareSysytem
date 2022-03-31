import { useEffect, useState } from "react";
import "./home.css";

export default function Home() {
  const [user,setUser]= useState(localStorage.getItem('user'));
  
  console.log(user);
  useEffect (()=>{
    window.addEventListener("click",()=>{
      setUser((data)=> data = localStorage.getItem('user'));
     })
   },[]);
  return (
    <section id="hero" className="d-flex align-items-center">
      <div className="container text-center position-relative">
        <h1>24/7 care is Availble</h1>
        <h2>Welcome everyone</h2>
        { (user!=undefined || user != null) && <h3>welcome {user}</h3>}
      </div>
    </section>
  );
}
