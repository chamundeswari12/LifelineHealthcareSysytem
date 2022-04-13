import "./profile.css";
import Tabs from "react-bootstrap/Tabs";
import profilepic from "../../images/profilepic.svg";
import {
  Button,
  Col,
  Container,
  InputGroup,
  Row,
  Spinner,
  Tab,
} from "react-bootstrap";
import NavBar from "../../components/navbar/Navbar";
import ApiService from "../../Services/ApiService";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";

export default function Profile() {
  const [isLoading, setIsLoading] = useState(true);
  const [token, setToken] = useState(localStorage.getItem("Acess_Token"));
  const user = localStorage.getItem("user");
  const [data, setData] = useState([]);
  const [role, setRole] = useState("");
  // console.log(user);
  useEffect(() => {
    ApiService.currentUser()
      .then((res) => {
        setData(res.data);
        setRole(res.data.authorities[0].authority);
        setIsLoading(false);
        // console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [role]);
  return (
    <>
      <NavBar />
      <Container className="profile">
        {isLoading ? (
          <Spinner animation="border" role="status" variant="primary">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        ) : (
          <form>
            <Row className="profiledata">
              <Col>
                <img
                  className="profile-img"
                  src="https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
                  alt="profile"
                />
              </Col>
              <Col>
                {/* <div className="col"> */}
                <Button
                  as={Link}
                  to="editprofile"
                  className="edit-button"
                  variant="outline"
                >
                  Edit profile
                  <EditIcon />
                </Button>
                <div className="row">
                  <div className="profile-head">
                    <h5 className="name">
                      {data.firstName} {data.lastName}
                    </h5>
                    <h5 className="role">{role}</h5>
                    <p className="profile-rating mt-3 mb-3">
                      {/* Rating:<span>1/10</span> */}
                    </p>
                    <Tabs
                      defaultActiveKey="about-us"
                      id="uncontrolled-tab-example"
                      className="mb-3"
                    >
                      <Tab eventKey="about-us" title="About">
                        <Row>
                          <Col>
                            <p className="titleName">First name</p>
                          </Col>
                          <Col>
                            <p className="titleValue">{data.firstName}</p>
                          </Col>
                        </Row>
                        <Row>
                          <Col>
                            <p className="titleName">Last name</p>
                          </Col>
                          <Col>
                            <p className="titleValue">{data.lastName}</p>
                          </Col>
                        </Row>
                        <Row>
                          <Col>
                            <p className="titleName">UserName</p>
                          </Col>
                          <Col>
                            <p className="titleValue">{data.username}</p>
                          </Col>
                        </Row>
                        <Row>
                          <Col>
                            <p className="titleName">Mail Id</p>
                          </Col>
                          <Col>
                            <p className="titleValue">{data.email}</p>
                          </Col>
                        </Row>
                        <Row>
                          <Col>
                            <p className="titleName">Date of Birth</p>
                          </Col>
                          <Col>
                            <p className="titleValue">{data.dob}</p>
                          </Col>
                        </Row>
                        <Row>
                          <Col>
                            <p className="titleName">Phone Number</p>
                          </Col>
                          <Col>
                            <p className="titleValue">{data.phoneNo}</p>
                          </Col>
                        </Row>
                        <Row>
                          <Col>
                            <p className="titleName">Gender</p>
                          </Col>
                          <Col>
                            <p className="titleValue">{data.gender}</p>
                          </Col>
                        </Row>
                      </Tab>
                      <Tab eventKey="time-line" title="Time Line">
                        <Row>
                          <Col>
                            <p className="titleName">test timeline</p>
                          </Col>
                          <Col>
                            <p className="titleValue">
                              test doctor appointment at 10
                            </p>
                          </Col>

                          {/* <div className="col-md-6">
                    <p>test doctor appointment at 10</p>
                  </div> */}
                        </Row>
                      </Tab>
                    </Tabs>
                  </div>
                </div>
                {/* </div> */}
              </Col>
            </Row>
          </form>
        )}
      </Container>
    </>
  );
}
