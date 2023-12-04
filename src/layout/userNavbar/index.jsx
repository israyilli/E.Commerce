import React from "react";
import { Link } from "react-router-dom";
import "../../assets/style/userNavbar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping, faUser } from "@fortawesome/free-solid-svg-icons";
function UserNavbar() {
  return (
    <>
      <div className="bigContainer">
        <div className="userNavbar">
          <h1>
            <Link to="/">EARTH STORE</Link>
          </h1>
          <div>
            <ul>
              <li>
                <Link to="/">HOME</Link>
              </li>
              <li>
                <Link to="/about">ABOUT</Link>
              </li>
              <li>
                <Link to="/contact">CONTACT</Link>
              </li>
              <li>
                <Link to="/shop">SHOP</Link>
              </li>
              <li>
                <Link to="/wishlist">WISHLIST</Link>
              </li>
              <li className="bag">
                <button
                  className="btn btn-primary"
                  type="button"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasRight"
                  aria-controls="offcanvasRight"
                  style={{ background: "transparent", border: "none" }}
                >
                  <div
                    class="offcanvas offcanvas-end"
                    tabindex="-1"
                    id="offcanvasRight"
                    aria-labelledby="offcanvasRightLabel"
                  >
                    <div class="offcanvas-header">
                      <h5 class="offcanvas-title" id="offcanvasRightLabel">
                        Shopping Cart
                      </h5>
                      <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div class="offcanvas-body">
                      <button>
                        <Link to="/basket">Basket</Link>
                      </button>
                      <button>
                        <Link to="/checkout">Checkout</Link>
                      </button>
                    </div>
                  </div>
                  <span>
                    <FontAwesomeIcon
                      icon={faBagShopping}
                      style={{ color: "#2C541D", fontSize: "20px" }}
                    />
                  </span>
                </button>
                <sup>0</sup>
              </li>
              <li>
                <Link to="/login">
                  <FontAwesomeIcon
                    icon={faUser}
                    style={{ color: "#2C541D", fontSize: "20px" }}
                  />
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
