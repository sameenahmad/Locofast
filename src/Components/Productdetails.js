import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Summary from "./Links/Summary";
import Files from "./Links/Files";
import Samplingdetails from "./Links/Samplingdetails";

class Productdetail extends Component {
  state = {};
  render() {
    return (
      <div className="productdetail-Container">
        {/* To be fetched from DB */}
        <p style={{fontSize:'0.7rem'}}>Collections > Summer Collection 2019 ></p>
        <h4 style={{marginTop:'0.5rem'}}>GYPSY DRESS High Low Corset Purple Boho Dress Long</h4>
        <span style={{fontSize:'0.7rem', marginTop:'0.5rem'}}> by Utkarsha Arya June 15,2009 8:45pm</span>
        <ul style={{listStyle:'none', display:'inline-flex', marginTop:'1.5rem', fontFamily:'Nunito', fontSize:'0.8rem' }}>
          <Link to="/summary"  style={{marginRight:'2rem', textDecoration:'none'}}>
            <li > DESIGN SUMMARY</li>
          </Link>
          <Link to="/files" style={{marginRight:'2rem', textDecoration:'none'}}>
            <li> FILES</li>
          </Link>
          <Link to="/sampling" style={{marginRight:'2rem',textDecoration:'none'}}>
            <li > SAMPLING DETAILS</li>
          </Link>
        </ul>  
        <Router>
            <Route path='/summary' Component={Summary}></Route>
            <Route path='/files' Component={Files}></Route>
            <Route path='/summary' Component={Samplingdetails}></Route>
        </Router> 
     
      </div>
    );
  }
}

export default Productdetail;
