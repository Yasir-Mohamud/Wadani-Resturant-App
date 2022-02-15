import React from "react";
import "./Footer.css";
import { Facebook, Instagram, Snapchat, Twitter } from "react-bootstrap-icons";

export default function Footer() {
  return (
    <footer>
      <div>
        <Facebook className="footer-logo" size={40} />
        <Twitter className="footer-logo" size={40} />
        <Instagram className="footer-logo" size={40} />
        <Snapchat className="footer-logo" size={40} />
      </div>
      <span className="footer-text"> @ WADANI RESTURANT INC </span>
    </footer>
  );
}
