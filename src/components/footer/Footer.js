import React from "react";
import "./footer.css";
import Logo from "../../images/logo.jpg";

const Footer = () => {
  return (
    <footer>
      <span>
        Copyright © 2023 <img src={Logo} alt="logo" /> clone All Rights
        Reserved.
      </span>
      {/* <p>Made with <i className="fa-solid fa-heart" style={{"color":"#fff"}}></i> by
            <a href="https://github.com/Aniket-ap" target="_blank" className="link-light">Aniket Pradhan</a>
        </p> */}
    </footer>
  );
};

export default Footer;
