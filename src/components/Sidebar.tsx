import React from "react";
import "./SidebarStyles.css";
import { NavLink } from "react-router-dom";
import GumroadLogo from "../assets/images/gumroad_white.svg";
import CloseIcon from "../assets/images/CloseIcon";
import HamburgerIcon from "../assets/images/HamburgerIcon";
import usePageTitle from "../hooks/usePageTitle";

const Sidebar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const pageTitle = usePageTitle("Gumroad | Proto");

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="mobile-header">
        <span className="logo-g"></span>
        <h2>{pageTitle}</h2>
        <button
          className="hamburger"
          onClick={toggleMenu}
          aria-label="toggle-menu"
        >
          {isMenuOpen ? (
            <span className="close-icon">
              <CloseIcon />
            </span>
          ) : (
            <span className="hamgurger-icon">
              <HamburgerIcon />
            </span>
          )}
        </button>
      </header>
      <div className={`sidebar ${isMenuOpen ? "open" : ""}`}>
        <div className="sidebar-content">
          <div className="sidebar-logo">
            <NavLink to="/">
              <img src={GumroadLogo} className="logo-full" />
            </NavLink>
          </div>
          <div className="sidebar-nav">
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <span className="icon icon-shop-window-fill"></span> Home
            </NavLink>
            <NavLink
              to="/products"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <span className="icon icon-archive-fill"></span> Products
            </NavLink>
            <NavLink
              to="/checkout"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <span className="icon icon-cart3-fill"></span> Checkout
            </NavLink>
            <NavLink
              to="/emails"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <span className="icon icon-envelope-fill"></span> Emails
            </NavLink>
            <NavLink
              to="/workflows"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <span className="icon icon-diagram-2-fill"></span> Workflows
            </NavLink>
            <NavLink to="/sales">
              <span className="icon icon-solid-currency-dollar"></span> Sales
            </NavLink>
            <NavLink to="/analytics">
              <span className="icon icon-bar-chart-fill"></span> Analytics
            </NavLink>
            <a href="">
              <span className=" icon-empty"></span>
            </a>
            <NavLink
              to="/payouts"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <span className="icon icon-solid-currency-dollar"></span> Payouts
            </NavLink>
            <NavLink
              to="/discover"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <span className="icon icon-solid-search"></span> Discover
            </NavLink>
            <NavLink
              to="/library"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <span className="icon icon-bookmark-heart-fill"></span> Library
            </NavLink>
            <a href="">
              <span className=" icon-empty"></span>
            </a>
            <NavLink
              to="/help"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <span className="icon icon-book-half"></span> Help
            </NavLink>
            <NavLink
              to="/settings"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <span className="icon icon-gear-fill"></span> Settings
            </NavLink>
            <a href="/user">
              <span></span> User
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
