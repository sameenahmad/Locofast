import React, { Component } from "react";
import Header from "../Header";
import Productdetails from "../Productdetails";
import Sideshutter from "../Sideshutter";
class Collections extends Component {
  state = {};
  render() {
    return (
      <div className="right-Screen-Container">
        <Header />
        <div id="product-Summary-Container">
          <Sideshutter />
          <div id="product-description">
            <Productdetails />
          </div>
        </div>
      </div>
    );
  }
}

export default Collections;
