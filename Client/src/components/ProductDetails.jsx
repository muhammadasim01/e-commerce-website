import React, { useEffect } from "react";
import { Navbar1 } from "./Navbar1";
import { Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProductDetailAction } from "../redux/actions/productActions";
import { addToCart } from "../redux/actions/cartActions";

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { loading, response, success } = useSelector(
    (state) => state.productDetail
  );
  const product = response;

  const cartFuction = (id) => {
    dispatch(addToCart(id));
  };

  useEffect(() => {
    dispatch(getProductDetailAction(id));
  }, []);
  return (
    <>
      <Navbar1 />
      <div
        className="container text-light"
        style={{ position: "relative", top: "65px" }}
      >
        {loading || !success ? (
          <h1 className="text-center">loading...</h1>
        ) : (
          <>
            <h1 className="text-center display-1">
              {product.BrandName} {product.ModelName}
            </h1>
            <br />
            <div className="details">
              <div className="productimg">
                <img
                  src={`/uploads/${product.Photo}`}
                  alt="product detail img"
                  className="img-fluid detail-img container"
                />
              </div>
              <div className="productDetail">
                <h1>
                  {product.BrandName} {product.ModelName}
                </h1>
                <h4>{`Rs.${product.Price}/-`}</h4>
                <Button
                  variant="primary"
                  onClick={() => {
                    cartFuction(product._id);
                  }}
                >
                  add to cart
                </Button>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default ProductDetails;
