import React from "react";
import { useNavigate } from "react-router";
import "./Home.css";

export default function Home() {
  let navigate = useNavigate();
  return (
    <div className="home">
      <div className="welcome-text">
        <span> FRESH SOMALI CUSINE </span>
        <span> JUST A CLICK AWAY</span>
        <button className="home-button" onClick={() => navigate("/menu")}>
          {" "}
          ORDER NOW{" "}
        </button>
      </div>
    </div>
  );
}
