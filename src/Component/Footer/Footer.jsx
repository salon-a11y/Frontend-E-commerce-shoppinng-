import React from "react";
import "./Footer.css";
import footer_logo from "../assets/logo_big.png";
import instrgram_icon from "../assets/instagram_icon.png";
import pinterst_icon from "../assets/pintester_icon.png";
import whatsapp_icon from "../assets/whatsapp_icon.png";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={footer_logo} alt="" />
        <p>SHOPPER</p>
      </div>
      <ul className="footer-link">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contect</li>
      </ul>
      <div className="footer-social-icon">
        <div className="footer-icons-container">
          <img src={instrgram_icon} alt="" />
        </div>
        <div className="footer-icons-container">
          <img src={pinterst_icon} alt="" />
        </div>
        <div className="footer-icons-container">
          <img src={whatsapp_icon} alt="" />
        </div>
      </div>
      <div className="footer-copy-write">
        <hr />
        <p>Copyright @ 2026 - ALL Right Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
