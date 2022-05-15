import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Navbar2 } from "./Navbar2";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export const Adminlogin = () => {
  const navigate = useNavigate();
  const [check, setCheck] = useState(true);
  const [loginn, setLogin] = useState({ Email: "", Password: "" });
  const loginUser = async (e) => {
    e.preventDefault();
    const response = await axios.post("/adminLogin", loginn);
    const data = await response.data;
    if (data.state === true) {
      sessionStorage.setItem("adminToken", JSON.stringify(data.token));
      navigate("/admin");
    }
  };
  return (
    <div className="text-light">
      <Navbar2 />
      <div className="container" style={{ position: "relative", top: "65px" }}>
        <p className="display-2 text-center">Admin Login</p>

        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              name="Email"
              value={loginn.email}
              onChange={(e) => {
                setLogin({ ...loginn, [e.target.name]: e.target.value });
              }}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              name="Password"
              value={loginn.password}
              onChange={(e) => {
                setLogin({ ...loginn, [e.target.name]: e.target.value });
              }}
            />
          </Form.Group>
          <div className="smallsection d-flex justify-content-between">
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check
                type="checkbox"
                label="remember me"
                defaultChecked={check}
                onChange={() => {
                  setCheck(!check);
                }}
              />
            </Form.Group>
            <Link to="/admin/forgot">forgot password ?</Link>
          </div>
          <Button variant="primary" type="submit" onClick={loginUser}>
            Log In
          </Button>
        </Form>
      </div>
    </div>
  );
};
