import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Navbar2 } from "./Navbar2";
import axios from "axios";
import { Form } from "react-bootstrap";
import { useParams, useNavigate, Navigate } from "react-router-dom";
const AdminResetPassword = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { token } = useParams();
  const [data, setData] = useState({ Password: "", Cpassword: "" });
  const changepassword = async (e) => {
    e.preventDefault();
    const res = await axios.post(`/admin/create/${id}/${token}`, data);
    const response = await res.data;
    if (response === "password updated successfully") {
      navigate("/admin/login");
    }
  };
  return (
    <>
      <Navbar2 />

      <div className="container" style={{ position: "relative", top: "65px" }}>
        <h1 className="text-light">create new password</h1>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              name="Password"
              value={data.Password}
              onChange={(e) =>
                setData({ ...data, [e.target.name]: e.target.value })
              }
            />
          </Form.Group>{" "}
          <Form.Group className="mb-3" controlId="formBasicCpassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              name="Cpassword"
              value={data.Cpassword}
              onChange={(e) =>
                setData({ ...data, [e.target.name]: e.target.value })
              }
            />
          </Form.Group>
          <Button variant="primary" type="submit" onClick={changepassword}>
            Change
          </Button>
        </Form>
      </div>
    </>
  );
};

export default AdminResetPassword;
