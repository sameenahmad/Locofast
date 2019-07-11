import React, { Component } from "react";
import arrow from "./Icons/arrow.svg";
import add from "./Icons/add.svg";
import Productdetails from "./Productdetails";
import Collections from "./Links/Collections";
import Designform from "./Designform";
class Sideshutter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [
        {
          designName: "GYPSY DRESS High low Corser Purple Boho Dress long",
          designId: "MKB12345 ",
          designCategory: "Women",
          designType: "Western Wear",
          status: "Sampling"
        },
        {
          designName: "Brown Corduruoy Trowser",
          designId: "MKB12346 ",
          designCategory: "Women",
          designType: "Western Wear",
          status: "Sampling"
        },
        {
          designName: "Purple Stripes Shirt",
          designId: "MKB12347",
          designCategory: "Men",
          designType: "Western Wear",
          status: "Draft"
        }
      ],
      showComponent: false,
      item: []
    };
  }

  handleClick = item => {
    console.log("item in shutter", item);
    this.setState({ showComponent: true, item: item });
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
            {this.state.products.map(item => (
              <li onClick={this.handleClick.bind(this, item)}>
                {item.designName}
                <p>{item.status}</p>
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
            Add new Design <img src={add} onClick={this.handleClick}/>
          </p>
        </div>
        {this.state.showComponent ? (
          <div className="blah">
            <Productdetails item={this.state.item} />
            <Designform item={this.state.item} />
          </div>
        ) : null}
      </div>
    );
  }
}

export default Sideshutter;
