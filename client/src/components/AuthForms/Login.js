import React, { useState } from "react";
import { Image, Form, Button, Container, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { login } from "../../JS/actions/authActions";

const Login = ({ history }) => {
  const isAuth = useSelector((state) => state.authReducer.isAuth);
  const dispatch = useDispatch();
  const [formData, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) =>
    setForm({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    // login
    dispatch(login(formData));
    //redirect to dashboard
    // history.push("/dashboard");
  };

  if (isAuth) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <Container>
      <Row className="p-3">
        <Col>
          <Form
            onSubmit={handleSubmit}
            className="p-5 m-3"
            style={{ boxShadow: "2px 6px 18px 1px rgba(0,0,0,0.3)" }}
          >
            <h2 className="text-center">Sign in</h2>
            <Form.Group>
              <Form.Label>Email address</Form.Label>
              <Form.Control
                onChange={handleChange}
                value={formData.email}
                name="email"
                type="email"
                placeholder="Enter email"
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control
                onChange={handleChange}
                value={formData.password}
                name="password"
                type="password"
                placeholder="Password"
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
        <Col>
          <Image
            style={{ width: "400px", height: "400px" }}
            src="https://pathwayport.com/saasland/images/login@4x.png"
            rounded
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
