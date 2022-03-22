import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Login.css";
export default function Login() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);
  };

  return (
    <div id="login" className="container-sm ">
      <h1 className="text-center">Welcome</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Username</Form.Label>
          <Form.Control required type="email" placeholder="name@gmail.com" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>password</Form.Label>
          <Form.Control
            required
            type="password"
            placeholder="enter your password"
            minLength="8"
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
        <Link to="">forgot</Link>
        {" / "} <Link to="/signup">Signup</Link>
      </Form>
    </div>
  );
}
