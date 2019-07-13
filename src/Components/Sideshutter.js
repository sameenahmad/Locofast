import React, { Component } from "react";
import arrow from "./Icons/arrow.svg";
import add from "./Icons/add.svg";
import Productdetails from "./Productdetails";
import Designform from "./Designform";
import Newform from "./Newform";
import ls from "local-storage";

class Sideshutter extends Component {
  constructor(props) {
    super(props);
    const getProducts = ls.get("products");
    this.state = {
      products: getProducts || [],
      showComponent: false,
      showNewForm: true,
      item: [],
      activeItemIndex: null,
      getColor: false
    };
  }

  handleClick = (item, index) => {
    this.setState({
      showComponent: true,
      showNewForm: false,
      item: item,
      activeItemIndex: index
    });
  };
  addDesign = e => {
    this.setState({ showNewForm: true, showComponent: false });
  };
  isActive = e => {
    console.log("TCL: Sideshutter -> isActive -> e", e);
  };

  render() {
    return (
      <div className="shutter-Container">
        <div className="shutter">
          <ul className="product-Detail-List">
            <li
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center"
              }}
            >
              <img src={arrow} style={{ marginRight: "1rem" }} />
              All Designs
            </li>
            {this.state.products.map((item, index) => (
              <li
                key={index}
                onClick={this.handleClick.bind(this, item, index)}
                style={{
                  backgroundColor: this.state.activeItemIndex === index ? "#D4EEFD" : ""
                }}
              >
                <p> {item[0].designName}</p>
                <p>{item[5].status}</p>
              </li>
            ))}
          </ul>

          <p
            style={{
              display: "flex",
              alignItems: "center",
              borderTop: "1px solid lightgray",
              width: "100%",
              fontFamily: "Nunito",
              fontSize: "0.8rem",
              padding: "0.5rem 1rem",
              justifyContent: "space-between"
            }}
          >
            Add new Design <img src={add} onClick={this.addDesign} />
          </p>
        </div>
        {this.state.showComponent ? (
          <div className="show-Product-Details">
            <Productdetails item={this.state.item} />
            <Designform item={this.state.item} />
          </div>
        ) : null}
        {this.state.showNewForm ? (
          <div className="show-Product-Details">
            <Newform />
          </div>
        ) : null}
      </div>
    );
  }
}

export default Sideshutter;
