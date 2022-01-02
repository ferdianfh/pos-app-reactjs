import React, { Component, Fragment } from "react";
import Sidebar from "../Components/Sidebar/Sidebar";
import Content from "../Components/Content/Content";
import Cart from "../Components/Cart/Cart";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: [
        {
          id: 1,
          picture:
            "https://raw.githubusercontent.com/ferdianfh/POS-App-Frontend/main/src/img/espresso.png",
          menuName: "Espresso",
          price: 10
        },
        {
          id: 2,
          picture:
            "https://raw.githubusercontent.com/ferdianfh/POS-App-Frontend/main/src/img/coffee-latte.png",
          menuName: "Coffee Latte",
          price: 15
        },
        {
          id: 3,
          picture:
            "https://raw.githubusercontent.com/ferdianfh/POS-App-Frontend/main/src/img/cappucino.png",
          menuName: "Cappucino",
          price: 50
        },
        {
          id: 4,
          picture:
            "https://raw.githubusercontent.com/ferdianfh/POS-App-Frontend/main/src/img/redvelvet-latte.png",
          menuName: "Red Velvet Latte",
          price: 33
        },
        {
          id: 5,
          picture:
            "https://raw.githubusercontent.com/ferdianfh/POS-App-Frontend/main/src/img/chocorum.png",
          menuName: "Choco Rhum",
          price: 28
        },
        {
          id: 6,
          picture:
            "https://raw.githubusercontent.com/ferdianfh/POS-App-Frontend/main/src/img/blackforest.png",
          menuName: "Black Forest",
          price: 33
        },
        {
          id: 7,
          picture:
            "https://raw.githubusercontent.com/ferdianfh/POS-App-Frontend/main/src/img/chickenkatsu.png",
          menuName: "Chicken Katsu Dabu-Dabu",
          price: 60
        },
        {
          id: 8,
          picture:
            "https://raw.githubusercontent.com/ferdianfh/POS-App-Frontend/main/src/img/salmon-truffle.png",
          menuName: "Salmon Truffle Teriyaki",
          price: 60
        },
        {
          id: 9,
          picture:
            "https://raw.githubusercontent.com/ferdianfh/POS-App-Frontend/main/src/img/wiener.png",
          menuName: "Wiener Schnitzel",
          price: 69
        }
      ],
      cart: []
    };
  }
  render() {
    // const { menu, cart } = this.state;
    return (
      <Fragment>
        <div>
          <Sidebar title="Food Items" navbar={"menu"} />
          <Content section="home" data={this.state.menu} />
        </div>
        <div>
          <Sidebar title="Cart" navbar={"cart"} />
          <Cart data={this.state.cart} />
        </div>
      </Fragment>
    );
  }
}

export default Home;
