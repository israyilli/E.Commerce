import React from "react";
import { Link } from "react-router-dom";
import "../../assets/style/userNavbar.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faBagShopping,faUser } from "@fortawesome/free-solid-svg-icons";
function UserNavbar() {
  return (
    <>
     <div className="bigContainer">
     <div className="userNavbar">
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
            <li className="bag">
              <Link to="/basket">
              <span>
              <FontAwesomeIcon icon={faBagShopping} style={{ color: "#2C541D",fontSize: "20px"}} />
              </span>
              </Link>
              <sup>0</sup>
            </li>
            <li>
              <Link to="/login">
              <FontAwesomeIcon icon={faUser}  style={{ color: "#2C541D", fontSize: "20px"}} />
              </Link>
            </li>
          </ul>
        </div>
      </div>
     </div>
    </>
  );
}

export default UserNavbar;
