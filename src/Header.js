import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { Example } from "./Example";
import FindAStore from "./FindAStore";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import SignInButton from "./SignInButton";
import SignUpButton from "./SignUpButton";
import LogoutButton from "./LogoutButton";

function Header({ menuPage }) {
  const user = useSelector(selectUser);
  return (
    <div className={`header ${menuPage && "header--menuPage"}`}>
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
        {!user ? (
          <>
            <Link>
              <SignInButton />
            </Link>
            <Link>
              <SignUpButton />
            </Link>
          </>
        ) : (
          <div class="header--logout">
            {menuPage ? <LogoutButton /> : <Link to="/menu">Order Now</Link>}
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
