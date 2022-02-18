import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Navbar } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { useState } from "react";
import Cart from "./Cart";

export const Navbar1 = () => {
  const [toggle, setToggle] = useState(false);
  const cartHandler = () => {
    setToggle(!toggle);
  };
  return (
    <div>
      <Navbar
        style={{ backgroundColor: "blueviolet" }}
        expand="lg"
        variant="dark"
      >
        <Container fluid>
          <Link to="/" className="navutils navlogo">
            mobile store
          </Link>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0 d-flex justify-content-between nav"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Link to="/" className="navutils">
                Home
              </Link>
              <Link to="/allmobiles" className="navutils">
                all mobiles
              </Link>
              <Link to="/samsung" className="navutils">
                samsung
              </Link>
              <Link to="/iphone" className="navutils">
                iphone
              </Link>
              <Link to="/huawei" className="navutils">
                huawei
              </Link>
              <Link to="/others" className="navutils">
                others
              </Link>
            </Nav>
            <div className="rightnav d-flex justify-content-between">
              <Link to="" className="navutils" onClick={cartHandler}>
                cart
              </Link>
              <Link to="/register" className="navutils">
                register
              </Link>
              <Link to="/login" className="navutils">
                login
              </Link>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {toggle ? <Cart /> : ""}
    </div>
  );
};
