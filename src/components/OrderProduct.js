import React from "react";
import "./OrderProduct.css";

export default function orderProduct(props) {
  return (
    <tr>
      <td className="order-product"> {props.product.name}</td>
      <td className="order-product">
        {" "}
        <input
          className="input"
          id={props.product._id}
          type="number"
          name="quantity"
          value={props.product.quantity}
          min="0"
          onChange={(e) => props.handleChange(e)}
        />
      </td>
      <td className="order-product">
        {props.product.price * props.product.quantity}
      </td>
    </tr>
  );
}
