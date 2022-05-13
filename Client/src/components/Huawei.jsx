import React, { useEffect } from "react";
import { Navbar1 } from "./Navbar1";
import { Product } from "./Product";
import { useDispatch, useSelector } from "react-redux";
import { getHuaweiMobilesAction } from "../redux/actions/productActions";

export const Huawei = () => {
  const dispatch = useDispatch();
  const { response, loading } = useSelector((state) => state.getHuaweiReducer);

  useEffect(() => {
    dispatch(getHuaweiMobilesAction());
  }, []);

  return (
    <div className="text-light">
      <Navbar1 />
      <div className="container" style={{ position: "relative", top: "65px" }}>
        <p className="display-2 text-center">Huawei</p>
        <div className="cardContainer d-flex flex-wrap justify-content-center text-center">
          {!loading ? (
            Array.from(response).map((product, index) => {
              return (
                <Product
                  key={product._id}
                  id={product._id}
                  image={"http://localhost:8000/uploads/" + product.Photo}
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
