import "./profile.css";

import profilepic from "../../images/profilepic.svg";
import EditIcon from "@mui/icons-material/Edit";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Tabs from "react-bootstrap/Tabs";
import { Button, Col, Container, Row, Tab } from "react-bootstrap";

import ApiService from "../../services/ApiService";
import SpinnerLoading from "../../components/spinner/Spinner";
import moment from "moment";

export default function Profile() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState("");
  useEffect(() => {
    ApiService.currentUser()
      .then((res) => {
        setData(res.data);
        console.log(res.data);
        setIsLoading(false);
        console.log(res.data.dob);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <>
      <Container className="profile">
        {isLoading ? (
          <SpinnerLoading />
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
                    <h5 className="role">{data.authorities[0].authority}</h5>
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
                            <p className="titleName">Patient ID</p>
                          </Col>
                          <Col>
                            <p className="titleValue">{data.id}</p>
                          </Col>
                        </Row>
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
                            <p className="titleValue">
                              {moment(`${data.dob}`).format("DD MMM YYYY")}
                            </p>
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
                            <p className="titleName">Under construction</p>
                          </Col>
                          <Col>
                            <p className="titleValue">Under construction</p>
                          </Col>
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
