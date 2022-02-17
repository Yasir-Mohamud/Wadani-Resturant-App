import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import "./Order.css";
import OrderProduct from "./OrderProduct";

export default function Order(props) {
  const [isOrderPlaced, setIsOrderPlaced] = useState(false);
  let navigate = useNavigate();

  useEffect(() => {
    setIsOrderPlaced(false);
  }, []);
  const allOrderProducts = props.order.map((product) => {
    return (
      <OrderProduct
        key={product._id}
        product={product}
        handleChange={props.handleChange}
      />
    );
  });

  const total = props.order.map((product) => product.total);
  const getTotal = () => {
    let num = 0;
    total.forEach((element) => {
      return (num = num + element);
    });
    return num;
  };

  function tooglePlaceOrder() {
    return setIsOrderPlaced((prev) => !prev);
  }

  return (
    <div className="order">
      <p className="order-title"> Checkout Your Order</p>
      {allOrderProducts.length > 0 ? (
        <div className="table-container">
          <table>
            <tr className="table-head">
              <th> NAME </th>
              <th>QUANTITY</th>
              <th> AMOUNT</th>
            </tr>
            <tbody>{allOrderProducts}</tbody>
            <tr>
              <td className="table-footer"> Total </td>
              <td className="table-footer"></td>
              <td className="table-footer"> {getTotal()}</td>
            </tr>
          </table>
          <button
            className="place-order-button"
            onClick={tooglePlaceOrder}
            disabled={isOrderPlaced}
          >
            Place Order
          </button>
          <p className="order-confirmation" hidden={!isOrderPlaced}>
            Thank you for your order! Here is your confirmation code{" "}
            <b>cwG12S122H3jj2n399</b> . Please any employee and they will get
            your order for you
          </p>
        </div>
      ) : (
        <div className="order-empty">
          <p className="order-empty-message"> You have not ordered anything</p>
          <button
            className="order-empty-button"
            onClick={() => navigate("/menu")}
          >
            Go Back To Menu
          </button>
        </div>
      )}
    </div>
  );
}
