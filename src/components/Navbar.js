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
      <Link to="/">
        <div className="logo">
          <img
            src={require("./logoTransparent.png")}
            alt="Logo"
            width="200"
            height="200"
          />
        </div>
      </Link>
      <nav className="navBar">
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
              <ul className="dropdown">
                <li>
                  <a href="/">Bite of History</a>
                </li>
                <li>
                  <a href="/">Back-end Project: Best Bytes</a>
                </li>
                <li>
                  <a href="/">Front-end Project: SoundStage</a>
                </li>
                <li>
                  <a href="/">Full-stack Project: Orbit</a>
                </li>
              </ul>
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
