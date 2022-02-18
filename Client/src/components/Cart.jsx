import axios from "axios";
import React, { useState, useEffect } from "react";
import { Offcanvas } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Card2 } from "./Card2";
function OffCanvasExample({ name, ...props }) {
  const [increment, setincrement] = useState(1);
  const [show, setShow] = useState(true);
  const [total, setTotal] = useState("");
  const [cart, setCart] = useState([]);
  const handleClose = () => setShow(false);
  useEffect(() => {
    fetchCartProduct();
  }, []);
  const fetchCartProduct = async () => {
    const response = await axios.get("http://localhost:8000/getcart");
    const data = response.data;
    setCart(data);
    console.log(data);
  };
  // var subtotal = 0;
  cart.map((elem, index) => {
    // subtotal += elem.Price;
    // setTotal(total + elem.Price);
  });
  return (
    <>
      <Offcanvas show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {cart.map((elem, indx) => {
            return (
              <Card2
                key={elem._id}
                photo={elem.Photo}
                name={elem.BrandName}
                model={elem.ModelName}
                price={elem.Price}
              />
            );
          })}
        </Offcanvas.Body>
        <p className="">
          subtotal Rs.<span>{1}</span>
        </p>
      </Offcanvas>
    </>
  );
}
function Cart() {
  return (
    <>
      {["end"].map((placement, idx) => (
        <OffCanvasExample key={idx} placement={placement} name={placement} />
      ))}
    </>
  );
}
export default Cart;
