import React, { useState } from "react";
import { Navbar1 } from "./Navbar1";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { UserRegistration } from "../redux/actions/useractions";

export const Register = () => {
  const dispatch = useDispatch();
  const { response } = useSelector((state) => state.UserRegistrationReducer);
  console.log(response);
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
    dispatch(UserRegistration(Register));
    setRegister({
      Fname: "",
      Lname: "",
      Email: "",
      Password: "",
      Cpassword: "",
    });
  };
  return (
    <div className="text-light">
      <Navbar1 />
      <div className="container" style={{ position: "relative", top: "65px" }}>
        <p className="display-2 text-center">User Registration</p>

        <Form>
          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter First Name"
              name="Fname"
              value={Register.Fname}
              onChange={eventHandler}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicTextt">
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
          <Form.Group className="mb-3" controlId="formBasicCPassword">
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
          <br />
          <br />
          <br />
        </Form>
      </div>
    </div>
  );
};
