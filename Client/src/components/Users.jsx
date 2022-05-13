import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Navbar2 } from "./Navbar2";
import Card from "./Card4";
import { useDispatch, useSelector } from "react-redux";
import { UserDetails } from "../redux/actions/useractions";

export const Users = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { response, loading } = useSelector(
    (state) => state.UserDetailsReducer
  );

  useEffect(() => {
    dispatch(UserDetails());
    const token = sessionStorage.getItem("adminToken");
    if (!token) navigate("/admin/login");
  }, []);

  return (
    <div>
      <Navbar2 />
      <div
        className="container text-center text-light"
        style={{ position: "relative", top: "75px" }}
      >
        <p className="display-2">All Users</p>
        <div
          className="container"
          style={{
            padding: "10px",
            height: "68vh",
            overflow: "auto",
          }}
        >
          {!loading ? (
            response.map((element, index) => (
              <Card
                key={element._id}
                Fname={element.Fname}
                Lname={element.Lname}
                Email={element.Email}
              />
            ))
          ) : (
            <h1>loading...</h1>
          )}
        </div>
      </div>
    </div>
  );
};
