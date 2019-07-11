import React, { Component } from "react";
import Header from "../Header";
import Productdetails from "../Productdetails";
import Sideshutter from "../Sideshutter";
import Designform from "../Designform";
class Collections extends Component {
  state = {};
  render() {
    return (
      <div className="right-Screen-Container">
        <Header />
        <Sideshutter />
      </div>
    );
  }
}

export default Collections;
