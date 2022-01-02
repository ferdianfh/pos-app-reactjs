import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebar: false
    };
  }

  handleSidebar = () => {
    this.setState({
      sidebar: !this.state.sidebar
    });
  };
  render() {
    return (
      <Fragment>
        <div
          className={
            this.props.navbar === "history"
              ? "navbarlg"
              : this.props.navbar === "menu"
              ? "navbarmd"
              : "navbarcart"
          }
        >
          {this.props.navbar === "history" || this.props.navbar === "menu" ? (
            <nav>
              <div className="menu-toogle">
                <img
                  src="https://raw.githubusercontent.com/ferdianfh/POS-App-Frontend/main/src/icons/ham-menu.png"
                  alt="Hamburger Menu"
                  onClick={this.handleSidebar}
                />
              </div>
              <div className="title">{this.props.title}</div>
              {this.props.navbar === "menu" ? (
                <div className="search-box">
                  <img
                    src="https://raw.githubusercontent.com/ferdianfh/POS-App-Frontend/main/src/icons/search-menu.png"
                    alt="Food Menu"
                    className="icon"
                  />
                </div>
              ) : null}
            </nav>
          ) : (
            <div className="cart">
              {this.props.title}
              <div className="cart-badge-count">0</div>
            </div>
          )}
        </div>

        <nav className={this.state.sidebar ? "nav-menu active" : "nav-menu"}>
          <div className="nav-menu-items">
            <div className="menu-toggle-close">
              <img
                src="https://raw.githubusercontent.com/ferdianfh/POS-App-Frontend/main/src/icons/ham-menu.png"
                alt="Hamburger Menu"
                onClick={this.handleSidebar}
              />
            </div>
            <ul className="listMenuBars">
              <li>
                <Link to="/" className="nav-text">
                  <img
                    src="https://raw.githubusercontent.com/ferdianfh/POS-App-Frontend/main/src/icons/food-menu.png"
                    alt="Food Menu"
                    className="icon"
                  />
                </Link>
              </li>
              <li>
                <Link to="/History" className="nav-text">
                  <img
                    src="https://raw.githubusercontent.com/ferdianfh/POS-App-Frontend/main/src/icons/order-history.png"
                    alt="History"
                    className="icon"
                  />
                </Link>
              </li>
              <li className="nav-text">
                <img
                  src="https://raw.githubusercontent.com/ferdianfh/POS-App-Frontend/main/src/icons/add-menu.png"
                  alt="Add Menu"
                  className="icon"
                />
              </li>
            </ul>
          </div>
        </nav>
      </Fragment>
    );
  }
}

export default Sidebar;
