import React, { useState } from "react";
import { Card } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../redux/actions/cartActions";

export const Card2 = (props) => {
  const dispatch = useDispatch();

  return (
    <>
      <Card style={{ width: "17rem" }} className="d-flex flex-row">
        <Card.Img
          variant="top"
          src={"/uploads/" + props.photo}
          className="cartPhoto"
        />
        <Card.Body className="">
          <Card.Title>
            {props.name} {props.model}
          </Card.Title>
          <Card.Title>{"Rs." + props.price}</Card.Title>
        </Card.Body>
        <div className="right">
          <button
            className="cartClose"
            onClick={() => dispatch(removeFromCart(props.id))}
          >
            x
          </button>
        </div>
      </Card>
    </>
  );
};
