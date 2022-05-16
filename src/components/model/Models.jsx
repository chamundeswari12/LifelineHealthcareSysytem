import { useCallback, useEffect, useState } from "react";
import { Button, Modal, Col, Row, Tab } from "react-bootstrap";
import Tabs from "react-bootstrap/Tabs";
import moment from "moment";
import DataSelection from "../dataSelection/DataSelection";
import Slot from "../slot/Slot";
import "./models.css";

export default function Models(props) {
  const [value, setValue] = useState(new Date());
  const [slot, setSlot] = useState(false);
  const onChange = useCallback(
    (value) => {
      setValue(value);
      // console.log(value);
      if (value) {
        setSlot(true);
      } else {
        setSlot(false);
      }
    },
    [setValue]
  );
  const onClose = () => {
    setValue(new Date());
    setSlot(false);
  };

  const handleClose = () => {
    props.onHide();
    setValue(new Date());
    setSlot(false);
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      // scrollable
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter" className="title">
          {props.data.doctorName}
        </Modal.Title>
        <Button className="btnClose" onClick={handleClose}>
          X
        </Button>
      </Modal.Header>
      <Modal.Body>
        {/* <h4>{props.data.doctorName}</h4> */}
        <form>
          <Row className="profiledata">
            <Col xs={4}>
              <img
                className="profile-img"
                src="https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
                alt="profile"
              />
              {/* </Col> */}
              {/* <Col xs={8}> */}
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
                      {/* <Row>
                        <Col>
                          <p className="titleName">Payment method</p>
                        </Col>
                        <Col>
                          <p className="titleValue">{props.data.method}</p>
                        </Col>
                      </Row> */}
                      <Row>
                        <Col>
                          <p className="titleName">Fee</p>
                        </Col>
                        <Col>
                          <p className="titleValue">{props.data.amount}</p>
                        </Col>
                      </Row>

                      {/* <Row>
                        <Col>
                          <p className="titleName">Phone Number</p>
                        </Col>
                        <Col>
                          <p className="titleValue">{props.data.phoneNo}</p>
                        </Col>
                      </Row> */}
                      {/* <Row>
                        <Col>
                          <p className="titleName">Gender</p>
                        </Col>
                        <Col>
                          <p className="titleValue">{props.data.gender}</p>
                        </Col>
                      </Row> */}
                    </Tab>
                    {/* <Tab eventKey="time-line" title="Time Line">
                      <Row>
                        <Col>
                          <p className="titleName">Under construction</p>
                        </Col>
                        <Col>
                          <p className="titleValue">Under construction</p>
                        </Col>
                      </Row>
                    </Tab> */}
                  </Tabs>
                </div>
              </div>
            </Col>
            {/* <Row> */}
            <Col xs={8} className="slotSection">
              <DataSelection
                className="dateSelection"
                value={value}
                onChange={onChange}
              />
              {slot ? <Slot value={value} /> : ""}
            </Col>
            {/* </Row> */}
          </Row>
        </form>
      </Modal.Body>
      {/* <Modal.Footer>
        <Button onClick={handleClose}>Close</Button>
      </Modal.Footer> */}
    </Modal>
  );
}
