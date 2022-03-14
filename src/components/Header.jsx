import React from "react";
import "../styles/header.scss";

const Header = () => {
  return (
    <div className="header">
      <img src={require("../assets/images/logo.svg").default} alt="blog-logo" />
      <p>Everyday News</p>
    </div>
  );
};

export default Header;
