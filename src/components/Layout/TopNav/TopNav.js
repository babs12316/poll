import React from "react";
import { Link } from "react-router-dom";
import "./TopNav.css";
import PropTypes from "prop-types";

const TopNav = ({ title }) => {
  return (
    <div className="col-md-12 topNav">
      <h2>{title}</h2>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
      </ul>
    </div>
  );
};

export default TopNav;
TopNav.propTypes = {
  title: PropTypes.string.isRequired
};
