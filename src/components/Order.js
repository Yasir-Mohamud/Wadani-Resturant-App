import React from "react";
import { useNavigate } from "react-router";
import "./Order.css";
import OrderProduct from "./OrderProduct";

export default function Order(props) {
  let navigate = useNavigate();
  const allOrderProducts = props.order.map((product) => {
    return <OrderProduct key={product._id} product={product} />;
  });

  console.log(`order product ${allOrderProducts} `);
  return (
    <div className="order">
      <p className="order-title"> Checkout Your Order</p>
      {allOrderProducts.length > 0 ? (
        <div className="table-container">
          <table>
            <tr className="table-head">
              <th> NAME </th>
              <th> AMOUNT</th>
              <th> QUANTITY</th>
            </tr>
            <tbody>{allOrderProducts}</tbody>
            <tr>
              <td className="table-footer"> Total : </td>
              <td className="table-footer"> 12</td>
            </tr>
          </table>
        </div>
      ) : (
        <div className="order-empty">
          <p className="order-empty-message"> You have not ordered anything</p>
          <button
            className="order-empty-button"
            onClick={() => navigate("/menu")}
          >
            {" "}
            Go Back To Menu
          </button>
        </div>
      )}
    </div>
  );
}
