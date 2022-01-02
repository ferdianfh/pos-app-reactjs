import React, { Component, Fragment } from "react";
import "./cart.css";

class Cart extends Component {
  render() {
    return (
      <Fragment>
        <div className="cart-info">
          <div className="empty-cart">
            <img
              src="https://raw.githubusercontent.com/ferdianfh/POS-App-Frontend/main/src/icons/cutie.png"
              alt="Cutie"
            />
            <h1>Your cart is empty</h1>
            <p>Please add some items from the menu</p>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Cart;
