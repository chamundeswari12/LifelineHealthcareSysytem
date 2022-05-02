import { Container } from "react-bootstrap";
import NavBar from "../../components/navbar/Navbar";
import Tables from "../../components/table/Tables";
const rows = [
  {
    id: 1,
    doctorName: "Doc 01",
    img: "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg",
    specialist: "Cardiologists",
    date: "1 March",
    amount: 785,
    method: "Online",
    status: "bill",
  },
  {
    id: 2,
    doctorName: "Doc 02",
    img: "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg",
    specialist: "Cardiologists",
    date: "1 March",
    amount: 1000,
    method: "Online",
    status: "bill",
  },
  {
    id: 3,
    doctorName: "Doc 03",
    img: "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg",
    specialist: "Cardiologists",
    date: "1 March",
    amount: 900,
    method: "Offline",
    status: "bill",
  },
  {
    id: 4,
    doctorName: "Doc 04",
    img: "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg",
    specialist: "Cardiologists",
    date: "1 March",
    amount: 800,
    method: "Online",
    status: "generate",
  },
  {
    id: 5,
    doctorName: "Doc 05",
    img: "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg",
    specialist: "Cardiologists",
    date: "1 March",
    amount: 850,
    method: "Online",
    status: "bill",
  },
];
export default function Bill() {
  return (
    <Container className="bills">
      <Tables rows={rows} />
    </Container>
  );
}
