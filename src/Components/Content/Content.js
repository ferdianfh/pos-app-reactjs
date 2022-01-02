import React, { Component } from "react";
import "./content.css";

class Content extends Component {
  render() {
    return (
      <div>
        {this.props.section === "history" ? (
          <div className="history">
            <div className="info">
              <div className="infodetail pink">
                <h1>Today Income</h1>
                <h2>Rp 1.000.000</h2>
                <p>+2% Yesterday</p>
              </div>
              <div className="infodetail blue">
                <h1>Orders</h1>
                <h2>3270</h2>
                <p>+5% Last Week</p>
              </div>
              <div className="infodetail purple">
                <h1>This Years Income</h1>
                <h2>Rp 100.000.000</h2>
                <p>+10% Last Year</p>
              </div>
            </div>
            <div className="grafik"></div>
            <div className="table">
              <div className="tabledetail">
                <h1>Recent Order</h1>
                <p>Today</p>
              </div>
              <table className="tableData">
                <tr>
                  <th>Invoice</th>
                  <th>Cashier</th>
                  <th>Date</th>
                  <th>Order</th>
                  <th>Amount</th>
                </tr>
                <tr>
                  <td>Jill</td>
                  <td>Smith</td>
                  <td>50</td>
                </tr>
              </table>
            </div>
          </div>
        ) : (
          <div className="menus">
            {this.props.data.map((menu, index) => {
              return (
                <div key={menu.id} className="menu-list">
                  <div className="menu-image">
                    <img src={menu.picture} alt="" width="100%" height="auto" />
                  </div>
                  <div className="menu-details">
                    <h1 className="menu-name">{menu.menuName}</h1>
                    <p className="menu-price">Rp {menu.price}.000</p>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    );
  }
}

export default Content;
