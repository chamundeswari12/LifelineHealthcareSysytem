import "./editProfile.css";

import { Button, Form, Row, Col, Container } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import ApiService from "../../services/ApiService";
import SpinnerLoading from "../../components/spinner/Spinner";

export default function EditProfile() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [file, setFile] = useState("");
  const [data, setData] = useState();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    console.log(data);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);

    ApiService.editProfile(data)
      .then((res) => {
        console.log(res.data);
        alert("Profile edit successfully!");
        navigate("/user/profile");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    ApiService.currentUser()
      .then((res) => {
        setData(res.data);
        console.log(res.data.phoneNo);
        setIsLoading(false);
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
          <>
            <div className="top">
              <h1>Edit Profile</h1>
            </div>
            <Row className="bottom">
              <Col className="left">
                <img
                  src={
                    file
                      ? URL.createObjectURL(file)
                      : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
                  }
                  alt="profile"
                />
              </Col>
              <Col className="right">
                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3">
                    <Form.Label htmlFor="file">
                      Image: <DriveFolderUploadOutlinedIcon className="icon" />
                    </Form.Label>
                    <Form.Control
                      type="file"
                      name="file"
                      style={{ display: "none" }}
                      id="file"
                      onChange={(e) => {
                        setFile(e.target.files[0]);
                        setData((prevState) => ({
                          ...prevState,
                          [e.target.name]: e.target.files[0],
                        }));
                      }}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label htmlFor="firstName">First Name</Form.Label>
                    <Form.Control
                      id="firstName"
                      name="firstName"
                      type="text"
                      defaultValue={data.firstName}
                      onChange={handleChange}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label htmlFor="lastName">Last name</Form.Label>
                    <Form.Control
                      type="text"
                      id="lastName"
                      name="lastName"
                      defaultValue={data.lastName}
                      onChange={handleChange}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label htmlFor="email">Email</Form.Label>
                    <Form.Control
                      type="mail"
                      id="email"
                      name="email"
                      defaultValue={data.email}
                      onChange={handleChange}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label htmlFor="phoneNo">Phone Number</Form.Label>
                    <Form.Control
                      type="text"
                      // pattern="[+91][0-9].{11}"
                      // maxLength={13}
                      title="enter phone number like +919999999999"
                      id="phoneNo"
                      name="phoneNo"
                      defaultValue={data.phoneNo}
                      onChange={handleChange}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label htmlFor="dob">Date of Birth</Form.Label>
                    <Form.Control
                      name="dob"
                      id="dob"
                      required
                      // pattern="/((\+*)((0[ -]*)*|((91 )*))((\d{12})+|(\d{10})+))|\d{5}([- ]*)\d{6}/"
                      type="date"
                      value={data.dob}
                      onChange={handleChange}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label htmlFor="address">Address</Form.Label>
                    <Form.Control
                      as="textarea"
                      id="address"
                      name="address"
                      defaultValue={data.address}
                      onChange={handleChange}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label htmlFor="country">Country</Form.Label>
                    <Form.Control
                      type="text"
                      id="country"
                      name="country"
                      defaultValue={data.country}
                      onChange={handleChange}
                    />
                  </Form.Group>

                  <Button type="submit" variant="success">
                    Update
                  </Button>
                  {"  "}
                  <Button as={Link} to="/user/profile">
                    Cancel
                  </Button>
                </Form>
              </Col>
            </Row>
          </>
        )}
      </Container>
    </>
  );
}
