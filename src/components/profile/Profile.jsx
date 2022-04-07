import "./profile.css";
import Tabs from "react-bootstrap/Tabs";
import profilepic from "../../images/profilepic.svg";
import { Button, Col, Container, InputGroup, Row, Tab } from "react-bootstrap";
import NavBar from "../navbar/Navbar";
export const Profile = () => {
  return (
    <>
      <NavBar />
      <Container className="profile">
        <form>
          <Row>
            <div className="col-md-3">
              <img className="profile-img" src={profilepic} alt="profile" />
            </div>
            <div className="col-md-5">
              <div className="row">
                <div className="profile-head">
                  <h5> Profile Name</h5>
                  <h6> Patient</h6>
                  <p className="profile-rating mt-3 mb-3">
                    Rating:<span>1/10</span>
                  </p>
                  <Tabs
                    defaultActiveKey="about-us"
                    id="uncontrolled-tab-example"
                    className="mb-3"
                  >
                    <Tab eventKey="about-us" title="About">
                      <Row>
                        <Col>
                          <label>User ID</label>
                        </Col>
                        <Col>
                          <p>sgsdthtjgf</p>
                        </Col>
                      </Row>
                    </Tab>
                    <Tab eventKey="time-line" title="Time Line">
                      <Row>
                        <Col>
                          <label>test timeline</label>
                        </Col>
                        <Col>
                          <p>test doctor appointment at 10</p>
                        </Col>

                        {/* <div className="col-md-6">
                    <p>test doctor appointment at 10</p>
                  </div> */}
                      </Row>
                    </Tab>
                  </Tabs>
                </div>
              </div>
            </div>
            <Col>
              <Button variant="outline-secondary" id="button-addon1">
                Edit profile
              </Button>
            </Col>
          </Row>
        </form>
      </Container>
    </>
  );
};
