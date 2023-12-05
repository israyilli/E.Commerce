import React from "react";
import "./../../../assets/style/Basket.scss";
// import { IconName } from "react-icons/ai";
import { TiDeleteOutline } from "react-icons/ti";
import { useDispatch } from "react-redux";
import { handleMinus, handlePlus } from "../../../Config/BasketSlice";

function Basket() {
  const dispatch = useDispatch();

  const MyBasket = JSON.parse(localStorage.getItem("basket")) || [];
  console.log(MyBasket);
  console.log(MyBasket);
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

              {MyBasket &&
                MyBasket.map((x) => (
                  <tr>
                    <td>
                      <div className="cancel">
                        <button>
                          <TiDeleteOutline className="CancelCart" />
                        </button>
                      </div>
                    </td>
                    <td>
                      <div className="imgWrapper">
                        <img src={x.products.image} alt="" />
                      </div>
                    </td>
                    <td>{x.products.name}</td>
                    <td>{x.products.price}</td>
                    <td>
                      <div className="quantity">
                        <button
                          className="minus"
                          onClick={() => {
                            dispatch(handleMinus(x));
                          }}
                        >
                          -
                        </button>
                        <span> {x.count}</span>
                        <button
                          className="plus"
                          onClick={() => {
                            console.log("Before dispatching Plus");
                            dispatch(handlePlus(x));
                            console.log("After dispatching Plus");
                          }}
                        >
                          +
                        </button>
                      </div>
                    </td>
                    <td>{x.products.price * x.count}</td>
                  </tr>
                ))}
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
