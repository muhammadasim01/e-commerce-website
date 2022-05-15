import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Navbar2 } from "./Navbar2";

import axios from "axios";

export const Addproduct = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const token = sessionStorage.getItem("adminToken");
    if (!token) navigate("/admin/login");
  }, []);
  const [Photo, setphoto] = useState("");
  const [state, setstate] = useState({
    BrandName: "",
    ModelName: "",
    Price: 0,
  });
  const inputHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setstate({ ...state, [name]: value });
  };
  const inputPhoto = (e) => {
    setphoto(e.target.files[0]);
  };
  const addData = (e) => {
    const formdata = new FormData();
    formdata.append("BrandName", state.BrandName);
    formdata.append("ModelName", state.ModelName);
    formdata.append("Price", state.Price);
    formdata.append("Photo", Photo);

    e.preventDefault();
    axios
      .post("/add", formdata)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    setstate({
      BrandName: "",
      ModelName: "",
      Price: 0,
    });
    setphoto("");
  };
  return (
    <>
      <Navbar2 />
      <div
        className="container text-light"
        style={{ position: "relative", top: "65px" }}
      >
        <p className="display-2 text-center">Add product</p>
        <Form method="POST" encType="multipart/form-data">
          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Brand Name</Form.Label>
            <Form.Control
              onChange={inputHandler}
              type="text"
              placeholder="Brand name"
              name="BrandName"
              value={state.BrandName}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Model name</Form.Label>
            <Form.Control
              onChange={inputHandler}
              type="text"
              placeholder="model name"
              name="ModelName"
              value={state.ModelName}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicNumber">
            <Form.Label>Price</Form.Label>
            <Form.Control
              onChange={inputHandler}
              type="number"
              placeholder="price"
              name="Price"
              value={state.Price}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicFile">
            <Form.Label>Add photo</Form.Label>
            <Form.Control type="file" name="Photo" onChange={inputPhoto} />
          </Form.Group>

          <Button variant="primary" type="submit" onClick={addData}>
            Add
          </Button>
        </Form>
      </div>
    </>
  );
};
