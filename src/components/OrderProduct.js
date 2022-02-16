import React from "react";

export default function orderProduct(props) {
  return (
    <tr>
      <td> {props.product.name}</td>
      <td> {props.product.price * props.product.quantity}</td>
      <td> {props.product.quantity}</td>
    </tr>
  );
}
