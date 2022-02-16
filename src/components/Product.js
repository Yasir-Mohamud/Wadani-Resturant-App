import React from "react";
import "./Product.css";

export default function Product(props) {
  console.log(props.product);
  return (
    <div className="product-card">
      <img className="product-card-img" src={props.product.imageURL} alt="" />
      <h2 className="product-card-title"> {props.product.name} </h2>
      <p className="product-card-price"> $ {props.product.price} </p>
      <button
        className="product-card-button"
        onClick={() => props.handleOrderClick(props.product._id)}
      >
        Add To Order
      </button>
    </div>
  );
}
