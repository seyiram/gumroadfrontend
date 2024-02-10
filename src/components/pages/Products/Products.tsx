import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import "./ProductsStyles.css";

const Products: React.FC = () => {
  return (
    <div className="products">
      <div className="products-header">
        <div className="top-row">
          <h1 className="title">Products</h1>
          <div className="actions">
            <div className="has-tooltip">
              <button className="search-button">
                <span className="icon icon-solid-search"></span>
              </button>
              <div role="tooltip">Search</div>
            </div>
            <NavLink to="/products/new" className="new-product-button">
              New product
            </NavLink>
          </div>
        </div>
        <nav className="tablist">
          <NavLink
            to="/products"
            end
            className={({ isActive }) => (isActive ? "tab active" : "tab")}
          >
            All products
          </NavLink>
          <NavLink
            to="/products/discover"
            className={({ isActive }) => (isActive ? "tab active" : "tab")}
          >
            Discover
          </NavLink>
          <NavLink
            to="/products/affiliated"
            className={({ isActive }) => (isActive ? "tab active" : "tab")}
          >
            Affiliated
          </NavLink>
        </nav>
      </div>
      <Outlet />
    </div>
  );
};

export default Products;
