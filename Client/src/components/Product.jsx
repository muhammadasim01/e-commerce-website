import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/actions/cartActions";

export const Product = ({ id, image, brandname, modelname, price }) => {
  const dispatch = useDispatch();
  const cartFuction = (id) => {
    dispatch(addToCart(id));
  };

  return (
    <div className="text-dark">
      <Card
        style={{ marginTop: "0.2rem", marginRight: "0.2rem" }}
        className="product"
      >
        <Link
          to={`/productinfo/${id}`}
          style={{ textDecoration: "none", color: "black" }}
        >
          <Card.Img variant="top" src={image} className="cardimg" />
        </Link>
        <Card.Body>
          <Link
            to={`/productinfo/${id}`}
            style={{ textDecoration: "none", color: "black" }}
          >
            {" "}
            <Card.Title>
              {brandname} {modelname}
            </Card.Title>
            <Card.Text>Rs {price}/-</Card.Text>
          </Link>
          <Button
            variant="primary"
            onClick={() => {
              cartFuction(id);
            }}
          >
            add to cart
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};
