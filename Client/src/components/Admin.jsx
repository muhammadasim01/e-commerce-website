import React, { useEffect } from "react";
import { Navbar2 } from "./Navbar2";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Admin = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const token = sessionStorage.getItem("adminToken");
    if (!token) navigate("/admin/login");
  }, []);
  return (
    <div className="text-light">
      <Navbar2 />
      <br />
      <br />
      <div
        className="container text-center"
        style={{ position: "relative", top: "75px" }}
      >
        <h1 className="display-1">admin dashboard</h1>
        <p className="display-4">manage your online store here!</p>
        <div
          className="buttons d-flex flex-row "
          style={{
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <Link to="/admin/allproduct">
            <button className="btn btn-primary m-3">manage products</button>
          </Link>
          <Link to="/admin/addproduct">
            <button className="btn btn-primary m-3">add new product</button>
          </Link>
          <Link to="/admin/users">
            <button className="btn btn-primary m-3">manage users</button>
          </Link>
          <Link to="/admin/orders">
            <button className="btn btn-primary m-3">manage orders</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Admin;
