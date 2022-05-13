import React, { useEffect, useState } from "react";
import { Offcanvas } from "react-bootstrap";
import { Card2 } from "./Card2";
import Checkout from "./Checkout";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function OffCanvasExample({ name, ...props }) {
  const navigate = useNavigate();
  const [show, setShow] = useState(true);
  const [total, setTotal] = useState(0);
  const [Qty, setQty] = useState(0);
  const handleClose = () => setShow(false);
  const { cartItem } = useSelector((state) => state.CartReducer);
  useEffect(() => {
    if (!localStorage.getItem("userinfo")) {
      navigate("/login");
    }
  });
  useEffect(() => {
    var sum = 0,
      qty = 0;
    cartItem.map((elem, index) => {
      return (sum += parseInt(elem.Price));
    });
    cartItem.map(() => {
      qty = qty + 1;
    });
    setTotal(sum);
    setQty(qty);
  }, [cartItem]);
  return (
    <>
      <Offcanvas show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className="text-center">Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div
            className="cart"
            style={{ position: "relative", height: "60vh", overflow: "auto" }}
          >
            {cartItem.map((elem) => {
              return (
                <Card2
                  key={elem._id}
                  id={elem._id}
                  photo={elem.Photo}
                  name={elem.BrandName}
                  model={elem.ModelName}
                  price={elem.Price}
                />
              );
            })}
          </div>
          <div className="bottom ">
            <hr />
            <div className="qty d-flex justify-content-around">
              <h4>total item(s)</h4>
              <h4>{Qty}</h4>
            </div>
            <div className="subtotal d-flex justify-content-around">
              <h4>sub total</h4>
              <h4>{total}</h4>
            </div>
            <hr />
            <div className="checkout d-flex justify-content-center">
              <Checkout total={total} />
            </div>
          </div>
        </Offcanvas.Body>
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
