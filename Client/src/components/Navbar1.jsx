import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Navbar } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { UserLogout } from "../redux/actions/useractions";
import Cart from "./Cart";

export const Navbar1 = () => {
  const dispatch = useDispatch();
  const [logIn, setLogIn] = useState(true);
  const [logOut, setLogOut] = useState(false);
  useEffect(() => {
    const token = localStorage.getItem("userinfo");
    if (token) {
      setLogIn(false);
      setLogOut(true);
    } else {
      setLogIn(true);
      setLogOut(false);
    }
  }, []);

  const [toggle, setToggle] = useState(false);
  const cartHandler = () => {
    setToggle(!toggle);
  };
  return (
    <div>
      <Navbar expand="lg" variant="dark" className="navbar1">
        <Container fluid>
          <Link to="/" className="navutils navlogo">
            mobile store
          </Link>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll" className="navcon">
            <Nav
              className="me-auto my-2 my-lg-0 d-flex justify-content-between nav "
              navbarScroll
            >
              <Link to="/allmobiles" className="navutils">
                ALL MOBILES
              </Link>
              <Link to="/samsung" className="navutils">
                SAMSUNG
              </Link>
              <Link to="/iphone" className="navutils">
                IPHONE
              </Link>
              <Link to="/huawei" className="navutils">
                HUAWEI
              </Link>
              <Link to="/others" className="navutils">
                OTHERS
              </Link>
            </Nav>
            <div className="rightnav d-flex justify-content-between">
              <Link to="" className="navutils" onClick={cartHandler}>
                CART
              </Link>
              <Link to="/register" className="navutils">
                REGISTER
              </Link>
              {logIn && (
                <Link to="/login" className="navutils">
                  LOGIN
                </Link>
              )}
              {logOut && (
                <Link
                  to="/login"
                  onClick={() => {
                    dispatch(UserLogout());
                  }}
                  className="navutils"
                >
                  LOGOUT
                </Link>
              )}
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {toggle ? <Cart /> : ""}
    </div>
  );
};
