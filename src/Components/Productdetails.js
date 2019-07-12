import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import people from "./Icons/people.svg";

class Productdetail extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="productdetail-Container">
        <img
          src={people}
          style={{ alignSelf: "flex-end", marginRight: "4rem" }}
        />

        <p style={{ fontSize: "0.7rem" }}>
          Collections > Summer Collection 2019 >
        </p>
        <span style={{ display: "flex", alignItems: "center" }}>
          <h4 style={{ marginTop: "0.5rem" }}>
            {this.props.item[0].designName}{" "}
          </h4>

          <p
            style={{
              fontSize: "0.7rem",
              marginLeft: "1rem",
              backgroundColor: "#FFF1D2",
              borderRadius: "30%",
              padding: "0.2rem 0.2rem"
            }}
          >
            {this.props.item[5].status}
          </p>
        </span>

        <span style={{ fontSize: "0.7rem", marginTop: "0.5rem" }}>
          {" "}
          by Utkarsha Arya June 15,2009 8:45pm
        </span>

        <ul
          style={{
            listStyle: "none",
            display: "inline-flex",
            marginTop: "1.5rem",
            fontFamily: "Nunito",
            fontSize: "0.8rem"
          }}
        >
          <Link
            to="/summary"
            style={{ marginRight: "2rem", textDecoration: "none" }}
          >
            <li> DESIGN SUMMARY</li>
          </Link>
          <Link
            to="/files"
            style={{ marginRight: "2rem", textDecoration: "none" }}
          >
            <li> FILES</li>
          </Link>
          <Link
            to="/sampling"
            style={{ marginRight: "2rem", textDecoration: "none" }}
          >
            <li> SAMPLING DETAILS</li>
          </Link>
        </ul>
      </div>
    );
  }
}

export default Productdetail;
