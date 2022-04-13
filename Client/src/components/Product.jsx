import React from "react";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import axios from "axios";
export const Product = (props) => {
  const cartFuction = async (key) => {
    const Object = { id: key };
    const response = await axios.post("/cart", Object);
    const data = await response.data;
  };
  return (
    <div className="text-dark">
      <Card
        style={{ width: "19.5rem", marginTop: "1rem", marginRight: "0.3rem" }}
      >
        <Card.Img variant="top" src={props.image} className="cardimg" />
        <Card.Body>
          <Card.Title>
            {props.brandname} {props.modelname}
          </Card.Title>
          <Card.Text>Rs {props.price}/-</Card.Text>
          <Button
            variant="primary"
            onClick={() => {
              cartFuction(props.id);
            }}
          >
            add to cart
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};
