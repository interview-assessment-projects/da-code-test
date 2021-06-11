import React from 'react';
import PropTypes from 'prop-types';
import { FaFacebookF, FaTwitter, FaInstagram  } from "react-icons/fa";
import './NavBar.css';

const NavBar = () => (
  <div className="NavBar">
    <ul>
        <li> <FaFacebookF/> </li>
        <li> <FaTwitter/> </li>
        <li> <FaInstagram/> </li>
      </ul>
  </div>
);

NavBar.propTypes = {};

NavBar.defaultProps = {};

export default NavBar;
