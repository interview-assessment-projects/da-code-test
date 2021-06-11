import React from 'react';
import PropTypes from 'prop-types';
import { FaFacebookF, FaTwitter, FaInstagram  } from "react-icons/fa";
import './NavBar.css';

const NavBar = () => (
  <div className="NavBar">
    <ul>
        <li key="1"> <a href="https://www.facebook.com" target="_blank" rel="noreferrer"><FaFacebookF/></a> </li>
        <li key="2"> <a href="https://www.twitter.com" target="_blank" rel="noreferrer"><FaTwitter/></a> </li>
        <li key="3"> <a href="https://www.instagram.com" target="_blank" rel="noreferrer"><FaInstagram/></a> </li>
      </ul>
  </div>
);

NavBar.propTypes = {};

NavBar.defaultProps = {};

export default NavBar;
