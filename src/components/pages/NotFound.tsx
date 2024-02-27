import React from "react";
import "./NotFound.css";
import Icon from "../../assets/images/comic-rock.png";
import { NavLink } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="not-found-page">
      <img src={Icon} alt="" />
      <h1>Page not found</h1>
      <p>The thing you were looking for doesn't exist.</p>
      <NavLink to="/">
        <p className="not-found-link">Go home?</p>
      </NavLink>
    </div>
  );
};

export default NotFound;
