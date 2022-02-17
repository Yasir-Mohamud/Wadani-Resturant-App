import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Menu from "./components/Menu";
import About from "./components/About";
import Order from "./components/Order";
import Home from "./components/Home";
import Footer from "./components/Footer";
import axios from "axios";

export default function App() {
  const [order, setOrder] = useState([]);

  function handleOrderClick(id) {
    console.log(id);
    axios
      .get("http://localhost:4000/products/" + id)
      .then((res) => {
        let orderProductId = order.map((orderProduct) => orderProduct._id);
        if (orderProductId.includes(res.data._id) === true) return;
        setOrder((prev) => {
          return [...prev, res.data];
        });
      })
      .catch((error) => console.log(`ERROR ${error}`));
  }

  function handleChange(e) {
    const { name, value, id } = e.target;
    console.log(id);

    setOrder((prev) => {
      const newArr = [];
      for (let i = 0; i < prev.length; i++) {
        let current = prev[i];
        if (current._id === id) {
          const newInfo = {
            ...current,
            [name]: value,
            total: current.price * value,
          };
          newArr.push(newInfo);
        } else {
          newArr.push(current);
        }
      }
      return newArr;
    });
  }

  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/menu"
          element={<Menu handleOrderClick={handleOrderClick} />}
        />
        <Route
          path="/order"
          element={<Order order={order} handleChange={handleChange} />}
        />
      </Routes>
      <Footer />
    </div>
  );
}
