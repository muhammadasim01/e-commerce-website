import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Navbar1 } from "./Navbar1";
import axios from "axios";

export const Login = () => {
  const [login, setLogin] = useState({ email: "", password: "" });
  const loginUser = async (e) => {
    e.preventDefault();
    const response = await axios.post("/login", login);
    console.log(response.data);
    setLogin({ email: "", password: "" });
  };
  return (
    <div className="text-light">
      <Navbar1 />
      <div className="container">
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              name="Email"
              value={login.email}
              onChange={(e) => {
                setLogin({ ...login, [e.target.name]: e.target.value });
              }}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              name="Password"
              value={login.password}
              onChange={(e) => {
                setLogin({ ...login, [e.target.name]: e.target.value });
              }}
            />
          </Form.Group>

          <Button variant="primary" type="submit" onClick={loginUser}>
            Log In
          </Button>
        </Form>
      </div>
    </div>
  );
};
