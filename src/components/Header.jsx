import React from "react";
import { NavLink } from "react-router-dom";
import ProfileImage from "./ProfileImage";

const Header = () => (
  <header>
    <nav className="navbar fixed-top navbar-expand-lg navbar-dark unique-color-dark scrolling-navbar">
      <div className="container">
        <a className="navbar-brand" href="/index.html">
          <strong>Author's Haven</strong>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a className="nav-link" href="/articles.html">
                Articles <span className="sr-only" />
              </a>
            </li>
          </ul>
          <ProfileImage />
        </div>
      </div>
    </nav>
  </header>
);
export default Header;
