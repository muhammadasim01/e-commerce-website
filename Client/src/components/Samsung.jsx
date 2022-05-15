import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Navbar1 } from "./Navbar1";
import { Product } from "./Product";
import { useDispatch, useSelector } from "react-redux";
import { getSamsungMobilesAction } from "../redux/actions/productActions";

export const Samsung = () => {
  const dispatch = useDispatch();
  const { loading, response } = useSelector((state) => state.getSamsungReducer);

  useEffect(() => {
    dispatch(getSamsungMobilesAction());
  }, []);

  return (
    <div className="text-light">
      <Navbar1 />
      <div className="container" style={{ position: "relative", top: "65px" }}>
        <p className="display-2 text-center">Samsung</p>
        <div className="cardContainer d-flex flex-wrap justify-content-center text-center">
          {!loading ? (
            Array.from(response).map((product, index) => {
              return (
                <Product
                  key={product._id}
                  id={product._id}
                  image={"/uploads/" + product.Photo}
                  brandname={product.BrandName}
                  modelname={product.ModelName}
                  price={product.Price}
                />
              );
            })
          ) : (
            <h1>loading....</h1>
          )}
        </div>
        <br />
        <br />
        <br />
      </div>
    </div>
  );
};
