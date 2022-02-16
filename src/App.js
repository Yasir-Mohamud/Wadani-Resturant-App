import React, { useState } from "react";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Menu from "./components/Menu";
import Contact from "./components/Contact";
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
  // setOrder([]);
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/menu"
          element={<Menu handleOrderClick={handleOrderClick} />}
        />
        <Route path="/order" element={<Order order={order} />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}
