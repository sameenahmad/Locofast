import React, { Component } from "react";
import notification from "./Icons/notification.png";
import search from "./Icons/search.svg";
class Header extends Component {
  state = {};
  render() {
    return (
      <div className="header">
        <div className='search-Container'>
          <h3> Zara Retail Limited</h3>
          <input className='searchBar' type="text" placeholder="Search Designs or Collections">
          </input>
          <button className='searchBtn'><img src={search}></img></button>
        </div>
        <img style={{marginRight:'1.5rem', width:'20px', height:'20px'}}src={notification} />
      </div>
    );
  }
}

export default Header;
