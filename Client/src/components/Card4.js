import React from "react";
import { Card } from "react-bootstrap";

const Card4 = ({ Fname, Lname, Email }) => {
  return (
    <>
      <div className=" ">
        <Card
          style={{}}
          className="d-flex flex-row justify-content-between mb-2"
        >
          <Card.Body className="d-flex justify-content-between" style={{}}>
            <Card.Title className="text-dark ">{Fname}</Card.Title>
            <Card.Title className="text-dark ">{Lname}</Card.Title>
            <Card.Title className="text-dark">{Email}</Card.Title>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};
export default Card4;
