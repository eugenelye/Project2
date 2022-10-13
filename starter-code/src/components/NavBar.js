import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.css";

const NavBar = () => {
  return (
    <header className={styles.navbar}>
      <nav>
        <ul>
          <li>
            <NavLink
              to="/"
              activeClassName={(navData) =>
                navData.isActive ? styles.active : ""
              }
            >
              Home Page
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Stocks"
              className={(navData) => (navData.isActive ? styles.active : "")}
            >
              Stocks
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Forex"
              activeClassName={(navData) =>
                navData.isActive ? styles.active : ""
              }
            >
              Forex
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
