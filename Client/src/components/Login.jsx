import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Navbar1 } from "./Navbar1";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { UserLogin } from "../redux/actions/useractions";

export const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const lateFunction = () => {
    setTimeout(() => {
      if (
        localStorage.getItem("userinfo") &&
        localStorage.getItem("userinfo") !== undefined
      ) {
        navigate("/allmobiles");
      }
    }, 1000);
  };

  const [check, setCheck] = useState(true);
  const [loginn, setLogin] = useState({ Email: "", Password: "" });
  const loginUser = async (e) => {
    e.preventDefault();
    dispatch(UserLogin(loginn));
    setLogin({ Email: "", Password: "" });
    lateFunction();
  };
  return (
    <div className="text-light">
      <Navbar1 />
      <div className="container" style={{ position: "relative", top: "65px" }}>
        <p className="display-2 text-center">User Login</p>

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
            <Link to="/forgot">forgot password ?</Link>
          </div>
          <Button variant="primary" type="submit" onClick={loginUser}>
            Log In
          </Button>
        </Form>
      </div>
    </div>
  );
};
