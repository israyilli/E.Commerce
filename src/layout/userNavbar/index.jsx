import React from "react";
import { Link } from "react-router-dom";

function userNavbar() {
  return (
    <>
      <div>
        <h1>EARTH STORE</h1>
        <div>
          <ul>
            <li>
              <Link to="/">HOME</Link>
            </li>
            <li>
              <Link to="/about">ABOUT</Link>
            </li>
            <li>
              <Link to="/shop">SHOP</Link>
            </li>
            <li>
              <Link to="/contact">CONTACT</Link>
            </li>
            <li>
              <Link to="/basket">ICONSHOP</Link>
            </li>
            <li>
              <Link to="/login">ADMINICON</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default userNavbar;
