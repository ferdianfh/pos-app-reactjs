import React, { Component, Fragment } from "react";
import Content from "../Components/Content/Content";
import Sidebar from "../Components/Sidebar/Sidebar";

class History extends Component {
  render() {
    return (
      <Fragment>
        <Sidebar title="History" navbar={"history"} />
        <Content section="history" />
      </Fragment>
    );
  }
}

export default History;
