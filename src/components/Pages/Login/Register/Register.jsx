import React, { useContext } from "react";
import { Form, Button, Row, Col, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../../Provider/AuthProvider";

const Register = () => {
    const {createUser} = useContext(AuthContext)

    const handleRegister = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;
        console.log(name, photo,email,password);

        createUser(email,password)
        .then(result => {
            const createdUser = result.user;
            console.log(createdUser);
        })
        .catch(error => {
            console.log(error);
        })
    }

  return (
    <Container className="w-25 mx-auto">
      <Form onSubmit={handleRegister}>
        <Form.Group controlId="formEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter Name" name="name" required />
        </Form.Group>

        <Form.Group controlId="formEmail">
          <Form.Label>Photo Url</Form.Label>
          <Form.Control type="text" placeholder="Photo url" name="photo" required />
        </Form.Group>

        <Form.Group controlId="formEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" name="email" required />
        </Form.Group>

        <Form.Group controlId="formPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" name="password" required />
        </Form.Group>

        <Button className="mt-2" variant="secondary" type="submit">
          Sign Up
        </Button>

        <Form.Text className="text-success"></Form.Text>
        <Form.Text className="text-danger"></Form.Text>


        <p className="text-center mt-4">
          Already have an account? <Link to="/login">Sign in</Link>
        </p>
      </Form>
    </Container>
  );
};

export default Register;
