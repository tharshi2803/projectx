import React, { useState } from 'react';
import "../Navbar/navbar.css";
import { Link } from "react-router-dom";
import Image from "../images/logo.png";

function Navbar() {
  const [click, setClick] = React.useState(false);
  const handleClick = () => setClick(!click);
  const Close = () => setClick(false);
  
  return (
    <div>
     <div className={click ? "main-container" : ""}  onClick={()=>Close()} />
      <nav className="navbar" onClick={e => e.stopPropagation()}>
        <div className="nav-container">
        <div className="topLeft">
            <img src= {Image} height="60px" width="180px"/>      
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                HOME
              </Link>
            </li>
            <li className="nav-item">
              <Link
                exact
                to="/programs"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                PROGRAMS
              </Link>
            </li>
            <li className="nav-item">
              <Link
                exact
                to="/features"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                FEATURES
              </Link>
            </li>
            <li className="nav-item">
              <Link
                exact
                to="/contact"
                activeClassName="active"
                className="nav-links"
               onClick={click ? handleClick : null}
              >
                CONTACT 
              </Link>
            </li>
            <div className="topRight">
              <li className="nav-item">
                <Link exact
                  to="/signin"
                  activeClassName="active"
                  className="nav-links"
                  onClick={click ? handleClick : null}
                >
                  <i class="topUserIcon fas fa-user"></i>
                </Link>
              </li>
              <li className="nav-item">
                <Link exact
                  to="/search"
                  activeClassName="active"
                  className="nav-links"
                  onClick={click ? handleClick : null}>
                  <i class="topSearchIcon fas fa-search"></i>
                </Link>
              </li>
            </div>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
          </div>

        </div>
      </nav>
    </ div>
  );
}
export default Navbar;