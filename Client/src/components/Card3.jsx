import React from "react";
import { Card } from "react-bootstrap";

const Card3 = ({ id, image, brandname, modelname, price }) => {
  return (
    <>
      <div className=" ">
        <Card className="d-flex flex-row justify-content-between mb-2">
          <Card.Img variant="top" src={image} className="cartPhoto" />
          <Card.Body className="d-flex justify-content-between">
            <Card.Title className="text-dark ">{brandname}</Card.Title>
            <Card.Title className="text-dark ">{modelname}</Card.Title>
            <Card.Title className="text-dark">{`Rs. ${price}/-`}</Card.Title>
            <div className="right">
              <button className="cartClose">x</button>
            </div>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};
export default Card3;
