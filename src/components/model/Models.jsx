import { Button, Modal, Col, Row, Tab } from "react-bootstrap";
import Tabs from "react-bootstrap/Tabs";

export default function Models(props) {
  console.log(props.data);
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Doctor Profile
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>{props.data.doctorName}</h4>
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
              <div className="row">
                <div className="profile-head">
                  <h5 className="name">
                    {props.data.firstName} {props.data.lastName}
                  </h5>
                  <h5 className="role">
                    {/* {props.data.authorities[0].authority} */}
                  </h5>
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
                          <p className="titleName">Doctor name</p>
                        </Col>
                        <Col>
                          <p className="titleValue">{props.data.doctorName}</p>
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          <p className="titleName">Specialist</p>
                        </Col>
                        <Col>
                          <p className="titleValue">{props.data.specialist}</p>
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          <p className="titleName">Payment method</p>
                        </Col>
                        <Col>
                          <p className="titleValue">{props.data.method}</p>
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          <p className="titleName">Fee</p>
                        </Col>
                        <Col>
                          <p className="titleValue">{props.data.amount}</p>
                        </Col>
                      </Row>

                      <Row>
                        <Col>
                          <p className="titleName">Phone Number</p>
                        </Col>
                        <Col>
                          <p className="titleValue">{props.data.phoneNo}</p>
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          <p className="titleName">Gender</p>
                        </Col>
                        <Col>
                          <p className="titleValue">{props.data.gender}</p>
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
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
