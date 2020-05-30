import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link to="/home" className="nav-link">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/nutrition" className="nav-link">
                Nutrition
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/recipes" className="nav-link">
                Recipes
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/ShoppingList" className="nav-link">
                ShoppingList
              </Link>
            </li>

            <li className="nav-item dropdown">
              <Link
                to="/season"
                className="nav-link dropdown-toggle"
                id="navbarDropdownMenuLink"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Seasons
              </Link>
              <div
                className="dropdown-menu d-print"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <Link to="/spring" className="dropdown-item">
                  Spring
                </Link>
                <Link to="/summer" className="dropdown-item">
                  Summer
                </Link>
                <Link to="/autumn" className="dropdown-item">
                  Autumn
                </Link>
                <Link to="/winter" className="dropdown-item">
                  Winter
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
