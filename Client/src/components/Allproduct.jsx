import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Navbar2 } from "./Navbar2";
import Card from "./Card3";
import axios from "axios";

export const Allproduct = () => {
  const [mobiles, setmobiles] = useState([]);
  const fetchProduct = async () => {
    var products = await axios.get("/allmobiles");
    const data = await products.data;
    setmobiles(data);
  };
  const navigate = useNavigate();
  useEffect(() => {
    fetchProduct();

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
        <p className="display-2">All Products</p>
        <div
          className="container"
          style={{
            padding: "10px",
            height: "68vh",
            overflow: "auto",
          }}
        >
          {mobiles.map((product) => (
            <Card
              key={product._id}
              id={product._id}
              image={"/uploads/" + product.Photo}
              brandname={product.BrandName}
              modelname={product.ModelName}
              price={product.Price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
