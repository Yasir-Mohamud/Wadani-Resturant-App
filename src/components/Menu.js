import React, { useEffect, useState } from "react";
import "./Menu.css";
import Product from "./Product";
import axios from "axios";

export default function Menu(props) {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:4000/products/")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const allProducts = products.map((product) => {
    return (
      <Product
        key={product._id}
        product={product}
        handleOrderClick={props.handleOrderClick}
      />
    );
  });

  return (
    <div className="menu">
      <p className="menu-title"> Checkout Our Menu</p>
      <div className="menu-products">{allProducts}</div>
    </div>
  );
}
