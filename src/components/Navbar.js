import React from "react";
import "./Navbar.css";

import { useNavigate } from "react-router-dom";

export default function Navbar() {
  let navigate = useNavigate();
  return (
    <nav className="navbar">
      <div className="left">
        <span> 🇸🇴 Wadani Resturant </span>
      </div>
      <div className="right">
        <span onClick={() => navigate("/")}> Home </span>
        <span onClick={() => navigate("/menu")}> Menu </span>
        <span onClick={() => navigate("/order")}> Order </span>
        <span onClick={() => navigate("/about")}> About </span>
      </div>
    </nav>
  );
}
