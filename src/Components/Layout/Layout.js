import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Layout.css";
const Layout = ({ children }) => {
  return (
    <div className="containerlayout">
      <div className="navbar">
        <Link to="/">
          <Button variant="success"> Home </Button>
        </Link>
      </div>
      <div className="body"> {children} </div>
    </div>
  );
};

export default Layout;
