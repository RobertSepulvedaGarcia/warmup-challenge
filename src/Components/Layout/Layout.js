import React from "react";
import "./Layout.css";
const Layout = ({ children }) => {
  return (
    <div className="container">
      <div className="navbar"></div>

      <div className="body">{children}</div>
    </div>
  );
};

export default Layout;
