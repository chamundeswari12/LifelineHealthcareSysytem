import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";
import "./Login.css";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../actions/userActions";
// import { login1 } from "../Services/ApiService";

export default function Login({ history }) {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  console.log(userInfo);
  useEffect(() => {
    if (userInfo) {
      navigate("/user");
    }
  }, [navigate, history, userInfo]);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(username, password));
    // const loginData = { username: username, password: password };
    // ApiService.login(loginData)

    //   .then((res) => {
    //     console.log(res);
    //     localStorage.setItem("Acess_Token", JSON.stringify(res.data.token));
    //     // localStorage.setItem("user", JSON.stringify(res.data.username));
    //     // const user = localStorage.getItem("user");
    //     props.userAuthentication(0);
    //     alert(`Welcome`);
    //     navigate("/user");
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //     // console.log(error.code);
    //   });
  };

  return (
    <div id="login" className="container-sm ">
      <h1 className="title text-center">Welcome</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Username</Form.Label>
          <Form.Control
            required
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="name@gmail.com"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>password</Form.Label>
          <Form.Control
            required
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="enter your password"
            // minLength="8"
            // pattern="^([@#](?=[^aeiou]{7,13}$)(?=[[:alnum:]]{7,13}$)(?=.*[A-Z]{1,}.*$).+)$"
          />
        </Form.Group>
        <Button type="submit" variant="success">
          Login
        </Button>
        {"  "}
        {/* <Button as={Link} to="/signup">
          Signup
        </Button> */}
        <br />
        <Link to="">Forgot?</Link>
        {" / "} <Link to="/signup">Signup</Link>
      </Form>
    </div>
  );
}
