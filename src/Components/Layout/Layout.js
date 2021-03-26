import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Layout.css";
const Layout = ({ children }) => {
  return (
    <div className="containerlayout">
      <div className="navbar">
        <div className="navlink">
          <Link to="/">
            <Button variant="outline-light"> Home </Button>
          </Link>
          <Link to="/newPost">
            <Button className="ml-2" variant="outline-light">
              New Post
            </Button>
          </Link>
        </div>
      </div>
      <div className="body"> {children} </div>
    </div>
  );
};

export default Layout;
