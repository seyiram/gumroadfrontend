// import React from 'react'
import "./CustomizeProductStyles.css";
import { NavLink, Outlet } from "react-router-dom";

const CustomizeProduct = () => {
  return (
    <div className="customize-product-container">
      <div className="customize-product-header">
        <div className="header-top-row">
          <h2>Book of knowledge</h2>
          <button>Save and continue</button>
        </div>
        <nav className="customize-product-tablist">
          <NavLink
            to="/products/customize-product/"
            end
            className={({ isActive }) => (isActive ? "tab active" : "tab")}
          >
            Product
          </NavLink>
          <NavLink
            to="content"
            className={({ isActive }) => (isActive ? "tab active" : "tab")}
          >
            Content
          </NavLink>
          <NavLink
            to="share"
            className={({ isActive }) => (isActive ? "tab active" : "tab")}
          >
            Share
          </NavLink>
        </nav>
      </div>
      <Outlet />
    </div>
  );
};

export default CustomizeProduct;
