import React from "react";
import Container from "@mui/material/Container";
import Account from "./AccountMenu";
import "./components.css";

const Header = (props) => {
  return (
    <div className="header-wrapper">
      <Container>
      <nav>
        <div className="brand">{props.brand}</div>
          <ul>
            <li className="nav-item">Home</li>
            <li className="nav-item">Products</li>
            <li className="nav-item">Services</li>
            <li className="nav-item">Pricing</li>
            <li className="nav-item">Contact</li>
          </ul>
        <div>
        <Account />
        </div>
        </nav>
      </Container>
    </div>
  );
};

export default Header;
