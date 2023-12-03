import React from "react";
import "./../../../assets/style/Basket.scss";

function Basket() {
  return (
    <>
      <hr />
      <section className="firstTable">
        <div className="container">
          <h1>Cart</h1>
          <div className="cartTable">
            <table
              style={{
                width: "1140px",
                height: "400px",
                border: "1px solid #d9d9d9",
              }}
            >
              <tr style={{ border: "1px solid #d9d9d9", height: "100px" }}>
                <th style={{ paddingLeft: "20px" }}>Image</th>
                <th style={{ paddingLeft: "20px" }}>Product</th>
                <th style={{ paddingLeft: "20px" }}>Price</th>
                <th style={{ paddingLeft: "20px" }}>Quantity</th>
                <th style={{ paddingLeft: "20px" }}>Subtotal</th>
              </tr>

              <tr style={{ border: "1px solid #d9d9d9", height: "100px" }}>
                <td style={{ paddingLeft: "20px" }}>Jill</td>
                <td style={{ paddingLeft: "20px" }}>Smith</td>
                <td style={{ paddingLeft: "20px" }}>50</td>
                <td style={{ paddingLeft: "20px" }}>50</td>
                <td style={{ paddingLeft: "20px" }}>$200</td>
              </tr>
              <tr style={{ border: "1px solid #d9d9d9", height: "100px" }}>
                <td style={{ paddingLeft: "20px" }}>Jill</td>
                <td style={{ paddingLeft: "20px" }}>Smith</td>
                <td style={{ paddingLeft: "20px" }}>50</td>
                <td style={{ paddingLeft: "20px" }}>50</td>
                <td style={{ paddingLeft: "20px" }}>$200</td>
              </tr>
              <tr style={{ border: "1px solid #d9d9d9", height: "100px" }}>
                <td style={{ paddingLeft: "20px" }}>Jill</td>
                <td style={{ paddingLeft: "20px" }}>Smith</td>
                <td style={{ paddingLeft: "20px" }}>50</td>
                <td style={{ paddingLeft: "20px" }}>50</td>
                <td style={{ paddingLeft: "20px" }}>$200</td>
              </tr>
              <tr style={{ border: "1px solid #d9d9d9", height: "70px" }}>
                <div className="tableInpBtn">
                  <div
                    style={{ width: "180px", height: "30px", gap: "10px" }}
                    className="Inp"
                  >
                    <input
                      type="text"
                      placeholder="Coupon code"
                      style={{ border: "1px solid #d9d9d9" }}
                    />
                  </div>
                  <div className="Btn">
                    <button>APLY COUPON</button>
                  </div>
                </div>
              </tr>
            </table>
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