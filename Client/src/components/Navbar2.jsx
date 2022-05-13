import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Navbar2 = () => {
  const [logIn, setLogIn] = useState(true);
  const [logOut, setLogOut] = useState(false);
  useEffect(() => {
    const token = sessionStorage.getItem("adminToken");
    if (token) {
      setLogIn(false);
      setLogOut(true);
    } else {
      setLogIn(true);
      setLogOut(false);
    }
  }, []);

  return (
    <div>
      <Navbar expand="lg" variant="dark" className="navbar2">
        <Container fluid>
          <Link to="/admin" style={{ textDecoration: "none" }}>
            <Navbar.Brand className="navlogo">Admin DashBoard</Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0 nav2 d-flex justify-content-between"
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
              <Link to="/admin/orders" className="navutil">
                orders
              </Link>
            </Nav>
            <div className="rightnav2 d-flex justify-content-between">
              <Link to="/admin/register" className="navutil ">
                register
              </Link>
              {logIn && (
                <Link to="/admin/login" className="navutils">
                  login
                </Link>
              )}
              {logOut && (
                <Link
                  to="/admin/login"
                  onClick={() => {
                    sessionStorage.removeItem("adminToken");
                  }}
                  className="navutils"
                >
                  log out
                </Link>
              )}
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};
