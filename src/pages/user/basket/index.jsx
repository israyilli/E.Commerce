import React from "react";
import "./../../../assets/style/Basket.scss";
// import { IconName } from "react-icons/ai";
import { TiDeleteOutline } from "react-icons/ti";

function Basket() {
  return (
    <>
      <hr />
      <section className="firstTable">
        <div className="container">
          <h1>Cart</h1>
          <div className="cartTable">
            <table>
              <tr>
                <th></th>
                <th></th>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Subtotal</th>
              </tr>

              <tr>
                <td>
                  <div className="cancel">
                    <button>
                      {" "}
                      <TiDeleteOutline className="CancelCart" />
                    </button>
                  </div>
                </td>
                <td>
                  <div className="imgWrapper">
                    <img
                      src="https://websitedemos.net/earth-store-02/wp-content/uploads/sites/1171/2022/10/Poster4-1000x1000.jpg"
                      alt=""
                    />
                  </div>
                </td>
                <td>Smith</td>
                <td>50</td>
                <td>50</td>
                <td>$200</td>
              </tr>

              <tr>
                <td>
                  <div className="cancel">
                    <button>
                      {" "}
                      <TiDeleteOutline className="CancelCart" />
                    </button>
                  </div>
                </td>
                <td>
                  <div className="imgWrapper">
                    <img
                      src="https://websitedemos.net/earth-store-02/wp-content/uploads/sites/1171/2022/10/Poster4-1000x1000.jpg"
                      alt=""
                    />
                  </div>
                </td>
                <td>Smith</td>
                <td>50</td>
                <td>50</td>
                <td>$200</td>
              </tr>

              <tr>
                <td>
                  <div className="cancel">
                    <button>
                      {" "}
                      <TiDeleteOutline className="CancelCart" />
                    </button>
                  </div>
                </td>
                <td>
                  <div className="imgWrapper">
                    <img
                      src="https://websitedemos.net/earth-store-02/wp-content/uploads/sites/1171/2022/10/Poster4-1000x1000.jpg"
                      alt=""
                    />
                  </div>
                </td>
                <td>Smith</td>
                <td>50</td>
                <td>50</td>
                <td>$200</td>
              </tr>
            </table>

            <div className="buttons">
              <div className="tableInpBtn">
                <div className="Inp">
                  <input type="text" placeholder="Coupon code" />
                </div>

                <div className="Btn">
                  <button>APLY COUPON</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="secondTable">
        <div className="container">
          <div className="subTotal">
            <div className="cartTotals">
              <h5>
                <b>Cart Totals</b>
              </h5>
            </div>
            <hr />
            <p>Subtotal</p>
            <hr
              style={{
                width: "90%",
                margin: "auto",
              }}
            />
            <p>Total</p>
            <hr style={{ width: "90%", margin: "auto" }} />
            <button>PROCCED TO CHECKOUT</button>
          </div>
        </div>
      </section>
      <hr />
    </>
  );
}

export default Basket;
