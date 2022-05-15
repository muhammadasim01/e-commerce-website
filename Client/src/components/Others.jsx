import React, { useEffect, useState } from "react";
import { Navbar1 } from "./Navbar1";
import { Product } from "./Product";
import { useDispatch, useSelector } from "react-redux";
import { getOthersMobilesAction } from "../redux/actions/productActions";

export const Others = () => {
  const dispatch = useDispatch();
  const { response, loading } = useSelector((state) => state.getOthersReducer);
  useEffect(() => {
    dispatch(getOthersMobilesAction());
  }, []);
  return (
    <div className="text-light">
      <Navbar1 />
      <div className="container" style={{ position: "relative", top: "65px" }}>
        <p className="display-2 text-center">Other Brands</p>
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
            <h1>loading...</h1>
          )}
        </div>
        <br />
        <br />
        <br />
      </div>
    </div>
  );
};
