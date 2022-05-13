import React from "react";
import { Card } from "react-bootstrap";

const OrderCard = ({ name, orderAmount, isDelivered, isPaid }) => {
  return (
    <>
      <div className=" ">
        <Card
          style={{}}
          className="d-flex flex-row justify-content-between mb-2"
        >
          <Card.Body className="d-flex justify-content-between" style={{}}>
            <Card.Title className="text-dark ">{name}</Card.Title>
            <Card.Title className="text-dark ">{orderAmount}</Card.Title>
            {isPaid ? (
              <Card.Title className="text-dark " style={{ color: "#00ff00" }}>
                paid
              </Card.Title>
            ) : (
              <Card.Title className="text-dark " style={{ color: "red" }}>
                unpaid
              </Card.Title>
            )}

            <Card.Title className="text-dark">{isDelivered}</Card.Title>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};
export default OrderCard;
