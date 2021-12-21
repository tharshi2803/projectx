import React, { useState } from 'react';
import "../Navbar/navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  const user = true;
  return (
    <div className="top">
      <div className="topLeft">
        {/*<i className="topIcon fab fa-facebook-square"></i>
        <i className="topIcon fab fa-instagram-square"></i>
        <i className="topIcon fab fa-pinterest-square"></i>
        <i className="topIcon fab fa-twitter-square"></i>*/}
        <i className="logo">LOGO</i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
              <Link className="link" to="/">
                  HOME
              </Link>
          </li>
          <li className="topListItem">
              <Link className="link" to="/programs">
                  PROGRAMS
              </Link>
          </li>
          <li className="topListItem">
              <Link className="link" to="/features">
                  FEATURES
              </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/contact">
              CONTACT
            </Link>
          </li>
          {/*{user && <li className="topListItem">LOGOUT</li>}*/}
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <Link className="link" to="/signin">
            <i class="topUserIcon fas fa-user"></i>
          </Link>
        ) : (
          {/*<ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>
        </ul>*/}
        )}
        <Link className="link" to="/search">
        <i className="topSearchIcon fas fa-search"></i></Link>
      </div>
    </div>
  );
}
export default Navbar;