import React from "react";
import { Container } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Navbar2 = () => {
  return (
    <div>
      <Navbar bg="dark" expand="lg" variant="dark">
        <Container fluid>
          <Navbar.Brand href="#">Admin Panel</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0 nav2 d-flex justify-content-between"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Link to="/" className="navutil">
                Home
              </Link>
              <Link to="/admin/allproduct" className="navutil">
                all products
              </Link>
              <Link to="/admin/addproduct" className="navutil">
                add product
              </Link>
              <Link to="/admin/users" className="navutil">
                users
              </Link>
            </Nav>
            <div className="rightnav2 d-flex justify-content-between">
              <Link to="/admin/register" className="navutil">
                register
              </Link>
              <Link to="/admin/login" className="navutil">
                login
              </Link>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};
