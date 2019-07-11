import React, { Component } from "react";
import arrow from "./Icons/arrow.svg";
import add from "./Icons/add.svg";
class Sideshutter extends Component {
  state = {};
  render() {
    return (
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
          <li>
            GYPSY DRESS High low Corser Purple Boho Dress long
            <p>Draft</p>
          </li>
          <li>
            Brown Corduruoy Trowser
            <p>Sampling</p>
          </li>
          <li>
            Purple Stripes Shirt
            <p> Sampling</p>
          </li>
          <li>
            Accent Ruffle Ochre Brown Boho Coat
            <p> Draft</p>
          </li>
        </ul>
        <p
          style={{
            display: "flex",
            alignItems: "center",
            borderTop: "1px solid lightgray",
            width: "100%",
            fontFamily: "Nunito",
            fontSize: "0.8rem",
            padding:'0.5rem 1rem',
            justifyContent:'space-between'
          }}
        >
          Add new Design <img src={add} />
        </p>
      </div>
    );
  }
}

export default Sideshutter;
