import React, { useState } from "react";
import { Navbar1 } from "./Navbar1";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import axios from "axios";

export const Register = () => {
  const [Register, setRegister] = useState({
    Fname: "",
    Lname: "",
    Email: "",
    Password: "",
    Cpassword: "",
  });
  const eventHandler = (e) => {
    setRegister({ ...Register, [e.target.name]: e.target.value });
  };
  const registerUser = async (e) => {
    e.preventDefault();
    setRegister({
      Fname: "",
      Lname: "",
      Email: "",
      Password: "",
      Cpassword: "",
    });
    const response = axios.post("http://localhost:8000/registerdata", Register);
    const data = response.data;
    console.log(data);
  };
  return (
    <div className="text-light">
      <Navbar1 />
      <div className="container">
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter First Name"
              name="Fname"
              value={Register.Fname}
              onChange={eventHandler}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter Last Name"
              name="Lname"
              value={Register.Lname}
              onChange={eventHandler}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              name="Email"
              value={Register.Email}
              onChange={eventHandler}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              name="Password"
              value={Register.Password}
              onChange={eventHandler}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label> Confirm Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Confirm Password"
              name="Cpassword"
              value={Register.Cpassword}
              onChange={eventHandler}
            />
          </Form.Group>

          <Button variant="primary" type="submit" onClick={registerUser}>
            Sign In
          </Button>
        </Form>
      </div>
    </div>
  );
};
