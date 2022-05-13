import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Navbar2 } from "./Navbar2";
import OrderCard from "./OrderCard";
import { useDispatch, useSelector } from "react-redux";
import { getAllOrders } from "../redux/actions/orderActions";

export const Orders = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { response, loading, error } = useSelector(
    (state) => state.getAllOrderReducer
  );

  useEffect(() => {
    dispatch(getAllOrders());
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
        <p className="display-2">All orders</p>
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
              <OrderCard
                key={element._id}
                name={element.name}
                orderAmount={element.orderAmount}
                isDelivered={element.isDelivered}
                isPaid={element.isPaid}
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
