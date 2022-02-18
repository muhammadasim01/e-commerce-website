import React from "react";
import { Card } from "react-bootstrap";

export const Card2 = (props) => {
  return (
    <>
      <Card style={{ width: "17rem" }} className="d-flex flex-row">
        <Card.Img
          variant="top"
          src={"http://localhost:8000/uploads/" + props.photo}
          className="cartPhoto"
        />
        <Card.Body className="">
          <Card.Title>
            {props.name} {props.model}
          </Card.Title>
          <Card.Title>{"Rs." + props.price}</Card.Title>
        </Card.Body>
        <div className="right">
          <button className="cartClose">x</button>
          <div className="thirdColoumn d-flex ">
            <button className="inc">-</button>
            <span className="incCounter">{0}</span>
            <button className="inc">+</button>
          </div>
        </div>
      </Card>
    </>
  );
};
