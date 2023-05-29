import React, { useContext, useState } from "react";
import { Form, Button, Row, Col, Container } from "react-bootstrap";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../../Provider/AuthProvider";
import useTitle from "../../../hooks/useTitle";

const Login = () => {
  useTitle('login')
  const { signIn } = useContext(AuthContext);
  const [error, setError] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);


    setError("");

    if (!/(?=.*[A-Z])/.test(password)) {
      setError("please add uppercase");
      return;
    } else if (!/ (?=.*[0-9]) /.test(password)) {
      setError("please add at least two number");
    } else if (password.length < 6) {
      setError("please enter 6 ch-rt");
      return;
    }
    signIn(email,password)
    .then(result => {
        const loggedUser = result.user;
        console.log(loggedUser);
    })
    .catch(error => {
        console.log(error);
    })
  };

  return (
    <Container className="w-25 mx-auto">
      <Form onSubmit={handleLogin}>
        <Form.Group controlId="formEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" name="email" required />
        </Form.Group>

        <Form.Group controlId="formPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" name="password" required />
        </Form.Group>

        <Button className="mt-2" variant="secondary" type="submit">
          Sign In
        </Button>

        <Form.Text className="text-success"></Form.Text>
        <Form.Text className="text-danger"></Form.Text>

        <Row className="mt-4">
          <Col>
            <Button variant="outline-primary" className="w-100 mb-2">
              <FaGoogle className="mr-2 mx-1" />
              Sign In with Google
            </Button>
          </Col>

          <Col>
            <Button variant="outline-secondary" className="w-100 mb-2">
              <FaGithub className="mr-2 mx-1" />
              Sign In with Github
            </Button>
          </Col>
        </Row>

        <p className="text-center mt-4">
          Don't have an account? <Link to="/register">Sign up</Link>
        </p>
        <p className="text-danger">{error} </p>
      </Form>
    </Container>
  );
};

export default Login;
