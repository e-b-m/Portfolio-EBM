import { Link } from "react-router-dom";
import React from "react";
import "../stylesheets/Navbar.css";

const Navbar = () => {
  return (
    <div>
      <style className="font">
        {" "}
        @import
        url('https://fonts.googleapis.com/css2?family=Dosis&display=swap');
      </style>
      <Link to='/'>
        <img
          src= {require("./logoTransparent.png")} 
          alt="Logo"
          className="logo"
        />
      </Link>
      <nav className="navBar">
        <img
          className="logo"
          alt="TransparentLogo"
          src="./logoTransparent.png"
          height="200"
          align="center"
        />
        <div className="navBarElements">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/skills">Skills</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
