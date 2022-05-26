import Tables from "../table/Tables";
import "./user.css";

export default function User() {
  const userData = [
    {
      id: 1,
      doctorName: "Doc 01",
      img: "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg",
      specialist: "Cardiologists",
      date: "1 March",
      amount: 785,
      method: "Online",
      status: "book",
    },
    {
      id: 2,
      doctorName: "Doc 02",
      img: "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg",
      specialist: "Cardiologists",
      date: "1 March",
      amount: 1000,
      method: "Online",
      status: "book",
    },
    {
      id: 3,
      doctorName: "Doc 03",
      img: "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg",
      specialist: "Cardiologists",
      date: "1 March",
      amount: 900,
      method: "Offline",
      status: "book",
    },
    {
      id: 4,
      doctorName: "Doc 04",
      img: "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg",
      specialist: "Cardiologists",
      date: "1 March",
      amount: 800,
      method: "Online",
      status: "booked",
    },
    {
      id: 5,
      doctorName: "Doc 05",
      img: "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg",
      specialist: "Cardiologists",
      date: "1 March",
      amount: 850,
      method: "Online",
      status: "book",
    },
  ];

  return (
    <div id="user">
      <h1>User dashboard</h1>
      <input className="search" type="text" placeholder="Search" />
      <Tables userData={userData} />
    </div>
  );
}
