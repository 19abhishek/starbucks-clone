import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { Example } from "./Example";
import FindAStore from "./FindAStore";

function Header() {
  return (
    <div className="header">
      <div class="header--left">
        <Link to="/" className="header--logo">
          <img
            src="https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Starbucks_Corporation_Logo_2011.svg/1200px-Starbucks_Corporation_Logo_2011.svg.png"
            alt=""
          />
        </Link>
        <Link to="/menu" className="header--link">
          Menu
        </Link>
        <Link to="/menu" className="header--link">
          Rewards
        </Link>
        <Link to="/menu" className="header--link">
          Gift Cards
        </Link>
      </div>
      <div class="header--right">
        <Example />
        <FindAStore />
      </div>
    </div>
  );
}

export default Header;
