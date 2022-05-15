import React, { useEffect } from "react";
import { Navbar1 } from "./Navbar1";
import { Product } from "./Product";
import { Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getAllMobilesAction } from "../redux/actions/productActions";

export const Allmobile = () => {
  const dispatch = useDispatch();
  const { response, loading } = useSelector((state) => state.getAllReducer);

  useEffect(() => {
    dispatch(getAllMobilesAction());
  }, []);

  return (
    <div className="text-light">
      <Navbar1 />
      <div className="container" style={{ position: "relative", top: "65px" }}>
        <p className="display-2 text-center">All Mobiles</p>

        <Form.Group className="mb-3 container" controlId="formBasicText">
          <Form.Control
            type="search"
            placeholder="search mobile..."
            className="text-center homeInput m-auto"
            name="search"
          />
        </Form.Group>

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
